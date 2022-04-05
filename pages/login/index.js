import Link from 'next/link'
import React, { useContext, useState } from 'react'

import AuthContext from '../../context/authContext';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/authContext';



const Login = () => {
    

        const {user,login} = useAuth()
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState(null);

        const router = useRouter();
     

      console.log(user)

        const onSubmit = async(e) => {
            e.preventDefault()
            setError(null)
           try{
               await login(email,password).then(user=>{
                router.push('/dashboard');
               })
               
           } catch(err){
            setError("Login failed")
            setEmail('')
            setPassword('')
           }
           
          };    


  return (
    <div className='h-screen w-full flex items-center justify-center' >

        <div className=" w-1/3 ">
        <form onSubmit={onSubmit} >
        <h3 >Sign in</h3>
        {error && <h3 className='text-red-500' >{error}</h3>  } 
        <p className='mt-5'>Email:</p>    
        <input
            onChange={(event)=> setEmail(event.target.value)}
            value = {email}
            name="email"
            required
            placeholder='Enter email'
            type="email" 
            className="form-input w-full px-4 py-3 rounded-md"/>


    <p className='mt-8' >Password</p>
            <input
            onChange={(e)=> setPassword(e.target.value)}
                value = {password}
                required
                placeholder='Enter Password'
                type="password" 
                className="form-input w-full px-4 py-3 rounded-md" />

                <div className="w-full justify-between items-center flex mt-8">
                    <button  
                    type='submit'
                    
                    className='bg-blue-500 rounded-lg px-4 py-2 text-white hover:bg-blue-700 transition ease-in-out'
                     >Sign in</button>

                    <Link href="/password-recovery" ><a className='text-blue-700 hover:underline' >Forgot password</a></Link>
                </div>
                <div className="w-full justify-center items-center flex mt-4">
                
                </div>
        </form>
        </div>
    </div>
  )
}

export default Login