import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/userSlice';
interface FormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  password: string;
  companyName: string;
  isAgency: boolean;
}

export default function CreateAccount() {
    
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: true
  });
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value: boolean) => {
    setFormData(prev => ({
      ...prev,
      isAgency: value
    }));
  };

  const handleSubmit = () => {
    if (
    !formData.fullName.trim() ||
    !formData.phoneNumber.trim() ||
    !formData.emailAddress.trim() ||
    !formData.password.trim()
  ) {
    alert('Please fill all required fields ');
    return;
  }

  dispatch(setUser(formData));
  
  navigate('/profile')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-100  rounded-lg shadow-sm p-6 sm:p-8 h-[90vh] flex flex-col justify-end min-[426px]:shadow-2xl">
        <div className="w-full h-full bg-gray-100 flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            Create your<br />PopX account
          </h1>
        </div>

       
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="  font-medium mb-2    inline-block transform translate-x-3 translate-y-3 bg-gray-100 text-[#6c25ff] text-sm px-1 pr-3">
              Full Name <span className='text-red-500 text-md'>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className=" py-3  border-gray-300 rounded-lg outline-none transition-colors bg-gray-50     border-2 w-full p-3 px-5 text-sm"
            />
          </div>

          

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className=" font-medium mb-2    inline-block transform translate-x-3 translate-y-3 bg-gray-100 text-[#6c25ff] text-sm px-1 pr-3">
              Phone number<span className='text-red-500 text-md'>*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="py-3  border-gray-300 rounded-lg outline-none transition-colors bg-gray-50     border-2 w-full p-3 px-5 text-sm"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="emailAddress" className=" font-medium mb-2    inline-block transform translate-x-3 translate-y-3 bg-gray-100 text-[#6c25ff] text-sm px-1 pr-3">
              Email address<span className='text-red-500 text-md'>*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="py-3  border-gray-300 rounded-lg outline-none transition-colors bg-gray-50     border-2 w-full p-3 px-5 text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className=" font-medium mb-2    inline-block transform translate-x-3 translate-y-3 bg-gray-100 text-[#6c25ff] text-sm px-1 pr-3">
              Password<span className='text-red-500 text-md'>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="py-3  border-gray-300 rounded-lg outline-none transition-colors bg-gray-50     border-2 w-full p-3 px-5 text-sm"
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className=" font-medium mb-2    inline-block transform translate-x-3 translate-y-3 bg-gray-100 text-[#6c25ff] text-sm px-1 pr-3">
              Company name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="py-3  border-gray-300 rounded-lg outline-none transition-colors bg-gray-50     border-2 w-full p-3 px-5 text-sm"
            />
          </div>

          {/* Agency Question */}
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-4">
              Are you an Agency?<span className='text-red-500 text-lg'>*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency === true}
                  onChange={() => handleRadioChange(true)}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency === false}
                  onChange={() => handleRadioChange(false)}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              onClick={handleSubmit}
              className="w-full custom-main-bg hover:bg-purple-700 text-white font-semibold py-4 px-6 cursor-pointer rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
     </div>
  );
}