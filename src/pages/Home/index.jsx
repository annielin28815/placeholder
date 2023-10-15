import React, { useEffect, useState } from 'react';
import './Home.css';

import SectionTitle from './component/SectionTitle';
import CategoryTag from './component/CategoryTag';
import StoreCard from './component/StoreCard';
import ProductCard from './component/ProductCard';


import { db } from '../../firebase';
import { doc, serverTimestamp, setDoc, getDoc, collection } from "firebase/firestore";

const Home = () => {

  const categories = [
    {
      id: 1,
      name: "handmade"
    },
    {
      id: 2,
      name: "beauty"
    },
    {
      id: 3,
      name: "art"
    },
    {
      id: 4,
      name: "dessert"
    },
    {
      id: 5,
      name: "hair"
    },
    {
      id: 6,
      name: "nail"
    }
  ];

  const stores = [
    {
      id: 1,
      name: "Annie's shop",
      content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
      imgUrl: "https://api.dicebear.com/7.x/open-peeps/svg?seed=Callie&face=awe,blank,calm,cheeky,concerned,concernedFear,contempt,cute,cyclops,driven,eatingHappy,explaining,eyesClosed,fear,hectic,lovingGrin1,lovingGrin2,monster,old,rage,serious,smile,smileBig,smileLOL,smileTeethGap,solemn,suspicious,tired,veryAngry"
    },
    {
      id: 2,
      name: "Annie's shop",
      content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
      imgUrl: "https://api.dicebear.com/7.x/open-peeps/svg?seed=Samantha&face=awe,blank,calm,cheeky,concerned,concernedFear,contempt,cute,cyclops,driven,eatingHappy,explaining,eyesClosed,fear,hectic,lovingGrin1,lovingGrin2,monster,old,rage,serious,smile,smileBig,smileLOL,smileTeethGap,solemn,suspicious,tired,veryAngry"
    },
    {
      id: 3,
      name: "Annie's shop",
      content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
      imgUrl: "https://api.dicebear.com/7.x/open-peeps/svg?seed=Rascal"
    },
    {
      id: 4,
      name: "Annie's shop",
      content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
      imgUrl: "https://api.dicebear.com/7.x/open-peeps/svg?seed=Milo"
    },
  ];

  const products = [
    {
      id: 1,
      name: "手作金工體驗-做一個自己的手環",
      tags: ["handmade", "beauty"],
      price: 200,
      content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
      imgUrl: "https://lh4.googleusercontent.com/DPBQfndvEskF1goBB0GqMmPyaeekNOE21QC5Xw9G_haLaxOKaxhWZJJVbPmo1ailQtuKt00OCN6OJk2i7VnQ5T5O4XNwr6yUJRPHAghf3WYV89rFY8ctxwr4yBGHFbZXlRuylQEm"
    },
    {
      id: 2,
      name: "韓式多層次睫毛嫁接",
      tags: ["handmade", "beauty"],
      price: 200,
      content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
      imgUrl: "https://www.angel-eyelash.tw/assets/images/eyelash-extensions-suitable.jpg"
    },
    {
      id: 3,
      name: "手作蛋糕體驗-自己做蛋糕",
      tags: ["handmade", "beauty"],
      price: 200,
      content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
      imgUrl: "https://lh4.googleusercontent.com/DPBQfndvEskF1goBB0GqMmPyaeekNOE21QC5Xw9G_haLaxOKaxhWZJJVbPmo1ailQtuKt00OCN6OJk2i7VnQ5T5O4XNwr6yUJRPHAghf3WYV89rFY8ctxwr4yBGHFbZXlRuylQEm"
    },
    {
      id: 4,
      name: "指甲彩繪-讓指甲穿新衣",
      tags: ["handmade", "beauty"],
      price: 200,
      content: "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。",
      imgUrl: "https://tuanuu.tw/wp-content/uploads/20171011223452_99.jpg"
    },
  ];

  return (
    <div className="container mx-auto">
      <SectionTitle text="主分類" hasAll={false} />
      <div className="overflow-x-scroll overflow-y-hidden">
        <ul className="category-card-group my-3 flex flex-wrap content-baseline overflow-hidden">
          {categories.length > 0 && categories.map((item) => {
            return (
              <CategoryTag name={item.name} key={item.id} />
            )
          })}
        </ul>
      </div>
      <SectionTitle text="最新加入店家" hasAll={false} />
      <div className="overflow-x-scroll overflow-y-hidden">
        <ul className="store-card-group my-5 flex flex-wrap content-baseline" >
          {stores.length > 0 && stores.map((item) => {
            return (
              <StoreCard key={item.id} mainImg={item.imgUrl} name={item.name} content={item.content} />
            )
          })}
        </ul>
      </div>
      <SectionTitle text="最新服務項目" link={true} hasAll={true} />
      <div className="overflow-x-scroll overflow-y-hidden">
        <ul className="product-card-group my-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4" >
          {products.length > 0 && products.map((item) => {
            return (
              <ProductCard key={item.id} mainImg={item.imgUrl} name={item.name} price={item.price} tags={item.tags} />
            )
          })}
        </ul>
      </div>

      
    </div>
  );
};

export default Home;