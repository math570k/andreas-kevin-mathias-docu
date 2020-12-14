import React from "react";
import { usePageDraft } from "../../services/providers/PageDraftProvider";

export default function CreatePage({closeModal}) {
    const {form, setForm, createPageDraft} = usePageDraft();

    return (
        <>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col space-y-8">
                    <form
                        className={'flex flex-col space-y-8 p-10'}
                    >
                        <label className={'flex flex-col space-y-2'}>
                            <span>Title</span>
                            <input
                                className={'input w-full'}
                                value={form.title}
                                type="text"
                                placeholder="Project title"
                                onChange={e => setForm(prevState => {
                                    return {...prevState, title: e.target.value}
                                })}
                            />
                        </label>
                        
                        <label className={'flex flex-col space-y-2'}>
                            <span>Content</span>
                            <textarea
                                className={'input'}
                                value={form.content}
                                placeholder="Project content"
                                key="project-content"
                                type="text"
                                onChange={e => setForm(prevState => {return {...prevState, content: e.target.value}})}
                            />
                        </label>
                    </form>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-primary-500">
                <button 
                    onClick={() => {createPageDraft(form)}}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-300 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                    Suggest New Project
                </button>
                <button onClick={() => closeModal()} type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                </button>
            </div>
        </>
    )
}