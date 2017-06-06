<template>
  <div class="unit-switcher">
    <button @click="selectUnit(unit)" :class="{selected: unit.selected}" v-for="unit in units">
      {{ unit.display }}
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      units: {
        type: Array,
        default() {
          return [];
        },
        required: true,
      },
    },

    methods: {
      selectUnit(unit) {
        this.units.forEach((_unit) => {
          _unit.selected = false;
        });

        unit.selected = true;

        this.$emit('onUnitChanged', unit);
      },
    },
  };
</script>

<style scoped>
  .unit-switcher {
    align-self: flex-end;
  }

  button {
    appearance: none;
    border: none;
    outline: none;
    margin-left: 5px;
    transition: all 0.1s ease;
  }

  button.selected {
    font-weight: bold;
    font-size: 18px;
  }
</style>
