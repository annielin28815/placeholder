import React, { useEffect, useState } from 'react';
import { useLocation  } from "react-router-dom";
import './PageTitle.css';

const PageTitle = (props) => {
  const location = useLocation();
  const [currentStyle, setCurrentStyle] = useState({"--show-font": "#43341B", "--show-deco": "#e1e1e1"});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    if(location.pathname.includes("customer")) {
      setCurrentStyle({"--show-font": "#0d818d", "--show-deco": "#bbe9ed"});
      setIsLoading(false);
    }else if(location.pathname.includes("studio"))  {
      setCurrentStyle({"--show-font": "#e96a1a", "--show-deco": "#fee8db"});
      setIsLoading(false);
    }else {
      setCurrentStyle({"--show-font": "#43341B", "--show-deco": "#e1e1e1"});
      setIsLoading(false);
    };
  }, [location]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center" style={{height: '70vh'}}>
        <div className="la-ball-fussion la-dark la-2x">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center py-5">
      <h2 className="page-title text-center mx-auto" style={currentStyle}>{props.text}</h2>
    </div>
  );
};

export default PageTitle;