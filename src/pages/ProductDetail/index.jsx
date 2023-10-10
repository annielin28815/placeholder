import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import './ProductDetail.css';

import PageTitle from '../../components/PageTitle';
import FormInput from '../../components/FormInput';
import FormLabel from '../../components/FormLabel';
import FormButton from '../../components/FormButton';
import FormTextarea from '../../components/FormTextarea';

import { ToastContainer, toast } from 'react-toastify';

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [formData, setFormData] = useState({});
  const [currentID, setCurrentID] = useState("");
  const [pageState, setPageState] = useState("create");

  useEffect(() => {
    setCurrentID(params.id)
    if(location.pathname.includes("update")) {
      setPageState("update");
    } else {
      setPageState("create");
    }
  }, [location]);

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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = () => {

  }

  return (
    <div>
      <PageTitle text="單一商品介紹頁" />
      <form onSubmit={onSubmit}>
        <div className="bg-white grid grid-cols-12 gap-x-6 gap-y-2">
          <div className="col-span-12">
            <FormInput text="Name" type="text" id="name" labelText="名稱" onChange={onChange} required  />
          </div>
          <div className="col-span-12">
            <FormTextarea text="Introduction" type="text" id="introduction" labelText="介紹" onChange={onChange} required  />
          </div>
          <div className="col-span-12">
            <FormInput text="MainImage" type="url" id="address" labelText="主要圖片(網址)" onChange={onChange} required  />
          </div>
          <div className="col-span-12">
            <FormInput text="Deposit" type="number" id="price" labelText="訂金(單位：新臺幣)" onChange={onChange} required  />
          </div>
          <div className="col-span-12">
            <FormInput text="url" type="text" id="imgUrl" labelText="相關作品集(網址)" onChange={onChange}  />
          </div>
          <div className="col-span-12">
            <FormLabel labelText="相關標籤(可複選)" required={false} />
            <fieldset className="grid grid-cols-4 gap-3">
              <div className="flex items-center ml-1 mb-4">
                  <input id="checkbox-1" type="checkbox" value="beauty" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900">變好看</label>
              </div>
              <div className="flex items-center ml-1 mb-4">
                  <input id="checkbox-2" type="checkbox" value="art" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-2" className="ml-2 text-sm font-medium text-gray-900">變文青</label>
              </div>
              <div className="flex items-center ml-1 mb-4">
                  <input id="checkbox-3" type="checkbox" value="beauty" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-3" className="ml-2 text-sm font-medium text-gray-900">宜送禮</label>
              </div>
            </fieldset>
          </div>
          
          <div className="col-span-12 mt-2 flex items-center justify-center gap-x-2">
            <FormButton type="cancel" status="cancel" disabled={false} text="取消" />
            <FormButton type="submit" status="normal" disabled={false} text={pageState === "create" ? "送出": "更新"} />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;