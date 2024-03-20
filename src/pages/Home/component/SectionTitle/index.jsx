import React from 'react';
import './SectionTitle.css';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from "react-router-dom";

const SectionTitle = (props) => {
  const navigate = useNavigate();
  
  return (
    <div className="title-divide w-full flex items-center justify-center gap-x-2 my-2">
      <div className="text-base font-semibold whitespace-nowrap">{props.text}</div>
      <div className="w-full border-1 border-t border-solid border-slate-500"></div>
      {props.hasAll && 
        <div 
          className="title-more-link text-sm font-semibold whitespace-nowrap mr-1 flex items-center text-gray-500 cursor-pointer" 
          onClick={()=> navigate("/customer/products")} 
        >
          查看全部
          <ChevronRightIcon className="w-4 h-4" />
        </div>
      }
    </div>
  );
};

export default SectionTitle;