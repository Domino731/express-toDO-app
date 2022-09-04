/* The box which is visible on the right bottom, it is used to remove all archive selected tasks */
import {Button} from "../../../Components/Button";
import {BUTTON_KINDS} from "../../../Components/Button/Button";
import {FunctionComponent} from "react";
import {useSelector} from "react-redux";
import {userSelectedTasksSelector} from "../../../Reducers/user/selectors";

export const ActionModal: FunctionComponent = () => {
    const userSelectedTasks = useSelector(userSelectedTasksSelector);
    
    if (userSelectedTasks.length === 0) {
        return <span/>
    }
    return <section className="absolute w-1/5 right-[30px] bottom-[20px] drop-shadow-lg rounded-md bg-gray-50 p-2">
        <h2 className="text-center font-bold">What you wanna do with {userSelectedTasks.length} selected tasks?</h2>
        <div className="button-union mt-3.5">
            <Button kind={BUTTON_KINDS.ARCHIVE}>Archive</Button>
            <Button kind={BUTTON_KINDS.DELETE}>DELETE</Button>
        </div>
    </section>
}