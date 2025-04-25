import React from 'react'

const isAuthenticated = () => {
  return localStorage.getItem('userToken') !== null;
}

const PrivateRoute = () => { 
   return true ;
}

export default PrivateRoute