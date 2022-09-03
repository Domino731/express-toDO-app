import {FunctionComponent, useMemo} from "react";
import classNames from "classnames";

export enum STATUS_SIZES {
    MD = "LG",
    SM = "SM"
}

interface StatusProps {
    size?: keyof typeof STATUS_SIZES
}

export const Status: FunctionComponent<StatusProps> = ({size = STATUS_SIZES.MD}) => {
    // class name for paragraph
    const pClassName = useMemo(() => classNames(
        'text-medium',
        'text-gray-400',
        'flex',
        'items-center',
        {
            'text-medium': size === STATUS_SIZES.MD,
            'text-sm': size === STATUS_SIZES.SM
        }
    ), [size]);

    // class name for span
    const spanClassName = useMemo(() => classNames(
        'block',
        'left--6',
        'top-[50%]',
        'bg-blue-500',
        'rounded-2xl',
        ' mr-1',
        {
            'w-2 h-2': size === STATUS_SIZES.MD,
            'w-1.5 h-1.5': size === STATUS_SIZES.SM
        }
    ), [size]);

    return <p className={pClassName}>
        <span className={spanClassName}/>
        In progress
    </p>
}