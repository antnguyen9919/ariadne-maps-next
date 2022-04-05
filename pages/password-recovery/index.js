import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'
import { useRouter } from 'next/router'

import { auth } from '../../config/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'

const PasswordRecovery = () => {
    const {user} = useAuth()
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [message,setMessage]= useState('')
    useEffect(()=>{
        console.log("User: ",user)
        if(user !== null){
            console.log("User: ",user)
            router.push('/dashboard')
        }
        

      },[user])


      const handleLogin=async ()=>{
          await sendPasswordResetEmail(auth,email).then(()=>{
              setMessage("Email sent")
              setEmail(" ")
          }).catch((error)=>{
            setError(error.message)
        })

      }
    
      


  
    


  return (
    <div className='h-screen w-full flex items-center justify-center' >

        <div className=" w-1/3 ">
        <form onSubmit={handleLogin} >
        <h3 >Enter your email</h3>
        <p className='mt-5'>Email:</p>    
        <input
            onChange={handleLogin}
           
            value = {email}
            required
            placeholder='Enter email'
        
        
        
        type="email" className="form-input w-full px-4 py-3 rounded-md"/>


    

                <div className="w-full justify-between items-center flex mt-8">
                    <button type ="submit" className='bg-blue-500 rounded-lg px-4 py-2 text-white hover:bg-blue-700 transition ease-in-out' >Recover Password</button>

                    <Link href="/login" ><a className='text-blue-700 hover:underline' >Login</a></Link>
                </div>
                <div className="w-full justify-center items-center flex mt-4">
                
                </div>
        </form>
        </div>
    </div>
  )
}

export default PasswordRecovery