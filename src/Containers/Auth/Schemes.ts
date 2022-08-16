import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
