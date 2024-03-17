import React from 'react';
import './Login.css';

const Login = () => {
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
          className="input-email"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-pswd"
        />
        <button className="login-button">Login</button>
        <div className='forgot-password'>
            Forgot Password?
        </div>


    </div>

    
  );
};



export default Login; 
 