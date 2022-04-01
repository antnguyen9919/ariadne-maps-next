import React from 'react'
import Link from 'next/link'


const careers = () => {
  return (
    <div>
       <main>
       
      <div className='container w-full' >
        <img className='object-fill h-fill w-full'   src = "/Photos/Pages/jobs.jpg" />
        </div>
     <div className='xl:px-8' >
     <h1 className="text-center">Join Us</h1>
        <p>Do you want to extend your boundaries? Do you enjoy working in international teams? Ariadne Maps

offers a dynamic environment for talented individuals who are excited to innovate and disrupt a huge industry!</p>

        <h1 className="text-center">Open Positions</h1>

<p>Ariadne Maps is a rapidly growing company on its way to disrupt a huge industry. We have a vision to be the Google Analytics of physical world, and the new GPS of indoor spaces. On our journey, we need talented members just like you. Check out the positions below and apply now! We are looking forward to meet you!</p>
        <div className="flex flex-col py-6 mb-8 h-screen w-full xl:mt-8 justify-evenly">
          <div><h3>
            Technology


            </h3></div>

          <div className='py-5'>
            
            <h4>Data Science</h4>
            <p className='xl:mt-3 font-light' >Contribute end-to-end for data science projects, from data processing, to training, evaluating, to deploying and monitoring, understand business objectives and translate them into solutions that leverage machine learning…</p>
            <div className='flex flex-row xl:justify-start justify-center'>
            <Link href="/company/careers/data-science-jobs" ><a className=' text-xl px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 transition ease-in-out  text-white '>Details</a></Link>
            </div>
          </div>

          <div><h3>Business</h3></div>
          <div className='py-5' >
            
            <h4>Social Media</h4>
            <p className='xl:mt-3 font-light' >Strategize and enable our growth: Ideate, create and launch content related to building our brand and reach. Keep constant track of data and adapt the content in order to improve performance, make organic social a channel for growth…</p>
            <div className='flex flex-row xl:justify-start justify-center'>
            <Link href="/company/careers/social-media-jobs" ><a className=' text-xl px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 transition ease-in-out  text-white '>Details</a></Link>
            </div>
          </div>


          <div>
            
           
            <h4>Business Development Representative</h4>
            <p className='xl:mt-3 font-light' >Generate and nurture leads through digital/mailing/phone, lead opportunities of change as they relate to campaign and lead generation gaps, partner with the Sales and Marketing team to enhance opportunities to deliver incremental revenue…</p>

            <div className='flex flex-row xl:justify-start justify-center'>
            <Link href="/company/careers/business-development-jobs" ><a className=' text-xl px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 transition ease-in-out  text-white '>Details</a></Link>
            </div>
          </div>


        </div>


     </div>

       </main>
    </div>
  )
}

export default careers