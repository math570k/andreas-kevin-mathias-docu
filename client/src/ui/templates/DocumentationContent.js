import React from "react";

export default function DocumentationContent({children}) {
    return (
      <div className={'documentation flex flex-col space-y-4 max-w-90ch prose'}>
          {children}
      </div>
    );
}