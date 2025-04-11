import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Create an Account</h1>

      <input 
        type="text" 
        placeholder="Username" 
        className="p-3 mb-4 border rounded w-80"
      />
      <input 
        type="email" 
        placeholder="Email" 
        className="p-3 mb-4 border rounded w-80"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="p-3 mb-4 border rounded w-80"
      />

      <button className="p-3 bg-green-500 text-white rounded w-80 hover:bg-green-700">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
