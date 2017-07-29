import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar'

export class Export extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="mode-container">
        <h1 className = "title">Form Builder</h1>
        <Navbar highlighted = 'export'/>
        <textArea value = {JSON.stringify(this.props.questionTree)}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questionTree: state.create.questions,
});

export default connect(mapStateToProps, null)(Export);
