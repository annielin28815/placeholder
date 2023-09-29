import React from 'react';
import './FormSelect.css';

const FormSelect = () => {

    return (
      <div className="form-item">
        <select 
          id="country"
          name="產業別"
          autoComplete="country-name"
          placeholder="請選擇隸屬之產業別"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <span className="placeholder">
          United States
        </span>
      </div>
    );
};

export default FormSelect;