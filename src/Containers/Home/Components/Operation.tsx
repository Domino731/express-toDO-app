import {ChangeEventHandler, FunctionComponent} from "react";
import {OperationInterface} from "../../../Reducers/user/types";
import Checkbox from "../../../Components/ Checkbox";
import Divider from "../../../Components/Divider";
import Status from "../../../Components/Status";
import {STATUS_SIZES} from "../../../Components/Status/Status";

interface OperationProps {
    data: OperationInterface;
    checkboxOnChange: ChangeEventHandler<HTMLInputElement>;
    checkboxChecked: boolean;
}

export const Operation: FunctionComponent<OperationProps> = ({data, checkboxOnChange, checkboxChecked}) => {
    return <div className="py-2">
        <Divider/>
        <div className="flex justify-between">
            <div className="w-[80%]">
                <Checkbox checked={checkboxChecked} onChange={checkboxOnChange}/>
                {data.title}
            </div>

            <Status size={STATUS_SIZES.SM}/>
        </div>

    </div>
}