export default {
  selectedUnit(state) {
    return state.units.find(unit => unit.selected === true);
  },
};
