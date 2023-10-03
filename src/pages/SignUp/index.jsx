import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SignUp.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import PageTitle from '../../components/PageTitle';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import RoleRadio from '../../components/RoleRadio';

import TitleDivide from '../../components/TitleDivide';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../../firebase';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();
  const [currentRole, setCurrenRole] = useState([
    {role: 0, name: '顧客', checked: true}, 
    {role: 1, name: '店家', checked: false}
  ]);
  const [formData, setFormData] = useState({
    role: 0,
    email: "",
    password: "",
  });
  const { role, email, password } = formData;

  const showNotify = (status, content) => {
    const notifySetting = {
      position: "top-center",
      autoClose: false,
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

  function onChange(e) {
    console.log(e);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        role
      );

      const user = userCredential.user;
      showNotify("success", "註冊成功");
      setFormData({
        role: 0,
        email: "",
        password: "",
      })
    } catch (error) {
      showNotify("error", "註冊失敗");
    }
  };

    return (
      <div>
        <PageTitle text="註冊" />
        <div className="max-w-md mx-auto">
          <form onSubmit={onSubmit}>
            <div className="bg-white grid grid-cols-12 gap-x-6 gap-y-2">
              <div className="col-span-12 role-radio-group mt-1">
                <div>
                  <label
                    htmlFor="role"
                    className="block text-base font-semibold leading-6 text-gray-900 mb-2"
                  >
                    角色
                  </label>
                </div>
                <div>
                  {currentRole.map((item) => {
                    return (
                      <RoleRadio
                        id="role"
                        key={item.role}
                        name="identify"
                        text={item.name}
                        labelText="identify"
                        value={item.checked}
                        // checked={item.checked}
                        onChange={onChange}
                      /> 
                    )
                  })}
                </div>
              </div>

              <div className="col-span-12">
                <FormInput text="Email" type="email" id="email" labelText="信箱" onChange={onChange} />
              </div>

              <div className="col-span-12">
                <FormInput text="Password" type="password" id="password" labelText="密碼" onChange={onChange} />
              </div>

              <div className="col-span-12 mt-2 flex items-center justify-center gap-x-2">
                <FormButton type="submit" status="normal" disabled={false} onClickEvent={() => {}} text="註冊" />
              </div>
            </div>
          </form>

          <div className="mt-6 bg-white grid grid-cols-12 gap-x-6 gap-y-2">
            <div className="col-span-12 mt-2 flex items-center justify-center gap-x-2">
              <TitleDivide text="使用其他方式登入" align="center" />
            </div>
            
            <div className="col-span-12 mt-2 flex items-center justify-center gap-x-2">
              <FormButton type="button" status="other" disabled={false} onClickEvent={() => showNotify("success", "text")} text="以 Google 帳號註冊" />
            </div>

            <div className="col-span-12 mt-2 flex items-center justify-center gap-x-2">
              <FormButton type="button" status="other" disabled={false} onClickEvent={() => {}} text="以 Facebook 帳號註冊" />
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default SignUp;