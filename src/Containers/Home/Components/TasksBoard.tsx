/** Component for user tasks list */
import {useDispatch, useSelector} from "react-redux";
import {userIdSelector, userTasksSelector} from "../../../Reducers/user/selectors";
import {useEffect} from "react";
import {getTasks} from "../../../Reducers/user/thunks";
import {Task} from "./Task";

export const TasksBoard = () => {
    // custom hooks
    const dispatch = useDispatch();

    // selectors
    const userId = useSelector(userIdSelector);
    const userTasks = useSelector(userTasksSelector);

    // fetch task data on component mount
    useEffect(() => {
        if (userId) {
            // @ts-ignore
            dispatch(getTasks({userId}));
        }
    }, [dispatch, userId])

    useEffect(() => {
        console.log(userTasks);
    }, [userTasks])

    return <div>
        <span className="block w-full border-t-2 border-gray-200"/>
        {userTasks.map(task => <Task data={task} key={task.title}/>)}
    </div>
}