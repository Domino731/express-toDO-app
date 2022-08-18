import React, {useCallback} from "react";
import {Wrapper} from "./Components/Wrapper";
import {Formik, FormikValues} from "formik";
import {Input} from "../../Components/Input";
import {Button} from "../../Components/Button";
import {useDispatch} from "react-redux";
import {signUpUser} from "../../Reducers/user/thunks";
import {SignUpSchema} from "./Schemes";

export const SignUp: React.FC = () => {
    // custom hooks
    const dispatch = useDispatch();

    /** sign up the user */
    const handleSignIn = useCallback((values: FormikValues) => {
        const {email, password} = values;
        // @ts-ignore
        dispatch(signUpUser({email, password}));
    }, [dispatch]);

    return <Wrapper>
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleSignIn}
            validationSchema={SignUpSchema}
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
                    Sign up
                </Button>
            </form>}
        </Formik>
    </Wrapper>
}