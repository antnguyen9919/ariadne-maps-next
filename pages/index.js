import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import smallScreen from "../public/Photos/smallScreen.png"
import screens from '../public/Photos/screens.png'

import eAnalytics from '../public/Photos/enlarge/eAnalytics.png'
import ERP from '../public/Photos/enlarge/ERP.png'
import eCRM from '../public/Photos/enlarge/eCRM.png'

import {motion} from 'framer-motion'


import { useScroll } from '../components/useScroll'

import Brands from '../components/Brands'
import HomeBlogPosts from '../sections/HomeBlogPosts'

import CheckIcon from '@mui/icons-material/Check';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import  VideoCarousel  from "../sections/VideoCarousel"



import Modal from 'react-modal';

import Carousel from 'react-multi-carousel';

import { useState } from 'react'

import styles from '../styles/Home.module.css'
import {Testimonials} from '../components'





const variants = {
  hidden:{opacity: 0, x:0, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:0}
}
const Vvariants = {
  hidden:{opacity: 0, x:0, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:0}
}
const DUvariants= {
  hidden:{opacity: 0, x:0, y:200},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:1,x:0,y:0}

}
const LRvariants ={
  hidden:{opacity: 0, x:-200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:-200,y:0}

}
const RLvariants ={
  hidden:{opacity: 0, x:200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:200,y:0}

}






