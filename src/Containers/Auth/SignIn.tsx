import React from "react";
import {Wrapper} from "./Components/Wrapper";
import {Input} from "../../Components/Input";
import {Button} from "../../Components/Button";

export const SignIn: React.FC = () => {
    return <Wrapper>
        <Input label='Username' placeholder={'user@example.com'}/>
        <span className='block pb-4'/>
        <Input label='Password' type='password'/>
        <span className='block pb-10'/>
        <Button>Sign in</Button>
    </Wrapper>
}