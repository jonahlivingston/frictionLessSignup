import React from 'react';

class QuestionForm extends React.Component{

  constructor(props){
    super(props)
  }

  onChange(prop,value){
    this.props.createInput(prop,value)
  }

  render(){
    let conditionComparator; 
    // If path is shorter than 2 this means that it is not dependent on a different question and we can render an empty div
    if (this.props.path.length<2){
      conditionComparator = <div/>
    }
    else{
      // If the parent is answered with a number then for the dependent question we must render equal, greater than and less than options for comparitors
      if (this.props.parentType==="Number"){
        conditionComparator = <div className = "condition">
        <div className="label">
          <label>Condition</label>
        </div>
        <select className = "comparator" value = {this.props.comparator} onChange = {(event) => {this.props.updateQuestion(event.target.value, 'comparator', this.props.path)}}>
          <option value = 'select'>Select </option>
          <option value = 'equal'>Equals</option>
          <option value = 'Greater than'>Greater than</option>
          <option value = 'Less than'>Less than</option>
        </select>
      </div>
      }
      // If the parent is not answered with a number then we only render the equals option for the dependent question
      else{
        conditionComparator = <div className = "condition">
        <div className="label">
          <label>Condition</label>
        </div>
        <select className = "comparator" value = {this.props.comparator} onChange = {(event) => {this.props.updateQuestion(event.target.value, 'comparator', this.props.path)}}>
          <option value = 'select'>Select </option>
          <option value = 'equal'>Equals</option>
        </select>
      </div>
      }
    }
    let conditionValue;
    if (this.props.path.length>1){
      // If the parent is a yes/no question then the answer can only be equal to yes or no
      if (this.props.parentType==="Yes/No"){
        conditionValue = <select value = {this.props.comparatorValue} className = "comparator-value" onChange ={(event) => {this.props.updateQuestion(event.target.value, 'comparatorValue', this.props.path)}} >
          <option value = 'select'>Select</option>
          <option value = 'yes'>Yes</option>
          <option value = 'no'>No</option>
          </select>
      }
      else{
        // If the parent is an open ended question (non yes/no question) then we render an input field
        conditionValue = <input className = "compare-input" value={this.props.comparatorValue} onChange ={(event) => {this.props.updateQuestion(event.target.value, 'comparatorValue', this.props.path)}} />
      }
    }
    
    return(
      <div className = "question">
        <div className = "row">
          {conditionComparator}
          {conditionValue}
        </div>
          <div className="row">
            <div className="label">
              <label>Question</label>
            </div>
            <input value = {this.props.question} onChange = {(event) => {this.props.updateQuestion(event.target.value, 'question', this.props.path)}}/>
        </div>
        <div className = "row">
          <div className = "label">
            <label>Type</label>
          </div>
          <select value = {this.props.type} onChange = {(event) => {this.props.updateQuestion(event.target.value, 'type', this.props.path)}}>
            <option value = 'Select'>Select</option>
            <option value = 'Text'>Text</option>
            <option value = 'Number'>Number</option>
            <option value = 'Yes/No'>Yes/No</option>
          </select>
        </div>
        <div className="btn-row">
          <button className = "question-btn" onClick = {() => {this.props.addSubinput(this.props.path, this.props.index, this.props.questionKey)}}>Add Sub-Input</button>
          <button className = "question-btn" onClick = {() => {this.props.deleteQuestion(this.props.path)}}>Delete</button>
        </div>
      </div>
    )
  }
}

export default QuestionForm;
