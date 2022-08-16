import React, {ChangeEvent} from "react";

interface InputProps {
    label?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    type?: 'text' | 'password';
    name?: string;
    errorMessage?: string;
    error?: boolean;
}

export const Input: React.FC<InputProps> = ({label, placeholder, onChange, value, type, name, errorMessage, error}) => {
    return <div className='relative'>
        {label && <label className='block'>{label}</label>}
        <input
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}
            name={name}
            className={`
            block
             w-full
              border-slate-300
              hover:border-slate-400
              focus:border-violet-800
              border-2
              border-solid
              rounded-md p-2
              focus:outline-none
              ${error ? ' border-red-600' : 'border-slate-300'}
              `}/>
        {(errorMessage && error) && <p className=' text-red-600'>{errorMessage}</p>}
    </div>
}