import React from 'react';
import './EnableTable.css';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/solid';

const EnableTable = (props) => {

	const thisMonth = new Date();
	const firstDate = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1);
	const lastDate = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0);
	const originData = [
		{
			date: 1,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 2, 
			weekdays: "",
			isEnabled: false},
		{
			date: 3,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 4, 
			weekdays: "",
			isEnabled: false},
		{
			date: 5, 
			weekdays: "",
			isEnabled: false},
		{
			date: 6, 
			weekdays: "",
			isEnabled: false},
		{
			date: 7,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 8, 
			weekdays: "",
			isEnabled: false},
		{
			date: 9,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 10,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 11, 
			weekdays: "",
			isEnabled: false},
		{
			date: 12, 
			weekdays: "",
			isEnabled: false},
		{
			date: 13,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 14,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 15, 
			weekdays: "",
			isEnabled: false},
		{
			date: 16, 
			weekdays: "",
			isEnabled: false},
		{
			date: 17, 
			weekdays: "",
			isEnabled: false},
		{
			date: 18,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 19, 
			weekdays: "",
			isEnabled: false},
		{
			date: 20,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 21, 
			weekdays: "",
			isEnabled: false},
		{
			date: 22,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 23, 
			weekdays: "",
			isEnabled: false},
		{
			date: 24, 
			weekdays: "",
			isEnabled: false},
		{
			date: 25,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 26,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 27,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 28, 
			weekdays: "",
			isEnabled: false},
		{
			date: 29, 
			weekdays: "",
			isEnabled: false},
		{
			date: 30,
			weekdays: "", 
			isEnabled: true, 
			period: [
				{ time: "09:00~12:00", isEnabled: false},
				{ time: "14:00~17:00", isEnabled: true},
				{ time: "19:00~22:00", isEnabled: true}
			]
		},
		{
			date: 31, isEnabled: false},
	];

	// 找到每月第一天，給他星期幾
	originData.filter((item) => {
		if(item.date === firstDate.getDate()){
			item.weekdays = firstDate.getDay()
		}
	})

	// 找到每月最後一天，給他星期幾
	originData.filter((item) => {
		if(item.date === lastDate.getDate()){
			item.weekdays = lastDate.getDay()
		}
	})

	// 找到每月第一天，給他前面插入幾個空日期
	const noDate = { date: "none" };
	const frontData = [];
	originData.map((item) => {
		if(item.date === 1){
			if(item.weekdays === 0){ 
				frontData.unshift(noDate, noDate, noDate, noDate, noDate, noDate)
			}else if(item.weekdays === 2){
				frontData.unshift(noDate)
			}else if(item.weekdays === 3){
				frontData.unshift(noDate, noDate)
			}else if(item.weekdays === 4){
				frontData.unshift(noDate, noDate, noDate)
			}else if(item.weekdays === 5){
				frontData.unshift(noDate, noDate, noDate, noDate)
			}else if(item.weekdays === 6){
				frontData.unshift(noDate, noDate, noDate, noDate, noDate)
			}
		}
	});

	// 找到每月最後一天，給他後面插入幾個空日期
	const endData = [];
	originData.map((item, index, arr) => {
		if(index === arr.length - 1){
			if(item.weekdays === 1){ 
				endData.unshift(noDate, noDate, noDate, noDate, noDate, noDate)
			}else if(item.weekdays === 2){
				endData.unshift(noDate, noDate, noDate, noDate, noDate)
			}else if(item.weekdays === 3){
				endData.unshift(noDate, noDate, noDate, noDate)
			}else if(item.weekdays === 4){
				endData.unshift(noDate, noDate, noDate)
			}else if(item.weekdays === 5){
				endData.unshift(noDate, noDate)
			}else if(item.weekdays === 6){
				endData.unshift(noDate)
			}
		}
	});

	const finalData = frontData.concat(originData, endData);
	const weeks1 = finalData.slice(0, 7);
	const weeks2 = finalData.slice(7, 14);
	const weeks3 = finalData.slice(14, 21);
	const weeks4 = finalData.slice(21, 28);

	// 2 月份有可能沒有第5周
	var weeks5 = []
	if(finalData.length > 28){
		weeks5 = finalData.slice(-7);
	}

    return (
      <div className="relative overflow-x-auto shadow-md rounded-lg">
				<table className="w-full text-base text-left font-light text-gray-800">
						<thead className="text-base text-gray-600 uppercase bg-cyan-100">
								<tr className="flex justify-between items-center">
									<th scope="col" className="p-2 text-center"><span className="">一</span></th>
									<th scope="col" className="p-2 text-center"><span className="">二</span></th>
									<th scope="col" className="p-2 text-center"><span className="">三</span></th>
									<th scope="col" className="p-2 text-center"><span className="">四</span></th>
									<th scope="col" className="p-2 text-center"><span className="">五</span></th>
									<th scope="col" className="p-2 text-center"><span className="">六</span></th>
									<th scope="col" className="p-2 text-center"><span className="">日</span></th>
								</tr>
						</thead>
						<tbody>
							<tr className="bg-white border-b bg-gray-300 border-gray-200 flex justify-between items-center">
								{weeks1.map((item, index) => {
									return (
										<td className="p-2 text-center flex justify-between items-center hover:bg-cyan-100 hover:cursor-not-allowed">
											{item.isEnabled === undefined && <span className="h-6 w-6 text-slate-300">-</span>}
											{item.isEnabled === false && <XMarkIcon className="h-6 w-6 text-slate-300" />}
											{item.isEnabled === true && <span className="h-6 w-6 text-slate-800 font-semibold">{item.date}</span>}
										</td>
									)
								})}
							</tr>
							<tr className="bg-white border-b bg-gray-300 border-gray-200 flex justify-between items-center">
								{weeks2.map((item, index) => {
									return (
										<td className="p-2 text-center flex justify-between items-center hover:bg-cyan-100 hover:cursor-not-allowed">
											{item.isEnabled === undefined && <span className="h-6 w-6 text-slate-300">-</span>}
											{item.isEnabled === false && <XMarkIcon className="h-6 w-6 text-slate-300" />}
											{item.isEnabled === true && <span className="h-6 w-6 text-slate-800 font-semibold">{item.date}</span>}
										</td>
									)
								})}
							</tr>
							<tr className="bg-white border-b bg-gray-300 border-gray-200 flex justify-between items-center">
								{weeks3.map((item, index) => {
									return (
										<td className="p-2 text-center flex justify-between items-center hover:bg-cyan-100 hover:cursor-not-allowed">
											{item.isEnabled === undefined && <span className="h-6 w-6 text-slate-300">-</span>}
											{item.isEnabled === false && <XMarkIcon className="h-6 w-6 text-slate-300" />}
											{item.isEnabled === true && <span className="h-6 w-6 text-slate-800 font-semibold">{item.date}</span>}
										</td>
									)
								})}
							</tr>
							<tr className="bg-white border-b bg-gray-300 border-gray-200 flex justify-between items-center">
								{weeks4.map((item, index) => {
									return (
										<td className="p-2 text-center flex justify-between items-center hover:bg-cyan-100 hover:cursor-not-allowed">
											{item.isEnabled === undefined && <span className="h-6 w-6 text-slate-300">-</span>}
											{item.isEnabled === false && <XMarkIcon className="h-6 w-6 text-slate-300" />}
											{item.isEnabled === true && <span className="h-6 w-6 text-slate-800 font-semibold">{item.date}</span>}
										</td>
									)
								})}
							</tr>
							{weeks5.length > 0 &&
								<tr className="bg-white border-b bg-gray-300 border-gray-200 flex justify-between items-center">
									{weeks5.map((item, index) => {
										return (
											<td className="p-2 text-center flex justify-between items-center hover:bg-cyan-100 hover:cursor-not-allowed">
												{item.isEnabled === undefined && <span className="h-6 w-6 text-slate-300">-</span>}
												{item.isEnabled === false && <XMarkIcon className="h-6 w-6 text-slate-300" />}
												{item.isEnabled === true && <span className="h-6 w-6 text-slate-800 font-semibold">{item.date}</span>}
											</td>
										)
									})}
								</tr>
							}
						</tbody>
				</table>
			</div>
    );
};

export default EnableTable;