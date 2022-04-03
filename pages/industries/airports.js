import { variant1,transition } from '../../sections/animations';

import React from 'react';
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"
import Image from 'next/image';
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';

function Airport() {
  return <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}    className ={styles.all}>
    

   <main >
   <ParallaxProvider>
      <Parallaximg imgsrc="/Photos/Pages/airport.jpg" height="110vh" opacity=".5" >
      <div className={styles.banner} >
              
              
              <h1 className="text-center font-6xl font-extrabold ">AIRPORTS</h1>
            <h3 className='text-center'>Ariadne Maps helps airports understand and serve their passengers better, provide useful services, and do more targeted marketing campaigns
  
  </h3>
              </div>

      </Parallaximg>

   </ParallaxProvider>

        <div >
            
            
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/Route.png" />
                  <h4>Passenger Insights</h4>
                  <p>Measure the time it takes your passengers to reach the gate from the moment they enter the airport, and the pattern they follow. </p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/queue.png" />
                  <h4>Minimize Queue Time</h4>
                  <p>Measure the time it takes your passengers to reach the gate from the moment they enter the airport, and the pattern they follow.

</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Mall.svg" />
                  <h4>Shopping Area</h4>
                  <p>Measure the time it takes your passengers to reach the gate from the moment they enter the airport, and the pattern they follow.

</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/routes-and-x.png" />
                  <h4>Shorter Paths</h4>
                  <p>With the data and insights we offer, you can improve the processes to reduce lines at airports, knowing that for those customers that aren&rsquo;t planning ahead, they&rsquo;re going to choose your provided line since it&rsquo;s the shortest</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/manager.png" />
                  <h4>Check-in and Security</h4>
                  <p>You can see the number of people waiting at check-in and security areas, for how long they have been waiting and the average waiting time. Having this data, you can allocate the staff optimally and ensure the customer satisfaction.



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/04/areas.png" />
                  <h4>Efficient Areas
</h4>
                  <p>
                  See which areas are visited the most and which areas are not visited at all! This way, you can analyze the density of each space and maximize the efficiency.



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


  </motion.div>;
}

export default Airport;
