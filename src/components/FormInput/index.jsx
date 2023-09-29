import React from 'react';
import './FormInput.css';

const FormInput = () => {

    return (
      <div className="form-item">
        <input 
          type="text" 
          name="訂位大名" 
          id="input-text" 
          required 
          spellCheck="false"
          placeholder="請輸入訂位大名" 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
        <span className="placeholder">
          訂位大名
        </span>
      </div>
    );
};

export default FormInput;