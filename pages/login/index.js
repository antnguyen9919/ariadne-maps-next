import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from '../../context/authContext';
import '../../config/firebase'


const Login = () => {
    // const {user,login} = useAuth()

        const [data,setData] =useState({
            email: '',
            password: '',
        })

        const val = useContext(AuthContext)
        const login = val.login()
        // console.log("Name: ", val)
const handleLogin = async (e) =>{
    e.preventDefault()
        try{
            await login(data.email,data.password)
        } catch(err){
            console.log(err)
        }


}        


  return (
    <div className='h-screen w-full flex items-center justify-center' >

        <div className=" w-1/3 ">
        <form onSubmit={handleLogin} >
        <h3 >Sign in</h3>
        <p className='mt-5'>Email:</p>    
        <input
            onChange={(e)=> setData({
                ...data,
                email:e.target.value,
            })}
            value = {data.email}
            required
            placeholder='Enter email'
        
        
        
        type="email" className="form-input w-full px-4 py-3 rounded-md"/>


    <p className='mt-8' >Password</p>
<input
onChange={(e)=> setData({
    ...data,
    password:e.target.value,
})}
value = {data.password}
required
placeholder='Enter Password'




type="password" className="form-input w-full px-4 py-3 rounded-md" />

                <div className="w-full justify-between items-center flex mt-8">
                    <button type ="submit" className='bg-blue-500 rounded-lg px-4 py-2 text-white hover:bg-blue-700 transition ease-in-out' >Sign in</button>

                    <Link href="/" ><a className='text-blue-700 hover:underline' >Forgot password</a></Link>
                </div>
                <div className="w-full justify-center items-center flex mt-4">
                
                </div>
        </form>
        </div>
    </div>
  )
}

export default Login