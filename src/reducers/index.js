import { combineReducers } from 'redux';
import taskReducer from './task';
import uiReducer from './ui';
import modalReducer from './modal';
import productReducer from './product';
import authReducer from './auth';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
const rootReducer = (history) =>
  combineReducers({
    // task: taskReducer,
    ui: uiReducer,
    modal: modalReducer,
    form: formReducer,
    product: productReducer,
    auth: authReducer,
    router: connectRouter(history),
  });
export default rootReducer;
