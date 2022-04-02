import React, { useState } from 'react'
import Slider from "react-slick";
import styles from '../styles/Testimonials.module.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


  


const Testi2 = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const testimonials =[
        {
        id:0,img:"/Photos/Caros/Atlantis2.png",
        quote:"Your devices are like beacons on steroids",
        person:"Anthony Lynsdale, Atlantis The Palm, VP Information Technology"
           },
           {
               id:1,img:"/Photos/Caros/DB.png",
               quote:"You presented to us what we were expecting to see in at least 7 years",
               person:"Janis Diekmann, Deutsche Bahn, Innovation Manager"
                  },
                  {
                   id:2,img:"/Photos/Caros/Glasgow.png",
                   quote:"I cannot think of anyone who does not need your devices "
                           ,
                   person:"Gordon Bain, Glasgow Airport, Head of Project Delivery"
                      },
                      {
                       id:3,img:"/Photos/Caros/Grabert.png",
                       quote:"When they said: We are the Google Analytics of the physical world-, they were not kidding! Thanks to Ariadne Maps, I have now reliable data and numbers about the visitors on my shopping centre. We can now use this information to make better decisions and optimize the customer experience",
                       person:"Thomas Grabert, Ö-Center Mall, Managing Director"
                          },
           
   
   ]
   
const NextArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.next}`}  onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className= {`${styles.arrow} ${styles.prev}`}   onClick={onClick}>
        <FaAngleLeft />
      </div>
    );
  };
    var settings = {
        infinite: true,
        lazyLoad: true,
        centerPadding: "60px",
        speed: 300,
        slidesToShow: 3,
        responsive:[
          {breakpoint: 1200,
            settings:{
              slidesToShow:1,
            }
          },
          {breakpoint: 768,
            settings:{
              slidesToShow:1,
              arrows:false,
            }
          }
        ],
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        
      };

     
  return (
    <div>
        
      <Slider {...settings}> 
                
  {testimonials.map((testi,idx) => (
           
            <div key={testi.id} >
            {idx===imageIndex?
                <div className = {styles.slideContainer}>
                    <div key={testi.id} className={`${styles.activeSlide} brightness-125`}  >
                        <div className={styles.imgholder} >
                            <img src={testi.img} alt=""  />
                        </div>

                        <div className='italic'>
                        &ldquo;{testi.quote}&rdquo;
                        </div>
                        <div>
                           <p className='text-yellow-200'>
                           {testi.person}
                               </p> 
                        </div>
                    
</div>
                </div>

:
                    <div className = {styles.slideContainer}>
<div key={testi.id} className={styles.slide}  >

                        <div className={styles.imgholder}>
                            <img src={testi.img} alt={testi.person} className="brightness-100 drop-shadow" />
                        </div>

                        <div className='italic' >
                        &ldquo;{testi.quote}&rdquo;
                        </div>
                        <div>
                           <p className='text-yellow-200' >
                           {testi.person}
                               </p> 
                        </div>
</div>
                    </div>
    
        }
            </div>
         
          
        ))}

        
      </Slider>
        
      
      
            <div>
           
            



            </div>
     
    </div>
  )
}

export default Testi2