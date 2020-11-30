import React from "react";
import UnauthenticatedRoutes from "../../routes/UnauthenticatedRoutes";

export default function UnauthenticatedApp(props) {
    return (
        <div>
            {/*Unauthenticated App*/}
            <main className={'min-h-screen relative bg-primary flex'}>
               <UnauthenticatedRoutes/>
            </main>
        </div>
    )
}