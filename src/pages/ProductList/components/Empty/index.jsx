import React from 'react';
import { useNavigate } from "react-router-dom";
import './Empty.css';
import ActionButton from '../../../../components/ActionButton';
import emptyFolder from "../../../../assets/images/Empty-folder.png";

const Empty = (props) => {
  const navigate = useNavigate();

    return (
      <div className="mt-5 flex flex-col justify-center items-center">
        <div className="my-5">
          <ActionButton type="button" status="normal" disabled={false} userRole={1} onClickEvent={() => navigate('/studio/products/create')} text="開始新增" />
        </div>
        <div className="max-w-xs overflow-hidden mt-5">
          <img src={emptyFolder} className="w-full object-fill" alt="empty-image" />
        </div>
      </div>
    );
};

export default Empty;