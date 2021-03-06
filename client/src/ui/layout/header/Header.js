import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useAuth } from "../../../services/providers/AuthProvider";
import { useOrganization } from "../../../services/providers/OrganizationProvider";
import Dropdown from "./Dropdown";

export default function Header() {
    const { logout } = useAuth();
    const [ dropdown, setDropdown ] = React.useState(false)
    const { activeOrganization, activeProject } = useOrganization();
    const {admin} = useAuth();

    const onRouteClick = () => {
        setDropdown(false);
    }

    const isAdmin = () => {
        return admin.includes(activeOrganization.id);
    }

    return (
        <header className="header fixed w-full flex left-0 top-0 z-40">
            <div className="w-1/4 bg-black-500 h-16 header__project">
                <button onClick={() => setDropdown(!dropdown)} className="bg-transparent outline-none focus:outline-none border-none px-8 h-16 flex items-center cursor-pointer justify-between space-x-2 block w-full">
                    <h2 className="text-white text-xl">{activeOrganization && activeOrganization.name}</h2>
                    <svg className={"w-4 h-4 header__dropdown-button" + (dropdown ? " is-active" : "")} fill="none" stroke="#8C929D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                <CSSTransition in={dropdown} timeout={500} classNames="dropdown" unmountOnExit>
                    <Dropdown onRouteClick={() => {onRouteClick()}} dropdown={dropdown} setDropdown={setDropdown} />
                </CSSTransition>
            </div>
            <div className="w-full bg-black-400">
                <div className="container px-12 h-16 flex items-center justify-between">
                    <a href="#" className="header__back-button flex items-center cursor-pointer text-xl font-semibold text-gray">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#8C929D">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="pl-4 text-gray-500">
                            { activeProject ? activeProject.title : "No project selected" }
                        </span>
                    </a>
                    <div>
                        {isAdmin() ? (
                            <Link className={'text-white'} to={`/${activeOrganization.id}/actions`}>Actions</Link>
                        ) : ''}
                        <button className={'ml-4 text-white'} onClick={() => logout()}>logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
r
}