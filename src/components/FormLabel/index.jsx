import React from 'react';
import './FormLabel.css';

const FormLabel = (props) => {

    return (
      <label
        htmlFor={props.id}
        className="block text-base font-semibold leading-6 text-gray-900 mb-2"
      >
        {props.required && <span className="text-rose-600 font-semibold mr-1">*</span>}
        {props.labelText}
      </label>
    );
};

export default FormLabel;