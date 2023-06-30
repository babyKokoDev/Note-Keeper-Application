import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("Home")
    const location = useLocation()
     useEffect(()=>{
         if (location.pathname === '/'){
            setActiveTab("Home")
         } else if (location.pathname === '/add'){
            setActiveTab("Add")
         }
     })
  return (
    <nav className=" border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to='/' className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/752/752326.png"
            className="h-8 mr-3"
            alt="Note Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            NOTE KEEPER
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
           
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link
                to="/"
                className={`${activeTab === 'Home' ? 'text-blue-500' : 'text-white'} text-2xl block py-2 pl-3 pr-4bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-500`}
                aria-current="page"
                onClick={()=>{setActiveTab("Home")}}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/add"
                className={`${activeTab === 'Add' ? 'text-blue-500' : 'text-white'} text-2xl block py-2 pl-3 pr-4bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-500`}
                aria-current="page"
                onClick={()=>{setActiveTab("Add")}}
              >
                Add Note
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
