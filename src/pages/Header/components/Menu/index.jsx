import React from 'react';
import './Menu.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from "react-router-dom";

const Menu = (props) => {
  const navigate = useNavigate();

  return (
    <div className={props.isOpen ? "block" : "hidden"}>
      <div className="w-full absolute top-14 z-10">
      <div className="grid grid-cols-1  justify-center p-4 bg-gray-300">
        <div className="row-span-2 mb-2 p-4 leading-normal border-2 border-solid border-slate-700 bg-gray-300 rounded shadow grid grid-rows-2 grid-flow-col gap-x-2 gap-y-2">
          <div className="row-span-2 flex justify-center items-center">
            <UserCircleIcon className="h-6 w-6 text-gray-900" />
          </div>
          <div className="col-span-11 row-span-10">
            <p className="text-base font-bold">iam@annielin.com</p>
          </div>
          <div className="col-span-11 row-span-10">
            <p className="text-sm">您目前尚無預約紀錄</p>
          </div>
        </div>
        <div className="row-span-2 mb-2 p-4 leading-normal bg-white rounded shadow-md cursor-pointer" onClick={() => navigate("/")}>
            <p className="text-sm font-bold">預約紀錄</p>
        </div>
        <div className="row-span-2 mb-2 p-4 leading-normal bg-white rounded shadow-md cursor-pointer" onClick={() => navigate("/")}>
            <p className="text-sm font-bold">資料維護</p>
        </div>
        <div className="row-span-2 mb-2 p-4 leading-normal bg-white rounded shadow-md cursor-pointer" onClick={() => navigate("/")}>
            <p className="text-sm font-bold">配色模式</p>
        </div>
        <div className="row-span-2 mb-2 py-1 flex items-center">
          <div className="w-full border-1 border-solid border-slate-700"></div>
        </div>
        <div className="row-span-2 mb-2 p-4 leading-normal bg-white rounded shadow-md cursor-pointer" onClick={() => navigate("/")}>
            <p className="text-sm font-bold">網站使用說明</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Menu;