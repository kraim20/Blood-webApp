import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export const SignIn = ({ setLoginUser }) => {

  const navigate = useNavigate();

  const [comptedb, setComptedb] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  let compte = [
    "email", user.email

  ]

  const getUser = (id) => {
    axios.post("http://localhost:8080/compte/userofcompte/" + id).then((res) => {
      console.log("res =>")
      console.log(res.data)

      //setComptedb(res.data);
      localStorage.setItem('User', JSON.stringify(res.data))
      //console.log( "user => ");
      //console.log(comptedb)



    })
  }

  const getCentre = (id) => {
    axios.post("http://localhost:8080/compte/centerofcompte/" + id).then((res) => {
      console.log("res =>")
      console.log(res.data)


      localStorage.setItem('Centre', JSON.stringify(res.data))
    })
  }
  let test = true;
  function login(event) {
    event.preventDefault();
    axios.post("http://localhost:8080/object/Compte", compte).then(res => {
      console.log("compte ")
      console.log(res.data[0].role.role_name)
      localStorage.setItem('compte', JSON.stringify(res.data[0]));
      if (res.data[0].role.role_name == 'centre') {
        getCentre(res.data[0].id)
      } else if (res.data[0].role.role_name == 'donor') {
        getUser(res.data[0].id)
      }

    });

}
    return (
        <>
                <div
      class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <div
        class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Welcome Back
        </div>
        <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to access your account
        </div>

        <div class="mt-10">
          <form action="#">
            <div class="flex flex-col mb-5">
              <label
                for="email"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >E-mail Address:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i class="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange} 
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-pink-400
                  "
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i class="fas fa-lock text-pink-500"></i>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}  
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-pink-400
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div class="flex w-full">
              <button
                type="submit"
                onClick={login}
                class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-pink-500
                  hover:bg-pink-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span class="mr-2 uppercase">Sign In</span>
                <span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex justify-center items-center mt-6">
        <Link
          to="/signup"
          class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span class="ml-2"
            >You don't have an account?
            <Link
              to="/signup"
              class="text-xs ml-2 text-pink-500 font-semibold"
              >Register now</Link>
            </span >
        </Link>
      </div>
    </div>
        </>
    );
};
