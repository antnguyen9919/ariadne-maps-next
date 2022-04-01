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
            <video webkit-playsInline playsInline className='pointer-events-none' width="100%" src="/Videos/h2.mp4" autoPlay loop muted type = "videos/mp4"/>
            </div>
          </div>
      </main>
    </div>
  )
}

export default ariadneNavigation