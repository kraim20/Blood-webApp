import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Table() {

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get(`API_link`)
      .then((getData) => {
        setApiData(getData.data);
      })
  }, [])


  const getData = () => {
    axios.get(`API_link`)
      .then((getData) => {
        setApiData(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`API_link/${id}`)
      .then(() => {
        getData();
      })
  }

    return (
        <>
           <div class="flex items-start justify-center min-h-screen bg-white py-8">
  <div class="col-span-12">
    <div class="overflow-auto lg:overflow-visible">
      <div class="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
        <h2 class="text-2xl text-gray-500 font-bold">All Users</h2>
        <div class="text-center flex-auto">
          <input
            type="text"
            name="name"
            placeholder="Search..."
            class="
              w-1/3
              py-2
              border-b-2 border-blue-600
              outline-none
              focus:border-yellow-400
            "
          />
        </div>

        <div>
          <a href="#">
            <button
              class="
                bg-pink-500
                hover:bg-pink-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
            >
              All
            </button>
          </a>
          <a href="/tablecenter">
            <button
              class="
                bg-pink-500
                hover:bg-pink-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
            >
              Center
            </button>
          </a>
          <a href="/tabledonors">
            <button
              class="
                bg-pink-500
                hover:bg-pink-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
            >
              Donors
            </button></a
          >
        </div>
      </div>
      <table class="table text-gray-400 border-separate space-y-6 text-sm">
        <thead class="bg-pink-500 text-white">
          <tr>
            <th class="px-12 py-3">Name</th>
            <th class="px-12 py-3 text-left">Mail</th>
            <th class="px-12 py-3 text-left">Phone</th>
            <th class="px-12 text-left">Role</th>

            <th class="px-12 text-left">Status</th>
            <th class="px-12 text-left">Action</th>
          </tr>
        </thead>
                    {apiData.map((data) => {
                      return(
            <tbody>
          
                <tr class="bg-gray-200 lg:text-black">
                <td class="p-12 font-medium capitalize">{data.name}</td>
                <td class="p-12">{data.mail}</td>
                <td class="p-12">{data.phone}</td>
                <td class="p-12 uppercase">{data.role}</td>

                <td class="p-12">
                  <span class="bg-green-400 text-gray-50 rounded-md px-2"
                    >ACTIVE</span
                  >
                </td>
                <td class="p-12">
                  <Link href="#" class="text-yellow-400 hover:text-gray-100 mx-2">
                    <i class="material-icons-outlined text-base">edit</i>
                  </Link>
                  <Link
                    onClick={() => onDelete(data.id)}
                    class="text-red-400 hover:text-gray-100 ml-2"
                  >
                    <i class="material-icons-round text-base">Delete</i>
                  </Link>
                </td>
              </tr>
        </tbody>
    )})}
      </table>
    </div>
  </div>
</div> 
        </>
    )
}
