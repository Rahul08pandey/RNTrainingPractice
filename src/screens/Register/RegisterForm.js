import * as yup from 'yup';

const RegisterForm = yup.object().shape({
  name: yup.string().min(5, 'Min').max(20, 'Max').required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),

  password: yup
    .string()
    .min(8, '8c')
    .max(20, '20c')
    .required('Password is required'),

  organization: yup.string().required('Organization is required'),
  //   state: yup.string().required('Required'),
  city: yup.string().required('Required'),
});

export default RegisterForm;
