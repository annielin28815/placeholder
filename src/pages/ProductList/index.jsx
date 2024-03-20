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
  // const products = [
  //   {
  //     id: 1,
  //     name: "手作金工體驗-做一個自己的手環",
  //     tags: ["宜送禮", "金工"],
  //     price: 200,
  //     content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
  //     imgUrl: "https://lh4.googleusercontent.com/DPBQfndvEskF1goBB0GqMmPyaeekNOE21QC5Xw9G_haLaxOKaxhWZJJVbPmo1ailQtuKt00OCN6OJk2i7VnQ5T5O4XNwr6yUJRPHAghf3WYV89rFY8ctxwr4yBGHFbZXlRuylQEm"
  //   },
  //   {
  //     id: 2,
  //     name: "韓式多層次睫毛嫁接",
  //     tags: ["變漂亮"],
  //     price: 200,
  //     content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
  //     imgUrl: "https://www.angel-eyelash.tw/assets/images/eyelash-extensions-suitable.jpg"
  //   },
  //   {
  //     id: 3,
  //     name: "手作蛋糕體驗-自己做蛋糕",
  //     tags: ["就是想吃", "儀式感"],
  //     price: 200,
  //     content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
  //     imgUrl: "https://lh3.googleusercontent.com/p/AF1QipNGdLnhyzXARarxR1YVAdJ1OOOY1gCYL8b9u_2N=s680-w680-h510"
  //   },
  //   {
  //     id: 4,
  //     name: "指甲彩繪-讓指甲穿新衣",
  //     tags: [ "變漂亮"],
  //     price: 200,
  //     content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
  //     imgUrl: "https://tuanuu.tw/wp-content/uploads/20171011223452_99.jpg"
  //   },
  // ];
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
        {console.log(products)}

        {(products.length > 0 && currentUserData.role === 0) &&
          <ul className="product-card-group my-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4" >
            {products.map((item) => {
              return (
                <ProductCard key={item.id} mainImg={item.imgUrl} name={item.name} price={item.price} tags={item.tags} />
              )
            })}
          </ul>
        }
      </div>
    );
};

export default ProductList;