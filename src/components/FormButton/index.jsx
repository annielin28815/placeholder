import React from 'react';
import './FormButton.css';

const FormButton = (props) => {

  const renderClassName = (props) => {
    if(props.status === 'normal') {
      return 'w-full py-1 text-base font-semibold leading-6 rounded-md shadow-sm text-slate-200 border-1 border-solid border-cyan-700 bg-cyan-700 hover:bg-cyan-900 hover:border-1 hover:border-solid hover:border-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
    }else if(props.status === 'other' || props.status === 'cancel' || props.status === 'back'){
      return 'w-full py-1 text-base font-semibold leading-6 rounded-md shadow-sm text-cyan-700 border-1 border-solid border-cyan-700 hover:text-slate-200 hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
    }else if(props.status === 'disabled' || props.status === 'not-allow') {
      return 'w-full cursor-not-allowed py-1 text-base font-semibold leading-6 rounded-md shadow-sm border-1 border-solid border-cyan-300 text-slate-600 bg-cyan-300';
    }else if(props.status === 'focus') {
      return 'w-full py-1 text-base font-semibold leading-6 rounded-md shadow-sm text-slate-200 border-1 border-solid border-cyan-600 bg-cyan-600';
    }else {
      return 'w-full py-1 text-base font-semibold leading-6 rounded-md shadow-sm text-slate-200 border-1 border-solid border-cyan-700 bg-cyan-500 hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
    }
  }

    return (
      <div className="form-button w-full">
        <button 
          type={props.type}
          disabled={props.disabled}
          onClick={props.onClickEvent}
          className={renderClassName(props)}
        >
          {props.text}
        </button>
      </div>
    );
};

export default FormButton;