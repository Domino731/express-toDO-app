import React from "react";

export const Wrapper: React.FC<{ children: any }> = ({children}) => {
    return <div className='w-500'>
        <h1 className='text-5xl font-bold text-center'>Sign in</h1>
        <h2 className='text-xl font-medium text-center'>or start
            <span className='text-purple-700'>{" "}14 days free trail</span>
        </h2>
        <div className="shadow-2xl px-6 py-8 rounded-md">
            {children}
        </div>

    </div>
}