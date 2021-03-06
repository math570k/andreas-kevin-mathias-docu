import React from "react";

import Portal from "../../Portal";

export default function Modal({ children, close, buttons }) {
    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) close();
    }

    return (
        <Portal>
            <div className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={(e) => handleOutsideClick(e)}></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true">&#8203;</span>
                    <div
                        className="inline-block border border-primary-500 align-bottom bg-white rounded-md text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-90ch sm:w-full"
                        role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
