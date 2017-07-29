import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import QuestionForm from '../QuestionForm';
import { addQuestion, addSubinput, updateQuestion, deleteQuestion, } from './CreateActionCreators';

export class Create extends React.Component{
  constructor(props){
    super(props);
  }
    deepRender(questionTree, path = [], parentType = ''){
    // if there are no questions there is no need to recurse further or render anything  
    if (!questionTree) return;
    return questionTree.map((question) => {
      // if the question has dependent questions then after rendering the question we recurse through its dependent questions
      if (question.questions){
        // slice is used because path is an object and therefore passed by reference and we do not want to mutate it
        const newPath = path.slice(0);
        //As we recurse we are adding keys since this gives us a way to get back and find this question in the store state
        newPath.push(question.key);
        return (
          <div>
            <QuestionForm path = {newPath} updateQuestion = {this.props.updateQuestion} addSubinput = {this.props.addSubinput} deleteQuestion = {this.props.deleteQuestion} index = {this.props.index} question = {question.question} type = {question.type} comparator = {question.comparator} comparatorValue = {question.comparatorValue} parentType = {parentType}/>
            <div className="dependent-questions">
              {this.deepRender(question.questions, newPath, question.type)}
            </div>
          </div>
          );
      }
      else{
        const newPath = path.slice(0);
        newPath.push(question.key);
        return <QuestionForm path = {newPath} addSubinput = {this.props.addSubinput} updateQuestion = {this.props.updateQuestion} deleteQuestion = {this.props.deleteQuestion} index = {this.props.index} question = {question.question} type = {question.type} comparator = {question.comparator} comparatorValue = {question.comparatorValue} parentType = {parentType}/>
      }
    })
  }

  render(){
    // each time create rerenders update local storage
    // in production application this would likely be unecessary and I would only update storeage every so often
    window.localStorage.setItem("createState",JSON.stringify(this.props.createState));
    const questions = this.deepRender(this.props.questionTree);
    return(
      <div className = "mode-container">
        <h1 className = "title">Form Builder</h1>
        <Navbar highlighted ='create'/>
        <div className = "create-questions">
        {questions}
        </div>
        <button id = "input-btn" onClick = {() => {this.props.addQuestion(this.props.index)}}>Add Input</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questionTree: state.create.questions,
  index: state.create.index,
  createState: state.create,
});

const mapDispatchToProps = {
  addQuestion,
  addSubinput,
  updateQuestion,
  deleteQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
