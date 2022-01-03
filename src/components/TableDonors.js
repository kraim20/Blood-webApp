import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import FileDownload from './FileDownload';

export default function TableDonors() {

    const navigate = useNavigate();
    const [APIData, setAPIData] = useState([]);
    const fecthUser = ()=>{
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
        navigate("/tabledonors")
            
    }

   /* const aee = ( id) =>{
        console.log(id);
    }
    */

    return (
        <>
            <div  class="flex items-start justify-center min-h-screen bg-white">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible">
                        <div class="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
                            <h2 class="text-2xl text-gray-500 font-bold">Donors</h2>
                            

                        </div>
                        <table  class="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead class="bg-pink-500 text-white">
                                <tr>
                                    <th class="px-12 py-3">First name</th>
                                    <th class="px-12 py-3 text-left">Last name</th>
                                    <th class="px-12 py-3 text-left">Age</th>
                                    <th class="px-12 py-3 text-left">CIN</th>
                                    <th class="px-12 text-left">Analyze</th>

                                    <th class="px-12 py-3 text-left">Action</th>
                                </tr>
                            </thead>
                            {APIData.map((data, index) => {
                             return(  
                            <tbody>

                                    <tr class="bg-gray-200 lg:text-black">
                                    <td class="p-12 font-medium capitalize">{data.nom}</td>
                                    <td class="p-12">{data.prenom}</td>
                                    <td class="p-12">{data.age}</td>
                                    <td class="p-12 uppercase">{data.cin}</td>
                                    <td class="px-12">
                                             <FileDownload/>
                                    </td>

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
