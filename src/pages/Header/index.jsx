import React, { useEffect, useState } from 'react';
import './Header.css';
import { Bars3BottomRightIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Menu from './components/Menu';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation  } from "react-router-dom";

import { db } from '../../firebase';
import { collection, query, getDocs, orderBy } from "firebase/firestore";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const location = useLocation();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageState, setPageState] = useState("Sign in");
  const [isLogin, setIsLogin] = useState(false);
  const [currentUserData, setCurrentUserData] = useState({role: 0});
  const [currentPathname, setCurrentPathname] = useState();
  const [roleAvatarData, setRoleAvatarData] = useState(null);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setPageState("Profile");
  //     } else {
  //       setPageState("Sign in");
  //     }
  //   });
  // }, [auth]);

  // useEffect(() => {
  //   async function fetchRoleAvatars() {
  //     try {
  //       const roleImgRef = collection(db, "roleAvatar")
  //       const q = query(
  //         roleImgRef,
  //         orderBy("role", "asc")
  //       );

  //       const querySnapshot = await getDocs(q);

  //       setRoleAvatarData(querySnapshot);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchRoleAvatars();
  // }, []);

  useEffect(() => {
    setCurrentPathname(location.pathname);
    if(location.pathname !== currentPathname) {
      setIsMenuOpen(false)
    }
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
        setPageState("Log out")
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
    <header className="bg-white relative">
      <div className="relative">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-5" aria-label="Global">
          <div className="flex lg:flex-1">
            <a onClick={() => navigate("/")} className="-m-1.5 p-1.5 flex items-center">
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
        {isMenuOpen &&
          <Menu isLogin={isLogin} role={currentUserData.role} userData={currentUserData} />
        }
      </div>
    </header>
  );
};

export default Header;