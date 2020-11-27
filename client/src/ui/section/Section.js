import React, {useState} from "react";
import { PencilAlt } from "heroicons-react";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";
import MarkdownRender from "../markdown/MarkdownRender";
import MarkdownEditor from "../markdown/MarkdownEditor";

export default function Section({children, markdown}) {
    const [hover, setHover] = useState(true);
    const { open, openModal, closeModal } = useModal();

    return (
        <div className={"relative mb-12"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover ? (<button onClick={() => openModal()} className={"absolute z-20 top-2 right-0 bg-transparent border-0 cursor-pointer block text-gray-500 focus:outline-none"}><PencilAlt size={20} /></button>) : ''}
            {open ? (
                <Modal
                    close={closeModal}
                    buttons={() => (
                        <>
                            <button type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-300 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Suggest Edit
                            </button>
                            <button onClick={() => closeModal()} type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                            </button>
                        </>
                    )}
                >
                    <div className="flex w-full">
                        <div className="w-1/2">
                            <MarkdownRender markdown={markdown} />
                        </div>
                        <div className="w-1/2">
                            <MarkdownEditor markdown={markdown} />
                        </div>
                    </div>
                </Modal>
            ) : null}
            {children}
        </div>
    )
}
