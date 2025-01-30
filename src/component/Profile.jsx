import React, { useEffect, useState } from 'react'
import { auth, db } from './Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log("User",user);
            // setUserDetails(user)
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data())
                console.log("Doc Snap Data :", docSnap.data());
                // console.log("user details", userDetails);    
            }
            else {
                console.log("user is not loggedin");

            }
        })
    }

    async function handleLogout() {
        try {
            await auth.signOut();
            navigate("/")
            toast.success('Loged Out Successfully', {
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
            console.log("Error Logging out : ", error.message);
        }

    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center p-10'>
                <div className='w-[500px] shadow-xl flex flex-col justify-center items-start px-20 py-10 gap-5'>
                    {/* heading */}
                    <div className='w-full flex flex-col justify-center items-center'>
                        {userDetails ? (

                            // <h1 className='text-2xl font-bold'>Welcome {userDetails.displayName}</h1>
                            <img src={userDetails.photo} alt="profile pic" />
                        ) : (
                            <h1 className='text-2xl font-bold'> Loading .............</h1>
                        )
                        }
                    </div>
                    {/* User Details */}
                    <div className='w-full'>
                        {userDetails ? (
                                    <div>
                                        {/* user Details */}
                                        <div className='flex flex-col justify-center items-center gap-2'>
                                            <h1 className='text-2xl font-bold' >Welcome {userDetails.firstName}</h1>
                                            <p>Email : {userDetails.email}</p>
                                        </div>
                                        {/* Logout Button */}
                                        <div className='flex flex-col justify-center items-center mt-5'>
                                            <button className='px-3 py-2 bg-sky-500 text-white border rounded-lg' onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                        ) : (
                            <p></p>
                            )
                        }
                    </div>
                    {/* <ToastContainer /> */}
                    {/* Login with google */}

                </div >

            </div >
        </>
    )
}

export default Profile
