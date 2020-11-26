import React from "react";

export default function Sidebar({children}) {
    return (
      <div className={'sidebar fixed left-0 w-1/5 bg-primary border-r border-primary-500 border-r-solid h-full'}>
          {children}
      </div>
    );
}