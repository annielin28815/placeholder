import React from 'react';
import './FormInput.css';
import FormLabel from '../FormLabel';

const FormInput = (props) => {

    return (
      <div className="form-item">
        <FormLabel for={props.id} labelText={props.labelText} required={props.required} />
        <input 
          type={props.type} 
          name={props.text} 
          id={props.id}
          onChange={props.onChange}
          disabled={props.disabled}
          required={props.required}
          spellCheck="false"
          placeholder={'請輸入 ' + props.labelText}
          title={'請輸入 ' + props.labelText}
          defaultValue={props.defaultValue}
          readOnly={props.readOnly}
          className="border-2 border-slate-300 h-10 px-3 py-2 block w-full rounded-md text-left focus:outline-none focus:border-slate-600 read-only:bg-gray-100"
        />
      </div>
    );
};

export default FormInput;