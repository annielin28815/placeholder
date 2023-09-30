import React from 'react';
import './Header.css';
import { BeakerIcon } from '@heroicons/react/24/solid'

const Header = () => {

    return (
      <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between mb-2" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <img className="h-8 w-auto" src="https://img.icons8.com/windows/96/chair.png" alt="logo" />
            <span className="text-xl font-semibold leading-6 text-gray-900">好好訂位</span>
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </div>
      </nav>
    </header>
    );
};

export default Header;