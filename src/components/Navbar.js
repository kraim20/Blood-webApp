import React from "react";
import '../App.css'
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate('/signin');
  }
  const disconnect = () =>{
    localStorage.removeItem("User")
    localStorage.removeItem("compte")
    localStorage.removeItem("Centre")
    navigate("/")
  }

  let U = JSON.parse(localStorage.getItem("User"));
  let C = JSON.parse(localStorage.getItem("compte"));
  let Centre = JSON.parse(localStorage.getItem("Centre"));


  
  
    return (
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">EasyBD</span>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-8 hover:text-gray-900 cursor-pointer">Home</Link>
            <Link to="/aboutus" class="mr-8 hover:text-gray-900 cursor-pointer">About Us</Link>
            <Link to="/contactus" class="mr-8 hover:text-gray-900 cursor-pointer">Contact Us</Link>
            <Link to="/faqs" class="mr-8 hover:text-gray-900 cursor-pointer">FAQs</Link>
          </nav> 
{/*
          <div class=" bg-white py-6 flex flex-col ">
            <div class="flex items-center justify-center ">
              <div class=" relative inline-block text-left dropdown">
                <span class="rounded-md shadow-sm"
                ><button class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                    <span>My Account</span>
                    <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button
                  ></span>
                <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                    <div class="px-4 py-3">
                      <p class="text-sm leading-5">Signed in as</p>
                      <p class="text-sm font-medium leading-5 text-gray-900 truncate">test@test.com</p>
                    </div>
                    <div class="py-1">
                      <Link to="/personnelinfocenter" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Account setting</Link>
                      <Link to="/tabledonors" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Donors</Link>
                      <Link to="/tablenotifs" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Notifications</Link>
                      <Link to="/" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Sign out</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>*/}

          {
            (U == null && C == null) ?
              <button onClick={handleRoute} class=" inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Sign In
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-8 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              :
              C.role.role_name =="donor" ?
                <div class="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
                  <div class="flex items-center justify-center p-12">
                    <div class=" relative inline-block text-left dropdown">
                      <span class="rounded-md shadow-sm"
                      ><button class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                        type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                          <span>My Account</span>
                          <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button
                        ></span>
                      <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                        <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                          <div class="px-4 py-3">
                            <p class="text-sm leading-5">Signed in as</p>
                            <p class="text-sm font-medium leading-5 text-gray-900 truncate">{U.email}</p>
                          </div>
                          <div class="py-1">
                            <Link to="/personnelinfodonor" tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Account settings</Link>
                            <Link to="/usernotifs" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Notifications</Link>
                            <Link to="/" onClick={disconnect} tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Sign out</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                :
                C.role.role_name == "centre" ?
                  <div class="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
                    <div class="flex items-center justify-center p-12">
                      <div class=" relative inline-block text-left dropdown">
                        <span class="rounded-md shadow-sm"
                        ><button class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                          type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                            <span>My Account</span>
                            <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button
                          ></span>
                        <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                          <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                            <div class="px-4 py-3">
                              <p class="text-sm leading-5">Signed in as</p>
                              <p class="text-sm font-medium leading-5 text-gray-900 truncate">{U.email}</p>
                            </div>
                            <div class="py-1">
                              <Link to="/personnelinfocenter" tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Account settings</Link>
                              <Link to="/centerdonors" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Donors</Link>
                              <Link to="/tablenotifs" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Notifications</Link>
                              <Link to="/" onClick={disconnect} tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Sign out</Link></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  C.role.role_name === "admin" ?
                    <div class="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
                      <div class="flex items-center justify-center p-12">
                        <div class=" relative inline-block text-left dropdown">
                          <span class="rounded-md shadow-sm"
                          ><button class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                            type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                              <span>My Account</span>
                              <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button
                            ></span>
                          <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                            <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                              <div class="px-4 py-3">
                                <p class="text-sm leading-5">Signed in as</p>
                                <p class="text-sm font-medium leading-5 text-gray-900 truncate">{U.email}</p>
                              </div>
                              <div class="py-1">
                                <Link to="/" onClick={disconnect()} tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Sign out</Link></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    : null

          }


        </div>


         
 
        
      </header>
    );
  };