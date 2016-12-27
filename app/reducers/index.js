import { combineReducers } from 'redux';
import appReducer from './app-reducer';
import selectionReducer from './selection-reducer';
import messageReducer from './message-reducer';
import orderReducer from './order-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  selections: selectionReducer,
  messages: messageReducer,
  order: orderReducer,
});

export default rootReducer;
