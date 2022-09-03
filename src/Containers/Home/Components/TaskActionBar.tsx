import {FunctionComponent} from "react";
import {Button} from "../../../Components/Button";
import {BUTTON_KINDS} from "../../../Components/Button/Button";

export const TaskActionBar: FunctionComponent = () => {
    return <div className="flex justify-end">
        <div className="flex w-1/3 mt-6">
            <Button kind={BUTTON_KINDS.ARCHIVE}>Archive</Button>
            <Button kind={BUTTON_KINDS.DELETE}>Delete</Button>
        </div>
    </div>
}