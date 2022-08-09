import React from "react";
import {Wrapper} from "./Components/Wrapper";
import {Formik} from "formik";
import {Input} from "../../Components/Input";
import {Button} from "../../Components/Button";

export const SignUp: React.FC = () => {
    return <Wrapper>
        <Formik initialValues={{username: '', password: '', passwordRepeat: ''}} onSubmit={v => console.log(v)}>
            {({
                  values,
                  handleChange,
                  handleSubmit,
              }) => <form>
                <Input label='Username' name='username' placeholder={'user@example.com'} value={values.username}
                       onChange={handleChange}/>
                <span className='block pb-4'/>
                <Input label='Password' name='password' placeholder="***********" type='password'
                       value={values.password}
                       onChange={handleChange}/>
                <span className='block pb-4'/>
                <Input label='Repeat password' name='passwordRepeat' placeholder="***********" type='password'
                       value={values.passwordRepeat}
                       onChange={handleChange}/>
                <span className='block pb-10'/>
                <Button onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>Sign up</Button>
            </form>}
        </Formik>
    </Wrapper>
}