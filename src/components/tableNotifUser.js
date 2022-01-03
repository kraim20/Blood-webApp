import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function TableNotifUser() {

    let U = JSON.parse(localStorage.getItem("User"));

    return (
        <>
            <div class="flex items-start justify-center min-h-screen bg-white py-12">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible">
                        <div class="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
                            <h2 class="text-2xl text-gray-500 font-bold">Notification</h2>

                        </div>
                        <table class="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead class="bg-pink-500 text-white">
                                <tr>
                                    <th class="px-12 py-3">Title</th>
                                    <th class="px-12 text-left">Date</th>
                                    <th class="px-12 text-left">Blood Type</th>
                                    <th class="px-12 text-left">Message</th>
                                    <th class="px-12 text-left">Analyze</th>
                                </tr>
                            </thead>
                            
                            {
                                U.annonces.map((data, index) => {
                                    return (
                                        <tbody>

                                            <tr class="bg-gray-200 lg:text-black">
                                                <td class="px-12 py-3  font-medium capitalize">{data.id}</td>
                                                <td class="px-12">{data.datelimite.split('T')[0]}</td>

                                                <td class="px-12 uppercase">{data.message}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                           
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
