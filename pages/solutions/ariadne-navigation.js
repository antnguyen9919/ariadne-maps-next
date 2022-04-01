import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import styles from '../../styles/Solutions.module.css'
const variants = {
  hidden:{opacity: 0, x:0, y:20},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:20}
}
const herovariants = {
  hidden:{opacity: 0, x:-200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:-200}

}
const heroVvariants = {
  hidden:{opacity: 0, x:0, y:-200},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:-200}

}


const ariadneNavigation = () => {
  return (
    <div>
      <Head>
        <title>Ariadne Navigation</title>
        <meta name="description" content="Ariadne Navigation" />
        <link rel="icon" href="https://www.munich-startup.de/wp-content/uploads/2020/10/Ariadne-Maps-GmbH.jpeg" />
       
      </Head>
      <motion.div exit={{opacity:0}}  className={styles.hero} >
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

      <main className={styles.main}>
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
              <Image src = "/Photos/Pages/Navigation/navigate.png" alt = 'navi' height={420} 
              width={500} />
            </div>

          </div>

          <div className={styles.sectionN2}>
            <div className={styles.N2img}>
          <Image src = "/Photos/Pages/Navigation/phone3.png" height={332} width={465} />
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

            <div className='h-80 py-8 bg-black text-white content-center justify-evenly flex flex-col items-center'>
               <div>
               <h1>Why Ariadne?</h1>
               </div>
                <div className='w-full  grid xl:grid-cols-4 grid-cols-2 content-center items-center justify-around text-xl px-3 gap-3 wrap justify-items-center'>
                  <div className='w-1/3'><h5>Browser-Based (No-app) Navigation</h5></div>
                  <div className='w-1/3'><h5>Award Winning Accuracy</h5></div>
                  <div className='w-1/3'><h5>No Infrastructure
Needed</h5></div>
                  <div className='w-1/3'><h5>Multi Storey Differentiation</h5></div>
                </div>
            </div>


          
      </main>
      <div className={styles.blackCTA}>
        <div className={styles.innerCTA}>
        <h1 className='text-center text-white'>Work together?</h1>
      <Link href ="/company/contact"><a><button className='animate-pulse bg-red-600 hover:bg-red-700 py-1 px-3 text-lg mt-5'>Let&rsquo;s Talk</button></a></Link>
      </div>
        </div>
    </div>
  )
}

export default ariadneNavigation