export default function Home() {
  const [element,controls] = useScroll();
 
  const [element2,controls2] = useScroll();
  const [element3,controls3] = useScroll();
  const [element4,controls4] = useScroll();
  const [element5,controls5] = useScroll();
  const [element6,controls6] = useScroll();
  const [element7,controls7] = useScroll();
  const [element8,controls8] = useScroll();
  const [element9,controls9] = useScroll();



  const customStyles = {
    overlay: {
      transition: '0.6s ease-out',
      position: 'fixed',
      zIndex:1000,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
     
      overflow: 'auto',
      zIndex:300,
      // width: '40%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      height: '100vh',
      width: '99%',
      zIndex:'9999',
      transform: 'translate(-50%, -50%)',
    },
  };
  


  const responsive = {
  
    desktop: {
      breakpoint: { max: 4000, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

 
  return (
   <div >
      <div >
      <Head>
        <title>Ariadne Maps</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>

        <div className={styles.all}>
        <div  className={`${styles.hero} hidden xl:block 2xl:block`} >
          <div className={styles.heroContainer}>

            <div className = {styles.heroTextContainer}>
            <div className={styles.heroText}>
            <h1  >People Flow To Actionable Insights</h1>
              <p>Turn your existing customer traffic into an additional source of revenue</p>
              <Link href ="/letstalk"><a><button className=' bg-red-600 hover:bg-red-700 py-1 px-3 2xl:text-lg'>Let&rsquo;s Talk</button></a></Link>
            </div>
            </div>

            <div className={`${styles.heroScreen}`} >
            {/* <motion.video className={styles.bgVid} 
            poster = "/Photos/smallScreen.png"
            initial="hidden" animate="enter" exit="exit" variants={Vvariants} transition={{duration: 2, type: 'easeInOut'}} 
            
            src ="/Videos/Hero2vid.mp4" 
            type="videos/mp4" autoPlay playsInline muted loop  /> */}
            <motion.video className={styles.bgVid} 
            poster = "/Photos/smallScreen.png"
            initial="hidden" animate="enter" exit="exit" variants={Vvariants} transition={{duration: 2, type: 'easeInOut'}} 
            
            src ="/Videos/Onscreen.mov" 
            type="videos/mov" autoPlay playsInline muted loop  />
            {/* <Image
            
            layout="responsive"
            alt='homepageScreen'
            priority
            src = {smallScreen} /> */}
            </div>

          </div>
        </div>
        <div className='block h-96 xl:hidden 2xl:hidden flex flex-row justify-center bg-gradient-to-b from-slate-700 to-slate-800 text-white'>
        <div className=' my-auto mx-auto w-5/6' >
            <h1  >People Flow To Actionable Insights</h1>
              <p>Turn your existing customer traffic into an additional source of revenue</p>
              <Link href ="/letstalk"><a ><button className=' bg-red-600 hover:bg-red-700 py-1 px-3 2xl:text-lg mt-4'>Let&rsquo;s Talk</button></a></Link>
            </div>
        </div>

      <main className={styles.main}>
        <Brands/>
        
        <div className={styles.section1} id = "screens" ref = {element}
       

        >
          
          <motion.div
           transition={{duration: 0.4, type: 'easeInOut'}} 
           initial="hidden"  exit="exit"
           variants = {variants} animate = {controls}
          >
          <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 2xl:gap-36 xl:gap-28 gap-x-10 gap-y-3' >
         <div>
            <img src="/Photos/z1.png" alt="people-served" />
         </div>
         <div>
            <img src="/Photos/z2.png"alt="locations-deployed" />
         </div>
         <div>
            <img src="/Photos/z3.png" alt="countries-active" />
         </div>
         <div>
            <img src="/Photos/z4.png" alt="cost savings" />
         </div>
          </div>
          </motion.div>
          
          <motion.div className={styles.section1screens}
          
           >
              <motion.div className={styles.screens}
              transition={{duration: 0.5, type: 'easeInOut'}} 
              initial="hidden"  exit="exit"
              variants = {LRvariants} animate = {controls}
              >
              <Image
            
              alt ='section1Screen'
              src = {screens} layout='responsive'  />
              <div
               >
              <p
              
              className='text-center text-red-500 animate-bounce' ><button className=' hover:scale-105'  onClick={openModal} ><AddCircleOutlineIcon />&nbsp;Enlarge</button></p>
              </div>

              <Modal
            
        isOpen={modalIsOpen}
        preventScroll ={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnEsc={
          true
        }
      >
        
        <div className='overscroll-contain' >
        
        <div className='flex flex-row justify-end overscroll-contain ' >
        <button className='rounded-lg hover:bg-red-600 bg-red-500 px-3 text-white font-semibold'  onClick={closeModal}>close</button>
        </div>
        
        
        
          
            <div className='flex flex-row justify-center items-center'>
            <div className=' w-2/3  items-center justify-center'>
          <h1 className = "text-center text-4xl" >Omnichannel Solution</h1>
      <Carousel infinite 
      
      responsive={responsive}
      autoPlaySpeed={10000}
      itemClass="px-3"
      >
        <div className="flex flex-col items-center justify-center content-center align-center" >
            <div className='w-full' >
            <Image layout='responsive'
            
            src={eAnalytics} alt = 'eanalytics' />
            </div>
            <h1 className='text-3xl text-center' >Ariadne Analytics</h1>
            <p>People Counting, Dwell Time, Heat Map, Alerts, Transitions…</p>
          </div>

          <div className="flex flex-col items-center justify-center content-center align-center " >
            <div className='w-full' >
            <Image layout='responsive' src={eCRM} alt ='ecrm' />
            </div>
            <h1 className='text-3xl text-center' >CRM Optin Tool</h1>
            <p>Customers opt-in and you can see the contact info store by store</p>
          </div>

          <div className="flex flex-col items-center justify-center content-center align-center " >
            <div className='w-full ' >
            <Image layout='responsive' src={ERP} alt ='erp' />
            </div>
            <h1 className='text-3xl text-center' >ERP Data Integration</h1>
            <p>Measure the conversion rate of each product</p>
          </div>

          
          
      </Carousel>
    </div>
            </div>

        
        
      </div>
      </Modal>
              </motion.div>
              <motion.div className={styles.intro}
              transition={{duration: 0.5, type: 'easeInOut'}} 
              initial="hidden"  exit="exit"
              variants = {RLvariants} animate = {controls}
              >
                <p className= ' 2xl:leading-10 '>
                <b>Responsible, Precise, Intuitive</b> <br/>
                Ariadne is the operating system of commercial real estates that provides advanced, 
                real-time customer analytics enabled with award winning accuracy and certified privacy 
                compliance. <br/> Track your customer journey with Ariadne&rsquo;s low-cost, plug-and-play solution - no app, no network connection, no cameras!
                </p>

                <p id={styles.list} className= 'leading-10 2xl:leading-10'>

      <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;Footfall, Dwell Time, Heatmap, Transitions Between Areas, ERP/BI/POS Integration...<br/>
      <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;Workforce Management<br/>
      <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;Asset Tracking<br/>
      <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;Navigation<br/>
   

      </p>
              </motion.div>
          </motion.div>
        </div>

        <div className={styles.section2} ref = {element2}>
          
<motion.div
transition={{duration: 0.4, type: 'easeInOut'}} 
initial="hidden"  exit="exit"
variants = {variants} animate = {controls2}>

<div className='flex flex-row justify-center' >
<h1 className='text-center xl:w-3/4 sm:w-full xs:w-full '>See how our customers are succeeding with Ariadne</h1>
          </div>

</motion.div>
          <motion.div
           transition={{duration: 0.5, type: 'easeInOut'}} 
           initial="hidden"  exit="exit"
           variants = {variants} animate = {controls2}

          
          >
          <VideoCarousel/>
          </motion.div>
        </div>
        <div className={styles.section3} >
              <motion.div
              transition={{duration: 0.4, type: 'easeInOut'}} 
              initial="hidden"  exit="exit"
              variants = {variants} animate = {controls3}>
          <h1 className='text-center'>The Ariadne Platform</h1>

              </motion.div>

          <div className={`${styles.gifbox}   ` } ref = {element3}>
            <motion.div className = {styles.giftext}
             transition={{duration: 0.5, type: 'easeInOut'}} 
             initial="hidden"  exit="exit"
             variants = {LRvariants} animate = {controls3}>
              <h3>Ariadne Analytics</h3>
              <p>Obtain people counting, heatmaps, loyalty rate and more!</p>
              <p>With Ariadne analytics, you can review your performance in real time.</p>
            </motion.div>

            <motion.div className = {styles.gif}
             transition={{duration: 0.5, type: 'easeInOut'}} 
             initial="hidden"  exit="exit"
             variants = {RLvariants} animate = {controls3}
            >
            <video   playsInline className='pointer-events-none' width="100%" src="/Videos/h1.mp4" autoPlay loop muted type = "videos/mp4"/>
            </motion.div>

          </div>

          <div className={`${styles.gifbox}  bg-gradient-to-b from-slate-50 to-slate-200  ` } ref = {element4}>
            <motion.div className = {styles.giftext}
            transition={{duration: 0.5, type: 'easeInOut'}} 
            initial="hidden"  exit="exit"
            variants = {LRvariants} animate = {controls4}
            
            >
              <h3>Ariadne Navigation</h3>
              <p>Navigate your visitors and guests for an enhanced experience!</p>
              <p>Present promotions in your map to engage and enhance your visitors satisfaction.</p>
            </motion.div>
            <motion.div className = {styles.gif}
            transition={{duration: 0.5, type: 'easeInOut'}} 
            initial="hidden"  exit="exit"
            variants = {RLvariants} animate = {controls4}
            
            >
            <video   playsInline className='pointer-events-none' width="100%" src="/Videos/h2.mp4" autoPlay loop muted type = "videos/mp4"/>
            </motion.div>
          </div>

          <div className={`${styles.gifbox}   ` } ref = {element5}>
            <motion.div className = {styles.giftext}
            transition={{duration: 0.5, type: 'easeInOut'}} 
            initial="hidden"  exit="exit"
            variants = {LRvariants} animate = {controls5}
            >
              <h3>Ariadne Engagement</h3>
              <p>Ariadne enables your visitors to opt-in to your loyalty program!</p>
              <p>The opt-in feature enables you to push notifications to your visitors the right moment.</p>
            </motion.div>
            <motion.div className = {styles.gif}
             transition={{duration: 0.5, type: 'easeInOut'}} 
             initial="hidden"  exit="exit"
             variants = {RLvariants} animate = {controls5}
            >
            <video   playsInline className='pointer-events-none' width="100%" src="/Videos/h3.mp4" autoPlay loop muted type = "videos/mp4"/>
            </motion.div>
          </div>

          <div className={`${styles.gifbox}  bg-gradient-to-b from-slate-50 to-slate-200  ` } ref = {element6}>
            <motion.div className = {styles.giftext}
            transition={{duration: 0.5, type: 'easeInOut'}} 
            initial="hidden"  exit="exit"
            variants = {LRvariants} animate = {controls6}
            
            >
              <h3>Ariadne Mapping</h3>
              <p>Transform your physical business into a digital landscape!</p>
              <p>Ariadne boosts your efficiency by enabling you to map and localize your products.</p>
            </motion.div>
            <motion.div className = {styles.gif}
            transition={{duration: 0.5, type: 'easeInOut'}} 
            initial="hidden"  exit="exit"
            variants = {RLvariants} animate = {controls6}
            >
            <video   playsInline className='pointer-events-none' width="100%" src="/Videos/h4.mp4" autoPlay loop muted type = "videos/mp4"/>
            </motion.div>
          </div>
          

        </div>

        <div className={`${styles.section4} bg-gradient-to-b from-white to-slate-100`} ref={element7}>
          <motion.div
          transition={{duration: 0.4, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {variants} animate = {controls7}
          >

        <h1 className='text-center'>Trusted by industry leaders</h1>

          </motion.div>

        <motion.div
        transition={{duration: 0.5, type: 'easeInOut'}} 
        initial="hidden"  exit="exit"
        variants = {variants} animate = {controls7}
           
       
        >
       
        <Testimonials/>
        </motion.div>

        </div>

        
       
        

        <div className={styles.section5} ref = {element8} >
        <motion.div
           transition={{duration: 0.5, type: 'easeInOut'}} 
           initial="hidden"  exit="exit"
           variants = {DUvariants} animate = {controls8}
        >
        <h1 className='text-center'>Get Started</h1>
        <p className='text-center'>Ariadne solution can be deployed on the premises just by plugging the devices in 
and  requires no additional infrastructure.</p>
        </motion.div>
          <div className={styles.products}>

          <motion.div className = {styles.product}
          transition={{duration: 0.5, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {DUvariants} animate = {controls8}
          
          >
          <div className={styles.productImg}>
          <Image
          alt='floor'
          src="/Photos/floor.png" height={260} width={350}/>

            </div>
          
                  <h4 className='my-3'>Configuration</h4>
                  <p>Let our team design a project based on your floor plan and industry.</p>
          </motion.div>

          <motion.div className = {styles.product}
          transition={{duration: 0.6, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {DUvariants} animate = {controls8}>
            <div className={styles.productImg}>
          <Image
          alt='device'
          src="/Photos/device2.png" height={260} width={350} />

            </div>
                  <h4 className='my-3'>Installation</h4>
                  <p>Simply plug the devices in the predetermined sockets.</p>
          </motion.div>

          <motion.div className = {styles.product}
          transition={{duration: 0.9, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {DUvariants} animate = {controls8}
          >
          <div className={styles.productImg}>
          <Image
          alt='screen'
          src="/Photos/screen.png" height={260} width={350}/>

            </div>
          
                  <h4 className='my-3'>The Dashboard</h4>
                  <p>Voila! Now you can make the most out of your existing traffic.</p>
          </motion.div>


          </div>


        </div>

        <div className={styles.section6} ref ={element9}>
          <motion.div
          
          transition={{duration: 0.4, type: 'easeInOut'}} 
initial="hidden"  exit="exit"
variants = {variants} animate = {controls9}>

          <h1 className="text-center ">Spotlight</h1>


          </motion.div>

          <motion.div className={styles.blogCarousel}
          transition={{duration: 0.5, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {variants} animate = {controls9}
  
          
          >
          <HomeBlogPosts/>

          </motion.div>
        </div>

          

        <div className={styles.section7}>

          <h1 className="text-center">Let&rsquo; talk</h1>
          

          <iframe src="https://calendly.com/georgios-ariadnemaps/30min?month=2022-03"
          loading='lazy'          
          frameBorder="0" width='100%' height='1000px' title = 'calendly' sandbox="allow-same-origin allow-scripts" ></iframe>
          
        </div>

      </main>
        </div>
      
    </div>
   </div>
  )
}
