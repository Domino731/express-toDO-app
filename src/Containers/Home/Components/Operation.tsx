import {ChangeEventHandler, FunctionComponent} from "react";
import {OperationInterface} from "../../../Reducers/user/types";
import Checkbox from "../../../Components/ Checkbox";
import Divider from "../../../Components/Divider";

interface OperationProps {
    data: OperationInterface;
    checkboxOnChange: ChangeEventHandler<HTMLInputElement>;
    checkboxChecked: boolean;
}

export const Operation: FunctionComponent<OperationProps> = ({data, checkboxOnChange, checkboxChecked}) => {
    return <div className="py-2">
        <Divider/>
        <Checkbox checked={checkboxChecked} onChange={checkboxOnChange}/>
        {data.title}
    </div>
}