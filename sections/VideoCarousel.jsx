import React,{useState,useRef} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ReactPlayer from 'react-player'
import styles from '../styles/VideoCarousel.module.css'


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

const VideoCarousel = () => {
 const images =[
     {
     id:0,url:"/Photos/Praktiker.jpg",vid:"https://youtu.be/UObhsmW9RgM"
        },
        {
            id:1,url:"/Photos/Explainer.jpg",vid:"https://www.youtube.com/watch?v=LarUhK6GAmI"
        },
        {
            id:2,url:"/Photos/Weko.jpg",vid:"https://youtu.be/xFkPAAUrFAA"
        },
        {
            id:3,url:"/Photos/Marien.jpg",vid:"https://youtu.be/tWzIRapoac8"
        }

]
    const [videoOpen,setVideoOpen] = useState(false);
    const [current,setCurrent]=useState('')

    const handleClick = (image)=>{
        setCurrent(image.vid);
            setVideoOpen(!videoOpen)
            console.log(current)

    }
  
  return (
    <div>
               
      <div className='py-8'>
        {videoOpen?<div className='flex flex-col justify-center justify-items-center'>
          <div className='flex flex-row justify-end'>
          <button className='rounded-full mb-3 bg-red-500 px-3 text-white font-semibold' onClick={()=>setVideoOpen(false)}>Close</button>
          </div>
       
           <div className={styles.reactPlayer}>
           <ReactPlayer  url={current} playing={videoOpen} controls  width='100%' height="100%" />
           </div>
            

        </div> :<Carousel infinite 
     
      responsive={responsive} 
      autoPlaySpeed={10000}
      beforeChange={(nextSlide, { currentSlide, onMove }) => {
        console.log("next:",nextSlide," current: ",currentSlide);
      }}
      itemClass="px-4"
      >
           {images.map((image) => (
            <div key = {image.id}>
            <div className='cursor-pointer' onClick={()=>handleClick(image)}>
            <img    src = {image.url} key={image.id} width = "100%"/>
            </div>

            
            
            </div>
         
          
        ))}
        
      </Carousel>}
      
     
      
     
      </div>
      
            
      
    </div>
  );
};

export default VideoCarousel;