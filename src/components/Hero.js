import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Wanna be a hero ?
                        <br class="hidden lg:inline-block"/>Many lives depend on people as you
                    </h1>
                    <p class="mb-8 leading-relaxed">By joining us, you are not only giving blood. You are one of our many heros, who are ready to do what it took to make life easier for those who're suffering and need help.</p>
                    <div class="flex justify-center">
                        <Link to="/signin">
                        <button  class="inline-flex text-white bg-pink-500 border-0 py-2 px-20  focus:outline-none hover:bg-pink-600 rounded text-lg">Become a hero </button>
                        </Link>
                    </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1016&q=80"/>
                    </div>
                </div>
            </section>
        </>
    );
};
