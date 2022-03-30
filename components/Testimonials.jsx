import React,{useState,useRef} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import TestimonialCard from './TestimonialCard'



const responsive = {
  
  desktop: {
    breakpoint: { max: 4000, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
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
                    quote:"When they said: \&quot We are the Google Analytics of the physical world\&quot , they were not kidding! Thanks to Ariadne Maps, I have now reliable data and numbers about the visitors on my shopping centre. We can now use this information to make better decisions and optimize the customer experience",
                    person:"Thomas Grabert, Ö-Center Mall, Managing Director"
                       },
        

]
   
  

  


  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  return (
    <div className="mb-8 xl:px-8 px">
        
                
      <div className='py-8'>

      <Carousel infinite 
      customLeftArrow={customLeftArrow} 
      customRightArrow={customRightArrow} 
      responsive={responsive} 
      autoPlaySpeed={10000}
      
      itemClass="px-4"
      >
           {testimonials.map((testi) => (
            <TestimonialCard key={testi.id} img={testi.img} quote = {testi.quote} person={testi.person}   />
         
          
        ))}
        
      </Carousel>
      
     
      
     
      </div>
      
            
      
    </div>
  );
};

export default Testimonials;