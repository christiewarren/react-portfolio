import React, { useEffect } from 'react'
import ProgressBar from "react-scroll-progress-bar"
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from '../Footer'
import { HashLink as Link } from 'react-router-hash-link'
import ScrollAnimation from 'react-animate-on-scroll'


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
      <div className='proj-header'>
         <div className='proj-header-text'>
            <h1>Sitewide Search</h1>
            <h2>@KiwiCo</h2>
            <div className='proj-header-text-sm'>
               <p>
                  <b>Role:</b>
                  <br/>UI/UX Designer</p>
                  <p><b>Collaborators:</b>
                  <br/>Product Manager
                  <br/>FE Dev
                  </p>
                  <p><b>Stakeholders:</b>
                  <br/>CEO
                  <br/>CPO/CGO
                  <br/>Director of Marketing
               </p>
            </div>
         </div>
         <div className='proj-hero-wrap'>
            <img src={'/assets/home/search.png'} className='proj-hero'/>
         </div>
      </div>
      <main>
         <span className='section-divider'><h3>TLDR;</h3><hr/></span>
         
         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section id='tldr'>
            <h6>I designed the Sitewide Search feature for KiwiCo’s website, allowing users to search for subscription lines, individual products, DIY ideas, blog posts, help articles, and more. <br/><br/>The biggest challenge was providing enough — but not too much — information to clearly differentiate individual products from subscription lines in the results.<br/><br/>Today, an average of 839 people use Sitewide Search daily, compared to the combined 219 who use the search features within Store, Blog, and DIYs.</h6>

            <a href='https://www.kiwico.com/' target='blank' className='no-style-link'>
               <button>see it live<img src='/assets/search/arrow-right.svg' className='button-arrow'/></button>
            </a>
            <Link to="/sitewide-search/#case-study"><a className='styled'>read the case study<img src='/assets/search/arrow-down-plain.svg' className='link-arrow'/></a></Link>
         </section>
         </ScrollAnimation>

            <span className='section-divider' id='case-study'><h3>Case Study</h3><hr/></span>
         
         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section class='case-study-section context'>
            <h4>Context</h4>
            <div className='right'>
               <p>KiwiCo is an e-commerce site with nine subscription lines and 160+ products spanning ages newborn to 100 and countless interests. Not to mention the nearly 1,600 DIY and Blog articles.</p>
               <div className='img-wrap'>
                  <img src='/assets/search/kiwico-subs.png'/>
                  <small className='subs-caption'>KiwiCo subscription lines</small>
               </div>
               <br/><p>Prior to this project, users could search the Store (individually sold products), DIY ideas, and Blog posts each individually. But, considering that subscriptions are actually KiwiCo’s primary revenue source and that products and content are often marketed together, our team wanted to create a feature for searching everything KiwiCo has to offer at once — a Sitewide Search feature.<br/><br/>Not only would Sitewide Search be a better (and more familiar) browsing experience, it would also help the business by featuring subscriptions more prominently. Making subscription lines searchable could be a huge opportunity, considering how likely users are to interact with Search.<span className='source'>*</span></p>
               <br/><small>* Baymard #934: “During mobile testing, no method was more frequently used at the earliest stages of product exploration than on-site search: 60% of the subjects immediately used search as their first strategy on a mobile website’s homepage...”</small>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section class='case-study-section'>

            <h4>Research &amp; Benchmarking</h4>
            <div className='right'>
            <p>Considering the importance of familiarity and the relative complexity of KiwiCo’s searchable content** I started with some extensive benchmarking. I <span className='highlight'>reviewed search features on over 20 websites and apps</span> and noted consistencies and aspects that would or wouldn’t work well for KiwiCo’s search.</p>
            <br/><small>** subscription lines, Store products, DIY ideas, Blog posts, Help articles, and miscellaneous pages</small>
            <div className='img-wrap'>
               <img src='/assets/search/benchmarking.jpg'/>
               <small>I mainly benchmarked against ecommerce sites like Lego and Target</small>
            </div>
            <br/><p>I also read numerous articles from the Baymard Institute to determine best practices for search features as well as how prominent ours should be.</p>
            <div className='img-wrap search-placement'>
               <img src='/assets/search/search-placement.png' className='sm-img'/>
               <small>Initial exploration of placement in the mobile nav, compared to the original nav sans-search (top)<br/>I moved forward with #1 for its simplicity and better use of space.</small>
            </div>
            <h5>Based on my findings and early feedback, I made these initial decisions:</h5>
            <table className='research-table'>
               <tbody>
               <tr>
                  <th>Decision</th>
                  <th>Reasoning</th>
               </tr>
               <tr>
                  <td>Prominent in the nav, but closed by default</td>
                  <td>Some users have a particular age or interest in mind but many may not know exactly what they’re looking for</td>
               </tr>
               <tr>
                  <td>Opens in a full width overlay</td>
                  <td>Lend maximum space for showing product suggestions &amp; reduce busyness</td>
               </tr>
               <tr>
                  <td>Suggestions should allow user to pick category</td>
                  <td>Take users to what they’re looking for faster, without hindering those just browsing</td>
               </tr>
               <tr>
                  <td>Highlight popular relevant products as suggestions, including photos</td>
                  <td>Make for quicker navigation to desired results and offer visually engaging suggestions</td>
               </tr>
               </tbody>
            </table>
            </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section class='case-study-section'>
            <h4>User Testing</h4>
            <div className='right'>
            <h5>Round 1&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</h5>
            <a href='/assets/search/user-test-script1.pdf' target='blank' className='styled sm'>view script PDF</a>
            <h6>My main goals for Round 1 were to determine whether subscriptions and Store products were presented in an understandable way and test the hypotheses I made during research.</h6>
            <br/><p>A whole tab for subscriptions seemed like overkill when it would only have a max of nine results. So, for my tests I combined subscriptions and Store products into a “Products” tab, which also meant combining them into one section in the “All” tab.</p>
            <div className='img-wrap'>
               <img src='/assets/search/user-test-round1-desktop.jpg'/>
               <small>Subscriptions and Store items combined into a Products tab and category</small>
            </div>
            <br/><p>Feedback from the tests made it clear that <span className='highlight'>this solution was far too confusing</span> and led to hesitancy around viewing more products, since participants were unsure exactly what they’d be viewing.</p>

            <h5>Rounds 2 &amp; 3&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</h5>
            <a href='/assets/search/user-test-script23.pdf' target='blank' className='styled sm'>view script PDF</a>
            <h6>These rounds I primarily gathered feedback on the ideal amount of information and options to provide throughout the flow. </h6>
            <p>In particular, I hoped to provide clarity around the relevance of subscription results to the search term by listing which boxes in each subscription line matched the search term. (e.g. if “robots” is the search term, the Tinker Crate project, “Walking Robot,” is listed under Tinker Crate).</p>
            <div className='img-wrap'>
               <img src='/assets/search/sub-crates.png' className='sm-img'/>
               <small>Subscriptions and Store items combined into a Products tab and category</small>
            </div>
            <br/><p>However, this extra info had the opposite effect, raising more questions and hesitancy and distracting participants from other results. Instead, they voiced that <span className='highlight'>price, images, and quick view</span> would be much more helpful to their understanding of each subscription.<br/><br/>These rounds also confirmed that giving subscriptions their own category but only displaying it at the top of the “All” tab would give them sufficient prominence, without dedicating a whole tab to them.</p>
            </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section class='case-study-section'>
               <h4>Final&nbsp;Designs</h4>
               <div className='right'>
                  <h5>Mobile</h5>
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
                           <img src='/assets/search/final/mobile/empty-state.jpg' className='carousel-img-m img-shadow'/>
                           <small className='slide-caption'>Search opens in a full-page overlay, and empty state suggests subscription lines and popular Store items</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/search/final/mobile/suggestions1.jpg' className='carousel-img-m img-shadow'/>
                           <small className='slide-caption'>Suggestions allow user to go directly to a specific category</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/search/final/mobile/suggestions2.jpg' className='carousel-img-m img-shadow'/>
                           <small className='slide-caption'>More suggestions show related subscriptions and Store items</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/search/final/mobile/results-sub.jpg' className='carousel-img-m img-shadow'/>
                           <small className='slide-caption'>Results feature subscriptions prominently without them occupying too much vertical space</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/search/final/mobile/results-store.jpg' className='carousel-img-m img-shadow'/>
                           <small className='slide-caption'>Store results feature the six most relevant products with the ability to view more in the Store tab (via a View more button not pictured)</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/search/final/mobile/results-diy-blog.jpg' className='carousel-img-m img-shadow'/>
                           <small className='slide-caption'>Similarly, results for DIY ideas and Blog posts feature the six most relevant articles</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/search/final/mobile/results-help-more.jpg' className='carousel-img-m img-shadow'/>
                           <small className='slide-caption'>Help and More results contain relevant help articles and miscellaneous pages</small>
                        </div>
                     </SwiperSlide>
                  </Swiper>
                  <h5 className='desktop-final'>Desktop</h5>
                  
               </div>
               <div className='desktop-swiper-wrap'>
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
                              <img src='/assets/search/final/desktop/empty-state.jpg' className='carousel-img-d img-shadow'/>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='/assets/search/final/desktop/suggestions.jpg' className='carousel-img-d img-shadow'/>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='/assets/search/final/desktop/results-sub.jpg' className='carousel-img-d img-shadow'/>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='/assets/search/final/desktop/results-store.jpg' className='carousel-img-d img-shadow'/>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='/assets/search/final/desktop/results-diy-blog.jpg' className='carousel-img-d img-shadow'/>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='/assets/search/final/desktop/results-help-more.jpg' className='carousel-img-d img-shadow'/>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section class='case-study-section'>
            <h4>Measuring Success</h4>
            <div className='right'>
            <p>It’s tough to quantify the success of this feature for a couple reasons:</p>
            <ul>
               <li><p>Users who enter a search are more likely to know what they’re looking for, so comparing conversion with those who don’t enter a search would be misleading</p></li>
               <li><p>In general, conversion through search isn’t very meaningful, since we show results for multiple categories that wouldn’t lead to a purchase (Blog, DIY, Help, and More)</p></li>
            </ul>
            <p>That being said, one thing we know for sure is that <span className='highlight'>the number of people searching the site has nearly <b>quadrupled</b></span> with the addition of Sitewide Search. The individual searches in Store, Blog, and DIYs account for a combined average of <b>219</b> searches per day, compared to Sitewide Search’s average of <b>839</b>.</p>
            <div className='img-wrap'>
               <img src='/assets/search/mixpanel-graph.png' className='img-shadow'/>
               <small>Sitewide search (top/purple) traffic vs. Store, DIY, and Blog searches</small>
            </div>
            </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section className='case-study-section reflection'>
               <h4>Reflection</h4>
               <div className='right'>
                  <h5>Learnings</h5>
                  <p>At this small company, designers present their large projects multiple times to stakeholders and various execs — including the CEO — and discuss feedback with them. Since this was my first solo large project here, creating the presentations and discussing my work in a digestible, but thorough manner was a huge learning experience. Not to mention learning to field questions and feedback with solid reasoning based in my research and testing.</p>

                  <h5>Challenges</h5>
                  <p>I also got great experience writing scripts and preparing prototypes for user tests. These tests came with their fair share of frustration and troubleshooting as I learned how to communicate to participants things as simple as what screen they should be on (without being able to talk to them in real time).<br/><br/>There were also some technical limitations in the search functionality, especially around searching for subscriptions. I had hoped to show results if a user searched for a box in a given subscription, even if that particular box wasn’t featured on the site. However, the PM and devs I worked with determined that this kind of mapping would be a lot of manual work, so we had to cut it out of the scope for the time being. (Maybe one day!)</p>
               </div>
            </section>
            </ScrollAnimation>
         </main>
      <Footer/>
      </>
   )
}

