
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"
import { variant1,transition } from '../../sections/animations';
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
import Head from 'next/head'
const cities = () => {
  return (
    <>
    <Head>
        <title>Cities</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
    
    <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}  >
      <main>
      <ParallaxProvider>
      <Parallaximg imgsrc="/Photos/Pages/cities.jpg" height="110vh" opacity=".5" >
      <div className={styles.banner} >
              
              
              <h1 className="text-center font-6xl font-extrabold ">CITIES</h1>
            <h3 className='text-center'>Cities and government entities are flooded with people throughout the whole year.

Ariadne Maps helps them better serve their residents and improve their experience
  
  </h3>
              </div>

      </Parallaximg>

   </ParallaxProvider>
        <div>
            
            
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Retail.svg" />
                  <h4>Shopping Streets

</h4>
                  <p>How many people visit a shopping street, how much time they spend, which stores they visit and much more data is provided by Ariadne Maps solutions </p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/public.png" />
                  <h4>Service Buildings</h4>
                  <p>Let your visitors have a better experience in your entities with faster processing and minimum queue time, e.g., in foreigners office, by using our indoor analytics 



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/ad.png" />
                  <h4>Public Advertising

</h4>
                  <p>Measure the success of your outdoor and indoor marketing, quantify how much billboard advertising converts and improve your strategies accordingly 



</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/personas.png" />
                  <h4>Identify Personas

</h4>
                  <p>Cluster people based on certain attributes, customize your service and marketing based on these personas

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/contract.png" />
                  <h4>Rent Prices

</h4>
                  <p>With Ariadne&rsquo;s footfall data, you can measure how much each building/property attracts, and adjust your rent/lease prices based on this traffic data





</p>
                </div>
               
            </div>

           

        </div>


   </main>
    </motion.div>
    
    </>
    
  )
}

export default cities