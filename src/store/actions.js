import weatherService from '../services/weatherService';
import * as MUTATIONS from '../store/mutation-types';

export default {
  selectUnit({ commit, dispatch }, unit) {
    commit(MUTATIONS.SELECT_UNIT, unit);

    dispatch('getWeather');
  },

  getCurrentLocation({ dispatch, commit }) {
    commit(MUTATIONS.GET_CURRENT_LOCATION_REQUEST);

    return weatherService
      .getCurrentLocation()
      .then((location) => {
        commit(MUTATIONS.GET_CURRENT_LOCATION_SUCCESS, location);
        dispatch('getWeather');
      })
      .catch(() => commit(MUTATIONS.GET_CURRENT_LOCATION_FAILURE));
  },

  getLocationForAddress({ dispatch, commit }, address) {
    commit(MUTATIONS.GET_LOCATION_FOR_ADDRESS_REQUEST);

    return weatherService
      .getLocationForAddress(address)
      .then((location) => {
        commit(MUTATIONS.GET_LOCATION_FOR_ADDRESS_SUCCESS, location);
        dispatch('getWeather');
      })
      .catch(() => commit(MUTATIONS.GET_LOCATION_FOR_ADDRESS_FAILURE));
  },

  getWeather({ getters, commit, state }) {
    commit(MUTATIONS.GET_WEATHER_REQUEST);

    return weatherService
      .getWeather(state.location, getters.selectedUnit)
      .then((weather) => {
        commit(MUTATIONS.GET_WEATHER_SUCCESS, weather);
      })
      .catch(() => commit(MUTATIONS.GET_WEATHER_FAILURE));
  },
};
