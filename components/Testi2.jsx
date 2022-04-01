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
                {/* {articles.map((article,idx)=>(
                    <div key={idx} id={idx === imageIndex ? "sm-active" : "spot-m"} className={idx=== imageIndex? "container text-light  border rounded w-65 pb-4": "container text-light  border rounded w-75 pb-4 my-3"} >
<div id='spot-card' className="container   py-4"  >
                            <h5>{article.title}</h5>
                            
                        
                        
                    </div>  
                    
                    
                    

                    </div>
                    
  ))} */}
  {testimonials.map((testi,idx) => (
            // <TestimonialCard key={testi.id} img={testi.img} quote = {testi.quote} person={testi.person}   />
            <div key={testi.id} >
            {idx===imageIndex?
                <div className = {styles.slideContainer}>
                    <div key={testi.id} className={styles.activeSlide}  >
                        <div className={styles.imgholder} >
                            <img src={testi.img} alt="" className="brightness-150 "  />
                        </div>

                        <div>
                        &ldquo;{testi.quote}&rdquo;
                        </div>
                        <div>
                           <p>
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

                        <div>
                        &ldquo;{testi.quote}&rdquo;
                        </div>
                        <div>
                           <p>
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