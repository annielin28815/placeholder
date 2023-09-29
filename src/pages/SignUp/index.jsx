import React from 'react';
import './SignUp.css';

import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormButton from '../../components/FormButton';
import FormRadio from '../../components/FormRadio';
import FormCheckbox from '../../components/FormCheckbox';

const SignUp = () => {

    return (
      <div>
        這是註冊頁
        <div className="overflow-hidden relative max-w-md md:max-w-screen-md mx-auto">
          <div className="border-x border-solid border-gray-900 py-12 px-5">
            <div className=" bg-white">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormInput />
                </div>

                <div className="sm:col-span-2">
                  <FormInput />
                </div>

                <div className="sm:col-span-2">
                  <FormInput />
                </div>

                <div className="sm:col-span-3">
                  <FormSelect />
                </div>

                <div className="col-span-2">
                  <FormInput />
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <FormInput />
                </div>

                <div className="sm:col-span-2">
                  <FormInput />
                </div>

                <div className="sm:col-span-2">
                  <FormInput />
                </div>

                <div className="col-span-full mt-2 flex items-center gap-x-2">
                  <FormCheckbox name="time" text="09:00~12:00" />
                  <FormCheckbox name="time" text="13:00~16:00" />
                  <FormCheckbox name="time" text="19:00~21:00" />
                </div>
              
                <div className="col-span-full mt-2 flex items-center gap-x-2">
                  <FormRadio name="choose one" text="店家" />
                  <FormRadio name="choose one" text="顧客" />
                </div>

                <div className="col-span-full mt-2 flex items-center justify-end gap-x-2">
                  <FormButton type="button" status="normal" disabled={false} onClickEvent={() => {}} text="normal" />
                  <FormButton type="button" status="cancel" disabled={false} onClickEvent={() => {}} text="cancel" />
                  <FormButton type="button" status="disabled" disabled={true} onClickEvent={() => {}} text="disabled" />
                  <FormButton type="button" status="not-allow" disabled={false} onClickEvent={() => {}} text="not-allow" />
                  <FormButton type="submit" status="focus" disabled={false} onClickEvent={() => {}} text="focus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;