import React from 'react';
import './ProductCard.css';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();

  return (
    <li className="card box-border grow-0 shrink-0 p-0 rounded-2xl bg-gray-100 overflow-hidden cursor-pointer" key={props.key}>
      <div className="rounded-2xl" style={{height: '160px'}}>
        <img className="w-full h-full object-fill rounded-2xl overflow-hidden" src={props.mainImg} />
      </div>
      <div className="card-content p-2">
        <div className="p-0 flex items-center gap-1 whitespace-nowrap flex-wrap">
          {props.tags.length > 0 && props.tags.map((item) => {
            return (
              <span className="inline-block tag bg-gray-200 rounded-full p-1 text-xs font-semibold text-gray-700 mr-1">#{item}</span>
            )
          })}
        </div>
        <h4 className="text-base font-semibold truncate">{props.name}</h4>
        <p className="leading-8">${props.price}<span> / 單次</span></p>
        <div className="flex justify-end items-center">
          <button 
            type="button" 
            className="flex justify-center items-center bg-gray-500 text-white px-3 py-1 rounded-full"
            onClick={()=> navigate("/customer/products/:id")}
          >
            <span className="text-sm">詳情</span>
            <ChevronRightIcon className="h-4 w-4 font-semibold" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;