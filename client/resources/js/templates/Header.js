import React, { useState } from "react";

export default function Header(props) {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className="grid grid-cols-12 header">
            <div className="col-span-2 bg-blue-darker h-16">
                <div className="container px-8 h-16 flex items-center cursor-pointer justify-between" >

                    {/* STATIC */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="20" viewBox="0 0 96 20">
                        <text id="Morningtrain" transform="translate(0 15)" fill="#d2d6dc" fontSize="14" fontFamily="Poppins-Bold, Poppins" fontWeight="700"><tspan x="0" y="0">Morningtrain</tspan></text>
                    </svg>
                    <svg className="w-6 h-6" fill="none" stroke="#8C929D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    {/* DROPDOWN */}
                    <div className={"header-dropdown" + (dropdown ? " is-active" : "")}>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="col-span-10 bg-blue">
                <div className="container px-8 h-16 flex items-center header-back">
                    {/* STATIC */}
                    <a href="/" className="flex items-center">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#8C929D">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <h2 className="cursor-pointer text-xl font-semibold text-gray pl-4 hover:text-white duration-500 ease-in-out">Biggest dick</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}