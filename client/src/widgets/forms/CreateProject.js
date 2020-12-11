import React, { useState, useEffect } from "react";
import { BlockPicker } from 'react-color';
import {useProjectDraft} from "../../services/providers/ProjectDraftProvider";

export default function CreateProject({closeModal}) {
    const [picker, setPicker] = useState(false);
    const {form, setForm, createProjectDraft} = useProjectDraft();

    return (
        <>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col space-y-8">
                    <form
                        className={'flex flex-col space-y-8 p-10'}
                    >
                        <label className={'flex flex-col space-y-2'}>
                            <span>Title</span>
                            <div className={'flex w-full items-center'}>
                                <input
                                    className={'input w-full'}
                                    value={form.title}
                                    type="text"
                                    placeholder="Project title"
                                    onChange={e => setForm(prevState => {
                                        return {...prevState, title: e.target.value}
                                    })}
                                />
                                <div className="relative ml-4">
                                    <div className={'w-10 h-10 block border border-primary-500 p-1 rounded cursor-pointer'} onClick={(e) => { e.preventDefault(); setPicker(true); }}>
                                        <div className={'w-full h-full rounded'} style={{backgroundColor: form.color}}></div>
                                    </div>
                                    {picker ? (
                                        <div className={'absolute top-full left-0 mt-2 transform -translate-x-1/2 ml-5'}>
                                            <BlockPicker
                                                color={form.color}
                                                onChangeComplete={ (color) => { setForm(prevState => {return {...prevState, color: color.hex}}); setPicker(false); } }
                                                onSwatchHover={ (color) => setForm(prevState => {return {...prevState, color: color.hex}}) }
                                            />
                                        </div>
                                    ) : ''}
                                </div>
                            </div>
                        </label>
                        <label className={'flex flex-col space-y-2'}>
                            <span>Description</span>
                            <input
                                className={'input'}
                                placeholder="Project description"
                                value={form.description}
                                key="project-description"
                                type="text"
                                onChange={e => setForm(prevState => {return {...prevState, description: e.target.value}})}
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
                    onClick={() => {createProjectDraft(form)}}
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