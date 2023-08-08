import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import LoginCard from '../components/LoginCard';

const Login = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('you must input a username'),
    password: Yup.string().required('you must input a password'),
  });

  const loginUser = async (data) => {
    try {
      console.log(data);
      await axios.post('http://localhost:3001/api/auth/login', data);
      console.log('logged In successfully');
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div className="flex flex-wrap justify-center pt-14 lg:flex-row">
      <LoginCard
        initialValues={initialValues}
        validationSchema={validationSchema}
        loginUser={loginUser}
      />
    </div>
  );
};

export default Login;
