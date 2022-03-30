import React,{useState,useRef} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ReactPlayer from 'react-player'



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
        {videoOpen?<div className='flex flex-col justify-center justify-items-center'>
        <button onClick={()=>setVideoOpen(false)}>Close</button>
           <div className="">
           <ReactPlayer url={current} playing={videoOpen} controls  width='100%' height='85vh' />
           </div>
            

        </div> :<Carousel infinite 
      customLeftArrow={customLeftArrow} 
      customRightArrow={customRightArrow} 
      responsive={responsive} 
      autoPlaySpeed={10000}
      beforeChange={(nextSlide, { currentSlide, onMove }) => {
        console.log("next:",nextSlide," current: ",currentSlide);
      }}
      itemClass="px-4"
      >
           {images.map((image) => (
            <>
            <div className='cursor-pointer' onClick={()=>handleClick(image)}>
            <img    src = {image.url} key={image.id} width = "100%"/>
            </div>

            
            
            </>
         
          
        ))}
        
      </Carousel>}
      
     
      
     
      </div>
      
            
      
    </div>
  );
};

export default VideoCarousel;