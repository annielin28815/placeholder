import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SignUp.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import PageTitle from '../../components/PageTitle';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

import TitleDivide from '../../components/TitleDivide';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from '../../firebase';
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();
  const [currentRole, setCurrenRole] = useState(0);
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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onChooseRole = (e) => {
    setCurrenRole(e)
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      
      updateProfile(auth.currentUser, {
        role: currentRole,
        displayName: email,
      });
      setFormData({
        role: 0,
        email: "",
        password: "",
      })

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      showNotify("success", "註冊成功");
    } catch (error) {
      console.log("error =>", error);
      showNotify("error", "註冊失敗");
    }
  };

  async function onGoogleSignUp() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          role: currentRole,
          email: user.email
        });
        showNotify("success", "註冊成功");
      }
      navigate("/");
    } catch (error) {
      showNotify("error", "註冊失敗");
      console.log("error =>", error);
    }
  }

  async function onFacebookSignUp() {
    try {
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          role: currentRole,
          email: user.email
        });
        showNotify("success", "註冊成功");
      }

      navigate("/");
    } catch (error) {
      showNotify("error", "註冊失敗");
      console.log("error =>", error);
    }
  }

  return (
    <div>
      <PageTitle text="註冊" />
      <div className="max-w-md mx-auto">
        <form onSubmit={onSubmit}>
          <div className="bg-white grid grid-cols-12 gap-x-6 gap-y-2">
            <div className="col-span-12 role-radio-group mt-1">
              <div className="grid grid-cols-12">
                <div className="col-span-6 flex flex-col justify-center items-center cursor-pointer relative inline-block" onClick={() => onChooseRole(0)}>
                  <div className="text-lg font-semibold">我是顧客</div>
                  <div className="w-32 h-32">
                    <img className="w-full object-fill" src="https://api.dicebear.com/7.x/thumbs/svg?seed=Loki" alt="avatar" />
                  </div>
                  {currentRole === 1 && <div className="absolute un-choose"></div>}
                </div>
                <div className="col-span-6 flex flex-col justify-center items-center cursor-pointer relative inline-block" onClick={() => onChooseRole(1)}>
                  <div className="text-lg font-semibold">我是店家</div>
                  <div className="w-32 h-32">
                    <img className="w-full object-fill" src="https://api.dicebear.com/7.x/thumbs/svg?seed=Misty&mouth=variant1,variant2,variant4,variant5&shapeColor=69d2e7,f1f4dc,f88c49" alt="avatar" />
                  </div>
                  {currentRole === 0 && <div className="absolute un-choose"></div>}
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <FormInput text="Email" type="email" id="email" labelText="信箱" onChange={onChange} required />
            </div>

            <div className="col-span-12">
              <FormInput text="Password" type="password" id="password" labelText="密碼" onChange={onChange} required />
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
            <FormButton type="button" status="other" disabled={false} onClickEvent={onGoogleSignUp} text="以 Google 帳號註冊" />
          </div>

          <div className="col-span-12 mt-2 flex items-center justify-center gap-x-2">
            <FormButton type="button" status="other" disabled={false} onClickEvent={onFacebookSignUp} text="以 Facebook 帳號註冊" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;