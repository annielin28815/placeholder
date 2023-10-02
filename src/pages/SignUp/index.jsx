import React, { useState } from 'react';
import './SignUp.css';

import PageTitle from '../../components/PageTitle';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import RoleRadio from '../../components/RoleRadio';
import TitleDivide from '../../components/TitleDivide';

const SignUp = () => {
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

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

    return (
      <div>
        <PageTitle text="註冊" />
        <div className="max-w-md mx-auto">
          <form>
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
                        value={item.role}
                        checked={item.checked}
                        // onChange={(e)=> setRole(e)}
                      /> 
                    )
                  })}
                </div>
              </div>

              <div className="col-span-12">
                <FormInput text="Email" type="email" labelText="信箱" onChange={onChange} />
              </div>

              <div className="col-span-12">
                <FormInput text="Password" type="password" labelText="密碼" onChange={onChange} />
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
              <FormButton type="button" status="other" disabled={false} onClickEvent={() => {}} text="以 Google 帳號登入" />
            </div>

            <div className="col-span-12 mt-2 flex items-center justify-center gap-x-2">
              <FormButton type="button" status="other" disabled={false} onClickEvent={() => {}} text="以 Facebook 帳號登入" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;