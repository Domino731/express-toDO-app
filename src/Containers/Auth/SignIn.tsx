import React, {useCallback, useEffect} from "react";
import {Wrapper} from "./Components/Wrapper";
import {Input} from "../../Components/Input";
import {Button} from "../../Components/Button";
import {Formik, FormikValues} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {signInUser} from "../../Reducers/user/thunks";
import {SignInSchema} from "./Schemes";
import {Link, useNavigate} from "react-router-dom";
import {userIsLoggedSelector} from "../../Reducers/user/selectors";

/** Auth form - signIn, log to account */
export const SignIn: React.FC = () => {
    // hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /** sign up the user */
    const handleSignIn = useCallback((values: FormikValues) => {
        const {email, password} = values;
        const onSuccess = () => navigate('/');
        // @ts-ignore
        dispatch(signInUser({email, password, onSuccess}));
    }, [dispatch, navigate]);

    return <Wrapper title='Sign in'>
        <Formik
            initialValues={{email: 'test123@gmail.com', password: '1234567890'}}
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

        <div className='mt-8 flex justify-center text-purple-600 hover:text-purple-700'>
            <Link to={'/sign-up'}>Create an account</Link>
        </div>
    </Wrapper>
}