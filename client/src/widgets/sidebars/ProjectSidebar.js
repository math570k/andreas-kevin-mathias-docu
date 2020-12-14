import React from "react";
import Sidebar from "../../ui/layout/Sidebar";
import Folder from "../../ui/icons/Folder";
import {useProject} from "../../services/providers/ProjectProvider";
import {Link, useRouteMatch} from "react-router-dom";
import useModal from "../../hooks/useModal";
import Modal from "../../ui/modal/Modal";
import CreatePage from "../forms/CreatePage";
import PageDraftProvider from "../../services/providers/PageDraftProvider";

// render a single project in the sidebar in it's open state, showing all it's pages.

const NewPage = ({closeModal}) => {
    return (
        <Modal
            close={closeModal}
        >
            <PageDraftProvider>
                <CreatePage closeModal={closeModal} />
            </PageDraftProvider>
        </Modal>
    )
}

export default function ProjectSidebar() {

    // get the currently active project.
    const {project} = useProject();
    const {url} = useRouteMatch();
    const { open, openModal, closeModal } = useModal();


    return (
        <Sidebar>
            <ul>
                <li className={'px-8 py-6 border-b border-primary-500 w-100'} key={project.id}>
                    <div className={'folder flex items-center'}>
                        <Folder color={project.color}/>
                        <h2 className="ml-4">
                            {project.title}
                        </h2>
                    </div>

                    <ul className="pages pl-4 mt-4">
                        {project.pages.length > 0 && project.pages.map((page) => {
                            return (
                                <li className="relative mb-3" key={page.id}>
                                    <Link to={`${url}/${page.id}`}>
                                        <h3 className="pages-item-title text-gray cursor-pointer">{page.title}</h3>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </li>
            </ul>

            <div className={'px-8 py-8'}>
                <button onClick={() => openModal()} className={'button'}>Add Page +</button>
                {open ? (
                    <NewPage closeModal={closeModal} />
                ) : ''}
            </div>
        </Sidebar>
    )
}