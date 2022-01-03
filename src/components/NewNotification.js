import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export const NewNotification = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState('');
    const [bloodType, setBloodType] = useState('A+');
    const [message, setMessage] = useState('');
    const [blood, setBlood] = useState([]);

    const sendDataToAPI = () => {

        let blod = [
            "blood_name", bloodType
        ]
        let annonce = {
            title: title,
            datelimite: date,
            message: message,
            datecreation: new Date()
        }

        axios.post("http://localhost:8080/object/Blood_type", blod).then((res) => {

            setBlood(res.data[0]);
            console.log(blood.id);
            setId(blood.id);

            //console.log(message+ " " + bloodType);


        });

        axios.post("http://localhost:8080/annonce/add/" + id,
            annonce
        ).then((res) => {
            navigate("/tablenotifs")
            console.log("anno =>" + res.data)
            console.log("walo");

        })
    }
    return (
        <>

            <div class="container items-center px-3 py-12 lg:px-20">
                <form class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
                    <div class="relative pt-4">
                        <h2 class="text-2xl text-gray-500 font-bold">Add notification</h2>
                    </div>
                    <div class="relative pt-4">
                        <label for="name" class="text-base leading-7 text-blueGray-500">Title</label>
                        <input type="text" id="number" name="title" placeholder="title"
                            onChange={(e) => setTitle(e.target.value)}
                         class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-pink-100 focus:border-pink-500 focus:bg-pink focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"/>
                    </div>
                    <div class="relative pt-4">
                        <label for="name" class="text-base leading-7 text-blueGray-500">Date</label>
                        <input type="date" id="date" name="date" placeholder="name"
                            onChange={(e) => setDate(e.target.value)}
                         class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-pink-100 focus:border-pink-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"/>
                    </div>
                    <div class="relative mt-4">
                        <label for="name" class="text-base leading-7 text-blueGray-500">Blood type</label>
                        <select 
                            onChange={(e) => setBloodType(e.target.value)}
                            class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-pink-100 focus:border-pink-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                    </div>
                    <div class="flex flex-wrap mt-4 mb-6 -mx-3">
                        <div class="w-full px-3">
                            <label class="text-base leading-7 text-blueGray-400" for="description">Message </label>
                            <textarea 
                                onChange={(e) => setMessage(e.target.value)}
                                class="w-full h-24 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-gray border rounded-lg bg-pink-100 focus:border-pink-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand" id="description" type="text" name="description" placeholder="Message..." required=""></textarea>
                        </div>
                    </div>
                </form>
                <div class="w-full flex items-center px-96  pt-4 mb-4">
                    <button
                        onClick={sendDataToAPI}
                        class="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-pink-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-pink-800 "> Save </button>
                </div>
            </div>
        </>
    )
}
