export function getDropdown(state, id) {
  return state.byId[id];
}

function getAllDropdowns(state) {
  // state - reducer - attribute on reducer containing elements
  return state.dropdowns.dropdowns;
}


export function getDropdowns(state) {
  return getAllDropdowns(state);
}
