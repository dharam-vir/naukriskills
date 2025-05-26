// src/components/GoogleLoginButton.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post('http://localhost:8080/api/v1/auth/google-login', {
        token: credentialResponse.credential,
      });

      console.log('Login Success:', res.data);
      // Save token/user info, redirect, etc.
    } catch (err) {
      console.error('Login Failed:', err.response?.data || err.message);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log('Login Failed')}
    />
  );
};

export default GoogleLoginButton;
