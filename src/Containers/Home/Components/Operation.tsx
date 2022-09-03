import {FunctionComponent} from "react";
import {OperationInterface} from "../../../Reducers/user/types";

interface OperationProps {
    data: OperationInterface;
}

export const Operation: FunctionComponent<OperationProps> = ({data}) => {
    return <div>
        {data.title}
    </div>
}