import React from "react";

export default function DocumentationContent({children}) {
    return (
      <div className={'documentation max-w-90ch prose'}>
          {children}
      </div>
    );
}