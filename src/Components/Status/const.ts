import {AvailableTypeInterface} from "./types";
import {TASK_STATUSES} from "../../Reducers/user/types";

export const AvailableStatuses: Array<AvailableTypeInterface> = [
    {
        label: 'Waiting',
        status: TASK_STATUSES.WAITING
    },
    {
        label: 'Archived',
        status: TASK_STATUSES.ARCHIVED
    },
    {
        label: 'In progress',
        status: TASK_STATUSES.IN_PROGRESS
    },


]