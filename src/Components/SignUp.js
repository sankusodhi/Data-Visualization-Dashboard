// import React from 'react';

// const SignUp = () => {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded shadow-md w-80">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//                 <form>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-2">Name</label>
//                         <input 
//                             type="text" 
//                             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your name"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-2">Email</label>
//                         <input 
//                             type="email" 
//                             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your email"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-2">Password</label>
//                         <input 
//                             type="password" 
//                             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your password"
//                         />
//                     </div>
//                     <button 
//                         type="submit" 
//                         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//                     >
//                         Sign Up
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignUp;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    console.log("Signed up user:", formData);
    setError("");
    navigate("/login");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "24rem" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <small>
            Already have an account? <a href="/login">Login</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
