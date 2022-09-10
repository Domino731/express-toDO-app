import {OperationInterface, TaskInterface} from "../../../Reducers/user/types";
import {FunctionComponent, useCallback, useMemo, useRef, useState} from "react";
import {Operation} from "./Operation";
import {TaskActionBar} from "./TaskActionBar";
import Checkbox from "../../../Components/ Checkbox";
import {useDispatch, useSelector} from "react-redux";
import {userSelectedTasksSelector} from "../../../Reducers/user/selectors";
import {userChangeSelectedTasks} from "../../../Reducers/user/reducer";
import Status from "../../../Components/Status";
import {STATUS_SIZES} from "../../../Components/Status/Status";
import {Input} from "../../../Components/Input";
import {useOnClickOutside} from "../../../Hooks/useOutsideClick";

interface TaskProps {
    data: TaskInterface;
}

const operationsDummy: Array<OperationInterface> = [{
    title: 'Example 12123123123',
    id: '123'
}, {
    title: 'Example123123123',
    id: '1'
}]

export const Task: FunctionComponent<TaskProps> = ({data}) => {
    // utils init
    const dispatch = useDispatch();
    const ref = useRef(null);

    // selectors
    const userSelectedTasks = useSelector(userSelectedTasksSelector);

    // state
    const [selectedOperations, setSelectedOperations] = useState<Array<string>>([]);
    const [titleInputFlag, setTitleInputFlag] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    // custom hooks
    useOnClickOutside(ref, () => setTitleInputFlag(false))

    // component functions & handlers
    const isOperationChecked = useCallback((id: string) => {
        return selectedOperations.includes(id);
    }, [selectedOperations]);

    const handleToggleIsExpanded = useCallback(() => setIsExpanded(prev => !prev), [])

    const handleChangeSelectedOperations = (id: string) => {
        let selectedOps: Array<string> = [...selectedOperations];
        if (isOperationChecked(id)) {
            selectedOps = selectedOps.filter(el => el !== id);
        } else {
            selectedOps.push(id)
        }
        setSelectedOperations(selectedOps)
    }

    /** check task */
    const handleCheckTask = useCallback(() => {
        let selectedTasks: Array<string> = [...userSelectedTasks];

        if (selectedTasks.includes(data._id)) {
            selectedTasks = selectedTasks.filter(taskId => taskId !== data._id);
        } else {
            selectedTasks.push(data._id);
        }

        dispatch(userChangeSelectedTasks(selectedTasks));
    }, [data._id, dispatch, userSelectedTasks]);

    /* is task checked flag */
    const isTaskChecked = useMemo(() => userSelectedTasks.includes(data._id), [data._id, userSelectedTasks]);

    return <section className="relative mt-8">
        <div className="absolute left-[-20px] top-[7px]">
            <Checkbox onChange={handleCheckTask} checked={isTaskChecked}/>
        </div>
        <div className="bg-slate-100 mt-2 rounded-md border-l-4 border-l-blue-500 pl-2 py-2 pr-4 drop-shadow-md">
            <div onClick={handleToggleIsExpanded}>
                <div className="flex justify-between">
                    <p className="text-medium text-gray-400">Tech</p>
                    <Status status={data.status} size={STATUS_SIZES.MD}/>
                </div>
                <div ref={ref}>
                    {titleInputFlag ? <Input value={data.title}/> :
                        <h2 className='font-medium text-lg mt-1' onDoubleClick={() => setTitleInputFlag(true)}>
                            {data.title}
                        </h2>}
                </div>

                <div className="flex justify-between text-base text-gray-400">
                    <p>0 operations left</p>
                    <p>10 minutes</p>
                </div>
            </div>
            {isExpanded && <>
                <div className="w-full pl-8 mt-4">
                    {operationsDummy.map(operation => <Operation data={operation}
                                                                 checkboxOnChange={() => handleChangeSelectedOperations(operation.id)}
                                                                 checkboxChecked={isOperationChecked(operation.id)}
                    />)}
                </div>
                <TaskActionBar selectedOperations={selectedOperations}/>
            </>}
        </div>

    </section>
}