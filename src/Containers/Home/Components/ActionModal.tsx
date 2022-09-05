/* The box which is visible on the right bottom, it is used to remove all archive selected tasks */
import {Button} from "../../../Components/Button";
import {BUTTON_KINDS} from "../../../Components/Button/Button";
import {FunctionComponent, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSelectedTasksSelector} from "../../../Reducers/user/selectors";
import {deleteTasks} from "../../../Reducers/user/thunks";

export const ActionModal: FunctionComponent = () => {
    const dispatch = useDispatch();

    const userSelectedTasks = useSelector(userSelectedTasksSelector);

    // @ts-ignore
    const handleDeleteTasks = useCallback(() => dispatch(deleteTasks()), []);

    if (userSelectedTasks.length === 0) {
        return <span/>
    }


    return <section className="absolute w-1/5 right-[30px] bottom-[20px] drop-shadow-lg rounded-md bg-gray-50 p-2">
        <h2 className="text-center font-bold">What you wanna do with {userSelectedTasks.length} selected
            task{userSelectedTasks.length === 1 ? '' : 's'}?</h2>
        <div className="button-union mt-3.5">
            <Button kind={BUTTON_KINDS.ARCHIVE}>Archive</Button>
            <Button kind={BUTTON_KINDS.DELETE} onClick={handleDeleteTasks}>DELETE</Button>
        </div>
    </section>
}