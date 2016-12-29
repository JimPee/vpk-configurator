export function prepareDropdownsForRequest(values) {
  const returnValue = [];
  values.forEach(value => {
    let input = value.value;
    if (value.no_input === 'X') {
      input = '';
    } else if (value.value && value.format === 'NUM' && !value.list) {
      if (Array.isArray(input)) {
        input = input[0].replace(/\./g, ',');
      } else {
        input = input.replace(/\./g, ',');
      }
    }
    if (Array.isArray(input)) {
      input.forEach(item => {
        returnValue.push({
          char: value.char,
          value: item,
        });
      });
    } else {
      returnValue.push({
        char: value.char,
        value: input,
      });
    }
  });
  return returnValue;
}
