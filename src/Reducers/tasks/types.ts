export interface TaskDataInterface {
    id: string;
    title: string;
    operations: string[];
}

export enum TASK_TYPES {
    TECH = 'TECH',
    SPORT = 'SPORT',
    HOME = 'HOME',
    STUDY = 'STUDY'
}

export type TaskTypesUnion = keyof typeof TASK_TYPES;