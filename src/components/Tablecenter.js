import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function TableCenter() {

    const navigate = useNavigate();
    const [APIData, setAPIData] = useState([]);
    const fecthUser = () => {
        axios.get(`http://localhost:8080/user/all`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }
    useEffect(() => {
        fecthUser();
    }, []);

    /*const getData = () => {
        axios.get(`http://localhost:8080/user/all`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
    */

    const onDelete = (id) => {
        console.log(id)
        axios.get("http://localhost:8080/user/delete/" + id);
        fecthUser();
        navigate("/tablecenter")

    }

    /* const aee = ( id) =>{
         console.log(id);
     }
     */

    return (
        <>
            <div class="flex items-start justify-center min-h-screen bg-white">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible">
                        <div class="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
                            <h2 class="text-2xl text-gray-500 font-bold">Donors</h2>
                        

                        </div>
                        <table class="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead class="bg-pink-500 text-white">
                                <tr>
                                    <th class="px-12 py-3">Id center</th>
                                    <th class="px-12 py-3 text-left">Name</th>
                                    <th class="px-12 py-3 text-left">Adress</th>
                                    <th class="px-12 py-3 text-left"></th>

                                    <th class="px-12 py-3 text-left">Action</th>
                                </tr>
                            </thead>
                            {APIData.map((data, index) => {
                                return (
                                    <tbody>

                                        <tr class="bg-gray-200 lg:text-black">
                                            <td class="p-12 font-medium capitalize">{data.id}</td>
                                            <td class="p-12">{data.nom}</td>
                                            <td class="p-12">{data.adresse}</td>
                                            <td class="p-12 uppercase"></td>

                                            <td class="p-12">
                                                <button onClick={(event) => onDelete(data.cin)}  >delete</button>
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
