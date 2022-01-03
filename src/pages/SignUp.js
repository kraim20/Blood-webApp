import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  let verify = Boolean;
  verify = false;
  const checkpass = e => {
    const { name, value } = e.target
    if (value == user.password) {
      console.log("ok")
      verify = true;
    } else {
      console.log("!!")
    }
  }

  let roleId = '';
  if (user.role == "Center") {
    roleId = 1;
  } else if (user.role == "Donor") {
    roleId = 2;
  }
  const register = () => {
    if (verify) {
      const { name, email, password, role } = user
      let dbcompte = {
        "email": user.email,
        "password": user.password,
        "validate": 1,
        "id": 22
      }
      let dbuser = {
        "cin": 22,
        "nom": user.name,
        "adresse": "",
        "prenom": "",
        "age": "55"
      }
      let user_compte = {
        "user": dbuser,
        "compte": dbcompte
      };



      axios.post("http://localhost:8080/signup/" + roleId, user_compte).then((res) => {
        console.log("saved!!")
      })


      /*if (name && email && password && (password === reEnterPassword)) {
        axios.post("http://localhost:8080/register", user)
          .then(res => {
            console.log(user)
            localStorage.setItem("user", user)
            navigate("/signin")
          })
      } else {
        
      }*/
    }
  }
    return (
        <>
			<div
      class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
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
          Join us Now
        </div>
        <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div class="mt-10">
          <form action="#">
            <div class="flex flex-col mb-5">
              <label
                for="name"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >Name:</label
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
                  <i class="fas fa-user text-blue-500"></i>
                </div>

                <input
                  id="name"
                  type="text"
                  name="name"
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
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </div>
            </div>
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
                  onChange={handleChange}
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
                    <i class="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
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
                  onChange={handleChange}
                />
              </div>
            </div>
                <div class="flex flex-col mb-6">
                  <label
                    for="reEnterpassword"
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >Re-enter your password:</label
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
                        <i class="fas fa-lock text-blue-500"></i>
                      </span>
                    </div>

                    <input
                      id="password"
                      type="password"
                      name="reEnterpassword"
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
                      placeholder="Re-enter your password"
                      onChange={handleChange}  
                    />
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-small text-gray-600">
                    Who you are ?
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="py-2 mt-1 block w-full py-2 px-8 text-gray-500 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-2xl"
                    onChange={handleChange}
                  >
                    <option>Donor</option>
                    <option>Center</option>
                  </select>
                </div>
          </form>
              <div class="flex w-full">
                <button
                  type="submit"
                  onClick={register}
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
                  <span class="mr-2 uppercase">Sign Up</span>
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
        </div>
      </div>
      <div class="flex justify-center items-center mt-6">
        <p
          
          class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span class="ml-2"
            >You have an account?
            <Link
              to="/signin"
              class="text-xs ml-2 text-pink-500 font-semibold"
              >Login here</Link
            ></span
          >
        </p>
      </div>
    </div>
        </>
    )
}
