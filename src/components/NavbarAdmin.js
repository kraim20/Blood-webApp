import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DropdownAdmin } from "./DropdownAdmin";
import { DropdownCenter } from "./DropdownCenter";
import { DropdownDonor } from "./DropdownDonor";

export const NavbarAdmin = () => {


    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">EasyBD</span>
                </Link>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" class="mr-8 hover:text-gray-900 cursor-pointer">Home</Link>
                    <Link to="/aboutus" class="mr-8 hover:text-gray-900 cursor-pointer">About Us</Link>
                    <Link to="/contactus" class="mr-8 hover:text-gray-900 cursor-pointer">Contact Us</Link>
                    <Link to="/faqs" class="mr-8 hover:text-gray-900 cursor-pointer">FAQs</Link>
                </nav>
                <DropdownAdmin/>
            </div>
        </header>
    );
};