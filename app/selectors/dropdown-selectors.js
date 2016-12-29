export function getDropdown(state, id) {
  return state.byId[id];
}

function getAllDropdowns(state) {
  // state - reducer - attribute on reducer containing elements
  return state.dropdowns.dropdowns;
}

export function getBoardGradeValues(values) {
  const boardgrades = values.find((values) => {
    return values.char === 'GRADE_BOARD';
  });
  if (!!boardgrades) {
    return boardgrades.values;
  }
  return [];
}

export function getPaletTypes(values) {
  const paletTypes = values.find((values) => {
    return values.char === 'PA_PALLET_TYPE';
  });
  if (!!paletTypes) {
    return paletTypes.values;
  }
  return [];
}


export function getDropdowns(state) {
  return getAllDropdowns(state);
}
