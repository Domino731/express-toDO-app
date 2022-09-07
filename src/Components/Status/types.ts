import {TaskStatusesUnion} from "../../Reducers/user/types";

export interface AvailableTypeInterface {
    label: string;
    status: TaskStatusesUnion;
}