import React from "react";
import {Wrapper} from "./Components/Wrapper";
import {Input} from "../../Components/Input";

export const SignIn: React.FC = () => {
    return <Wrapper>
        <Input label='Username' placeholder={'user@example.com'}/>
        <span className='block pb-4'/>
        <Input label='Password' type='password'/>
    </Wrapper>
}