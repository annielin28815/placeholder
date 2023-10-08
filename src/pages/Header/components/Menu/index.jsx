import React from 'react';
import './Menu.css';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Menu = (props) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="block w-full absolute top-[72px] z-10">
      <div className="w-full">
        <div className=" grid grid-cols-1 justify-center p-4 bg-gray-300">
          {props.isLogin === true &&
            <div>
              {props.role == 0 ?
                <div className="row-span-2 mb-2 p-4 leading-normal border-2 border-solid border-slate-700 bg-gray-300 rounded shadow grid grid-rows-2 grid-flow-col gap-x-2 gap-y-2">
                  <div className="row-span-2 col-span-4 flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full">
                      <img className="w-full object-fill rounded-full" src="https://api.dicebear.com/7.x/thumbs/svg?seed=Loki" alt="avatar" />
                    </div>
                  </div>
                  <div className="col-span-8 row-span-10">
                    <p className="text-base font-bold">{props.userData.email}</p>
                  </div>
                  <div className="col-span-8 row-span-10">
                    <p className="text-sm">您曾有<span className="font-semibold mx-1 text-zinc-700">3</span>筆預約紀錄</p>
                  </div>
                </div>:
                <div className="row-span-2 mb-2 p-4 leading-normal border-2 border-solid border-slate-700 bg-gray-300 rounded shadow grid grid-rows-2 grid-flow-col gap-x-2 gap-y-2">
                  <div className="row-span-2 col-span-4 flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full">
                      <img className="w-full object-fill rounded-full" src="https://api.dicebear.com/7.x/thumbs/svg?seed=Misty&mouth=variant1,variant2,variant4,variant5&shapeColor=69d2e7,f1f4dc,f88c49" alt="avatar" />
                    </div>
                  </div>
                  <div className="col-span-8 row-span-10">
                    <p className="text-base font-bold">{props.userData.email}</p>
                  </div>
                  <div className="col-span-8 row-span-10">
                    <p className="text-sm">已累積<span className="font-semibold mx-1 text-zinc-700">0</span>筆預約紀錄</p>
                  </div>
                </div>
              }
            </div>
          }
          {(props.isLogin === true && props.role == 0) &&
            <div className="row-span-2 mb-2 p-4 leading-normal bg-white rounded shadow-md cursor-pointer flex justify-between items-center" onClick={() => navigate("/")}>
                <p className="text-sm font-bold">預約紀錄</p>
            </div>
          }
          {(props.isLogin === true && props.role == 1) &&
            <div className="row-span-2 mb-2 p-4 leading-normal bg-white rounded shadow-md cursor-pointer flex justify-between items-center" onClick={() => navigate("/")}>
              <p className="text-sm font-bold">資料維護</p>
              <div><ChevronRightIcon className="w-6 h-6" /></div>
            </div>
          }
          {(props.isLogin === true && props.role == 1) &&
            <div className="row-span-2 mb-2 p-4 leading-normal bg-white rounded shadow-md cursor-pointer flex justify-between items-center" onClick={() => navigate("/products")}>
              <p className="text-sm font-bold">服務項目</p>
              <div><ChevronRightIcon className="w-6 h-6" /></div>
            </div>
          }
          <div className="row-span-2 mb-2 py-1 flex items-center">
            <div className="w-full border-1 border-solid border-slate-700"></div>
          </div>
          <div className="row-span-2 mb-2 p-4 leading-normal bg-white rounded shadow-md cursor-pointer flex justify-between items-center" onClick={() => navigate("/")}>
            <p className="text-sm font-bold">配色模式</p>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div className="row-span-2 mb-2 p-4 leading-normal bg-white rounded shadow-md cursor-pointer flex justify-between items-center" onClick={() => navigate("/howtouse")}>
            <p className="text-sm font-bold">網站使用說明</p>
            <div><ChevronRightIcon className="w-6 h-6" /></div>
          </div>
          {props.isLogin &&
            <div className="mt-5 text-center text-slate-700 row-span-2 mb-2 p-4 leading-normal bg-slate-100 border-1 border-solid border-slate-400 rounded cursor-pointer" onClick={onLogout}>
              <p className="text-sm font-bold">登出</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Menu;