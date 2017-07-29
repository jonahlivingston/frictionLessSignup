export const findAnswerAndUpdate = (inputState, answer, path) => {
  let node = inputState;
  let questionsArray;
  while(path.length){
    questionsArray = node.questions;
    let key = path.shift();
    for (var i = 0; i < questionsArray.length; i++){
      if (questionsArray[i].key === key){
        node = node.questions[i]
      }
    } 
  }
  node.answer = answer;
  return inputState.questions;
}