import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
 const AriadneAnalytics = () => {
  return (
    <div>
      <Head>
        <title>Ariadne Analytics</title>
        <meta name="description" content="Ariadne Analytics" />
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

<div className="container py-10 mt-6 ">
              <div className="flex xl:flex-row flex-col justify-evenly items-center">
                <div className="basis-1/3">
                  <h1 className='mb-5 text-3xl'>Ariadne Analytics</h1>
                  <p className='leading-normal'>Ariadne Analytics is the heart of the Ariadne Platform, and it can be used for people counting, determine retail conversion rates , reduce dwell timesand other useful customer success metrics. We place a high importance on privacy and employ anonymous tracking systems.</p>
                </div>
                <div className="basis-1/3">
                  <video width="100%" src="/Videos/h1.mp4" autoPlay loop muted type = "videos/mp4"/>
                </div>
              </div>
            </div>

            <div className='min-h-screen pt-10 '>
            <h1 className='text-center text-5xl my-8'>Real-Time Analytics</h1>
           

            <div className = "flex flex-row justify-center justify-items-center px-4">
            <p className='w-5/6 text-center  text-xl '>When do your consumers prefer to shop during the day, and how many people are now in your store and where are they located? We provide answer to those questions with our intuitive dashboard.</p>
            </div>
          

            <div className="container mt-8 py-8">
              <div className="grid md:grid-cols-3 grid-cols-1 justify-around mb-8  justify-items-center px-2">
                <div className="w-2/3 ">
                  <Image  src="/Photos/Pages/Analytics/Total.png" height={220} width={290}/>
                  
                </div>
                <div className="w-2/3">
                <Image src="/Photos/Pages/Analytics/Floor1.png" height={220} width={290} />
                  
                </div>
                <div className="w-2/3">
                <Image src="/Photos/Pages/Analytics/Floor2.png" height={220} width={290}/>
                  
                </div>
              </div>
              <div className='grid grid-cols-1 justify-items-center justify-center '>
              <div className='w-100'>
              <Image src="/Photos/Pages/Analytics/Daily.png" height={250} width={1110}/>
              </div>
              </div>
            </div>

        </div>
        <div className='min-h-screen pt-10 '>
            <h1 className='text-center text-5xl my-8'>Basic Analytics</h1>
           

            <div className = "flex flex-row justify-center justify-items-center px-4">
            <p className='w-5/6 text-center  text-xl '>Recognize the most visited areas of your establishment and tailor your services there to improve your customers experience. </p>
            </div>
          

            <div className="container mt-8 py-8">
              <div className="grid md:grid-cols-3 grid-cols-1 justify-around mb-8  justify-items-center px-2">
                <div className="w-2/3 ">
                  <Image  src="/Photos/Pages/Analytics/BasicAnalytics/h1a.png" height={220} width={290}/>
                  
                </div>
                <div className="w-2/3">
                <Image src="/Photos/Pages/Analytics/BasicAnalytics/h2.png" height={220} width={290} />
                  
                </div>
                <div className="w-2/3">
                <Image src="/Photos/Pages/Analytics/BasicAnalytics/h3.png" height={220} width={290}/>
                  
                </div>
              </div>
              <div className = "flex flex-row justify-center justify-items-center p-4 mb-4">
            <p className='w-5/6 text-center  text-xl '>Understand what interests your customers, and how much time do they spend to each section in your premises? Take advantage of and cater to your customers needs.</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 justify-around mb-8  justify-items-center px-2">
                <div className="w-2/3 ">
                  <Image  src="/Photos/Pages/Analytics/BasicAnalytics/h4.png" height={220} width={290}/>
                  
                </div>
                <div className="w-2/3">
                <Image src="/Photos/Pages/Analytics/BasicAnalytics/h5.png" height={220} width={290} />
                  
                </div>
                <div className="w-2/3">
                <Image src="/Photos/Pages/Analytics/BasicAnalytics/h6.png" height={220} width={290}/>
                  
                </div>
              </div>
              <div className = "flex flex-row justify-center justify-items-center p-4 mb-4">
            <p className='w-5/6 text-center  text-xl '>Employ our queue management system to get notified when client wait times near the cashier counter are getting longer and reduce the dwell time. </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 justify-around mb-8  justify-items-center px-2">
                <div className="w-2/3 ">
                  <Image  src="/Photos/Pages/Analytics/BasicAnalytics/h7.png" height={220} width={290}/>
                  
                </div>
                <div className="w-2/3">
                <Image src="/Photos/Pages/Analytics/BasicAnalytics/h8.png" height={220} width={290} />
                  
                </div>
                <div className="w-2/3">
                <Image src="/Photos/Pages/Analytics/BasicAnalytics/h9.png" height={220} width={290}/>
                  
                </div>
              </div>
              
              

            </div>

        </div>
        <div className='min-h-screen pt-10 '>
            <h1 className='text-center text-5xl my-8'>Advanced Analytics</h1>
           

            <div className = "flex flex-row justify-center justify-items-center px-4">
            <p className='w-5/6 text-center  text-xl '>Cool graphics and intuitive heat maps for your entire store that you may use to better manage your space.</p>
            </div>
          

            <div className="container mt-8 py-8">
              <div className="flex md:flex-row flex-col justify-evenly mb-8  justify-items-center px-2">
                <div className="">
                  <Image  src="/Photos/Pages/Analytics/AdvancedAnalytics/h10.png" height={220} width={350}/>
                  
                </div>
                <div className="">
                <Image src="/Photos/Pages/Analytics/AdvancedAnalytics/h11.png" height={220} width={350} />
                  
                </div>
                
              </div>

              <div className = "flex flex-row justify-center justify-items-center p-4 mb-4">
            <p className='w-5/6 text-center  text-xl '>Utilize our user-friendly graphs to plan practical activities and to improve your operational strategies.</p>
            </div>
            <div className="flex md:flex-row flex-col justify-evenly mb-8  justify-items-center px-2">
                <div className="">
                  <Image  src="/Photos/Pages/Analytics/AdvancedAnalytics/h12.png" height={220} width={350}/>
                  
                </div>
                <div className="">
                <Image src="/Photos/Pages/Analytics/AdvancedAnalytics/h13.png" height={220} width={350} />
                  
                </div>
                
              </div>
              <div className = "flex flex-row justify-center justify-items-center p-4 mb-4">
            <p className='w-5/6 text-center  text-xl '>Study your stores customer flow patterns and concentrate on them to improve your customers Journey and boost your profits.</p>
            </div>
            <div className="flex md:flex-row flex-col justify-evenly mb-8  justify-items-center px-2">
                <div className="">
                  <Image  src="/Photos/Pages/Analytics/AdvancedAnalytics/h14.png" height={220} width={350}/>
                  
                </div>
                <div className="">
                <Image src="/Photos/Pages/Analytics/AdvancedAnalytics/h15.png" height={220} width={350} />
                  
                </div>
                
              </div>

              
            </div>

        </div>
        
        <div className='container bg-black h-56 text-white   '>
          <div className='flex flex-row h-full justify-center items-center content-center'>
          <Link href ="/company/contact"><a><button className='bg-red-600 hover:bg-red-700 py-1 px-3 text-lg mt-5'>Lets Talk</button></a></Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AriadneAnalytics