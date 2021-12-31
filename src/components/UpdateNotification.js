import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export const UpdateNotification = () => {
     
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [bloodType, setBloodType] = useState(null);
    const [message, setMessage] = useState('');
    const [ID, setID] = useState(null);
    const sendDataToAPI = () => {
        let data ={
            title, date, bloodType, message
        }
        axios.put(`APIè_link${ID}`, {
            data
        }).then(() => {
            navigate('/tablenotifs')
        })
    }
    useEffect(() => {
        setTitle(localStorage.getItem('title'));
        setDate(localStorage.getItem('date'));
        setBloodType(localStorage.getItem('BloodType'));
        setMessage(localStorage.getItem('message'));
        setID(localStorage.getItem('ID'))
    }, [])
    return (
        <>

            <div class="container items-center px-3 py-12 lg:px-20">
                <form class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
                    <div class="relative pt-4">
                        <h2 class="text-2xl text-gray-500 font-bold">Update notification</h2>
                    </div>
                    <div class="relative pt-4">
                        <label for="name" class="text-base leading-7 text-blueGray-500">Title</label>
                        <input type="text" id="text" name="title" placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                         class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                    </div>
                    <div class="relative pt-4">
                        <label for="name" class="text-base leading-7 text-blueGray-500">Date</label>
                        <input type="date" id="date" name="date" placeholder="name"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                         class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                    </div>
                    <div class="relative mt-4">
                        <label for="bloodType" class="text-base leading-7 text-blueGray-500">Blood type</label>
                        <select
                            value={bloodType}
                            onChange={(e) => setBloodType(e.target.value)}
                         class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
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
                            <label class="text-base leading-7 text-blueGray-500" for="message">Message </label>
                            <textarea
                             value={message}
                            onChange={(e) => setMessage(e.target.value)}
                             class="w-full h-24 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand" id="description" type="text" name="description" placeholder="Message..." required=""></textarea>
                        </div>
                    </div>
                    <div class="flex items-center w-full pt-4 mb-4">
                        <button onClick={sendDataToAPI} class="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "> Update </button>
                    </div>
                </form>
            </div>
        </>
    )
}
