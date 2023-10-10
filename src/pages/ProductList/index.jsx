import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './ProductList.css';
import PageTitle from '../../components/PageTitle';
import emptyFolder from "../../assets/images/Empty-folder.png";
import ActionButton from '../../components/ActionButton';

const ProductList = () => {
  const navigate = useNavigate();
  const [hasProduct, setHasProduct] = useState(false);

    return (
      <div>
        <PageTitle text="服務項目列表頁" />
        {hasProduct === false &&
          <div className="mt-5 flex flex-col justify-center items-center">
            <div className="my-5">
              <ActionButton type="button" status="normal" disabled={false} userRole={1} onClickEvent={() => navigate('/studio/products/create')} text="開始新增" />
            </div>
            <div className="max-w-xs overflow-hidden mt-5">
              <img src={emptyFolder} className="w-full object-fill" alt="empty-image" />
            </div>
          </div>
        }
      </div>
    );
};

export default ProductList;