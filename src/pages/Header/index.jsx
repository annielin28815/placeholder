import React, { useEffect, useState } from 'react';
import './Header.css';
import { Bars3BottomRightIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Menu from './components/Menu';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageState, setPageState] = useState("Sign in");
  const [isLogin, setIsLogin] = useState(false);
  const [currentUserData, setCurrentUserData] = useState({role: 0});

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        setCurrentUserData({
          ...user,
          role: user.displayName === "0" ? 0 : 1
        });
      } else {
        setIsLogin(false);
        setCurrentUserData({role: 0});
      }
    });
  }, [auth]);

  const setSearchStatus = (boolean) => {
    setIsSearchOpen(boolean);
  };

  const setMenuStatus = (boolean) => {
    setIsMenuOpen(boolean);
  };

  return (
    <header className="bg-white">
      <div className="relative">
        <nav className="mx-auto flex max-w-7xl items-center justify-between mb-2 " aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <img className="h-8 w-auto" src="https://img.icons8.com/windows/96/chair.png" alt="logo" />
              <span className="text-xl font-semibold leading-6 text-gray-900">好好訂位</span>
            </a>
          </div>
          <div className="flex lg:justify-end items-center justify-between gap-x-2">
            <button type="button" onClick={()=>{setSearchStatus(!isSearchOpen);}}>
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-900" />
            </button>
            <button type="button" onClick={()=>{setMenuStatus(!isMenuOpen);}}>
              {isMenuOpen ?
                <XMarkIcon className="h-6 w-6 text-gray-900" /> :
                <Bars3BottomRightIcon className="h-6 w-6 text-gray-900" />
              }
            </button>
          </div>
        </nav>
        <Menu isOpen={isMenuOpen} isLogin={isLogin} role={currentUserData.role} userData={currentUserData} className="max-w-7xl " />
      </div>
    </header>
  );
};

export default Header;