import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { Link, Navigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <div className='w-full'>
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
            {/* <div className='w-full flex flex-col justify-center items-start gap-2 pb-5'>
              <label> Password </label>
              <input type="password" value={password} className='w-full border border-rounded' onChange={(e) => setPassword(e.target.value)} />
            </div> */}
            <div className='w-full flex flex-row justify-center items-center'>
              <button className='px-3 py-2 bg-sky-500 text-white border rounded-lg'>Login</button>
            </div>
            <div className='w-full flex flex-row justify-end items-center'>
              <p>New User 
                <Link to="/register"> Register </Link>
              </p>
            </div>
          </div>
          {/* Login with google */}


        </div>

      </div>

    </>
  )
}

export default Login
