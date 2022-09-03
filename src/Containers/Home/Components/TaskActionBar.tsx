import {FunctionComponent, useMemo} from "react";
import {Button} from "../../../Components/Button";
import {BUTTON_KINDS} from "../../../Components/Button/Button";
import classNames from "classnames";

interface TaskActionBarProps {
    selectedOperations: Array<string>
}

export const TaskActionBar: FunctionComponent<TaskActionBarProps> = ({selectedOperations}) => {
    const buttonsWrapperClassName = useMemo(() => classNames(
        'flex',
        ' w-1/3',
        'mt-6',
        {
            'button-union': selectedOperations.length !== 0
        }
    ), [selectedOperations.length])

    return <div className="flex justify-end">
        <div className={buttonsWrapperClassName}>
            {selectedOperations.length === 0 ?
                <Button kind={BUTTON_KINDS.MAIN}>Add operation</Button> :
                <>
                    <Button kind={BUTTON_KINDS.ARCHIVE}>Archive</Button>
                    <Button kind={BUTTON_KINDS.DELETE}>Delete</Button>
                </>
            }
        </div>
    </div>
}