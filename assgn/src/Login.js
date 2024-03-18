import React, { useState } from 'react';
import { auth } from './firebase';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in:', user);
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login error:', errorMessage);
      });
  };



  return (
    <div className="home-container">
    <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" />

    </head>

      <div className="Logo">
      </div>

      <div className='tagline'>
        #We are Electric
      </div>
    
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-pswd"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
        <div className='forgot-password'>
            Forgot Password?
        </div>


    </div>

    
  );
};



export default Login; 
 