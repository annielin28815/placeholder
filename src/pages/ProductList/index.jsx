import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import './ProductList.css';
import PageTitle from '../../components/PageTitle';
import ProductCard from './components/ProductCard';
import Empty from './components/Empty';
import StudioTable from './components/StudioTable';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../../firebase';
import { collection, getDocs, limit, query } from "firebase/firestore";


const ProductList = () => {
  const auth = getAuth();
  const location = useLocation();

  const [currentUserData, setCurrentUserData] = useState({role: 0});
  const [products, setProducts] = useState([]);
  const [hasProduct, setHasProduct] = useState(false);
  const [pageState, setPageState] = useState("Sign in");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsRef = collection(db, "products");
        const q = query(
          productsRef,
          limit(4)
        );
        const querySnap = await getDocs(q);
        const products = [];
        querySnap.forEach((doc) => {
          return products.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            imgUrl: doc.data().imgUrl,
            price: doc.data().price,
            tags: doc.data().tags,
            timestamp: doc.data().timestamp
          });
        });
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if(location.pathname.includes("customer")) {
      setCurrentUserData({role: 0});
    }else if(location.pathname.includes("studio"))  {
      setCurrentUserData({role: 1});
    }else {
      setCurrentUserData({role: 0});
    };
  }, [location]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        setCurrentUserData({
          ...user,
          role: user.role == 0 ? 0 : 1
        });
        setPageState("Sign in");
      } else {
        setIsLogin(false);
        setCurrentUserData({role: 0});
        setPageState("Sign out");
      }
    });
  }, [auth]);

    return (
      <div>
        <PageTitle text="服務項目列表頁" />

        {(products.length > 0 && currentUserData.role === 0) &&
          <ul className="product-card-group my-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4" >
            {products.map((item) => {
              return (
                <ProductCard key={item.id} mainImg={item.imgUrl} name={item.name} price={item.price} tags={item.tags} />
              )
            })}
          </ul>
        }

        {currentUserData.role === 1 &&
          products.length > 0 ? <StudioTable data={products} /> : <Empty />
        }
      </div>
    );
};

export default ProductList;