
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"

const variants = {
  hidden:{opacity: 0, x:0, y:20},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:20}
}
const hospitality = () => {
  return (
    <motion.div initial="hidden" animate="enter" exit="exit" variants={variants} transition={{duration: 0.2, type: 'easeInOut'}}  >
      
   <main>
        <div>
            <div>
            <h1 className="text-center">Hospitality</h1>
          <p className='text-center'>Ariadne Maps helps retailers understand their customers, generate their conversion funnel,

identify their unnecessary costs and increase their revenues


</p>
            </div>
            
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/Route.png" />
                  <h4>Guest Navigation</h4>
                  <p>Ariadne Navigation enables you to offer a better experience to your guests via navigating them to their destinations with great convenience, shorter routes

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/queue.png" />
                  <h4>Push notifications

</h4>
                  <p>Notifications based on location and history are to be pushed, e.g., happy to host you again, enjoy your 20% discount, or, breakfast is to start in 20 minutes, here are the directions…

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Mall.svg" />
                  <h4>Review and Feedback

</h4>
                  <p>To improve your service, short online surveys can be pushed to your guests and their feedback can be received, e.g., how would you rate your experience with the pool today…



</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/routes-and-x.png" />
                  <h4>Strategy Optimization

</h4>
                  <p>Identify which of your actions, services or promotions bring you the best return, dwell time and loyalty, and work on the most reasonable one</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/manager.png" />
                  <h4>Guest Familiarity

</h4>
                  <p>YEncourage your guests to enjoy your hotel and increase spending via introducing and promoting your amenities, venues and services



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/areas.png" />
                  <h4>Conversion Funnel


</h4>
                  <p>
                  Let your concessionaires acquire their conversion funnel of customers, and base your lease agreements on Ariadne&rsquo;s traffic data





</p>
                </div>
            </div>

           

        </div>


   </main>

    </motion.div>
  )
}

export default hospitality