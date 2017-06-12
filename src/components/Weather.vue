<template>
  <div class="weather" v-if="weather && location">
    <div class="meta">
      <p v-if="location">{{ location.name }}</p>
      <unit-switcher @onUnitChanged="onUnitChanged"></unit-switcher>
    </div>

    <current-weather :data="weather.current"></current-weather>

    <div class="forecast">
      <daily-weather :data="dailyWeather" v-for="dailyWeather in weather.forecast" :key="dailyWeather.time"></daily-weather>
    </div>
  </div>
</template>

<script>
  import UnitSwitcher from '@/components/UnitSwitcher';
  import CurrentWeather from '@/components/CurrentWeather';
  import DailyWeather from '@/components/DailyWeather';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'weather',
    components: { UnitSwitcher, CurrentWeather, DailyWeather },

    watch: {
      '$route': function (route) {
        this.getLocationForAddress(route.params.city);
      },
    },

    computed: {
      ...mapState([
        'location',
        'weather',
        'route',
      ]),
    },

    methods: {
      ...mapActions([
        'selectUnit',
        'getCurrentLocation',
        'getLocationForAddress',
      ]),

      onUnitChanged(unit) {
        this.selectUnit(unit);
      },
    },

    created() {
      if (this.route.params.city) {
        this.getLocationForAddress(this.route.params.city);

      } else {
        this.getCurrentLocation();
      }
    },
  };
</script>

<style scoped>
  .meta {
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
