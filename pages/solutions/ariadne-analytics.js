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
      <div className={`${styles.gifbox}`} >
            <div className = {styles.giftext}>
              
              <p>Ariadne Analytics is the heart of the Ariadne Platform, and it can be used for people counting, determine retail conversion rates , reduce dwell timesand other useful customer success metrics. We place a high importance on privacy and employ anonymous tracking systems.</p>
            </div>
            <div className = {styles.gif}>
            <video webkit-playsInline playsInline className='pointer-events-none' width="100%" src="/Videos/h1.mp4" autoPlay loop muted type = "videos/mp4"/>
            </div>
          </div>

      <div className={styles.sectionA1}>
          <h1>
          Real-Time Analytics
          </h1>
          <p>
          When do your consumers prefer to shop during the day, and how many people are now in your store and where are they located? We provide answer to those questions with our intuitive dashboard.
          </p>
      </div>
      <div className={styles.sectionA2}>

      </div>
      <div className={styles.sectionA3}>

      </div>


      </main>
    </div>
  )
}

export default AriadneAnalytics