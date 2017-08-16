import { combineReducers } from 'redux';
import SignupFormReducer from './SignupForm/SignupFormReducer';

const rootReducer = combineReducers({
  user: SignupFormReducer,
});

export default rootReducer;
