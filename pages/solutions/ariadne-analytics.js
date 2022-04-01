import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import styles from '../../styles/Solutions.module.css'

const variants = {
  hidden:{opacity: 0, x:200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:200,y:0}
}
const herovariants = {
  hidden:{opacity: 0, x:-200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:-200}

}
const heroVvariants = {
  hidden:{opacity: 0, x:200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:200,y:0}

}




const AriadneAnalytics = () => {
  return (
    <div>
      <Head>
        <title>Ariadne Analytics</title>
        <meta name="description" content="Ariadne Analytics" />
        <link rel="icon" href="https://www.munich-startup.de/wp-content/uploads/2020/10/Ariadne-Maps-GmbH.jpeg" />
       
      </Head>
      <motion.div exit={{opacity:0}}  className={styles.hero} >
          <div className={styles.heroContainer}>

            <div className = {styles.heroTextContainer}>
            <div className={styles.heroText}>
            <motion.h1 initial="hidden" animate="enter" exit="exit" variants={herovariants} transition={{duration: 0.5, type: 'spring', bounce: 0.3}} >Ariadne
Analytics</motion.h1>
              <motion.p initial="hidden" animate="enter" exit="exit" variants={herovariants} transition={{duration: 0.2, type: 'easeInOut'}}>Discover the potential of Ariadne Analytics for your business. Get to know your customers and explore the value behind it</motion.p>
              
            </div>
            </div>

            <div className={styles.heroScreen} >
            
            <motion.img initial="hidden" animate="enter" exit="exit" variants={heroVvariants} transition={{duration: 0.5, type: 'spring', bounce: 0.3 }} src = "/Photos/Pages/Analytics/Laptopwp.png" />
            </div>

          </div>
        </motion.div>

      <main className={styles.main}>
        
      <div className={styles.gifbox} >
            <div className = {styles.giftext}>
              
              <p>Ariadne Analytics is the heart of the Ariadne Platform, and it can be used for people counting, determine retail conversion rates , reduce dwell timesand other useful customer success metrics. We place a high importance on privacy and employ anonymous tracking systems.</p>
            </div>
            <div className = {styles.gif}>
            <video  playsInline className='pointer-events-none' width="100%" src="/Videos/h1.mp4" autoPlay loop muted type = "videos/mp4"/>
            </div>
          </div>

      <div className={styles.sectionA1}>
          <h1>
          Real-Time Analytics
          </h1>
          <p>
          When do your consumers prefer to shop during the day, and how many people are now in your store and where are they located? We provide answer to those questions with our intuitive dashboard.
          </p>
          <div className={styles.trioContainer} >
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/Total.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/Floor1.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/Floor2.png" alt="st"  />
            </div>
          </div>

         
         <img className='w-full mt-2' src = "/Photos/Pages/Analytics/Daily.png"/>
         


      </div>
      <div className={styles.sectionA2}>
        <h1>Basic Analytics</h1>
          <p>Recognize the most visited areas of your establishment and tailor your services there to improve your customer&rsquo;s experience. </p>
          <div className={styles.trioContainer} >
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/BasicAnalytics/h1a.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/BasicAnalytics/h2.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img   src="/Photos/Pages/Analytics/BasicAnalytics/h3.png" alt="st" />
            </div>
          </div>
           

          <p>Understand what interests your customers, and how much time do they spend to each section in your premises? Take advantage of and cater to your customers&rsquo; needs.</p>
          <div className={styles.trioContainer} >
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/BasicAnalytics/h4.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/BasicAnalytics/h5.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/BasicAnalytics/h6.png" alt="st" />
            </div>
          </div>
          <p>Employ our queue management system to get notified when client wait times near the cashier counter are getting longer and reduce the dwell time. </p>

          <div className={styles.trioContainer} >
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/BasicAnalytics/h7.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/BasicAnalytics/h8.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/BasicAnalytics/h9.png" alt="st" />
            </div>
          </div>
      </div>
      <div className={styles.sectionA3}>
        <h1>Advanced Analytics</h1>
        <p>Cool graphics and intuitive heat maps for your entire store that you may use to better manage your space.       </p>
        <div className={styles.duoContainer} >
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/Total.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/Floor1.png" alt="st" />
            </div>
            
          </div>
        <p>Utilize our user-friendly graphs to plan practical activities and to improve your operational strategies.</p>

        <div className={styles.duoContainer} >
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/Total.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/Floor1.png" alt="st" />
            </div>
            
          </div>
        <p>Study your store&rsquo;s customer flow patterns and concentrate on them to improve your customers Journey and boost your profits.</p>

        <div className={styles.duoContainer} >
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/Total.png" alt="st" />
            </div>
            <div className={styles.singleSnap}>
              <img src="/Photos/Pages/Analytics/Floor1.png" alt="st" />
            </div>
            
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

export default AriadneAnalytics