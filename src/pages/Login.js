import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {auth, provider} from '../firebase-config';
import { signInWithPopup } from 'firebase/auth'

function Login({setIsAuth}) {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  }

  

  return (
    <>

    <div className="bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl mx-auto text-center mt-7">
          <span className="text-2xl font-light">Log in to see more</span>
          <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
            <div className="h-2 bg-indigo-400 rounded-t-md"></div>
            <div className="py-6 px-8">
              {/* <label className="block font-semibold">Username or Email</label> */}
              <input
                type="text"
                placeholder="Email or Username"
                className="border w-full h-10 px-3 mt-2 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
              />
              {/* <label className="block mt-3 font-semibold">Password</label> */}
              <input
                type="password"
                placeholder="Password"
                className="border w-full h-10 px-3 mt-2 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
              />
              
              <div className="flex justify-between items-baseline">
                <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">
                  Login
                </button>
                <a href="#" className="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className='flex justify-center pt-4 space-x-3'>
                <p className='mt-2'>New user?</p>
                <button className=" bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">
                <Link to="/register">Register</Link>
                </button>
              </div>
              <span className='flex justify-center mt-3'>OR</span>
              {/* Login with Google */}
              <div className="mt-3 flex justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50" onClick={signInWithGoogle}>
                  Login with Google
              </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Login