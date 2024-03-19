import React from 'react';
import './ProductCard.css';
import { useState, useEffect } from 'react';

const ProductCard = (props) => {


    return (
      <li className="card box-border grow-0 shrink-0 p-0 rounded-2xl bg-gray-100 overflow-hidden cursor-pointer">
        <div className="rounded-2xl" style={{height: '160px'}}>
          <img className="w-full h-full object-cover object-center rounded-2xl overflow-hidde" src={props.mainImg} />
        </div>
        <div className="card-content p-2">
          <div className="p-0 flex items-center gap-1 whitespace-nowrap flex-wrap">
            <span className="inline-block tag bg-gray-200 rounded-full p-1 text-xs font-semibold text-gray-700 mr-1">#手作</span>
            <span className="inline-block tag bg-gray-200 rounded-full p-1 text-xs font-semibold text-gray-700 mr-1">#金工</span>
          </div>
          <h4 className="text-base font-semibold truncate">{props.name}</h4>
          <p className="leading-8">${props.price}<span> / 單次</span></p>
        </div>
      </li>
    );
};

export default ProductCard;