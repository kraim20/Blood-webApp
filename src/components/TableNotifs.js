import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function TableNotifs() {

    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`API_link`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, title, date, bloodType) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('title', title)
        localStorage.setItem('date', date)
        localStorage.setItem('bloodType', bloodType)
    }

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
            <div class="flex items-start justify-center min-h-screen bg-white py-12">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible">
                        <div class="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
                            <h2 class="text-2xl text-gray-500 font-bold">Notification</h2>
                            <div class="text-center flex-auto">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Search..."
                                    class="
              w-1/3
              py-2
              border-b-2 border-pink-600
              outline-none
              focus:border-pink-400
            "
                                />
                            </div>
                            <div>
                                <Link to="/newnotif">
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
                                        Add New Notifications
                                    </button>
                                </Link>
                            </div>

                        </div>
                        <table class="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead class="bg-pink-500 text-white">
                                <tr>
                                    <th class="px-12 py-3">Title</th>
                                    <th class="px-12 text-left">Date</th>
                                    <th class="px-12 text-left">Blood Type</th>
                                    <th class="px-12 text-left">Message</th>

                                    <th class="px-12 text-left">Action</th>
                                </tr>
                            </thead>
                            {apiData.map((data) => {
                            <tbody>

                                <tr class="bg-pink-200 lg:text-white">
                                    <td class="px-12 py-3  font-medium capitalize">data.title</td>
                                    <td class="px-12">data.date</td>
                                    <td class="px-12">data.bloodType</td>
                                    <td class="px-12 uppercase">data.message</td>

                                    <td class="px-12">
                                        <Link to="/updatenotif"
                                            onClick={() => setData(data.id, data.title, data.bloodType, data.message)}
                                         class="text-yellow-400 hover:text-gray-100 mx-2">
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
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
