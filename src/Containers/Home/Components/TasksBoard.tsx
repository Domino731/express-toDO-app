/** Component for user tasks list */
import {useDispatch, useSelector} from "react-redux";
import {userIdSelector} from "../../../Reducers/user/selectors";
import {useEffect} from "react";
import {getTasks} from "../../../Reducers/user/thunks";

export const TasksBoard = () => {
    // custom hooks
    const dispatch = useDispatch();

    // selectors
    const userId = useSelector(userIdSelector);

    // fetch task data on component mount
    useEffect(() => {
        if (userId) {
            // @ts-ignore
            dispatch(getTasks({userId}));
        }
    }, [dispatch, userId])

    return <div>asd</div>
}