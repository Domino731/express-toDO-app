import React, {useCallback} from "react";
import {Wrapper} from "./Components/Wrapper";
import {Input} from "../../Components/Input";
import {Button} from "../../Components/Button";
import {Formik, FormikValues} from 'formik';

export const SignIn: React.FC = () => {

    const handleSignIn = useCallback((values: FormikValues) => {
        const {username, password} = values;
        fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: username, password})
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, []);

    return <Wrapper>
        <Formik initialValues={{username: '', password: ''}} onSubmit={handleSignIn}>
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
                <span className='block pb-10'/>
                <Button onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>Sign in</Button>
            </form>}
        </Formik>
    </Wrapper>
}