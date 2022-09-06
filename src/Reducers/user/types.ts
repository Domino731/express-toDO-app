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
    CREATED = 'CREATED',
    WAITING = 'WAITING'
}

export type TaskStatusesUnion = keyof typeof TASK_STATUSES;