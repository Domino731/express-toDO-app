import {TASK_TYPES, TaskTypesUnion} from "../../Reducers/tasks/types";

interface TaskType {
    label: string;
    color: string;
    key: TaskTypesUnion
}

export const taskTypes: Array<TaskType> = [
    {
        label: 'Tech',
        color: 'bg-blue-600',
        key: TASK_TYPES.TECH
    },
    {
        label: 'Sport',
        color: 'bg-fuchsia-600',
        key: TASK_TYPES.SPORT
    },
    {
        label: 'Home',
        color: 'bg-rose-600',
        key: TASK_TYPES.HOME
    },
    {
        label: 'Study',
        color: 'bg-green-600',
        key: TASK_TYPES.STUDY
    }
]