import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth , db} from './Firebase';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { setDoc, doc} from 'firebase/firestore';
function SignInWithGoogle() {
    const navigate = useNavigate();
    function googleLogin(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async(result) => {
            console.log(result);
            const user = result.user;
            if(result.user){
                await setDoc(doc(db, "Users", user.uid), {
                          firstName: user.displayName,
                          email: user.email,
                          photo : user.photoURL,
                          lastName : ""
                        });
                toast.success('Loged In Successfully', {
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
                navigate('/profile')
            }
        });
    }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <p className="text-[12px] color-[#b2b2b2] font-semibold mt-1 mb-1 text-center"> -- Or Continue with --</p>
      <div className='w-full flex flex-row justify-center items-center pb-2'>
              <button onClick={googleLogin} className='px-3 py-2 bg-sky-500 text-white border rounded-lg'>Sign In With Google</button>
    </div>
    <ToastContainer />
    </div>
  )
}

export default SignInWithGoogle
