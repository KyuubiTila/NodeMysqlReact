import React from 'react';
import * as Yup from 'yup';
import RegisterCard from '../components/RegisterCard';
import axios from 'axios';

const Register = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('you must input a username'),
    password: Yup.string().required('you must input a password'),
  });

  const registerUser = async (data) => {
    try {
      console.log(data);
      await axios.post('http://localhost:3001/api/auth', data);
      console.log('users created successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center pt-14 lg:flex-row">
      <RegisterCard
        initialValues={initialValues}
        validationSchema={validationSchema}
        registerUser={registerUser}
      />
    </div>
  );
};

export default Register;
