import React from 'react';
import * as Yup from 'yup';
import RegisterCard from '../components/RegisterCard';

const Register = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('you must input a username'),
    password: Yup.string().required('you must input a password'),
  });

  return (
    <div className="flex flex-wrap justify-center pt-14 lg:flex-row">
      <RegisterCard
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default Register;
