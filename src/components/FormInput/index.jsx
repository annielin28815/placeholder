import React from 'react';
import './FormInput.css';
import FormLabel from '../FormLabel';

const FormInput = (props) => {

    return (
      <div className="form-item">
        {/* <FormLabel labelText={props.labelText} /> */}
        <input 
          type={props.type} 
          name={props.text} 
          id="input-text" 
          required 
          spellCheck="false"
          placeholder={'請輸入' + props.text} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
        <span className="placeholder">
          {props.text} 
        </span>
      </div>
    );
};

export default FormInput;