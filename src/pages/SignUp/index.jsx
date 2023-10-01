import React, { useState } from 'react';
import './SignUp.css';

import PageTitle from '../../components/PageTitle';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormButton from '../../components/FormButton';
import RoleRadio from '../../components/RoleRadio';
import FormCheckbox from '../../components/FormCheckbox';

const SignUp = () => {
  const [role, setRole] = useState([{role: 0, name: '顧客', checked: true}, {role: 1, name: '店家', checked: false}]);

    return (
      <div>
        <PageTitle text="註冊" />
        <div className="max-w-md mx-auto">
          <form>
            <div className="bg-white grid grid-cols-12 gap-x-6 gap-y-8">
              <div className="col-span-12 role-radio-group mt-1">
                {role.map((item) => {
                  return (
                    <RoleRadio name="identify" text={item.name} value={item.role} checked={item.checked} /> 
                  )
                })}
              </div>

              <div className="col-span-12">
                <FormInput text="Email" type="email" labelText="信箱" />
              </div>

              <div className="col-span-12">
                <FormInput text="Password" type="password" labelText="密碼" />
              </div>

              <div className="col-span-12 mt-2 flex items-center justify-center gap-x-2">
                <FormButton type="button" status="cancel" disabled={false} onClickEvent={() => {}} text="取消" />
                <FormButton type="submit" status="normal" disabled={false} onClickEvent={() => {}} text="註冊" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignUp;