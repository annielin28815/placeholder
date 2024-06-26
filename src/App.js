import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import HowToUse from './pages/HowToUse';
import Profile from './pages/Profile';
import ReservationList from './pages/ReservationList';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <main className="overflow-x-hidden relative">
        <div className="overflow-x-hidden relative max-w-md md:max-w-screen-md mx-auto ">
          <div className="border-x border-solid border-gray-900 my-0">
            <Header className="fixed top-0 z-20" />
          </div>
          <div className="main-page border-x border-solid border-gray-900 my-0 ">
            <div className="overflow-y-scroll" style={{height: 'calc(100vh - 110px)'}}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />

                <Route path="/studio/profile" element={<PrivateRoute />}>
                  <Route path="/studio/profile" element={<Profile />} />
                </Route>
                
                <Route path="/reservations" element={<ReservationList />} />

                <Route path="/howtouse" element={<HowToUse />} />
                
                <Route path="/studio/products" element={<ProductList />} />
                <Route path="/studio/products/create" element={<ProductDetail />} />
                <Route path="/studio/products/update/:id" element={<ProductDetail />} />
                
                <Route path="/customer/products" element={<ProductList />} />
                <Route path="/customer/products/:id" element={<ProductDetail />} />

                <Route path="/studio/reservations" element={<ProductList />} />
                <Route path="/studio/reservations/create" element={<ProductDetail />} />
                
                <Route path="/customer/reservations" element={<ProductList />} />
                <Route path="/customer/reservations/create" element={<ProductDetail />} />

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
