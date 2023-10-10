import React from 'react';
import { useNavigate } from "react-router-dom";
import './PageNotFound.css';
import PageTitle from '../../components/PageTitle';
import errorPage from "../../assets/images/Error-page.svg";
import ActionButton from '../../components/ActionButton';

const PageNotFound = () => {
  const navigate = useNavigate();

    return (
      <div>
        <PageTitle text="查無此頁面" />
        <div className="mt-5 flex flex-col justify-center items-center">
          <div className="my-5">
            <ActionButton type="button" status="normal" disabled={false} userRole={3} onClickEvent={() => navigate('/')} text="回首頁" />
          </div>
          <div className="max-w-xs overflow-hidden mt-5">
            <img src={errorPage} className="w-full object-fill" alt="empty-image" />
          </div>
        </div>
      </div>
    );
};

export default PageNotFound;