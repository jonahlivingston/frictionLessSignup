export const UPDATE_QUESTION = 'UPDATE_QUESTOIN'; 
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_SUBINPUT = 'ADD_SUBINPUT';
export const DELETE_QUESTION = 'DELETE_QUESTION';

export const updateQuestion = (value, field, path) => ({
  type: UPDATE_QUESTION,
  value,
  field,
  path,
});

export const addQuestion = (index) => ({
  type: ADD_QUESTION,
  question: '',
  questionType: '',
  index,
});

export const addSubinput = (path, index) => ({
  type: ADD_SUBINPUT,
  path,
  index,
});

export const deleteQuestion = (path) => ({
  type: DELETE_QUESTION,
  path,
});
