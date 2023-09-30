import React from 'react';
import './PageTitle.css';

const PageTitle = (props) => {

  const renderClassName = (props) => {
    if(props.status === 'normal') {
      return 'p-2 text-base font-semibold leading-6 rounded-md shadow-sm text-slate-200 border-2 border-solid border-orange-500 bg-orange-500 hover:bg-orange-600 hover:border-2 hover:border-solid hover:border-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
    }else if(props.status === 'cancel' || props.status === 'back'){
      return 'p-2 text-base font-semibold leading-6 rounded-md shadow-sm text-orange-700 border-2 border-solid border-orange-500 hover:text-slate-200 hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
    }else if(props.status === 'disabled') {
      return 'cursor-not-allowed p-2 text-base font-semibold leading-6 rounded-md shadow-sm border-2 border-solid border-orange-300 text-slate-600 bg-orange-300 hover:text-slate-900 hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
    }else if(props.status === 'focus') {
      return 'p-2 text-base font-semibold leading-6 rounded-md shadow-sm text-slate-700 border-2 border-solid border-orange-600 bg-orange-600 hover:text-slate-300 hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
    }else {
      return 'p-2 text-base font-semibold leading-6 rounded-md shadow-sm text-slate-200 border-2 border-solid border-orange-500 bg-orange-500 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
    }
  }

    return (
      <div className="w-full flex justify-center items-center py-5">
        <h2 className="page-title text-center mx-auto">{props.text}</h2>
      </div>
    );
};

export default PageTitle;