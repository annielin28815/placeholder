import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './ProductList.css';
import PageTitle from '../../components/PageTitle';
import emptyFolder from "../../assets/images/Empty-folder.png";
import ActionButton from '../../components/ActionButton';
import { PencilIcon } from '@heroicons/react/24/outline';

const ProductList = () => {
  const navigate = useNavigate();
  const [hasProduct, setHasProduct] = useState(false);

    return (
      <div>
        <PageTitle text="服務項目列表頁" />
        {/* {hasProduct === false &&
          <div className="mt-5 flex flex-col justify-center items-center">
            <div className="my-5">
              <ActionButton type="button" status="normal" disabled={false} userRole={1} onClickEvent={() => navigate('/studio/products/create')} text="開始新增" />
            </div>
            <div className="max-w-xs overflow-hidden mt-5">
              <img src={emptyFolder} className="w-full object-fill" alt="empty-image" />
            </div>
          </div>
        } */}
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            名稱
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="">操作</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-300 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          手作 6 吋提拉米蘇蛋糕體驗
                        </th>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-gray-600 hover:underline"><PencilIcon className="h-6 w-6" /></a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-300 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          手作 6 吋提拉米蘇蛋糕體驗
                        </th>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-gray-600 hover:underline"><PencilIcon className="h-6 w-6" /></a>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          手作 6 吋提拉米蘇蛋糕體驗
                        </th>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-gray-600 hover:underline"><PencilIcon className="h-6 w-6" /></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    );
};

export default ProductList;