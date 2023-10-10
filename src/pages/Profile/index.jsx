import React, { useState, useEffect  } from 'react';
import { useNavigate } from "react-router-dom";
import './Profile.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import PageTitle from '../../components/PageTitle';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import FormTextarea from '../../components/FormTextarea';
import FormSelect from '../../components/FormSelect';

import { getAuth, updateProfile, RecaptchaVerifier } from "firebase/auth";
import { db } from '../../firebase';
import { doc, serverTimestamp, setDoc, getDocs, updateDoc, collection, query, where, orderBy } from "firebase/firestore";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    ...auth.currentUser,
    role: 1,
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [errorPhoneMessage, setErrorPhoneMessage] = useState("請以全數字填寫，勿加入任何特殊符號。");
  const [isFinished, setIsFinished] = useState(false);
  
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
    let hasCorrectPhone = false;
    function isValidPhoneNumber(phoneNumber) {
      if (phoneNumber.length !== 10) {// 檢查手機號碼的長度是否為 10
        setErrorPhoneMessage("目前輸入格式不符")
        return false;
      }
      if (phoneNumber[0] !== '0' || phoneNumber[0] !== '+') {// 檢查手機號碼的第一個數字是否為 0(+為測試用)
        setErrorPhoneMessage("首字必須為0")
        return false;
      }
      const regex = /^\d{3}\d{3}\d{4}$/;
      if (!regex.test(phoneNumber)) {// 檢查手機號碼是否符合 XXXXXXXXXX 全數字的格式
        setErrorPhoneMessage("請輸入數字")
        return false;
      }
    
      return true;
    }

    if(e.target.id === "phone") {
      const phoneNumber = e.target.value;
      if(isValidPhoneNumber(phoneNumber) === true){
        hasCorrectPhone = true
        setShowOTPInput(true)
      }else {
        hasCorrectPhone = false
      }
    }

    // console.log(e.target.attributes.required);

    let rules = e.target.id === "name" || e.target.id === "address" || e.target.id ===  "industry" || e.target.id === "introduction" || e.target.id === "phone" || e.target.id === "code"
    if(rules && e.target.value !== null && e.target.value !== ""){
      setIsFinished(true)
    }else{
      setIsFinished(false)
    }

    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    console.log("formData =>", formData);

    try {
      const auth = getAuth();
      const docRef = doc(db, "users", auth.currentUser.uid);

      if (auth.currentUser.displayName !== formData.name) {
        await updateProfile(auth.currentUser, {
          displayName: formData.name
        });
        await setDoc(docRef, {
          role: 1 || null,
          displayName: formData.name || null,
          address: formData.address || null,
          industry: "beauty" || null,
          introduction: formData.introduction || null,
          timestamp: serverTimestamp() || null,
        });
      }
      showNotify("success", "更新成功");
    } catch (error) {
      showNotify("error", "更新失敗");
    }
  };

  return (
    <div>
      <PageTitle text="資料維護" />
      <div className="max-w-md mx-auto">
        <form onSubmit={onSubmit}>
          <div className="bg-white grid grid-cols-12 gap-x-6 gap-y-2">
            <div className="col-span-12">
              <FormInput text="Email" type="email" id="email" defaultValue={formData.email} labelText="信箱" readOnly />
            </div>
            <div className="col-span-12">
              <FormInput text="Name" type="text" id="name" labelText="店家名稱" onChange={onChange} required  />
            </div>
            <div className="col-span-12">
              <FormInput text="Address" type="text" id="address" labelText="店家地址" onChange={onChange} required  />
            </div>
            <div className="col-span-12">
              <FormSelect text="Industry" id="industry" labelText="店家產業別" onChange={onChange} required  />
            </div>
            <div className="col-span-12">
              <FormTextarea text="Introduction" type="text" id="introduction" labelText="店家介紹" onChange={onChange} required  />
            </div>
            <div className="col-span-12">
              <FormInput text="聯絡電話" type="number" id="phone" labelText="聯絡電話(不可變更)" onChange={onChange} required  />
            </div>
            {showOTPInput &&
              <div className="col-span-12">
                <FormInput text="簡訊驗證碼" type="number" id="code" labelText="簡訊驗證碼" onChange={onChange} required  />
              </div>
            }
            <div className="col-span-12">
              <FormInput text="Instagram 網址" type="text" id="instagramUrl" labelText="Instagram 網址" onChange={onChange}  />
            </div>
            <div className="col-span-12">
              <FormInput text="Facebook 網址" type="text" id="facebookUrl" labelText="Facebook 網址" onChange={onChange}  />
            </div>
            <div className="col-span-12">
              <FormInput text="Line ID" type="text" id="lineID" labelText="Line ID" onChange={onChange}  />
            </div>
            
            <div className="col-span-12 mt-2 flex items-center justify-center gap-x-2">
              <FormButton type="submit" status={isFinished ? "normal" : "disabled"} disabled={isFinished ? false : true} onClickEvent={() => {}} text="更新" />
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Profile;