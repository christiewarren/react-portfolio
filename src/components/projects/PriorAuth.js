import React, { useEffect } from 'react'
import ProgressBar from "react-scroll-progress-bar"
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from '../Footer'
import { HashLink as Link } from 'react-router-hash-link'
import ScrollAnimation from 'react-animate-on-scroll'


export default function PriorAuth(){
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
            <h1>Prior Authorization Requests</h1>
            <h2>@Alma</h2>
            <div className='proj-header-text-sm'>
               <p>
                  <b>Role:</b>
                  <br/>Product Designer</p>
                  <p><b>Collaborators:</b>
                  <br/>Product Manager
                  <br/>2 FE Devs
                  <br/>2 BE Devs
                  </p>
                  <p><b>Stakeholders:</b>
                  <br/>CEO
                  <br/>CPO/CGO
                  <br/>Director of Marketing
               </p>
            </div>
         </div>
         <div className='proj-hero-wrap'>
            <img src={'./assets/priorauth/priorauth.png'} className='proj-hero' alt="final prior auth design" />
         </div>
      </div>
      <main>
         <span className='section-divider'><h3>TLDR;</h3><hr/></span>
         
         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section id='tldr'>
            <h6>I designe
               
               I designed the Sitewide Search feature for KiwiCo’s website, allowing users to search for subscription lines, individual products, DIY ideas, blog posts, help articles, and more. <br/><br/>The biggest challenge was providing enough — but not too much — information to clearly differentiate individual products from subscription lines in the results.<br/><br/>Today, an average of 839 people use Sitewide Search daily, compared to the combined 219 who use the search features within Store, Blog, and DIYs.</h6>

            <Link to="/prior-authorizations/#case-study"><a className='styled'>read the case study<img src='./assets/search/arrow-down-plain.svg' className='link-arrow' alt="down arrow" /></a></Link>
         </section>
         </ScrollAnimation>

            <span className='section-divider' id='case-study'><h3>Case Study</h3><hr/></span>
         
         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section class='case-study-section context'>
            <h4>Context</h4>
            <div className='right'>
               <p>Alma is a platform on which therapists can run private practices without much of the burden typically associated with doing so. [examples of what Alma does]</p> 
               <br/><p>Another process Alma handles on a providers behalf is getting authorization from insurance companies to conduct psychological and neuropsychological testing. Providers submit the details of the testing they intend to conduct, and Alma staff determine 1) whether authorization is required and 2) if so, whether the insurance company will approve it.</p>  
               <br/><p>Prior to this project, prior authorization requests were handled entirely through Asana tickets, with outcomes being written in the comments. The biggest problem this manual process caused was a <span className='highlight'>lack of stored and structured data,</span> which prevented us from:
               </p>
               <ul>
               <li><p>Automating processes that rely on this data downstream</p></li>
               <li><p>Detecting "bad" provider behavior before they act on it</p></li>
               <li><p>Another item?</p></li>
            </ul>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section class='case-study-section'>

            <h4>Research &amp; Diagramming</h4>
            <div className='right'>
            <h6>Realizing that prior authorizations were a complex and multi-team effort, I first mapped out the existing processes. I believe this step is absolutely crucial: not only did it help me learn the many nuances, but the diagrams I made also became an invaluable resource for giving engineers, stakeholders, and design teammates a quick (or thorough) rundown.</h6>
            <br/><small>Designing in the world of insurance and internal tools, I've learned it's not enough for me to be intimately familiar with a workflow, I also need to be able to distill that nuance down and communicate it in, for example, a 20 minute design critique. And one thing's for sure: <span className='highlight'>visuals &#x1F44F; always &#x1F44F; help &#x1F44F;</span></small>
            <br/><p>My PM and I held 5 "shadow sessions" with future internal users, where they walked us through their day to day prior auth workflows. We asked many questions, learning not only from their expertise, but also from their pains and frustrations with the process.</p>
            <iframe className='figjam-iframe' src="https://embed.figma.com/board/HX99Sdwrr5S2211p35VPJ7/Prior-Auth-mapping?node-id=0-1&embed-host=share" allowFullScreen></iframe>
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
            <h4>User Considerations</h4>
            <div className='right'>
            <h5>Round 1&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</h5>
            <a href='./assets/search/user-test-script1.pdf' target='blank' className='styled sm'>view script PDF</a>
            <h6>My main goals for Round 1 were to determine whether subscriptions and Store products were presented in an understandable way and test the hypotheses I made during research.</h6>
            <br/><p>A whole tab for subscriptions seemed like overkill when it would only have a max of nine results. So, for my tests I combined subscriptions and Store products into a “Products” tab, which also meant combining them into one section in the “All” tab.</p>
            <div className='img-wrap'>
               <img src='./assets/search/user-test-round1-desktop.jpg' alt="products tab with sub and store" />
               <small>Subscriptions and Store items combined into a Products tab and category</small>
            </div>
            <br/><p>Feedback from the tests made it clear that <span className='highlight'>this solution was far too confusing</span> and led to hesitancy around viewing more products, since participants were unsure exactly what they’d be viewing.</p>

            <h5>Rounds 2 &amp; 3&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</h5>
            <a href='./assets/search/user-test-script23.pdf' target='blank' className='styled sm'>view script PDF</a>
            <h6>These rounds I primarily gathered feedback on the ideal amount of information and options to provide throughout the flow. </h6>
            <p>In particular, I hoped to provide clarity around the relevance of subscription results to the search term by listing which boxes in each subscription line matched the search term. (e.g. if “robots” is the search term, the Tinker Crate project, “Walking Robot,” is listed under Tinker Crate).</p>
            <div className='img-wrap'>
               <img src='./assets/search/sub-crates.png' className='sm-img' alt="subs with extra info" />
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
                           <img src='./assets/search/final/mobile/empty-state.jpg' className='carousel-img-m img-shadow' alt="final search empty state mobile" />
                           <small className='slide-caption'>Search opens in a full-page overlay, and empty state suggests subscription lines and popular Store items</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='./assets/search/final/mobile/suggestions1.jpg' className='carousel-img-m img-shadow' alt="final search suggestions mobile" />
                           <small className='slide-caption'>Suggestions allow user to go directly to a specific category</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='./assets/search/final/mobile/suggestions2.jpg' className='carousel-img-m img-shadow' alt="final search more suggestions mobile" />
                           <small className='slide-caption'>More suggestions show related subscriptions and Store items</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='./assets/search/final/mobile/results-sub.jpg' className='carousel-img-m img-shadow' alt="final search sub results mobile" />
                           <small className='slide-caption'>Results feature subscriptions prominently without them occupying too much vertical space</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='./assets/search/final/mobile/results-store.jpg' className='carousel-img-m img-shadow' alt="final search store results mobile" />
                           <small className='slide-caption'>Store results feature the six most relevant products with the ability to view more in the Store tab (via a View more button not pictured)</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='./assets/search/final/mobile/results-diy-blog.jpg' className='carousel-img-m img-shadow' alt="final search diy/blog results mobile" />
                           <small className='slide-caption'>Similarly, results for DIY ideas and Blog posts feature the six most relevant articles</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='./assets/search/final/mobile/results-help-more.jpg' className='carousel-img-m img-shadow' alt="final search help/more results mobile" />
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
                              <img src='./assets/search/final/desktop/empty-state.jpg' className='carousel-img-d img-shadow' alt="final search empty state desktop" />
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='./assets/search/final/desktop/suggestions.jpg' className='carousel-img-d img-shadow' alt="final search suggestions desktop" />
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='./assets/search/final/desktop/results-sub.jpg' className='carousel-img-d img-shadow' alt="final search sub results desktop" />
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='./assets/search/final/desktop/results-store.jpg' className='carousel-img-d img-shadow' alt="final search store results desktop" />
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='./assets/search/final/desktop/results-diy-blog.jpg' className='carousel-img-d img-shadow' alt="final search diy/blog results desktop" />
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='./assets/search/final/desktop/results-help-more.jpg' className='carousel-img-d img-shadow' alt="final search help/more results desktop" />
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
               <img src='./assets/search/mixpanel-graph.png' className='img-shadow' alt="mixpanel graph of search data" />
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
                  <p>I was really excited to grow my diagramming skills with this project, and I've since learned that I can even take this a step further. Although I was thorough with my mapping, I was primarily focused on migrating those processes into the product 1:1 (as they existed previously). My key assumption being that those existing processes were the "right" way to do things. I received great feedback that I could've looked more closely for gaps or inefficiencies in the processes and strived to make the workflow even better in the product.</p>

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