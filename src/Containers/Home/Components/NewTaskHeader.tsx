import {useDispatch, useSelector} from "react-redux";
import React, {ChangeEvent, useCallback, useState} from "react";
import {Input} from "../../../Components/Input";
import {TASK_CONFIG} from "../../../const";
import {Button} from "../../../Components/Button";
import {addNewTaskLoaderSelector, userIdSelector} from "../../../Reducers/user/selectors";
import {addNewTask} from "../../../Reducers/user/thunks";

export const NewTaskHeader: React.FC = () => {
    const dispatch = useDispatch();

    // selectors
    const addNewTaskLoader = useSelector(addNewTaskLoaderSelector);
    const userId: string | null = useSelector(userIdSelector);

    // states
    // holding value from input
    const [inputValue, setInputValue] = useState<string>('');

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

    return <>
        <Input label="Add new task" onChange={handleChangeInputValue} value={inputValue}
               placeholder="Go with a dog"/>
        <span className="block mt-4"/>
        {inputValue.length >= TASK_CONFIG.MIN_LENGTH &&
            <Button disabled={addNewTaskLoader} onClick={handleAddNewTask}>Add</Button>}
    </>
}