export function getDropdown(state, id) {
  return state.byId[id];
}

function getAllDropdowns(state) {
  // state - reducer - attribute on reducer containing elements
  return state.dropdowns.dropdowns;
}

export function getBoardGradeValues(values) {
  const boardgrade = values.find((values) => {
    return values.char === 'GRADE_BOARD';
  });
  if (!!boardgrade) {
    return boardgrade.values;
  }
  return [];
}


export function getDropdowns(state) {
  return getAllDropdowns(state);
}
