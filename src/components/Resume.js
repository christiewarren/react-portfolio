import React, { useEffect } from 'react';
import Footer from './Footer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Resume(){
   useEffect(() => {
      window.scrollTo({
         top: 0, 
         left: 0,
         behavior: 'instant'})
   }, [])
   return(
      <>
         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <div className='resume-wrap'>

            <iframe src={'./assets/christie-warren-resume2024.pdf'} className='resume' />
            </div>
         </ScrollAnimation>
      <Footer/>
      </>
   )
}

