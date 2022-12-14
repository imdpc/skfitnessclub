import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center order-first">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SKFITNESS</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800 cursor-pointer">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                            <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
                                    <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-3xl" />
                                </div>
                                <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-3xl">Button</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col justify-between">

                        <p class="text-sm text-gray-500  sm:mt-0 mt-4">?? Copyright 2022. All Rights Reserved
                        </p>
                        <p class="text-sm text-gray-500">
                            <a href="/" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank"> Designed & Developed By:Akash & Prasad</a>
                        </p>

                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer