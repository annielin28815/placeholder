import React from 'react';
import './StudioTable.css';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const StudioTable = (props) => {

    return (
      <div className="relative overflow-x-auto shadow-md rounded-lg">
				<table className="w-full text-base text-left font-light text-gray-800">
						<thead className="text-base text-gray-50 uppercase bg-orange-500">
								<tr>
										<th scope="col" className="p-2">
												名稱
										</th>
										<th scope="col" className="p-2 text-center">
												<span className="">操作</span>
										</th>
								</tr>
						</thead>
						<tbody>
								<tr className="bg-white border-b bg-gray-300 border-gray-200 hover:bg-orange-100">
										<th scope="row" className="p-2 font-base text-gray-900 whitespace-nowrap">
												手作 6 吋提拉米蘇蛋糕體驗
										</th>
										<td className="p-2 text-center flex justify-between items-center">
												<a href="#" className="font-base text-gray-600 hover:underline"><PencilSquareIcon className="h-6 w-6" /></a>
												<a href="#" className="font-base text-gray-600 hover:underline"><TrashIcon className="h-6 w-6" /></a>
										</td>
								</tr>
								<tr className="bg-white border-b bg-gray-300 border-gray-200 hover:bg-orange-100">
										<th scope="row" className="p-2 font-base text-gray-900 whitespace-nowrap">
												法式蘋果派一日體驗
										</th>
										<td className="p-2 text-center flex justify-between items-center">
												<a href="#" className="font-base text-gray-600 hover:underline"><PencilSquareIcon className="h-6 w-6" /></a>
												<a href="#" className="font-base text-gray-600 hover:underline"><TrashIcon className="h-6 w-6" /></a>
										</td>
								</tr>
								<tr className="bg-white bg-gray-300 hover:bg-orange-100">
										<th scope="row" className="p-2 font-base text-gray-900 whitespace-nowrap">
												自己做鐵觀音瑪德蓮
										</th>
										<td className="p-2 text-center flex justify-between items-center">
												<a href="#" className="font-base text-gray-600 hover:underline"><PencilSquareIcon className="h-6 w-6" /></a>
												<a href="#" className="font-base text-gray-600 hover:underline"><TrashIcon className="h-6 w-6" /></a>
										</td>
								</tr>
						</tbody>
				</table>
			</div>
    );
};

export default StudioTable;