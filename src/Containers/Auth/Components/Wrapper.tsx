import React from "react";

export const Wrapper: React.FC<{ children: any }> = ({children}) => {
    return <div className='bg-slate-100 w-204'>{children}</div>
}