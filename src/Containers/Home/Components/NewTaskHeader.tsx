import {TaskDataInterface} from "../../../Reducers/tasks/types";
import {useDispatch, useSelector} from "react-redux";
import {tasksButtonLoaderSelector, tasksDataSelector} from "../../../Reducers/tasks/selectors";
import React, {ChangeEvent, useCallback, useState} from "react";
import {Input} from "../../../Components/Input";
import {TASK_CONFIG} from "../../../const";
import {Button} from "../../../Components/Button";

export const NewTaskHeader: React.FC = () => {
    const dispatch = useDispatch();
    const tasksButtonLoader: boolean = useSelector(tasksButtonLoaderSelector);

    // states
    // holding value from input
    const [inputValue, setInputValue] = useState<string>('');

    /** change inputValue state */
    const handleChangeInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setInputValue(value);
    }, [])

    return <>
        <Input label="Add new task" onChange={handleChangeInputValue} value={inputValue}
               placeholder="Go with a dog"/>
        <span className="block mt-4"/>
        {inputValue.length >= TASK_CONFIG.MIN_LENGTH && <Button disabled={tasksButtonLoader}>Add</Button>}
    </>
}