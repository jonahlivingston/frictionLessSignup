import { combineReducers } from 'redux';
import LoginReducer from './Login/LoginReducer';
import CreateReducer from './Create/CreateReducer';
import PreviewReducer from './Preview/PreviewReducer';

const rootReducer = combineReducers({
  auth: LoginReducer,
  create: CreateReducer,
  preview: PreviewReducer,
});

export default rootReducer;
