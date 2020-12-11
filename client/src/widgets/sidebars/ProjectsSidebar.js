import React, { useEffect, useState } from "react";
import Sidebar from "../../ui/layout/Sidebar";
import Folder from "../../ui/icons/Folder"
import {useProjects} from "../../services/providers/ProjectsProvider";
import {Link, useRouteMatch} from "react-router-dom";
import useModal from "../../hooks/useModal";
import Modal from "../../ui/modal/Modal";
import CreateProject from "../forms/CreateProject";
import ProjectDraftProvider, {useProjectDraft} from "../../services/providers/ProjectDraftProvider";

const NewProject = ({closeModal}) => {
    return (
        <Modal
            close={closeModal}
        >
            <ProjectDraftProvider>
                <CreateProject closeModal={closeModal} />
            </ProjectDraftProvider>
        </Modal>
    )
}

export default function DocumentationOverview() {
    const {projects} = useProjects();
    let {url} = useRouteMatch();
    const { open, openModal, closeModal } = useModal();

    return (
        <Sidebar>
            <ul>
                { projects.map((project) => (
                    <li className={'px-8 py-6 border-b border-primary-500 w-100'} key={project.id}>
                        <Link to={`${url}/${project.id}`}>
                            <div className={'folder flex items-center'}>
                                <Folder color={project.color}/>
                                <h2 className="ml-4">
                                    {project.title}
                                </h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="p-8">
                <button onClick={() => openModal()} className={"button-blue"}>Create project +</button>
                {open ? (
                    <NewProject closeModal={closeModal} />
                ) : ''}
            </div>
        </Sidebar>
    )
}
