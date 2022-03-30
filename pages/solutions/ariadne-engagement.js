import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
const AriadneEngagement = () => {
  return (
    <div>
      <Head>
        <title>Ariadne Engagement</title>
        <meta name="description" content="Ariadne Engagement" />
        <link rel="icon" href="https://www.munich-startup.de/wp-content/uploads/2020/10/Ariadne-Maps-GmbH.jpeg" />
       
      </Head>
      <main>
      <div className="xl:h-screen w-full -mt-12 xl:pt-0 pt-5 " style = {{backgroundColor:'#30303d'}}>
  <div className="flex xl:flex-row xl:min-h-screen flex-col justify-end">
            <div className='xl:w-1/3  xl:ml-10 2xl:ml-10 w-2/3 self-center justify-self-center text-white text-start  py-10'>
                <h1 className='xl:w-1/2 xl:text-4xl 2xl:text-5xl  xl:text-5xl  mb-4 xl:leading-snug
                2xl:leading-normal'>Ariadne
                Engagement</h1>
                <p className='xl:text-lg 2xl:text-2xl'>Engage with your visitors at the right time and the right place. Develop strategies targeted to specific clusters of customers</p>

                <Link href ="/company/contact"><a><button className='bg-red-600 hover:bg-red-700 py-1 px-3 text-lg mt-5'>Lets Talk</button></a></Link>
            </div>
            <div className=' xl:flex-1 xl:max-w-3xl 2xl:max-w-5xl w-2/3 self-center xl:self-end ' >
            <Image src = "/Photos/Pages/Analytics/Laptopwp.png" width={1000} height={600}  />
            </div>
  </div>
</div>
<div className="container py-10 mt-6">
              <div className="flex xl:flex-row flex-col justify-evenly items-center">
                <div className="basis-1/3">
                  <h1 className='mb-5 text-3xl'>Ariadne Engagement</h1>
                  <p className='leading-normal'>The relationship between the business and its customers is elevated through engagement.<br/><br/>Ariadne Engagement allows you to give personalized offers and valuable product information to your customers in real time when they need it the most.</p>
                </div>
                <div className="basis-1/3">
                  <video src="/Videos/h3.mp4" autoPlay loop muted type = "videos/mp4"/>
                </div>
              </div>
            </div>
      </main>
    </div>
  )
}

export default AriadneEngagement