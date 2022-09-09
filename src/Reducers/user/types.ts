export interface TaskInterface {
    title: string;
    createdAt: Date;
    status: TaskStatusesUnion;
    _id: string;
}

export interface OperationInterface {
    id: string,
    title: string;
}

// ENUM
export enum TASK_STATUSES {
    ARCHIVED = 'ARCHIVED',
    WAITING = 'WAITING',
    FINISHED = 'FINISHED',
    IN_PROGRESS = 'IN_PROGRESS',
    BLOCKED = 'BLOCKED'
}

export type TaskStatusesUnion = keyof typeof TASK_STATUSES;