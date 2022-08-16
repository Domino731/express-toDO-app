import React, {useCallback} from "react";
import {Wrapper} from "./Components/Wrapper";
import {Input} from "../../Components/Input";
import {Button} from "../../Components/Button";
import {Formik, FormikValues} from 'formik';
import {apiRequest} from "../../api/methods";
import {useDispatch} from "react-redux";
import {signUpUser} from "../../Reducers/user/thunks";

export const SignIn: React.FC = () => {
    // custom hooks
    const dispatch = useDispatch();

    /** sign up the user */
    const handleSignIn = useCallback((values: FormikValues) => {
        const {username, password} = values;
        // @ts-ignore
        dispatch(signUpUser({email: username, password}));
    }, [dispatch]);

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
                <Button
                    disabled
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>Sign in</Button>
            </form>}
        </Formik>
    </Wrapper>
}