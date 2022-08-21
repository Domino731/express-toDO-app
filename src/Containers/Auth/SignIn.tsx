import React, {useCallback} from "react";
import {Wrapper} from "./Components/Wrapper";
import {Input} from "../../Components/Input";
import {Button} from "../../Components/Button";
import {Formik, FormikValues} from 'formik';
import {useDispatch} from "react-redux";
import {signInUser} from "../../Reducers/user/thunks";
import {SignInSchema} from "./Schemes";
import {useNavigate} from "react-router-dom";


export const SignIn: React.FC = () => {
    // hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /** sign up the user */
    const handleSignIn = useCallback((values: FormikValues) => {
        const {email, password} = values;
        const onSuccess = navigate('/');
        // @ts-ignore
        dispatch(signInUser({email, password, onSuccess}));
    }, [dispatch, navigate]);

    return <Wrapper>
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleSignIn}
            validationSchema={SignInSchema}
        >
            {({
                  values,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched
              }) => <form>
                <Input
                    label='email'
                    name='email'
                    placeholder={'user@example.com'}
                    value={values.email}
                    onChange={handleChange}
                    error={Boolean(errors.email && touched.email)}
                    errorMessage={errors.email}
                />
                <span className='block pb-4'/>
                <Input
                    label='Password'
                    name='password'
                    placeholder="***********"
                    type='password'
                    value={values.password}
                    onChange={handleChange}
                    error={Boolean(errors.password && touched.password)}
                    errorMessage={errors.password}
                />
                <span className='block pb-10'/>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                    Sign in
                </Button>
            </form>}
        </Formik>
    </Wrapper>
}