import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (isFormValid) {
      Navigate('/profile');
 
      
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-100  rounded-lg shadow-sm p-6 sm:p-8 h-[90vh] flex flex-col justify-end min-[426px]:shadow-2xl">
        <div className="w-full h-full bg-gray-100 flex flex-col">
          <div className='text-4xl m-3 pr-4 font-bold'>
            Sign in to your PopX account
          </div>
          <div className='m-3 text-2xl text-gray-500 pr-8'>
            Log in to continue your journey with PopX.
          </div>

          <div>
            <div>
              <label htmlFor="email" className="font-medium mb-2 inline-block transform translate-x-3 translate-y-3 bg-gray-100 text-[#6c25ff] text-sm px-1 pr-3">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Marry Doe"
                className="py-3 border-gray-300 rounded-lg outline-none transition-colors bg-gray-50 border-2 w-full p-3 px-5 text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="font-medium mb-2 inline-block transform translate-x-3 translate-y-3 bg-gray-100 text-[#6c25ff] text-sm px-1 pr-3">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="py-3 border-gray-300 rounded-lg outline-none transition-colors bg-gray-50 border-2 w-full p-3 px-5 text-sm"
              />
            </div>
          </div>
          <div className="pt-4">
            <button
              onClick={handleLogin}
              disabled={!isFormValid}
              className={`w-full text-xl font-semibold py-4 px-6 cursor-pointer rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                ${isFormValid ? 'custom-main-bg  text-white' : 'bg-gray-300 text-white cursor-not-allowed'}`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login