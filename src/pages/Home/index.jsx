import React, { useEffect, useState } from 'react';
import './Home.css';

import SectionTitle from './component/SectionTitle';
import CategoryTag from './component/CategoryTag';
import StoreCard from './component/StoreCard';
import ProductCard from './component/ProductCard';

import { db } from '../../firebase';
import { doc, serverTimestamp, setDoc, getDoc, collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesRef = collection(db, "categories");
        const q = query(
          categoriesRef,
          limit(5)
        );
        const querySnap = await getDocs(q);
        const categories = [];
        querySnap.forEach((doc) => {
          return categories.push({
            id: doc.id,
            name: doc.data().name,
          });
        });
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchStores() {
      try {
        const storesRef = collection(db, "stores");
        const q = query(
          storesRef,
          limit(5)
        );
        const querySnap = await getDocs(q);
        const stores = [];
        querySnap.forEach((doc) => {
          return stores.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            imgUrl: doc.data().imgUrl,
            timestamp: doc.data().timestamp
          });
        });
        setStores(stores);
      } catch (error) {
        console.log(error);
      }
    }

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

    fetchCategories();
    fetchStores();
    fetchProducts();
  }, []);

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
      <SectionTitle text="最新加入店家" link={true} hasAll={false} />
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