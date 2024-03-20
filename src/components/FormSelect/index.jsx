import React from 'react';
import './FormSelect.css';
import FormLabel from '../FormLabel';

const FormSelect = (props) => {

    return (
      <div className="form-item">
        <FormLabel for={props.id} labelText={props.labelText} required={props.required} />
        <select 
          type={props.type} 
          name={props.text} 
          id={props.id}
          onChange={props.onChange}
          disabled={props.disabled}
          required={props.required}
          value={props.defaultValue}
          spellCheck="false"
          placeholder={'請選擇 ' + props.labelText}
          title={'請選擇 ' + props.labelText}
          className="border-2 border-slate-300 h-10 px-3 py-2 block w-full rounded-md text-left focus:outline-none focus:border-slate-600"
        >
          <option value="">{'請選擇 ' + props.labelText}</option>
          <option value="beauty">美容業</option>
          <option value="tech">資訊業</option>
          <option value="art">藝術業</option>
        </select>
      </div>
    );
};

export default FormSelect;