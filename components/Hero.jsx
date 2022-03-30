import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="xl:h-screen w-full -mt-12" style = {{backgroundColor:'#30303d'}}>
  <div className="flex xl:flex-row xl:min-h-screen flex-col justify-end">
            <div className='xl:w-1/3  xl:ml-10 2xl:ml-10 w-2/3 self-center justify-self-center text-white text-start  py-10'>
                <h1 className='xl:text-4xl 2xl:text-5xl  xl:text-5xl  mb-6 xl:leading-snug
                2xl:leading-normal'>People Flow To Actionable Insights</h1>
                <p className='xl:text-base 2xl:text-2xl'>Turn your existing customer traffic into an additional source of revenue</p>
                <button>Hello</button>
            </div>
            <div className='xl:flex-1 xl:max-w-3xl 2xl:max-w-5xl w-2/3 self-center xl:self-end ' >
            <video src ="/Videos/Hero2vid.mp4" type="videos/mp4" autoPlay playsinline muted loop  />
            </div>
  </div>
</div>
  )
}

export default Hero