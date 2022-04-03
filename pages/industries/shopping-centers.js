
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"
import { variant1,transition } from '../../sections/animations';
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
const variants = {
  hidden:{opacity: 0, x:0, y:20},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:20}
}
const Shopping = () => {
  return (
    <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}  >
      <main>
      <ParallaxProvider>
      <Parallaximg imgsrc="/Photos/Pages/mall.jpg" height="110vh" opacity=".5" >
      <div className={styles.banner} >
              
              
              <h1 className="text-center font-6xl font-extrabold ">SHOPPING CENTERS</h1>
            <h3 className='text-center'>Ariadne Maps works with the leading mall management companies worldwide and enables them to take data-based, strategic decisions
  
  </h3>
              </div>

      </Parallaximg>

   </ParallaxProvider>
        <div>
            
            
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Analytics.svg" />
                  <h4>Get Ready  </h4>
                  <p>Be prepared for your prime times! You can know your peak times in advance, get well prepared and make the most out of your busiest periods!

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/bell.png" />
                  <h4>No Surprises
</h4>
                  <p>Don&rsquo;t encounter with surprises! You can advise your tenants when to expect mass of customers, weekly or daily, and maintain the customer satisfaction.



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/space.png" />
                  <h4>Data-Driven Plan
</h4>
                  <p>Layout of shopping centers, marketing campaigns and tenant mix can be optimally designed with the detailed and precise data that we offer.



</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/handshake.png" />
                  <h4>Tenant Relations
</h4>
<p>Do business with accurate and detailed data! Traffic data over time can be provided to tenants, allowing you to justify your investments in the mall and charge your tenants accordingly.

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/contract.png" />
                  <h4>Leasing Space
</h4>
<p>Potential retail tenants can be attracted by delivering reliable traffic data in the mall, instead of intuition or rough estimates. Longer lease terms would also be desired with this data.

</p>



                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/Updates.png" />
                  <h4>Mall Upgrades

</h4>
                  <p>
                  Take right actions at the right time and space! Arrangements for a new store, extension can be made in line with data gathered. Keep in mind that tenants want to see your mall improvements are getting results.





</p>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.column}>
                  <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/cart-in-phone.png" />
                  <h4>In-Premises Marketing
</h4>
                  <p>Traffic trends can help businesses to offer targeted marketing and adjust it to customers in the store. It is also advantageous to identify your return on marketing.

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/chess.png" />
                  <h4>Accurate Strategies
</h4>
                  <p>If a mall has few visitors, then the marketing should be focused on obtaining more traffic. If the traffic is high, but conversion is low, product lines, pricing or staffing should be enhanced.



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/more.png" />
                  <h4>More </h4>
                  <p>
                  Hour by hour traffic data and trends, comparison of visitor averages by time, unique visits compared to repeating, bounce rate, high demand products, strategy performance…




</p>
                </div>
            </div>

        </div>


   </main>

    </motion.div>
  )
}

export default Shopping