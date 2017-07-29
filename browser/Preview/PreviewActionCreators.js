export const CLONE_QUESTIONS = 'CLONE_QUESTIONS';
export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';

export const cloneQuestions = (questions) => ({
  type: CLONE_QUESTIONS,
  questions,
});

export const updateAnswers = (answer,path) => ({
  type: UPDATE_ANSWERS,
  answer,
  path,
});
