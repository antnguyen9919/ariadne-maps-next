
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"

const variants = {
  hidden:{opacity: 0, x:0, y:20},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:20}
}
const cities = () => {
  return (
    <motion.div initial="hidden" animate="enter" exit="exit" variants={variants} transition={{duration: 0.2, type: 'easeInOut'}}  >
      <main>
        <div>
            <div>
            <h1 className="text-center">Cities

</h1>
          <p className='text-center'>Cities and government entities are flooded with people throughout the whole year.

Ariadne Maps helps them better serve their residents and improve their experience

</p>
            </div>
            
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/Route.png" />
                  <h4>Shopping Streets

</h4>
                  <p>How many people visit a shopping street, how much time they spend, which stores they visit and much more data is provided by Ariadne Maps solutions </p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/queue.png" />
                  <h4>Service Buildings</h4>
                  <p>Let your visitors have a better experience in your entities with faster processing and minimum queue time, e.g., in foreigners office, by using our indoor analytics 



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Mall.svg" />
                  <h4>Public Advertising

</h4>
                  <p>Measure the success of your outdoor and indoor marketing, quantify how much billboard advertising converts and improve your strategies accordingly 



</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/routes-and-x.png" />
                  <h4>Identify Personas

</h4>
                  <p>Cluster people based on certain attributes, customize your service and marketing based on these personas

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/manager.png" />
                  <h4>Rent Prices

</h4>
                  <p>With Ariadne&rsquo;s footfall data, you can measure how much each building/property attracts, and adjust your rent/lease prices based on this traffic data





</p>
                </div>
               
            </div>

           

        </div>


   </main>
    </motion.div>
  )
}

export default cities