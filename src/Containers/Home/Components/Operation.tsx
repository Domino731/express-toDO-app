import {FunctionComponent} from "react";
import {OperationInterface} from "../../../Reducers/user/types";
import Checkbox from "../../../Components/ Checkbox";

interface OperationProps {
    data: OperationInterface;
}

export const Operation: FunctionComponent<OperationProps> = ({data}) => {
    return <div>
        <Checkbox checked={false}/>
        {data.title}
    </div>
}