function getAllCheckMessages(state) {
  return state.messages.checkMessages;
}

export function getCheckMessages(state) {
  return getAllCheckMessages(state);
}

function getAllSimulateMessages(state) {
  return state.messages.simulateMessages;
}

export function getSimulateMessages(state) {
  return getAllSimulateMessages(state);
}


function getAllCreateMessages(state) {
  return state.messages.createMessages;
}

export function getCreateMessages(state) {
  return getAllCreateMessages(state);
}
