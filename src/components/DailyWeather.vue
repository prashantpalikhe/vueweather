<template>
  <div class="daily-weather" :title="data.summary">
    <p>
      <strong>H</strong>{{ data.max | round }}
      <strong>L</strong>{{ data.min | round }}
    </p>
    <weather-icon :name="data.icon" :size="32"></weather-icon>
    <p>{{ data.time * 1000 | day }}</p>
  </div>
</template>

<script>
  import DailyWeather from '@/models/DailyWeather';
  import WeatherIcon from '@/components/WeatherIcon';
  import round from '@/filters/round';
  import day from '@/filters/day';

  export default {
    name: 'DailyWeather',
    components: { WeatherIcon },
    filters: { round, day },
    props: {
      data: {
        type: DailyWeather,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  .daily-weather {
    text-align: center;
    padding: 10px;
    flex: 1;
    background-color: rgba(0, 0, 0, 0.2);

    &:nth-child(even) {
      background-color: rgba(0, 0, 0, 0.22);
    }

    *:not(:last-child) {
      margin-bottom: 10px;
    }

    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
</style>
