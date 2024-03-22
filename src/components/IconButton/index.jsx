import React from 'react';
import './IconButton.css';

const IconButton = (props) => {

    return (
      <button 
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClickEvent}
        className="font-base text-gray-600 hover:underline"
      >
        {props.icon}
      </button>
    );
};

export default IconButton;