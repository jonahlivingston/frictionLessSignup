import React from 'react';
import { connect } from 'react-redux';
import {getUserInfo} from './SignupFormActionCreators';
import axios from 'axios';
import Form from '../Form';

export class SignupForm extends React.Component{
  
  constructor(props){
    super(props);
  }

  // This function is called when the email input value is edited.
  // If the value entered ends in .com or .ca it assumes email has been entered and looks up email in clearbits database
  onChange(fieldValue){
    if (fieldValue.slice(fieldValue.length-4,fieldValue.length)==='.com'||fieldValue.slice(fieldValue.length-3,fieldValue.length)==='.ca'){
      this.props.getUserInfo(fieldValue);
    }
  }

  render(){
    return(
      <div>
        <div className="grid-x">
          <div className="small-6 cell">
            <div className="input-container">
              <label id="email-label">Type your email to test:</label>
              <input onChange = {(event)=>{this.onChange(event.target.value)}}id="email-input" type="email" placeholder="E-mail" />
            </div>
          </div>
          <Form user={this.props.user}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  getUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
