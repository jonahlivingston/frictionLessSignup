import React from 'react';

const Question = (props) => {
  // If the question is a yes/no question include yes/no radio buttons for the answer
  const answerInput = props.type==='Yes/No' ?
    <div className = "radio-container">
      <input className = "radio" onClick = {(event) => {props.updateAnswers(event.target.value, props.path)}} name = 'radiobtn'type = 'radio' value = 'yes'/>
      <label>Yes</label>
      <input className = "radio" onClick = {(event) =>{props.updateAnswers(event.target.value, props.path)}} name = 'radiobtn' type = 'radio' value = 'no' />
      <label>No</label>
    </div>:
    // If the question is not a yes/no question include an input field for the answer
    <input className = "answer-input" onChange = {(event) => {props.updateAnswers(event.target.value, props.path)}}/>
  return(
    <div>
      <h3 className = "preview-question">{props.question}</h3>
      {answerInput}
    </div>
  )
}

export default Question


