import React from "react";
import * as Template from "../../ui/templates";
import {useAuth} from "../../services/providers/AuthProvider";
import * as Icon from "../../ui/icons";
import {Link} from "react-router-dom";

export default function NoOrganization() {

    const {logout} = useAuth();

    return (
        <Template.FullPage className={'items-center justify-center'}>
            <div className={'flex flex-col items-center justify-center h-full w-full space-y-10'}>

                <div className={'flex flex-col border border-primary-500 w-2/5 bg-white rounded'}>
                    <form
                        className={'flex flex-col space-y-8 p-10'}
                        onSubmit={e => {
                            e.preventDefault()
                        }}>

                        <div> You are currently not a part of an Organization. Either Contact an admin of an existing Organization or create your own</div>

                        <label className={'flex flex-col space-y-2'}>
                            <span>Name of Organization</span>
                            <input
                                className={'input'}

                                type="text"

                            />
                        </label>

                        <button className={'button'} type={'submit'}>
                            Create Organization
                        </button>
                    </form>
                    <div className={'border-t border-primary-500 p-10 bg-primary'}>
                        <button className={'button'} onClick={() => logout()}>Logout</button>
                    </div>
                </div>
            </div>
        </Template.FullPage>
    )
}