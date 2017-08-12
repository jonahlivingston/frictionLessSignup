import { combineReducers } from 'redux';
import CaroselReducer from './Carosel/CaroselReducer';

const rootReducer = combineReducers({
  carosel: CaroselReducer,
});

export default rootReducer;
