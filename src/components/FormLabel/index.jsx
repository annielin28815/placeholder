import React from 'react';
import './FormLabel.css';

const FormLabel = (props) => {

    return (
      <label className="form-label font-bold text-base text-slate-950 tracking-wide">
        {props.labelText}
      </label>
    );
};

export default FormLabel;