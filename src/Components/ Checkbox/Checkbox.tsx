import {ChangeEventHandler, FunctionComponent} from "react";

interface CheckboxProps {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    checked?: boolean;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({onChange, checked}) => {
    return <div>
        <div className="form-check">
            <input
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox" value="" id="flexCheckIndeterminate" onChange={onChange} checked={checked}/>
        </div>
    </div>
}