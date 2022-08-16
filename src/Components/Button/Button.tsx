import React, {MouseEventHandler, ReactNode} from "react";

interface ButtonProps {
    children?: ReactNode | string
    onClick?: (e: any) => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({children, onClick, disabled}) => {
    return <button
        disabled={disabled}
        onClick={(e) => {
            if (!disabled && onClick) {
                onClick(e);
            }
        }}
        className='
        disabled:opacity-75
      w-full
      text-center
      bg-purple-600
      hover:bg-purple-700
      text-slate-50
      py-2
      rounded-md
      '>{children}</button>
}