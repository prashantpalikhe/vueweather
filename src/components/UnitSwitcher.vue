<template>
  <div class="unit-switcher">
    <button @click="selectUnit(unit)" :class="{selected: unit.selected}" v-for="unit in units">
      {{ unit.display }}
    </button>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import * as MUTATIONS from '../store/mutation-types';

  export default {
    computed: {
      ...mapState([
        'units',
      ]),
    },

    methods: {
      selectUnit(unit) {
        this.$emit('onUnitChanged', unit);
      },
    },
  };
</script>

<style scoped lang="scss">
  .unit-switcher {
    align-self: flex-end;
  }

  button {
    appearance: none;
    border: none;
    outline: none;
    margin-left: 5px;
    transition: all 0.1s ease;

    &.selected {
      font-weight: bold;
      font-size: 18px;
    }
  }
</style>
