import React, {ReactNode} from "react";
import classNames from "classnames";

export enum BUTTON_KINDS {
    DELETE = 'DELETE',
    ARCHIVE = 'ARCHIVE',
    MAIN = 'MAIN'
}

interface ButtonProps {
    children?: ReactNode | string
    onClick?: (e: any) => void;
    disabled?: boolean;
    kind?: keyof typeof BUTTON_KINDS;
}

export const Button: React.FC<ButtonProps> = ({children, onClick, disabled, kind = BUTTON_KINDS.MAIN}) => {
    const btnGroupClasses = classNames(
        'btn-group',
        'pull-right',
        ' disabled:opacity-75',
        ' w-full',
        'text-center',
        ' py-2',
        'rounded-md',
        {
            // main styles
            'bg-purple-600': kind === BUTTON_KINDS.MAIN,
            'hover:bg-purple-700': kind === BUTTON_KINDS.MAIN,
            'text-slate-50': kind === BUTTON_KINDS.MAIN || kind === BUTTON_KINDS.DELETE,

            // delete styles
            'bg-red-600': kind === BUTTON_KINDS.DELETE,
            'hover:bg-red-700': kind === BUTTON_KINDS.DELETE,

            // delete styles
            'bg-gray-200': kind === BUTTON_KINDS.ARCHIVE,
            'hover:bg-gray-300': kind === BUTTON_KINDS.ARCHIVE,
            // 'text-slate-50': kind === BUTTON_KINDS.MAIN
        }
    );
    return <button
        disabled={disabled}
        onClick={(e) => {
            if (!disabled && onClick) {
                onClick(e);
            }
        }}
        className={btnGroupClasses}>{children}</button>
}