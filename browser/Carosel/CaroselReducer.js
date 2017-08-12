import { NEXT_PHOTO, PREVIOUS_PHOTO } from './CaroselActionCreators';

const reducer = (state = 0 , action) => {
  switch (action.type) {
    case NEXT_PHOTO:
      return action.index;
    case PREVIOUS_PHOTO:
      return action.index
    default:
      return state;
  }
};

export default reducer;
