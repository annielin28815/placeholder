import React from 'react';
import './FormInput.css';
import FormLabel from '../FormLabel';

const FormInput = (props) => {

    return (
      <div className="form-item">
        <label>{props.labelText}</label>
        {/* <FormLabel labelText={props.labelText} /> */}
        <input 
          type={props.type} 
          name={props.text} 
          id={props.labelText}
          required 
          spellCheck="false"
          placeholder={'請輸入' + props.labelText} 
          className="block w-full rounded-md border-1 border-solid border-slate-400 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    );
};

export default FormInput;