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

import { getAuth, updateProfile } from "firebase/auth";
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
              <FormInput text="聯絡電話" type="text" id="lineID" labelText="聯絡電話" onChange={onChange} required  />
            </div>
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
              <FormButton type="submit" status="normal" disabled={false} onClickEvent={() => {}} text="更新" />
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Profile;