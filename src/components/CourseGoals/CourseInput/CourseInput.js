import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid,setIsvalid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
        setIsvalid(true) 
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
        setIsvalid(false)
        return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?'invalid':''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} 
         />
      </div>
      <div className={`button ${!isValid?'invalid':''}`} >
      <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;