import React from 'react';
import './StoreCard.css';

const StoreCard = (props) => {

    return (
      <li className="card box-border grow-0 shrink-0 flex rounded-2xl bg-gray-100 overflow-hidden cursor-pointer">
        <div className="rounded-full">
          <img className="w-full h-full object-fill rounded-full overflow-hidden" src={props.mainImg} />
        </div>
        <div className="card-content">
          <h4 className="text-base font-semibold truncate">{props.name}</h4>
          <p className="text-justify">{props.content}</p>
        </div>
      </li>
    );
};

export default StoreCard;