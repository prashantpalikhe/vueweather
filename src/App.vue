<template>
  <div id="app" class="app" :class="weather ? weather.current.period : ''">
    <div class="app-container">
      <search v-on:onCityEntered="onCityEntered"></search>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Search from '@/components/Search';
  import { mapState } from 'vuex';

  export default {
    name: 'app',
    components: { Search },

    computed: {
      ...mapState([
        'weather',
      ]),
    },

    methods: {
      onCityEntered(city) {
        this.$router.push({
          name: 'weather',
          params: { city },
        });
      },
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

</style>
