import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';
import dropdownReducer from './dropdown-reducer';
import messageReducer from './message-reducer';
import orderReducer from './order-reducer';
import boxPropertiesReducer from './box-properties-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  dropdowns: dropdownReducer,
  messages: messageReducer,
  order: orderReducer,
  boxProperties: boxPropertiesReducer,
  form: formReducer,
});

export default rootReducer;
