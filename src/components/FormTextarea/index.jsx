import React from 'react';
import './FormTextarea.css';
import FormLabel from '../FormLabel';

const FormTextarea = (props) => {

    return (
      <div className="form-item">
        <FormLabel labelText={props.labelText} required={props.required} />
        <textarea 
          type={props.type} 
          name={props.text} 
          id={props.id}
          rows="5"
          maxLength="100"
          onChange={props.onChange}
          disabled={props.disabled}
          required={props.required}
          spellCheck="false"
          placeholder={'請輸入 ' + props.labelText}
          title={'請輸入 ' + props.labelText}
          className="border-2 border-slate-300 px-3 py-2 block w-full rounded-md text-left focus:outline-none focus:border-slate-600"
        />
      </div>
    );
};

export default FormTextarea;