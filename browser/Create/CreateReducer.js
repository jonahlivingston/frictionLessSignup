import { UPDATE_QUESTION, ADD_QUESTION, ADD_SUBINPUT, DELETE_QUESTION, } from './CreateActionCreators';
import { deleteNodeAtPath, addSubinput, findQuestionAndUpdate } from './utils';

//the default state of the redux store should pull from local storeage if available and if not default to an empty array and index 0
let defaultState;
if(JSON.parse(window.localStorage.getItem("createState"))){
  defaultState = JSON.parse(window.localStorage.getItem("createState"));
}
else{
  defaultState = {questions: [], index: 0}
}

const reducer = (state = defaultState, action) => {
  // Parsing then stringifying is one of the most effecient way to deep clone an object
  // This is a potential bottleneck, however it is not currently slowing down performance so I would not want to preoptimize
  // If this did slow down performance I would look into other potential methods like immutable js or somehow flattening state
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case UPDATE_QUESTION:
      newState.questions = findQuestionAndUpdate(newState, action.value, action.field, action.path);
      return newState;
    case ADD_QUESTION:
      newState.questions.push({question: action.question, type: action.questionType, key: action.index});
      newState.index++;
      return newState;
    case ADD_SUBINPUT:
      newState.questions = addSubinput(newState, action.path, action.index, action.key);
      newState.index++
      return newState;
    case DELETE_QUESTION:
      newState.questions = deleteNodeAtPath(newState, action.path);
      return newState;
    default:
      return state;
  }
};

export default reducer;
