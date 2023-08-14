import React, { useContext } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import LoginCard from '../components/LoginCard';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';
const Login = () => {
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();
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
      const response = await axios.post(
        'http://localhost:3001/api/auth/login',
        data
      );
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem('accessToken', response.data.token);
        console.log(response.data);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        navigate('/posts');
      }
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
