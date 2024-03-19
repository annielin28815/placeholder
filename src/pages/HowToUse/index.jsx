import React from 'react';
import { useNavigate } from "react-router-dom";
import './HowToUse.css';
import PageTitle from '../../components/PageTitle';
import ActionButton from '../../components/ActionButton';

const HowToUse = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageTitle text="網站使用說明" />
      <div className="mt-5 flex flex-col justify-center items-center">
          <div className="max-w-md overflow-hidden">
            <h5 className="text-lg font-semibold my-1">一、網站介紹</h5>
            <p>
              這是簡易的一站式訂位網站，您可以註冊與登入會員帳號，區分店家與顧客兩者角色，店家可刊登簡易資訊與服務項目，提供可預約的日期與時段；顧客則可針對有興趣的服務項目預約訂位，免除透過粉絲頁或官方帳號的既有漫長等待過程。
            </p>
            <h5 className="text-lg font-semibold my-1">二、使用說明</h5>
            <p>
              基於訂位保障原則、為順利使用服務項目刊登與預約等核心功能，請務必留意驗證個人手機號碼，驗證過程中，系統將會使用簡訊方式發送驗證碼，回填完成後即可完整使用。
            </p>
            <h5 className="text-lg font-semibold my-1">三、其他回饋</h5>
            <p>
              本網站目前尚在優化過程，若使用上有任何回饋事項，請不吝寄信至<a href="mailto:iam@annielin.cc" className="text-blue-300 mx-1">iam@annielin.cc</a>.
            </p>
          </div>
          <div className="my-5">
            <ActionButton type="button" status="normal" disabled={false} userRole={3} onClickEvent={() => navigate('/')} text="開始使用" />
          </div>
        </div>
    </div>
  );
};

export default HowToUse;