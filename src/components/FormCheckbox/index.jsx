import React from 'react';
// import './FormCheckbox.css';

const FormCheckbox = (props) => {

    return (
      <div className="form-item">
        <input 
          type="checkbox"
          className="peer hidden"
          name={props.name}
          id={props.text}
        />
        <label
          htmlFor={props.text}
          className="select-none cursor-pointer rounded-lg border-2 border-gray-600 text-slate-700 py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-slate-600 peer-checked:text-slate-200 peer-checked:border-slate-600 text-center hover:bg-red-200">
            {props.text}
        </label>
      </div>
    );
};

export default FormCheckbox;