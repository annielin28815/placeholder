import React from 'react';
import './RoleRadio.css';

const RoleRadio = (props) => {
  const renderLabel = (checked) => {
     if(checked === true) {
       return "role-radio-button-wrapper role-radio-button-wrapper-checked"
     }else {
       return "role-radio-button-wrapper"
     }
   };
   
  const renderBox = (checked) => {
    if(checked === true) {
      return "role-radio-button-input role-radio-button-input-checked"
    }else {
      return "role-radio-button-input"
    }
  };

    return (
      <label className={renderLabel(props.checked)} htmlFor={props.labelText}>
        <span className={renderBox(props.checked)}>
          <input className="role-radio-button-input" type="radio" id={props.role} value={props.value} defaultChecked={props.checked ? true : false} onChange={props.onChange} />
            <span className="role-radio-button-inner"></span>
        </span>
        <span>{props.text}</span>
      </label>
    );
};

export default RoleRadio;