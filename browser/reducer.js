import { combineReducers } from 'redux';
import CreateReducer from './Create/CreateReducer';
import PreviewReducer from './Preview/PreviewReducer';

const rootReducer = combineReducers({
  create: CreateReducer,
  preview: PreviewReducer,
});

export default rootReducer;
