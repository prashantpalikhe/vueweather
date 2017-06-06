<template>
  <div class="weather-icon">
    <canvas :width="size" :height="size" ref="canvas"></canvas>
  </div>
</template>

<script>
  import skycons from 'skycons';

  const Icon = skycons(window);

  export default {
    name: 'WeatherIcon',
    props: {
      size: {
        type: Number,
        default: 32,
      },
      name: {
        type: String,
        required: true,
      },
    },
    mounted() {
      this.setIcon(this.name);
    },
    updated() {
      this.setIcon(this.name);
    },
    beforeDestroy() {
      this.icon.remove(this.$refs.canvas);
    },
    methods: {
      setIcon(name) {
        this.icon = new Icon({ color: 'white' });

        this.icon.set(this.$refs.canvas, name);
        this.icon.play();
      },
    },
  };
</script>

<style scoped>
  .weather-icon {
    display: block;
  }
</style>
