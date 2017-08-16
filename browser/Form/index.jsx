import React from 'react';

const Form = function(props){
  
  // this means redux store has default state and we should not show the form
  if (!props.user&&props.user!=='notFound'){
    return <div/>
  }
  
  // populate available fields
  // fields found in database are not editable, others are
  // potential to make more DRY due to duplicitous code
  else {
    return(
    <div className="small-6 cell">
      <div className="form-container">
        <div className = "form-header">
          <h1 className="form-title">Sample Signup Form </h1>
        </div>
        <div className = "form-body">
          <label>Full Name</label>
          <input value={props.user&&props.user.name}></input>
          <label>Company Name</label>
          <input value={props.user&&props.user.company}></input>
          <label>Company Size</label>
          <input value={props.user&&props.user.employees}></input>
          <label>Phone Number</label>
          <input value={props.user&&props.user.phoneNumber}></input>
        </div>
      </div>
    </div>
    );
  }
}

export default Form;
