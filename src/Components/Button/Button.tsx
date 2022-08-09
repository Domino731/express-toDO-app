import React, {MouseEventHandler, ReactNode} from "react";

interface ButtonProps {
    children?: ReactNode | string
    onClick?: (e: any) => void;
}

export const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return <button
        onClick={onClick}
        className='
      w-full
      text-center
      bg-purple-600
      hover:bg-purple-700
      text-slate-50
      py-2
      rounded-md
      '>{children}</button>
}