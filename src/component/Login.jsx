import { signInWithCredential } from 'firebase/auth';
import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from './Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { ToastContainer , toast, Bounce } from 'react-toastify';
import SignInWithGoogle from './SignInWithGoogle';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in successfully")
      navigate('/profile')
      toast.success('login Successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    catch (error){
      console.error("Error logging in:", error.message);
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  }

  let inputFields = [
    {
      fieldName: "email",
      value : email,
      onchangeFuction: (e) => {
        setEmail(e.target.value)
      }
    },
    {
      fieldName: "password",
      value: password,
      onchangeFuction: (e) => {
        setPassword(e.target.value)
      }
    },
  ]

  

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center p-10'>
        <div className='w-[500px] shadow-xl flex flex-col justify-center items-start px-20 py-10 gap-5'>
          {/* heading */}
          <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>FireBase Login  </h1>
          </div>
          {/* Login Form */}
          <form onSubmit={handleSubmit} className='w-full'>
            {
              inputFields.map((input) => {
                return (
                  <div key={input.fieldName} className='w-full flex flex-col justify-center items-start gap-2 pb-2'>
                    <label className='capitalize'> {input.fieldName} </label>
                    <input type={`${input.fieldName}`} value={input.value} className='w-full border border-rounded' onChange={input.onchangeFuction} />
                  </div>
                )
              })
            }
            <div className='w-full flex flex-row justify-center items-center pb-2'>
              <button className='px-3 py-2 bg-sky-500 text-white border rounded-lg'>Login</button>
            </div>
            <div className='w-full flex flex-row justify-end items-center pb-2'>
              <p>New User  <Link to="/register" className='text-blue-500 underline'>Register</Link>
              </p>
            </div>
          </form>
          <ToastContainer />
          {/* Login with google */}
          <SignInWithGoogle />
        </div>

      </div>

    </>
  )
}

export default Login
