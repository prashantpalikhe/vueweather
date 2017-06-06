<template>
  <div class="current-weather">
    <p class="current-weather__temperature">{{ data.apparentTemperature | round }}°</p>

    <div>
      <p>Precipitation: {{ data.precipProbability * 100 | round }}%</p>
      <p>Humidity: {{ data.humidity*100 | round }}%</p>
      <p>Wind: {{ data.windSpeed * 1.60934 | round }}km/h</p>
    </div>

    <weather-icon :size="200" :name="data.icon"></weather-icon>
  </div>
</template>

<script>
  import CurrentWeather from '@/models/CurrentWeather';
  import WeatherIcon from '@/components/WeatherIcon';
  import round from '@/filters/round';

  export default {
    name: 'CurrentWeather',
    components: { WeatherIcon },
    filters: { round },
    props: {
      data: {
        type: CurrentWeather,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .current-weather {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &__temperature {
      font-size: 200px;
    }
  }

  @media (min-width: 720px) {
    .current-weather {
      flex-direction: row;
    }
  }
</style>
