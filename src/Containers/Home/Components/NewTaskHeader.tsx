import {useDispatch, useSelector} from "react-redux";
import React, {ChangeEvent, useCallback, useMemo, useState} from "react";
import {Input} from "../../../Components/Input";
import {TASK_CONFIG} from "../../../const";
import {Button} from "../../../Components/Button";
import {addNewTaskLoaderSelector, userIdSelector} from "../../../Reducers/user/selectors";
import {addNewTask} from "../../../Reducers/user/thunks";
import {taskTypes} from "../const";
import {TASK_TYPES, TaskTypesUnion} from "../../../Reducers/tasks/types";
import classNames from "classnames";
import {Datepicker} from "../../../Components/Input/Datepicker";

export const NewTaskHeader: React.FC = () => {
    const dispatch = useDispatch();

    // selectors
    const addNewTaskLoader = useSelector(addNewTaskLoaderSelector);
    const userId: string | null = useSelector(userIdSelector);

    // states
    // holding value from input
    const [inputValue, setInputValue] = useState<string>('');
    // selected task type
    const [taskType, setTaskType] = useState<TaskTypesUnion>(TASK_TYPES.TECH);

    /** change inputValue state */
    const handleChangeInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setInputValue(value);
    }, []);

    /** add new task */
    const handleAddNewTask = useCallback(() => {
        if (userId) {
            const onSuccess = () => setInputValue('');

            // @ts-ignore
            dispatch(addNewTask({title: inputValue, userId, onSuccess}));
        }
    }, [dispatch, inputValue, userId]);

    /** change task type */
    const handleChangeTaskType = useCallback((type: TaskTypesUnion) => setTaskType(type), [])

    const taskTypeButtonClassName = useCallback((color: string, type: TaskTypesUnion) => classNames(
        color,
        'text-white',
        "font-bold",
        "py-1",
        "px-2",
        "rounded-md",
        "mr-2",
        "hover:opacity-75",
        "relative",
        {
            'after:block': taskType === type,
            'after:bottom-[-7px]': taskType === type,
            'after:left-[0px]': taskType === type,
            'after:w-full': taskType === type,
            'after:absolute': taskType === type,
            'after:h-[3px]': taskType === type,
            'after:bg-purple-700': taskType === type,
        }
    ), [taskType])

    return <>
        <Input label="Add new task" onChange={handleChangeInputValue} value={inputValue}
               placeholder="Go with a dog"/>

        {/*chose the task type */}
        <div className="block mt-2">
            <p>Type</p>
            {taskTypes.map(({label, color, key}) => <button
                onClick={() => handleChangeTaskType(key)}
                className={taskTypeButtonClassName(color, key)}>{label}</button>)}
        </div>

        {/*estimate task*/}
        <div className="block mt-4">
            <p>Estimate</p>
            <div className="w-[200px]">
                <Input/>
            </div>
            <div>
                {/*<Datepicker/>*/}
            </div>
        </div>

        <span className="block mt-4"/>
        {inputValue.length >= TASK_CONFIG.MIN_LENGTH &&
            <Button disabled={addNewTaskLoader} onClick={handleAddNewTask}>Add</Button>}
    </>
}