import {TASK_STATUSES, TaskStatusesUnion} from "../../Reducers/user/types";

export const getStatusColor = (status: TaskStatusesUnion, prefix: string) => {
    switch (status) {
        case TASK_STATUSES.IN_PROGRESS:
            return `${prefix}-blue-400`;
        case TASK_STATUSES.ARCHIVED:
            return `${prefix}-gray-400`;
        case TASK_STATUSES.WAITING:
            return `${prefix}-orange-600`;
        case TASK_STATUSES.FINISHED:
            return `${prefix}-green-600`;
    }
}