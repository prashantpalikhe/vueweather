import * as types from './mutation-types';

// TODO: Use immutable js

export default {
  [types.SELECT_UNIT](state, unit) {
    state.units = state.units.map((_unit) => {
      _unit.selected = false;
      return _unit;
    });

    const unitToSelect = state.units.find(_unit => _unit.value === unit.value);
    unitToSelect.selected = true;
  },
};
