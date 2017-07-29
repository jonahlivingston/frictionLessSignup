import { CLONE_QUESTIONS, UPDATE_ANSWERS, } from './PreviewActionCreators';
import { findAnswerAndUpdate } from './utils';

const reducer = (state = {questions:[]}, action) => {
  // This is one of the most effecient way to deep clone an object
  // This is a potential bottleneck however it is not currently slowing down performance so I would not want to preoptimize
  // If this did slow down performance I would look into other potential methods like immutable js or somehow flattening state
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CLONE_QUESTIONS:
      newState.questions = action.questions;
      return newState;
    case UPDATE_ANSWERS:
      newState.questions = findAnswerAndUpdate(newState, action.answer, action.path);
      return newState;
    default:
      return state;
  }
}

export default reducer;

// this function finds the question and changes the value of the answer
// this change in answer value causes a rerender so dependent questions can render
