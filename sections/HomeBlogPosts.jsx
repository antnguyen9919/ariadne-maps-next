import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {postStatic} from './postStatic.js'
import { FeaturedPostCard } from '../components'








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


const HomeBlogPosts = () => {
  
  
  const featuredPosts = postStatic.data.posts
  
  


  return (
    <div>
    
      <Carousel infinite 
      
      responsive={responsive}
      autoPlaySpeed={10000}
      itemClass="px-3"
      >
        {featuredPosts.map((post, index) => (
           <FeaturedPostCard key={index} post={post} />
        ))}
      </Carousel>
    </div>
  );
};

export default HomeBlogPosts;