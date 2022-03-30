import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const AriadneMapping = () => {
  return (
    <div>
      <Head>
        <title>Ariadne Mapping</title>
        <meta name="description" content="Ariadne Mapping" />
        <link rel="icon" href="https://www.munich-startup.de/wp-content/uploads/2020/10/Ariadne-Maps-GmbH.jpeg" />
       
      </Head>
      <main>
      <div className="xl:h-screen w-full -mt-12 xl:pt-0 pt-5 " style = {{backgroundColor:'#30303d'}}>
  <div className="flex xl:flex-row xl:min-h-screen flex-col justify-end">
            <div className='xl:w-1/3  xl:ml-10 2xl:ml-10 w-2/3 self-center justify-self-center text-white text-start  py-10'>
                <h1 className='xl:w-1/2 xl:text-4xl 2xl:text-5xl  xl:text-5xl  mb-4 xl:leading-snug
                2xl:leading-normal'>Ariadne
                Analytics</h1>
                <p className='xl:text-lg 2xl:text-2xl'>Discover the potential of Ariadne Analytics for your business. Get to know your customers and explore the value behind it</p>

                <Link href ="/company/contact"><a><button className='bg-red-600 hover:bg-red-700 py-1 px-3 text-lg mt-5'>Lets Talk</button></a></Link>
            </div>
            <div className=' xl:flex-1 xl:max-w-3xl 2xl:max-w-5xl w-2/3 self-center xl:self-end ' >
            <Image src = "/Photos/Pages/Analytics/Laptopwp.png" width={1000} height={600}  />
            </div>
  </div>
</div>
<div className="container py-10 my-6 bg-gradient-to-b from-slate-50  to-slate-200">
              <div className="flex xl:flex-row flex-col justify-evenly items-center">
                <div className="basis-1/3">
                  <h1 className='mb-5 text-3xl'>Ariadne Mapping</h1>
                  <p className='leading-normal'>Transform your physical business into a digital landscape.<br/><br/>
                  By enabling you to map and localize your products, Ariadne increases your efficiency.</p>
                </div>
                <div className="basis-1/3">
                  <video src="/Videos/h4.mp4" autoPlay loop muted type = "videos/mp4"/>
                </div>
              </div>
            </div>
      </main>
    </div>
  )
}

export default AriadneMapping