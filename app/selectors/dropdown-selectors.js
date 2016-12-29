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
  return boardgrades;
}

export function getPaletTypes(values) {
  const paletTypes = values.find((values) => {
    return values.char === 'PA_PALLET_TYPE';
  });
  return paletTypes;
}

export function getWidth(values) {
  const width = values.find((values) => {
    return values.char === 'SHEET_WIDTH_NET';
  });
  return width;
}

export function getLength(values) {
  const length = values.find((values) => {
    return values.char === 'SHEET_LENGTH_NET';
  });
  return length;
}


export function getDropdowns(state) {
  return getAllDropdowns(state);
}
