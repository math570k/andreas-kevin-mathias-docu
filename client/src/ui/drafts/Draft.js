import React from "react";
import { useDrafts } from "../../services/providers/DraftsProvider";

export default function Draft({draft}) {
    const {approveDraft, removeDraft} = useDrafts();

    return (
        <div className="bg-white mb-8 w-full shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center">
                    <span className="text-xs rounded-full uppercase px-3 mr-1 bg-green-300 text-white p-2 rounded leading-none flex items-center">
                        {draft.action}
                    </span>
                    <h3 className="text-xl capitalize leading-6 font-medium text-gray-900">
                        {draft.type}
                    </h3>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            User
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {draft.userId}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Content
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {draft.content.content}
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Description
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {draft.content.description}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Title
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {draft.content.title}
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Color
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <div className="rounded-full h-6 w-6" style={{backgroundColor: draft.content.color}}></div>
                        </dd>
                    </div>
                </dl>
            </div>
            
            <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
                <button
                    onClick={() => approveDraft(draft._id)}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-300 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 sm:w-auto sm:text-sm"
                >
                    Approve
                </button>
                <button type="button"
                    onClick={() => removeDraft(draft._id)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-300 text-base font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Remove
                </button>
            </div>
        </div>
    )
}