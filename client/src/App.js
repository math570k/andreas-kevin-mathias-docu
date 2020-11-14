import React, { useState } from 'react';
import {useAuth} from "../resources/js/services/contexts/AuthenticationContext";
import AuthenticatedApp from "../resources/js/templates/AuthenticatedApp";
import Header from '../resources/js/templates/Header';
import UnauthenticatedApp from "../resources/js/templates/UnauthenticatedApp";
import "../resources/css/site.css";

const App = () => {
    // const {user} = useAuth();
    const [dropdown, setDropdown] = useState(false)


    return (
        // user ? <AuthenticatedApp/> : <UnauthenticatedApp/>
        <div class="grid grid-cols-12 header">
            <div class="col-span-2 bg-blue-darker h-16">
                <div class="container px-8 h-16 flex items-center cursor-pointer justify-between" >

                    {/* STATIC */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="20" viewBox="0 0 96 20">
                        <text id="Morningtrain" transform="translate(0 15)" fill="#d2d6dc" font-size="14" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">Morningtrain</tspan></text>
                    </svg>
                    <svg class="w-6 h-6" fill="none" stroke="#8C929D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    {/* DROPDOWN */}

                    <div class="header-dropdown" className={dropdown && "is-active"}>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="col-span-10 bg-blue">
                <div class="container px-8 h-16 flex items-center header-back">
                    {/* STATIC */}
                    <a href="/" class="flex items-center">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#8C929D">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <h2 class="cursor-pointer text-xl font-semibold text-gray pl-4 hover:text-white duration-500 ease-in-out">Biggest dick</h2>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default App;