import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import styles from '../../styles/Solutions.module.css'
import {variant1} from '../../sections/animations'

import nagivate from  "../../public/Photos/Pages/Navigation/navigate.png"

const herovariants = {
  hidden:{opacity: 0, x:0, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:0}

}
const heroVvariants = {
  hidden:{opacity: 0, x:0, y:200},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:200}

}


const ariadneNavigation = () => {
  return (
    <div>
      <Head>
        <title>Ariadne Navigation</title>
        <meta name="description" content="Ariadne Navigation" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/ariadneicon.png" />
       
      </Head>
      <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1}  className={styles.hero}  >
          <div className={styles.heroContainer}>

            <div className = {styles.heroTextContainer}>
            <div className={styles.heroText}>
           <div className={styles.heroTitle}>
           <motion.h1 initial="hidden" animate="enter" exit="exit" variants={herovariants} transition={{duration: 0.5, type: 'spring', bounce: 0.3}} >Ariadne
Navigation</motion.h1>
           </div>

              <div className={styles.heroSub}>
              <motion.p initial="hidden" animate="enter" exit="exit" variants={herovariants} transition={{duration: 0.2, type: 'easeInOut'}}>Engage with your visitors at the right time and the right place. Develop strategies targeted to specific clusters of customers</motion.p>
              </div>
              
            </div>
            </div>

            <div className={styles.heroEScreen} >
            
            <motion.img initial="hidden" animate="enter" exit="exit" variants={heroVvariants} transition={{duration: 0.5, type: 'spring', bounce: 0.3 }} src = "/Photos/Pages/Navigation/MunichOffice.png" />
            </div>

          </div>
        </motion.div>

      <main>
      <div className={`${styles.gifbox}`} >
            <div className = {styles.giftext}>
              
              <p>Ariadne Navigation performs the indoor navigation and indoor positioning for your business, making it simple for users to locate their destination.
</p>
              <p>Ariadne Navigation also provides the user with information about his surroundings and reduces the time he invests in searching.</p>
            </div>
            <div className = {styles.gif}>
            <video  playsInline className='pointer-events-none' width="100%" src="/Videos/h2.mp4" autoPlay loop muted type = "videos/mp4"/>
            </div>
          </div>

          <div className={styles.sectionN1}>
            <div className={styles.N1content}>
              <div>
              <h4>
              Indoor Positioning Services (IPS)
              </h4>
              <p>
              We offer Indoor GPS, which assists customers and users in determining the most efficient route to their destination. Customers can also customize their routes by adding stops for more efficient planning.

              </p>
              </div>
              <div>

              <h4>
              Efficient Ad Placement
              </h4>
              <p>
              Targeted marketing campaigns connected to customers&rsquo; destination location are achievable using Ariadne Navigation.
We enable and lead you to hyperlocal marketing.
              </p>
              </div>

            </div>
            <div className={styles.N1img}>
              <Image className='rounded-lg' src = {nagivate}  alt = 'navi'  height={560} width={700} />
            </div>

          </div>

          <div className={styles.sectionN2}>
            <div className={styles.N2img}>
          <Image src = "/Photos/Pages/Navigation/phone3.png" height={550} width={700} />
            </div>
            <div className={styles.N2content}>
              <h4>
            Seamless Customer Experience

              </h4>
            <p>
 
 Ariadne Navigation allows you to provide seamless customer experience right from visitors&lsquo; entry in your premises. We give the opportunity to learn about your customers&lsquo; navigation patterns, which you can utilize to optimise your business strategies.
 
            </p>
            </div>
            
            </div>

            


          
      </main>
      <div className={`  py-8   bg-black text-white content-center justify-evenly flex flex-col items-center ${styles.navB} `}>
               <div>
               <h1>Why Ariadne?</h1>
               </div>
                <div className='w-full  grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1  content-center items-center justify-around text-xl 2xl:text-3xl px-6 gap-3 wrap xl:justify-items-center '>
                  <div className='xl:w-1/3 2xl:w-2/3'><h5>Browser-Based (No-app) Navigation</h5></div>
                  <div className='xl:w-1/3 2xl:w-1/4'><h5>Award Winning Accuracy</h5></div>
                  <div className='xl:w-1/3 2xl:w-1/4'><h5>No Infrastructure Needed</h5></div>
                  <div className='xl:w-1/3 2xl:w-1/4'><h5>Multi Storey Differentiation</h5></div>
                </div>
            </div>
            <div className="my-8 mx-4">
              <h1 className='text-center my-4'>Discover use cases</h1>
                <div className="grid 2xl:grid-cols-6 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 xl:gap-x-20">
                <div className="w-full relative"  >
                  <img className="object-cover relative brightness-50 rounded-md"  width="100%" height="100%" 
                  src="/Photos/Pages/retail2.jpg" alt="" />
                  <Link href="/industries/retail-stores"><a><p className="inline-block absolute bottom-3 right-7 z-40 text-white hover:text-yellow-400">Retail</p></a></Link>
                  
                </div>
                <div className="w-full relative"  >
                  <img className="object-cover relative brightness-50 rounded-md"  width="100%" height="100%" 
                  src="/Photos/Pages/mall.jpg" alt="" />
                     <Link href="/industries/shopping-centers"><a><p className="inline-block absolute bottom-3 right-7 z-40 text-white hover:text-yellow-400">Malls</p></a></Link>
                     
                </div>
                <div className="w-full relative"  >
                  <img className="object-cover relative brightness-50 rounded-md"  width="100%" height="100%" 
                  src="https://raw.githubusercontent.com/antnguyen9919/ariadne-maps-next/hasim/public/Photos/Pages/Navigation/Airport.png" alt="" />
                   <Link href="/industries/airports"><a><p className="inline-block absolute bottom-3 right-7 z-40 text-white hover:text-yellow-400">Airports</p></a></Link>
                  
                </div>
                <div className="w-full relative"  >
                  <img className="object-cover relative brightness-50 rounded-md"  width="100%" height="100%" 
                  src="/Photos/Pages/transport.jpg" alt="" />
                   <Link href="/industries/transportation"><a><p className="inline-block absolute bottom-3 right-7 z-40 text-white hover:text-yellow-400">Transportation</p></a></Link>
             
                </div>
                <div className="w-full relative"  >
                  <img className="object-cover relative brightness-50 rounded-md"  width="100%" height="100%"
                  src="/Photos/Pages/cities.jpg" alt="" />
                   <Link href="/industries/cities"><a><p className="inline-block absolute bottom-3 right-7 z-40 text-white hover:text-yellow-400">Cities</p></a></Link>
                
                </div>
                <div className="w-full relative"  >
                  <img className="object-cover relative brightness-50 rounded-md"  width="100%" height="100%"
                  src="/Photos/Pages/hospitality2.jpg" alt="" />
                   <Link href="/industries/hospitality"><a><p className="inline-block absolute bottom-3 right-7 z-40 text-white hover:text-yellow-400">Hospitality</p></a></Link>
                    
                </div>
                </div>
            </div>

      <div className={styles.blackCTA}>
        <div className={styles.innerCTA}>
        <h1 className='text-center text-white'>Work together?</h1>
      <Link href ="/letstalk"><a><button className=' bg-red-600 hover:bg-red-700 py-1 px-3 text-lg mt-5'>Let&rsquo;s Talk</button></a></Link>
      </div>
        </div>
    </div>
  )
}

export default ariadneNavigation