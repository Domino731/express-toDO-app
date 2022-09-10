import {FunctionComponent, useCallback, useMemo, useRef, useState} from "react";
import classNames from "classnames";
import {TASK_STATUSES, TaskStatusesUnion} from "../../Reducers/user/types";
import {AvailableStatuses} from "./const";
import {getStatusColor} from "./utilts";
import {useOnClickOutside} from "../../Hooks/useOutsideClick";

export enum STATUS_SIZES {
    MD = "MD",
    SM = "SM"
}

interface StatusProps {
    size?: keyof typeof STATUS_SIZES,
    status: TaskStatusesUnion
}

export const Status: FunctionComponent<StatusProps> = ({size = STATUS_SIZES.MD, status}) => {
    const ref = useRef(null);

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleChangeIsExpanded = useCallback(() => setIsExpanded(prev => !prev), [])

    // hook actions
    useOnClickOutside(ref, () => setIsExpanded(false))

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

    // class name for span (circle element)
    const spanClassName = useMemo(() => classNames(
        'flex',
        'left--6',
        'top-[50%]',
        'bg-blue-500',
        'rounded-2xl',
        ' mr-1',
        {
            'w-2 h-2': size === STATUS_SIZES.MD,
            'w-1.5 h-1.5': size === STATUS_SIZES.SM,
            'bg-gray-400': status === TASK_STATUSES.ARCHIVED,
            'border-solid': status === TASK_STATUSES.ARCHIVED,
            'border-[1px]': status === TASK_STATUSES.ARCHIVED,
            'border-stone-900': status === TASK_STATUSES.ARCHIVED,
        }
    ), [size, status]);

    const label = useMemo(() => {
        switch (status) {
            case TASK_STATUSES.ARCHIVED:
                return 'Archived';
            default:
                return ''
        }
    }, [status])

    return <div className="relative">
        <button onClick={handleChangeIsExpanded}>
            <p className={pClassName}>
                <span className={spanClassName}/>
                {label}
            </p>
        </button>
        {isExpanded && <div ref={ref}
                            className="flex flex-col absolute right-[30px] w-[167px] top-0 left-[100%] bg-slate-100 mt-2 rounded-md drop-shadow-lg py-2">
            {AvailableStatuses.map(({label, status}) => <button
                className={'font-bold text-[14px] border-b-solid border-b-2 border-purple-500'}>{label}</button>)}
        </div>}
    </div>
}