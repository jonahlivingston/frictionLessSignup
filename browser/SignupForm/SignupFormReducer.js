import { FILL_FORM } from './SignupFormActionCreators';

const reducer = (state = null , action) => {
  switch (action.type) {
    case FILL_FORM:
      return action.userData;
    default:
      return state;
  }
};

export default reducer;
