import React from "react";
import {Wrapper} from "./Components/Wrapper";
import {Input} from "../../Components/Input";
import {Button} from "../../Components/Button";
import {Formik} from 'formik';

export const SignIn: React.FC = () => {
    return <Wrapper>
        <Formik initialValues={{username: '', password: ''}} onSubmit={v => console.log(v)}>
            {({
                  values,
                  handleChange,
                  handleSubmit,
              }) => <form>
                <Input label='Username' name='username' placeholder={'user@example.com'} value={values.username}
                       onChange={handleChange}/>
                <span className='block pb-4'/>
                <Input label='Password' name='password' type='password' value={values.password}
                       onChange={handleChange}/>
                <span className='block pb-10'/>
                <Button onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>Sign in</Button>
            </form>}
        </Formik>
    </Wrapper>
}