import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './pages/Header';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <main className="overflow-x-hidden relative">
        <div className="overflow-x-hidden relative max-w-md md:max-w-screen-md mx-auto ">
          <div className="border-x border-solid border-gray-900 my-0 p-5">
            <Header />
          </div>
          <div className="border-x border-solid border-gray-900 my-0 p-5 overflow-y-scroll" style={{height: 'calc(100vh - 80px)'}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<ProductList />}>
                <Route path="/products/:id" element={<ProductDetail />} />
              </Route>
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
