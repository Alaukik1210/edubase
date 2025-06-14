import { Camera } from "lucide-react";
import { useSelector } from 'react-redux';


import type { RootState } from '../redux/store'; // Adjust the import path as needed

const Profile = () => {
    const user = useSelector((store: RootState) => store.user)
    console.log("user isFinite",user)
  return (
    <div className="min-h-screen  flex items-center justify-center sm:px-6 lg:px-8">
      <div className="max-w-md w-full   rounded-lg shadow-sm   h-[90vh] flex flex-col justify-end min-[426px]:shadow-2xl">
        <div className="w-full h-full  flex flex-col">
      <div className='h-[9vh] pl-4 text-3xl  pt-4 bg-gray-'>
        Account Settings
      </div>
      <div className='h-full bg-gray-100'>
             <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-md w-fit">
      
      <div className="relative w-20 h-20">
        <img
          src="https://i.imgur.com/JlUvsxa.png" 
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
        
        <div className="absolute bottom-0 right-0 bg-violet-600 p-1 rounded-full">
          <Camera className="w-4 h-4 text-white" />
        </div>
      </div>

     
      <div>
        <h2 className="font-semibold text-md"> {user?.user?.fullName ? user.user.fullName : "Marry Doe"} </h2>
        <p className="text-sm text-gray-600">{user?.user?.emailAddress ? user.user.emailAddress : "Marry@gmail.com"}</p>
      </div>
    </div>
     <div className='p-4'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quidem deleniti aperiam sunt minima temporibus minus voluptatibus inventore rem provident. Libero eum reiciendis, ex nam laborum debitis eligendi ullam sapiente rtgtg.
      </div>
<div className="bg-gray-100 border-b-2 border-t-2 border-gray-300 border-dashed h-2/3 my-5">

                </div>
       </div>
              
                
      </div>

     
    </div>
     </div>
      
  )
}

export default Profile
