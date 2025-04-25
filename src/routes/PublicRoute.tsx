import React from 'react';
import { Navigate } from 'react-router-dom';

// Function to check if the user is authenticated (example using localStorage)
const isAuthenticated = () => {
  return localStorage.getItem('userToken') !== null;
};

const PublicRoute = ({ children }) => {
  if (isAuthenticated()) {
    // If authenticated, redirect to the dashboard or any other protected route
    return <Navigate to="/dashboard" />;
  }
  return children; // If not authenticated, render the children (Home or Login)
};

export default PublicRoute;
