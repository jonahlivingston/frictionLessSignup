// If performance becomes poor the below functions could be sped up by turning the question arrays into objects and using keys as indexes for constant time lookup

export const deleteNodeAtPath = (inputState, path) => {
  let node = inputState;
  let questionsArray;
  // When path is empty we have reached the node aka question that we are looking for
  while(path.length){
    questionsArray = node.questions
    let key = path.shift();
    for (var i = 0; i < questionsArray.length; i++){
      if (questionsArray[i].key === key){
        node = node.questions[i];
        break;
      }
    }
  }
  // after the for loop the value of i will be the index to remove
  // splice is used rather than slice in order to mutate the array rather than clone it
  questionsArray.splice(i,1);
  return inputState.questions;
}

export const addSubinput = (inputState, path, index) => {
  let node = inputState;
  let questionsArray;
  // When path is empty we have reached the node aka question that we are looking for
  while(path.length){
    questionsArray = node.questions
    let key = path.shift();
    for (var i = 0; i < questionsArray.length; i++){
      if (node.questions[i].key === key){
        node = node.questions[i]
        break;
      }
    }
  }
  if (!node.questions){
      node.questions = [];
  }
  node.questions.push({question: '', type: '', comparator: '', comparatorValue: '', key: index })
  return inputState.questions;
}

export const findQuestionAndUpdate = (inputState, value, field, path) => {
  let node = inputState;
  let questionsArray;
  // When path is empty we have reached the node aka question that we are looking for
  while(path.length){
    questionsArray = node.questions;
    let key = path.shift();
    for (var i = 0; i < questionsArray.length; i++){
      if (node.questions[i].key === key){
        node = node.questions[i]
        break;
      }
    }
  }
  node[field] = value;
  return inputState.questions;
}
