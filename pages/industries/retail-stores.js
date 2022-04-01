
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"

const variants = {
  hidden:{opacity: 0, x:0, y:20},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:20}
}
const Retails = () => {
  return (
    <motion.div initial="hidden" animate="enter" exit="exit" variants={variants} transition={{duration: 0.2, type: 'easeInOut'}}  >
      
   <main>
        <div>
            <div>
            <h1 className="text-center">Retail

Stores</h1>
          <p className='text-center'>Ariadne Maps helps retailers understand their customers, generate their conversion funnel,

identify their unnecessary costs and increase their revenues

</p>
            </div>
            
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/Route.png" />
                  <h4>Labour Allocation

</h4>
                  <p>Measure the time it takes your passengers to reach the gate from the moment they enter the airport, and the pattern they follow. </p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/queue.png" />
                  <h4>Optimize Spending
</h4>
                  <p>Marketing budgets are finite, which makes you use it to the full potential. Our solution enables marketers to target their spending where it is needed the most.



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Mall.svg" />
                  <h4>Space Efficiency
 </h4>
                  <p>See which areas are visited the most and which areas are not visited at all! This way, you can analyze the density of each space and maximize the efficiency.



</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/routes-and-x.png" />
                  <h4>Supervision of Associates
 </h4>
                  <p>Store associates can be tracked and allocated to where they are needed the most. They can be optimally supervised to see their promised effort.

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/manager.png" />
                  <h4>Marketing Success
</h4>
                  <p>Calculate the number of your visitors before and after the marketing campaign! See how much increase your marketing strategy leads for each product.





</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/areas.png" />
                  <h4>Promotions and Discounts

</h4>
                  <p>
                  93% of consumers will use offers throughout the year, which means retailers need to have a strategy that tracks and adapts pricing planning to broader market forces.





</p>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.column}>
                  <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Analytics.svg" />
                  <h4>Data-Driven Growth</h4>
                  <p>Growth of your airport is all about being data-driven, rather than relying on anticipation or gut feeling. The more insight you capture, the more you correlate. </p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/more.png" />
                  <h4>Inexpensive Testing</h4>
                  <p>You develop hypothesis to figure out customer behavior, either by experiments or conducting use surveys, which incur you high costs. Using our inexpensive solution, you can test it with reliable data.

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/Route.png" />
                  <h4>More </h4>
                  <p>
                  Employee supervision, machine/asset tracking, visitor averages comparison over time, unique versus repeating passengers, country of origin of your visitors, real time traffic data and trends…


</p>
                </div>
            </div>

        </div>


   </main>

    </motion.div>
  )
}

export default Retails