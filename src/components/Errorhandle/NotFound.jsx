import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center   
 bg-gray-100">
      <h1 className=" text-5xl  
 font-bold text-red-500">Error - 404</h1>
      <p className="text-2xl font-medium text-gray-600 mt-4">Opps!! Page not found</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
        Go back to Login
      </Link>
    </div>
  );
}

export default NotFound;