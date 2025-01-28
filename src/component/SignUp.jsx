import React, { useState } from 'react'

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  return (
    <>
       <div className='w-full h-screen flex flex-col justify-center items-center p-10'>
        <div className='w-[500px] shadow-lg flex flex-col justify-center items-start px-20 py-10 gap-5'>
          {/* heading */}
          <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>FireBase Sign Up  </h1>
          </div>
          {/* Login Form */}
          <div className='w-full'>
            <div className='w-full flex flex-col justify-center items-start gap-2 pb-2'>
              <label> First Name </label>
              <input type="text" value={firstName} className='w-full border border rounded-lg py-1' onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='w-full flex flex-col justify-center items-start gap-2 pb-2'>
              <label> Last Name </label>
              <input type="text" value={lastName} className='w-full border border rounded-lg py-1' onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='w-full flex flex-col justify-center items-start gap-2 pb-2'>
              <label> Email </label>
              <input type="email" value={email} className='w-full border border rounded-lg py-1' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='w-full flex flex-col justify-center items-start gap-2 pb-5'>
              <label> Password </label>
              <input type="password" value={password} className='w-full border border rounded-lg py-1' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='w-full flex flex-row justify-center items-center'>
              <button className='px-3 py-2 bg-sky-500 text-white border rounded-lg'>Sign Up</button>
            </div>
          </div>
          {/* Login with google */}
          

        </div>

      </div>
    </>
  )
}

export default SignUp
