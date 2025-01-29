import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { cache } from 'react';
import { Form, Navigate } from 'react-router-dom';
import { auth , db } from './Firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast, ToastContainer, Bounce } from 'react-toastify';

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser;
      console.log(user);
      console.log("user register successfully");
      if(user){
        await setDoc(doc(db, "Users", user.uid), {
          firstName: firstName,
          lastName : lastName,
          email: user.email,
          password : password 
        });
      }

      toast.success('Registered Successfully', {
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
    catch (error) {
      console.log(error.message);
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

  const inputFields = [
    {
      fieldName: "firstName",
      value: firstName,
      onchangeFunction: (e) => {
        setFirstName(e.target.value)
      }
    },
    {
      fieldName: "lastName",
      value: lastName,
      onchangeFunction: (e) => {
        setLastName(e.target.value)
      }
    },
    {
      fieldName: "email",
      value: email,
      onchangeFunction: (e) => {
        setEmail(e.target.value)
      }
    },
    {
      fieldName: "password",
      value: password,
      onchangeFunction: (e) => {
        setPassword(e.target.value)
      }
    },
  ]

  

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center p-10'>
        <div className='w-[500px] shadow-lg flex flex-col justify-center items-start px-20 py-10 gap-5'>
          {/* heading */}
          <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'> FireBase Sign Up  </h1>
          </div>
          {/* Login Form */}
          <form onSubmit={handleRegister} className='w-full'>
            {
              inputFields.map((input) => {
                return (
                  <div key={input.fieldName} className='w-full flex flex-col justify-center items-start gap-2 pb-2'>
                    <label className='capitalize'> {input.fieldName} </label>
                    <input type={`${input.fieldName}`} value={input.value} className='w-full border rounded-lg px-2 py-1' onChange={input.onchangeFunction} />
                  </div>
                )
              })
            }
            <div className='w-full flex flex-row justify-center items-center'>
              <button className='px-3 py-2 bg-sky-500 text-white border rounded-lg'>Sign Up</button>
              <ToastContainer/>
            </div>
          </form>
          {/* Login with google */}


        </div>

      </div>
    </>
  )
}

export default SignUp
