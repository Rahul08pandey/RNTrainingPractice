import * as yup from 'yup';

const LoginForm = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),

  password: yup
    .string()
    .min(8, 'Password at least 8 character long')
    .max(20, 'Password at least 20 character long')
    .required('Password  is required'),
});

export default LoginForm;
