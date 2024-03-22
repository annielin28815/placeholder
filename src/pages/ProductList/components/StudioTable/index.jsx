import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import './StudioTable.css';
import IconButton from '../../../../components/IconButton';

import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ToastContainer, toast } from 'react-toastify';

import { db } from '../../../../firebase';
import { deleteDoc, doc } from 'firebase/firestore';

const StudioTable = (props) => {
	const [productList, setProductList] = useState();
	const navigate = useNavigate();

	useEffect(() => {
    setProductList(props.data);
  }, [props.data]);

	const showNotify = (status, content) => {
    const notifySetting = {
      position: "top-center",
      autoClose: true,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "light"
    };

    if(status === "success") {
      toast.success(content, notifySetting);
    } else if (status === "error") {
      toast.error(content, notifySetting);
    }
  };

	async function handleDelete(id) {
		if(window.confirm("確定要刪除這個服務項目嗎?")){
			await deleteDoc(doc(db, "products", id));

			const updatedProdictList = productList.filter((item) => item.id !== id);
			setProductList(updatedProdictList);

			showNotify("success", "刪除成功")
		}
	};

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
							{props.data.length > 0 && props.data.map((item) => {
								return (
									<tr className="bg-white border-b border-gray-200 hover:bg-orange-100" key={item.id}>
										<td scope="row" className="p-2 font-base text-gray-900 limit-width">
											<p className="line-1">{item.name}</p>
										</td>
										<td className="p-2 text-center flex justify-between items-center td-w-80">
											<IconButton 
												icon={<PencilSquareIcon className="h-6 w-6" />} 
												onClickEvent={() => navigate(`/studio/products/update/${item.id}`)} 
											/>
											<IconButton 
												icon={<TrashIcon className="h-6 w-6" />} 
												onClickEvent={() => handleDelete(item.id)}
											/>
										</td>
									</tr>
								)
							})}
						</tbody>
				</table>
				<ToastContainer />
			</div>
    );
};

export default StudioTable;