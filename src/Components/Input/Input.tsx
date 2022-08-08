import React, {ChangeEvent} from "react";

interface InputProps {
    label?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    type?: 'text' | 'password'
}

export const Input: React.FC<InputProps> = ({label, placeholder, onChange, value, type}) => {
    return <div className='bg-amber-50' style={{background: 'white'}}>
        {label && <label className='block'>{label}</label>}
        <input
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}
            className='block
              w-full
              border-slate-300
              hover:border-slate-400
              focus:border-violet-800
              border-2
              border-solid
              rounded-md p-2
              focus:outline-none
              '/>
    </div>
}