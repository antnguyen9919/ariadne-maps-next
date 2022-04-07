
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"
import { variant1,transition } from '../../sections/animations';
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
import Head from 'next/head'
const Retails = () => {
  return (

  <>
    <Head>
    <title>Retail Stores</title>
    <meta name="description" content="Ariadne Maps GmbH" />
    <link rel="icon" href="/ariadneicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
   
  </Head>
    <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}  >
      
   <main>
   <ParallaxProvider>
      <Parallaximg imgsrc="/Photos/Pages/retail2.jpeg" height="110vh" opacity=".5" >
      <div className={styles.banner}>
              
              
              <h1  className="text-center font-6xl font-extrabold ">RETAIL STORES</h1>
            <h3  className='text-center'>Ariadne Maps helps retailers understand their customers, generate their conversion funnel,

identify their unnecessary costs and increase their revenues
  
  </h3>
              </div>

      </Parallaximg>

   </ParallaxProvider>
        <div>
            
            
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/employee-1.png" />
                  <h4>Labour Allocation

</h4>
                  <p>When visitors enter the store today, they are most ready to buy. Following the traffic, allocate the labour accurately and ensure the satisfaction of your customers.

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/staff.png" />
                  <h4>Conversion Rate


</h4>
                  <p>Want to figure out how many people convert to be your customers? Measure the visitors passing by your store and compare them to those entering in.



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/Product-search.png" />
                  <h4>Product Success


 </h4>
                  <p>With the provided precise data, measure how many visitors each of your products attract! Then compare it to your sales to find out the success of your products.

</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Retail.svg" />
                  <h4>Showcase Performance


 </h4>
                  <p>Find out how many people are stopping by your shopping window and how much time they spend there, what they do next. Get all the data to optimize your shopping window!



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/cart-in-phone.png" />
                  <h4>Optimize Spending


</h4>
                  <p>Marketing budgets are finite, which makes you use it to the full potential. Our solution enables marketers to target their spending where it is needed the most.







</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/space.png" />
                  <h4>Space Efficiency



</h4>
                  <p>
                  See which areas are visited the most and which areas are not visited at all! This way, you can analyze the density of each space and maximize the efficiency.







</p>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.column}>
                  <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/manager.png" />
                  <h4>Supervision of Associates

</h4>
                  <p>Store associates can be tracked and allocated to where they are needed the most. They can be optimally supervised to see their promised effort.

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/campaign-ratio.png" />
                  <h4>Marketing Success

</h4>
                  <p>Calculate the number of your visitors before and after the marketing campaign! See how much increase your marketing strategy leads for each product.



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/ring.png" />
                  <h4>Promotions and Discounts

</h4>
                  <p>
                  93% of consumers will use offers throughout the year, which means retailers need to have a strategy that tracks and adapts pricing planning to broader market forces.




</p>
                </div>
            </div>

        </div>


   </main>

    </motion.div>
  </>
  )
}

export default Retails