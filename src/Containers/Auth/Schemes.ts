import * as Yup from 'yup';

/** Formik validation schema for sign up */
export const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

/** Formik validation schema for sign in */
export const SignInSchema = Yup.object().shape({
    password: Yup.string()
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
})