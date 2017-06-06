<template>
  <div id="app" class="app" :class="weather ? weather.current.period : ''">
    <div class="app-container">
      <search v-on:onQueryEntered="onQueryEntered"></search>

      <div v-if="weather">
        <div class="app-meta">
          <p>{{ location.name }}</p>
          <unit-switcher :units="units" @onUnitChanged="onUnitChanged"></unit-switcher>
        </div>

        <current-weather :data="weather.current"></current-weather>

        <div class="forecast">
          <daily-weather :data="dailyWeather" v-for="dailyWeather in weather.forecast" :key="dailyWeather.time"></daily-weather>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '@/components/Search';
  import weatherService from '@/services/weatherService';
  import UnitSwitcher from '@/components/UnitSwitcher';
  import CurrentWeather from '@/components/CurrentWeather';
  import DailyWeather from '@/components/DailyWeather';

  export default {
    name: 'app',
    components: { Search, UnitSwitcher, CurrentWeather, DailyWeather },

    data() {
      return {
        location: null,
        weather: null,
        unit: null,
        units: [
          {
            display: 'C',
            value: 'uk',
            selected: true,
          },
          {
            display: 'F',
            value: 'us',
            selected: false,
          },
        ],
      };
    },

    methods: {
      onQueryEntered(query) {
        weatherService
          .getLocationForAddress(query)
          .then((location) => {
            this.location = location;
            this.getWeather();
          });
      },

      onUnitChanged(unit) {
        this.unit = unit;
        this.getWeather();
      },

      getWeather() {
        if (!this.location) {
          return;
        }

        weatherService
          .getWeather(this.location, this.unit)
          .then((data) => {
            this.weather = data;
          });
      },
    },

    created() {
      this.unit = this.units[0];
    },
  };
</script>

<style>
  html,
  body {
    height: 100%;
  }

  body {
    color: #fff;
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
  }

  p {
    margin-bottom: 10px;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  .app {
    min-height: 100%;
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    color: #fff;
    transition: all 0.1s ease-out;
  }

  .app.day {
    background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
  }

  .app.night {
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  }

  .app-container {
    width: 90vw;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 720px) {
    .app-container {
      width: 80vw;
      padding: 50px 0;
    }
  }

  .app-meta {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px 0;
  }

  .forecast {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 720px) {
    .forecast {
      flex-direction: row;
    }
  }

</style>
