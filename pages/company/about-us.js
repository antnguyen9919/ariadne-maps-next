
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"
import { variant1,transition } from "../../sections/animations"
import Image from 'next/image'

const AboutUs = () => {
  return (
    <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}  >
      
   <main>
        <div>
            <div className='xl:px-10 px-4'>
            <h1 className="text-center">

Ariadne Maps</h1>
          <p >Ariadne Maps is a high tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. With this approach, it enables indoor and outdoor localization in many industries such as transportation, malls as well as retailers and airports. We make use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their infrastructure for e.g., minimizing congestion, having a better targeted advertising and marketing while maximizing satisfaction and experience of consumers. <br/> <br/>
          Ariadne Maps is based in Munich, Germany and has been operating for years. With our rapid growth, we vision to enable physical businesses to leverage the data they have been exposed through the whole time. In this vision, our strong team, advisors, investors and partners give us the confidence to advance, expand and succeed.

</p>
            </div>
            <div className="xl:px-10 mt-8 px-4 py-8">

              <h3 className='text-center xl:text-left mb-4' >European Union</h3>
              <div className="flex mb-8 xl:flex-row md:flex-row flex-col justify-between  items-center" >
                <div className='w-32' >
                  <img src = "https://ariadnemaps.com/wp-content/uploads/2021/03/European-Union.png" alt = "EU"  width={"100%"} />
                </div>

                <div className="xl:w-2/3 w-100 xl:text-left text-center">Ariadne Maps is a European company, proudly supported by European Union.</div>
              </div>
              <h3 className='text-center xl:text-left mb-4'>EIT Digital</h3>
              <div className="flex xl:flex-row md:flex-row flex-col justify-between   items-center" >
                <div className='w-32' >
                  <img src = "https://ariadnemaps.com/wp-content/uploads/2020/05/logo-eitdigital.jpg" alt = "EU"  width={"100%"} />
                </div>

                <div className="xl:w-2/3 w-100  xl:text-left text-center ">This activity has received funding from the European Institute of Innovation and Technology (EIT). This body of the European Union receives support from the European Unions Horizon 2020 research and innovation programme.</div>
              </div>
            </div>
                <h1 className='text-center' >Ariadne Team</h1>

            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Georgios.png" />
                  <h4>Dipl.-Ing. Georgios Pipelidis



</h4>
                  <p>CEO and Co-Founder



</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Nikos.png" />
                  <h4>Dipl.-Ing. Nikos Tsiamitros




</h4>
                  <p>CTO and Co-Founder




</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Nam.png" />
                  <h4>Nam Le Duc




 </h4>
                  <p>Full Stack Developer



</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Mustafa.png" />
                  <h4>Mustafa Parlak




 </h4>
                  <p>Sales Representative





</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Hasim.png" />
                  <h4>Hasim Koc




</h4>
                  <p>Sales Representative









</p>
                </div>
                <div className={styles.column}>
                <img src ="https://ariadnemaps.com/wp-content/uploads/2021/03/Victoria.png" />
                  <h4>Victoria Tsiamitrou





</h4>
                  <p>
                  Country Manager (Greece RD)









</p>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.column}>
                  <img src ="
                  https://ariadnemaps.com/wp-content/uploads/2021/03/Pati.png"
                   />
                  <h4>
                    Pati Flannery
                      </h4>
                  <p>Strategic Partnerships, N. America
                      </p>
                </div>
                <div className={styles.column}>
                <img src ="
                https://ariadnemaps.com/wp-content/uploads/2021/03/Francesco.png
                " />
                  <h4>
                    Francesco Vasta
                        </h4>
                  <p>
                    Sales Representative
                    </p>
                </div>
                <div className={styles.column}>
                <img src ="
                https://ariadnemaps.com/wp-content/uploads/2021/03/Wasiq.png
                " />
                  <h4>
                    Wasiq Rumaney
                    </h4>
                  <p>
                  Senior Data Engineer
                  </p>
                </div>

                </div>

                
                <div className={styles.row}>
                <div className={styles.column}>
                  <img src ="
https://ariadnemaps.com/wp-content/uploads/2021/08/Najeeb.png                  "
                   />
                  <h4>
                  Najeeb Khan                      </h4>
                  <p>
                  Computer Vision Engineer

</p>
                </div>
                <div className={styles.column}>
                <img src ="
https://ariadnemaps.com/wp-content/uploads/2021/03/Kostas.png                " />
                  <h4>
                  Kostas Theocharoulis

</h4>
                  <p>
                  Data Engineer

</p>
                </div>
                <div className={styles.column}>
                <img src ="
https://ariadnemaps.com/wp-content/uploads/2022/01/Athanasios2.png                " />
                  <h4>
                  Athanasios Brianis

</h4>
                  <p>
                  UX Data Engineer

</p>
                </div>

                </div>
                <div className={styles.row}>
                <div className={styles.column}>
                  <img src ="
https://ariadnemaps.com/wp-content/uploads/2021/08/KostasZ.png                  "
                   />
                  <h4>
                  Kostas Ziampakas

</h4>
                  <p>
                  Onboarder

</p>
                </div>
                <div className={styles.column}>
                <img src ="
https://ariadnemaps.com/wp-content/uploads/2021/08/KostasK.png                " />
                  <h4>
                  Kostas Kitsikidis

</h4>
                  <p>
                    Sales Representative
                    </p>
                </div>
                <div className={styles.column}>
                <img src ="
https://ariadnemaps.com/wp-content/uploads/2021/08/Shahab.png                " />
                  <h4>
                  Md Shahabuddin

</h4>
                  <p>
                  Wireless Network Engineer

</p>
                </div>

                </div>
                <div className={styles.row}>
                <div className={styles.column}>
                  <img src ="
https://ariadnemaps.com/wp-content/uploads/2022/01/Precious.png                  "
                   />
                  <h4>
                  Precious Adipere

</h4>
                  <p>
                  Procurement Specialist

</p>
                </div>
                <div className={styles.column}>
                <img src ="
https://ariadnemaps.com/wp-content/uploads/2022/01/Mahade.png                " />
                  <h4>
                  Mahade Sarkar

</h4>
                  <p>
                  Embedded Systems Engineer

</p>
                </div>
                <div className={styles.column}>
                <img src ="
https://ariadnemaps.com/wp-content/uploads/2022/01/Karolina.png                " />
                  <h4>
                  Karolina Piekarz

</h4>
                  <p>
                  Administrative Assistant

</p>
                </div>

                </div>
                <div className={styles.row}>
                <div className={styles.column}>
                  <img src ="
https://ariadnemaps.com/wp-content/uploads/2022/01/Elli.png             "
                   />
                  <h4>
                  Elli Dimopoulou


</h4>
                  <p>
                  Data Scientist


</p>
                </div>
                <div className={styles.column}>
                <img src ="
https://ariadnemaps.com/wp-content/uploads/2022/01/Roman.png               " />
                  <h4>
                  Roman Kees


</h4>
                  <p>
                  Data Engineer


</p>
                </div>
                <div className={styles.column}>
                <img src ="
https://ariadnemaps.com/wp-content/uploads/2022/01/Karolina.png                " />
                  <h4>
                  Karolina Piekarz

</h4>
                  <p>
                  Administrative Assistant

</p>
                </div>

                </div>

        </div>


   </main>

    </motion.div>
  )
}

export default AboutUs