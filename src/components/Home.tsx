import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleCreateAccount = (): void => {
    navigate("/signup");
  };

  const handleLogin = (): void => {
     navigate("/login");
   
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-100  rounded-lg shadow-sm p-6 sm:p-8 h-[90vh] flex flex-col justify-end min-[426px]:shadow-2xl">
        <div className="w-full h-full bg-gray-100 flex flex-col">
          {/* Image/Avatar Section */}
          <div className="w-full flex justify-center mt-2 mb-6 flex-1">
            <div className="w-60 h-80 rounded-full min-[425px]:w-70 min-[425px]:h-96 min-[426px]:rounded-2xl bg-gray-200"></div>
          </div>

          {/* Text Section */}
          <div className="w-full text-left px-2 py-5">
            <h1 className="min-[426px]:text-3xl text-[40px] font-bold font-sans text-gray-900">
              Welcome to PopX
            </h1>
            <p className="min-[426px]:text-xl text-[20px] text-gray-700 font-sans">
              Discover amazing content <br /> and connect with us.
            </p>
          </div>

          {/* Button Section */}
          <div className="w-full flex flex-col mt-4 space-y-2">
            <button
              onClick={handleCreateAccount}
              className="w-full text-md p-4  text-white font-semibold custom-main-bg rounded-lg  cursor-pointer ] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              type="button"
            >
              Create Account
            </button>
            <button
              onClick={handleLogin}
              className="w-full text-md font-semibold text-black rounded-lg p-4 bg-[#cebafb] cursor-pointer hover:bg-[#c1a7fe] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              type="button"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}