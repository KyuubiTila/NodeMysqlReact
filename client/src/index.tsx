import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { AuthContext } from './helpers/AuthContext';
import axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root')!);

const Root = () => {
  const [authState, setAuthState] = useState<{}>({
    username: '',
    id: 0,
    status: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/api/auth/actualToken',
          {
            // THIS IS THE TOKEN CARRIER FROM WHICH THE AUTH WILL TAKE ITS PARAMETERS FOR CHECK
            headers: {
              accessToken: localStorage.getItem('accessToken'),
            },
          }
        );

        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Header />
      <App />
    </AuthContext.Provider>
  );
};

root.render(
  <Router>
    <Root />
  </Router>
);
