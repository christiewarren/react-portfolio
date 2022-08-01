import React, { useEffect } from 'react'
import ProgressBar from "react-scroll-progress-bar"
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from '../../Footer'
import ScrollAnimation from 'react-animate-on-scroll'


export default function FamHistory(){
   useEffect(() => {
      window.scrollTo({
         top: 0, 
         left: 0,
         behavior: 'instant'})
   }, [])
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#8A96FF'/></div>
      <div className='proj-header'>
         <div className='proj-header-text'>
            <h1>Family History Archive</h1>
         </div>
         <div className='proj-hero-wrap'>
            <img src={'/assets/family-archive/family-archive.png'} alt="LionPlanner final design" className='proj-hero'/>
         </div>
      </div>
      <main>
         <span className='section-divider'><h3>TLDR;</h3><hr/></span>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section id='tldr'>
            <h6>I’m designing a website to archive 7+ generations of my family’s photos, letters, documents, and the people themselves.</h6>
         </section>
         </ScrollAnimation>
         
         <span className='section-divider'><h3>Project details</h3><hr/></span>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section context'>
            <h4>Context</h4>
            <div className='right'>
               <p>My dad’s side of the family has kept a vast catalogue of photos, documents, letters, and more, and his grandmother, who had an interest in genealogy, worked to create a family tree spanning ___ generations.</p>
               <div className='img-wrap'>
                  <img src='/assets/family-archive/family-tree.jpg' className='img-shadow'/>
                  <small className='subs-caption'>A diagram of our family tree documented by my Great, Great Grandma</small>
               </div>
               <p>With all this family history sitting in boxes, rarely seeing the light of day, my dad came to me with the idea of creating a website that serves as a digital archive for our family’s photos and documents, plus an interactive family tree.</p>
               <p>I was <em>so</em> excited about this idea—not only would it be awesome to make our family’s history more accessible to us and our relatives, but I also knew it could be the perfect opportunity to both learn more about web development (specifically, React) and challenge myself creatively.</p>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Look&nbsp;&amp;&nbsp;Feel</h4>
            <div className='right'>
               <p>Digitizing a traditionally very physical experience poses unique circumstances to design within. It’s important to me that the site feel nostalgic and connected to its physical counterparts, but not dated or aged.</p>
               <div className='img-wrap'>
                  <img src='/assets/family-archive/moodboard.jpg' className='img-shadow'/>
                  <small>My initial moodboard—once I started mockups, I realized I'd want to use slightly more bold colors to give our content more vibrance and life rather than emphasizing its age.</small>
               </div>
               <br/><p>The whole idea is bringing our history into the light, so I’m using rich, warm colors but not so bold that they detract from the content.</p>
               <div className='img-wrap'>
                  <img src='/assets/family-archive/color-palette.png' className='img-shadow sm-img'/>
                  <small>Final color palette</small>
               </div>
               <br/><p>I also plan to add subtle references to the shedding of light in elements like the active state of filters.</p>
               <div className='img-wrap'>
                  <img src='/assets/family-archive/filters.png' className='sm-img img-shadow'/>
                  <small >Filter active state references shedding light</small>
               </div>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Browsing Experience</h4>
            <div className='right'>
               <p>Although we plan to launch the site with only about 100 photos and documents, our intention is to keep adding more and more over time (which could really take years with the amount of content we have). With this in mind, we’re allowing for multiple ways to explore and discover.</p>
               <p><b>Discovery points</b></p>
                  <ul>
                     <li>Main page is filterable by time period and _____</li>
                     <li>Photo/document info page has a linked list of people involved</li>
                     <li>Family tree links to info pages for each person</li>
                     <li>Person info page includes immediate family and photos/documents they’re in</li>
                  </ul>
               <p>With this choose-your-own-adventure experience, users can decide to either be methodical about how they browse, or go down a Wikipedia-style rabbit hole.</p>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Early&nbsp;Mocks (V1ish)</h4>
            <div className='right'>
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
               >
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/family-archive/landing.jpg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>Landing page—the grid will feature images fading in and out</small>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/family-archive/photo-grid.jpg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>The content grid will be a full list of the content on the site, sectioned into 50 (49) year increments sorted oldest to newest by default. Users can view more or less photos at a time at the top right and sort by reverse order.</small>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/family-archive/filter-overlay.jpg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>Filters allow users to select time period, document type, and people. Filtering is an important feature, given the quantity of content we'll eventually host.</small>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/family-archive/photo-overlay.jpg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>Clicking an image or document will open it in a fullscreen overlay, which also lists the date, location, and people associated with it. Each person will also be linked to their own info page.</small>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/family-archive/bio.png' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>Each person featured on the site will have an info page listing their birth (and death, if applicaple) date, spouse, and for some a short description. Below that we'll show any photos or documents associated with them.</small>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </section>
         </ScrollAnimation>
      </main>
      <Footer/>
      </>
   )
}