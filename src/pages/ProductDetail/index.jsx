import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import './ProductDetail.css';

import PageTitle from '../../components/PageTitle';
import FormInput from '../../components/FormInput';
import FormLabel from '../../components/FormLabel';
import FormButton from '../../components/FormButton';
import FormTextarea from '../../components/FormTextarea';
import SectionTitle from './components/SectionTitle';
import EnableTable from './components/EnableTable';
import ActionButton from '../../components/ActionButton';

import { ToastContainer, toast } from 'react-toastify';

import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProductDetail = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentID, setCurrentID] = useState("");
  const [pageState, setPageState] = useState("create");
  const [isLogin, setIsLogin] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentUserData, setCurrentUserData] = useState({role: 0});
  const [randomImg, setRandomImg] = useState("product");
  const [randomImgUrl, setRandomImgUrl] = useState("https://unsplash.com/photos/kPxsqUGneXQ");
  const [res, setRes] = useState([]);
  const [randomChecked, setRandomChecked] = useState(false);

  const tags = [
    "宜送禮", "動手做"
  ];

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${randomImg}&client_id=1mb8H_0vDG2sdoA-c0uboVSR9V7tHpWEGVC_82zi31U&per_page=1`
    );
    const imgData = await data.json();
    const result = imgData.results;
    // console.log(result);
    setRes(result);
    const shortData = {};
    result.map((item) => {
      shortData.id = item.id;
      shortData.url = item.urls.small;
      shortData.alt = item.alt_description;
    });
    setRandomImg(shortData);
    setRandomImgUrl(shortData.url)
  };

  const handleCheckRandom = (e) => {
    setRandomChecked(true);
    if(e.target.checked) {
      fetchRequest();
    }
  }

  // useEffect(() => {
  //   fetchRequest();
  // }, []);


  useEffect(() => {
    setCurrentID(params.id);
    if(location.pathname.includes("update")) {
      setPageState("update");
      setCurrentTitle("更新服務項目");
    } else {
      setPageState("create");
      setCurrentTitle("新增服務項目");
    }

    if(location.pathname.includes("customer")) {
      setCurrentUserData({role: 0});
      setCurrentTitle("服務項目詳情");
    }else if(location.pathname.includes("studio"))  {
      setCurrentUserData({role: 1});
    }else {
      setCurrentUserData({role: 0});
    };
  }, [location]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        setCurrentUserData({
          ...user,
          role: user.role == 0 ? 0 : 1
        });
        setPageState("Sign in");
      } else {
        setIsLogin(false);
        setCurrentUserData({role: 0});
        setPageState("Sign out")
      }
    });
  }, [auth]);

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
      <PageTitle text={currentTitle} />
      {/* {(currentUserData.role === 1 && pageState === "update") && */}
        <div>
          <form onSubmit={onSubmit}>
            <div className="bg-white grid grid-cols-12 gap-x-6 gap-y-2">
              <div className="col-span-12">
                <FormInput text="Name" type="text" id="name" labelText="名稱" defaultValue="手作 6 吋提拉米蘇蛋糕體驗" onChange={onChange} required  />
              </div>
              <div className="col-span-12">
                <FormTextarea text="Introduction" type="text" id="introduction" labelText="介紹" defaultValue="好吃的蛋糕不要再用買的，都自己做吧！我們會提供全部器材與材料，帶著一顆愉悅的心即可預約體驗唷！" onChange={onChange} required  />
              </div>
              <div className="col-span-12">
                <FormInput text="MainImage" type="url" id="imgUrl" labelText="主要圖片(網址)" onChange={onChange} required  />
              </div>
              <div className="col-span-12">
                <div className="flex items-center ml-1 mb-4">
                  <input id="checkToRandom" type="checkbox" checked={randomChecked} onChange={handleCheckRandom} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkToRandom" className="ml-2 text-sm font-medium text-gray-900">使用隨機圖片</label>
                </div>
                {/* <ActionButton type="button" status="normal" disabled={false} userRole={3} onClickEvent={fetchRequest} text="隨機圖片" /> */}
              </div>
              <div className="col-span-12">
                <FormInput text="Deposit" type="number" id="price" labelText="訂金(單位：新臺幣)" defaultValue="300" onChange={onChange} required  />
              </div>
              <div className="col-span-12">
                <FormInput text="url" type="url" id="otherUrl" labelText="相關作品集(網址)" defaultValue="" onChange={onChange}  />
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
      {/* } */}

      {/* {(currentUserData.role === 0) &&
        <div className="mb-3">
          <SectionTitle text="手作 6 吋提拉米蘇蛋糕體驗" />
          <div className="w-full">
            <img src="https://lh3.googleusercontent.com/p/AF1QipMEs6SG8F0pCtrRJ0jaHSf04RSecF5imbcL1g6l=s680-w680-h510" alt="main-img" />
          </div>
          <div className="my-2 text-gray-800">
            <p>好吃的蛋糕不要再用買的，都自己做吧！我們會提供全部器材與材料，帶著一顆愉悅的心即可預約體驗唷！</p>
          </div>
          <div>
            <ul>
              <li>&#9830; 關聯標籤：
                {tags.length > 0 && tags.map((item) => {
                  return (
                    <span className="inline-block tag bg-gray-200 rounded-full p-1 text-xs font-semibold text-gray-700 mr-1">#{item}</span>
                  )
                })}
              </li>
              <li>&#9830; 所需時間：約<span className='font-bold px-1'>3</span>小時</li>
              <li>&#9830; 預約費用：新臺幣<span className='font-bold px-1'>300</span>元</li>
            </ul>
          </div>
          <SectionTitle text="店家資訊" />
          <div>
            <ul>
              <li>&#9830; 店家名稱：Annie 烘焙點心體驗店</li>
              <li>&#9830; 店家地址：臺北市南港區</li>
            </ul>
          </div>
          <SectionTitle text="目前可供預約日期(本月)" />
          <div className="pb-3">
            <EnableTable dateData="" />
          </div>
          <SectionTitle text="目前可供預約時段" />
          <div className="flex items-center pb-3">
            <span className="inline-block tag bg-cyan-200 rounded-full p-2 text-xs font-semibold text-gray-400 mr-1">09:00~12:00</span>
            <span className="inline-block tag bg-cyan-200 rounded-full p-2 text-xs font-semibold text-gray-700 mr-1">14:00~17:00</span>
            <span className="inline-block tag bg-cyan-200 rounded-full p-2 text-xs font-semibold text-gray-700 mr-1">19:00~22:00</span>
          </div>
          <div className="flex justify-center items-center my-3">
            <button type="button" className="w-full flex justify-center items-center text-sky-100 bg-cyan-800 px-3 py-3 rounded-full">
              <span className="text-sm">開始預約</span>
            </button>
          </div>
        </div>
      } */}
    </div>
  );
};

export default ProductDetail;