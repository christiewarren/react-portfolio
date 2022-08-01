import React, { useEffect } from 'react';
import ProgressBar from "react-scroll-progress-bar";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Search(){
   useEffect(() => {
      window.scrollTo({
         top: 0, 
         left: 0,
         behavior: 'instant'})
   }, [])
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#8A96FF'/></div>
      <div className='about-header'>
         <div className='about-header-img'>
            <img src={'/assets/about/christie.jpg'} className='img-shadow' />
         </div>
         <h6><b>Hey, happy to have you here!</b><br/><br/>I'm a UI/UX designer from Pennsylvania, currently working at <span className='highlight'>KiwiCo in Mountain View, CA.</span> I have a B.Des. in Graphic Design from Penn State, where I also grew my love for UX through the <a href='https://nittanyai.psu.edu/blog/nittany-ai-challenge-helps-design-christie-warrens-future/'>NittanyAI Challenge.</a><br/><br/>My favorite type of work poses complex UX challenges and improves everyday life for users. I aim to approach each project with ambition and curiosity, as well as a thoroughness that fosters smooth x-functional collaboration. I'd love to bring these qualities to a team that prioritizes people and process!
         <br/><br/>Now for the good stuff...
         </h6>
         
      </div>
         <h3 className='sm-proj-header'>Some things I love in no particular order:</h3>
         <div className='sm-proj-list'>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
               <div className='sm-proj-wrap love'>
                  <div className='about-me-thing'>
                     <img src={'/assets/about/kitten.png'} className='sm-proj-img'/>
                     <h4 className='sm-proj-title'>My cat</h4>
                     <small className='sm-proj-description'>My cat's name is Kitten (pronounced Kit-TEN — creative, I know) and I found him in a parking garage when he was 6 weeks old!</small>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={250}>
               <div className='sm-proj-wrap'>
                  <div className='about-me-thing'>
                     <img src={'/assets/home/learn-this-instead.png'} className='sm-proj-img'/>
                     <h4 className='sm-proj-title'>Rock climbing</h4>
                     <small className='sm-proj-description'>I mainly boulder, and really only inside, because real rocks are sharp, and I have wimpy skin.</small>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={500}>
               <div className='sm-proj-wrap love'>
                  <div className='about-me-thing'>
                     <img src={'/assets/about/puzzle.png'} className='sm-proj-img'/>
                     <h4 className='sm-proj-title'>Puzzles (jigsaw &amp; crossword)</h4>
                     <small className='sm-proj-description'>I do crosswords with friends on <a href='https://downforacross.com/'>Down for a Cross</a>, a genious innovation.</small>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={750}>
               <div className='sm-proj-wrap love'>
                  <div className='about-me-thing'>
                     <img src={'/assets/about/snack-lake.png'} className='sm-proj-img'/>
                     <h4 className='sm-proj-title'>Eating snacks in cool places</h4>
                     <small className='sm-proj-description'>Snacks not pictured, but believe me, they were there.</small>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={1000}>
               <div className='sm-proj-wrap love'>
                  <div className='about-me-thing'>
                     <img src={'/assets/about/dogs.png'} className='sm-proj-img'/>
                     <h4 className='sm-proj-title'>Dogs</h4>
                     <small className='sm-proj-description'>Nuff said.</small>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={1250}>
               <div className='sm-proj-wrap love'>
                  <div className='about-me-thing'>
                     <img src={'/assets/home/learn-this-instead.png'} className='sm-proj-img'/>
                     <h4 className='sm-proj-title'>Wawa</h4>
                     <small className='sm-proj-description'>@Wawa please expand to California.</small>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={1500}>
               <div className='sm-proj-wrap love'>
                  <div className='about-me-thing'>
                     <img src={'/assets/about/national-treasure.png'} className='sm-proj-img'/>
                     <h4 className='sm-proj-title'>The National Treasure Movies</h4>
                     <small className='sm-proj-description'>They are true classics. NT1 is my family's go-to movie, and definitely my most watched. This is a no-judge zone, btw.</small>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={1750}>
               <div className='sm-proj-wrap'>
                  <div className='about-me-thing'>
                     <iframe src="https://open.spotify.com/embed/playlist/6zYfgPPCCkaBIBGmW6Ky8g?utm_source=generator" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" className='spotify'/>
                     <h4 className='sm-proj-title'>This playlist</h4>
                  </div>
               </div>
            </ScrollAnimation>
         </div>
         <Footer/>
      </>
   )
}

