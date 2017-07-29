import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import Question from '../Question';
import { updateAnswers } from './PreviewActionCreators';

export class Preview extends React.Component{
  constructor(props){
    super(props);
  }
  // deep render takes the current form and renders the appropriate values (as determined by parents answers)
  deepRender(questionTree, path = [], parentValue = ''){
    if (!questionTree) return;
    return questionTree.map((question) => {
      // if the question is not dependent on other questions or if it satisfies the applicable condition render the question and its eligible children
      if (!question.comparator || (question.comparator === 'equal' && parentValue === question.comparatorValue
          || question.comparator === 'Greater than' && parentValue > question.comparatorValue
          || question.comparator === 'Less than' && parentValue < question.comparatorValue
        )){
        // if the question has dependent questions then after rendering the question we recurse through its dependent questions
        if (question.questions){
          // slice is used because path is an object and therefore passed by reference and we do not want to mutate it
          const newPath = path.slice(0);
          newPath.push(question.key);
          return (
            <div>
              <Question updateAnswers = {this.props.updateAnswers} type = {question.type} question = {question.question} path = {newPath}/>
              <div className = "dependent-questions">
                {this.deepRender(question.questions,newPath, question.answer, question.type)}
              </div>
            </div>
          );
        }
        else{
          const newPath = path.slice(0);
          newPath.push(question.key);
          return <Question updateAnswers = {this.props.updateAnswers} type = {question.type} question = {question.question} path = {newPath}/>
        }
      }
    });
  }
  render(){
    const questions = this.deepRender(this.props.questionTree);
    return(
      <div className = "mode-container" >
        <h1 className = "title">Form Builder</h1>
        <Navbar highlighted = 'preview' />
        <div className = "preview-questions">
          {questions}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questionTree: state.preview.questions,
});

const mapDispatchToProps = {
  updateAnswers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
