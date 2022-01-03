import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function TableNotifs() {

    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);
    const fecthannonce = () => {
        axios.get("http://localhost:8080/annonce/all")
            .then((getData) => {
                setApiData(getData.data);
                console.log(apiData);
            })
    }

    useEffect(() => {
        fecthannonce();
    }, []);

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
        axios.get("http://localhost:8080/annonce/delete/" + id).then((res) => {
            console.log(res.data);
        })
        fecthannonce();
        navigate("/tablenotifs");
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
                                    <th class="px-12 py-3">Id</th>
                                    <th class="px-12 text-left">Date de creation</th>
                                    <th class="px-12 text-left">Date limite</th>
                                    <th class="px-12 text-left">blood types</th>
                                    <th class="px-12 text-left">Message</th>

                                    <th class="px-12 text-left">Action</th>
                                </tr>
                            </thead>
                            {apiData.map((data, index) => {
                                return (
                                    <tbody>

                                        <tr class="bg-pink-200 lg:text-white">
                                            <td class="px-12 py-3  font-medium capitalize">{data.id}</td>
                                            <td class="px-12">{data.datecreation}</td>
                                            <td class="px-12">{data.datelimite}</td>

                                            <td class="px-12">{data.bloods.map((blood, index) => {
                                                return (
                                                    <td> {blood.blood_name} , </td>
                                                )
                                            })
                                            }</td>

                                            <td class="px-12 uppercase">{data.message}</td>

                                            <td class="p-12">
                                                <button onClick={(event) => onDelete(data.id)}  >delete</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}