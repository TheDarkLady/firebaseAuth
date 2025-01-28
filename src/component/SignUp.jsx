import React, { useState } from 'react'

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

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
            <h1 className='text-2xl font-bold'>FireBase Sign Up  </h1>
          </div>
          {/* Login Form */}
          <div className='w-full'>
            {
              inputFields.map((input) => {
                return (
                  <div key={input.fieldName} className='w-full flex flex-col justify-center items-start gap-2 pb-2'>
                    <label className='capitalize'> {input.fieldName} </label>
                    <input type={`${input.fieldName}`} value={input.value} className='w-full border rounded-lg py-1' onChange={`${input.onchangeFunction}`} />
                  </div>
                )
              })
            }
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
