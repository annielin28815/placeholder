import React from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
  
    return (
      <div className="title-divide w-full flex items-center justify-center gap-x-2 my-2">
        <div className="text-base font-semibold whitespace-nowrap">{props.text}</div>
        <div className="w-full border-1 border-t border-solid border-slate-500"></div>
      </div>
    );
};

export default SectionTitle;