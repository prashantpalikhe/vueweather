import * as MUTATIONS from './mutation-types';

// TODO: Use immutable js

export default {
  [MUTATIONS.SELECT_UNIT](state, unit) {
    state.units = state.units.map((_unit) => {
      _unit.selected = false;
      return _unit;
    });

    const unitToSelect = state.units.find(_unit => _unit.value === unit.value);
    unitToSelect.selected = true;
  },

  [MUTATIONS.GET_CURRENT_LOCATION_REQUEST](state) {
    state.location = null;
  },

  [MUTATIONS.GET_CURRENT_LOCATION_SUCCESS](state, location) {
    state.location = location;
  },

  [MUTATIONS.GET_CURRENT_LOCATION_FAILURE](state) {
    state.location = null;
  },

  [MUTATIONS.GET_LOCATION_FOR_ADDRESS_REQUEST](state) {
    state.location = null;
  },

  [MUTATIONS.GET_LOCATION_FOR_ADDRESS_SUCCESS](state, location) {
    state.location = location;
  },

  [MUTATIONS.GET_LOCATION_FOR_ADDRESS_FAILURE](state) {
    state.location = null;
  },

  [MUTATIONS.GET_WEATHER_REQUEST](state) {
    state.weather = null;
  },

  [MUTATIONS.GET_WEATHER_SUCCESS](state, weather) {
    state.weather = weather;
  },

  [MUTATIONS.GET_WEATHER_FAILURE](state) {
    state.weather = null;
  },
};
