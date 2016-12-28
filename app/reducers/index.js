import { combineReducers } from 'redux';
import appReducer from './app-reducer';
import selectionReducer from './selection-reducer';
import messageReducer from './message-reducer';
import orderReducer from './order-reducer';
import boxPropertiesReducer from './box-properties-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  selections: selectionReducer,
  messages: messageReducer,
  order: orderReducer,
  boxProperties: boxPropertiesReducer,
});

export default rootReducer;
