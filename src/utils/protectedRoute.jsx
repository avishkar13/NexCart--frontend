import React from 'react';
import { Navigate } from 'react-router-dom';

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token ? true : false;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
