import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/authContext'

const Dashboard = () => {
  const {user,logout} = useAuth()
  const router = useRouter();


  useEffect(()=>{
    if(user === null){
      console.log(user)
      router.push('/login')
    }
  
  },[user])

  const logOut =(e)=>{
    e.preventDefault()
    try{
      logout()
      router.push('/login')
    } catch(err){
      console.log(err)
    }
  }


  return (

    <>
    {!user? null : <div className='h-screen' >
      Dashboard
      <div className='flex flex-row justity-center items-center w-full h-full content-center'>
      <button className='bg-red-500 px-3 py-1 rounded-lg' onClick={(e)=>logOut(e)}>Log Out</button>
      </div>
    </div>}
    </>
  )
}

export default Dashboard