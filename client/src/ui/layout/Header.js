import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useOrganization } from "../../services/providers/OrganizationProvider";

export default function Header() {
    const [dropdown, setDropdown] = React.useState(false)
    const [name, setName] = React.useState("");
    const [logo, setLogo] = React.useState("");

    const { createOrg } = useOrganization()

    return (
        <div className="grid grid-cols-12 header">
            <div className="col-span-2 bg-black-500 h-16 header__project">
                <button onClick={() => setDropdown(!dropdown)} className="container px-8 h-16 flex items-center cursor-pointer justify-between">

                    {/* STATIC */}
                    <h2 className="text-white text-xl">Morningtrain</h2>

                    <svg className={"w-4 h-4 header__dropdown-button" + (dropdown ? " is-active" : "")} fill="none" stroke="#8C929D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
 
                </button>

                {/* DROPDOWN */}
                <CSSTransition in={dropdown} timeout={200} classNames="dropdown" unmountOnExit>
                        <div className={"header__dropdown"}>
                            <form onSubmit={e => {
                                e.preventDefault()
                                createOrg({name, logo})
                            }}>
                                <input value={name} type="text" onChange={e => setName(e.target.value)} placeholder="Org name"/>
                                <input value={logo} type="text" onChange={e => setLogo(e.target.value)} placeholder="Logo"/>
                                <button type="submit">Submit org</button>
                            </form>
                        </div>
                </CSSTransition>
            </div>
            <div className="col-span-10 bg-black-400">
                <div className="container px-8 h-16 flex items-center">
                    {/* STATIC */}
                    <a href="#" className="header__back-button flex items-center cursor-pointer text-xl font-semibold text-gray">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#8C929D">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="pl-4">
                            Wordpress Template Theme
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}