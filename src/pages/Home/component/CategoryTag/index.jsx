import React from 'react';
import './CategoryTag.css';

const CategoryTag = (props) => {

    return (
      <li id={props.id} className="card box-border grow-0 shrink-0 p-2 mr-2 col-span-3 rounded-2xl bg-gray-100 overflow-hidden cursor-pointer">
        {props.name}
      </li>
    );
};

export default CategoryTag;