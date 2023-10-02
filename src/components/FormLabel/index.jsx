import React from 'react';
import './FormLabel.css';

const FormLabel = (props) => {

    return (
      <label
        htmlFor={props.labelText}
        className="block text-base font-semibold leading-6 text-gray-900 mb-2"
      >
        {props.labelText}
      </label>
    );
};

export default FormLabel;