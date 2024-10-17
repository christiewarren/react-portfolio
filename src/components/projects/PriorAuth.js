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
                  <br/>Engineering Manager
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
            <h6>I designed the migration of our psychological testing request process from Asana tickets to a form in the provider portal and an internal data entry workflow.
            <br/><br/>The biggest challenges were balancing flexibility and guidance for internal users and designing intuitive interactions for multi-step data entry.
            <br/><br/>The MVP of this project is estimated to save ___ once released and lays groundwork for automating even more of the prior auth process in the future.</h6>

            <Link to="/prior-authorizations/#case-study"><a className='styled'>read the case study<img src='./assets/search/arrow-down-plain.svg' className='link-arrow' alt="down arrow" /></a></Link>
         </section>
         </ScrollAnimation>

         <span className='section-divider' id='case-study'><h3>Case Study</h3><hr/></span>
         
         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section class='case-study-section context'>
            <h4>Context</h4>
            <div className='right'>
               <h5>Glossary</h5>
               <p><strong>Providers:</strong> Alma's primary users; providers of mental health care (therapists, psychologists, etc.)</p>
               <p><strong>Prior authorization ("prior auth") request:</strong> A request from a provider to conduct psychological or neuropsychological testing with their patient</p>

               <h5>What Alma Does</h5>
               <p>Alma is a platform for providers to run private practices on without much of the burden typically associated with doing so. A lot of the value Alma brings is centered around insurance: credentialing providers with insurance companies and negotiating higher rates, investigating and correcting claims, verifying patients' benefits, etc.</p> 
               <p>Another insurance process Alma handles on a providers' behalves is getting authorization from insurance companies to conduct psychological and neuropsychological testing (prior auth). Providers submit the details of the testing they intend to conduct, and Alma staff determine 1) whether prior auth is required for their case and 2) if so, whether the insurance company approves it.</p>  
               
               <h5>The Problem</h5>
               <p>Prior to this project, prior auth requests at Alma were handled entirely through Asana tickets, with outcomes being written in the comments. The biggest problem with this manual process was a <span className='highlight'>lack of stored and structured data,</span> which prevented us from:
               </p>
               <ul>
                  <li><p>Automating tedious processes that rely on this data downstream</p></li>
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
            <h6>Realizing that prior authorizations were a complex, multi-team effort, I started by mapping out the existing processes. I believe this step is absolutely crucial: not only did it help me learn the many nuances, but the diagrams I made also became an invaluable resource for giving engineers, stakeholders, and design teammates a quick (or thorough) rundown.</h6>
            <br/><small>Designing in the world of insurance and internal tools, I've learned it's not enough for me to be intimately familiar with a workflow; I also need to be able to distill that nuance down and communicate it in, for example, a 20 minute design critique. And one thing's for sure: <span className='highlight'>visuals &#x1F44F; always &#x1F44F; help &#x1F44F;</span></small>
            <br/><h5>User Interviews / Shadowing</h5>
            <p>My PM and I held 5 "shadow sessions" with future internal users, where they walked us through their day to day prior auth workflows. We asked many questions, learning not only from their expertise, but also from their pains and frustrations with the process.</p>
            <h5>Diagramming</h5>
            <p>I first mapped the process in as detailed a manner as possible, documenting nuances like each time the user copy/pasted a piece of info and where they navigated to to find it. The result was a lengthy diagram that visually emphasizes the tediousness, but isn't helpful for getting the gist at a glance.</p>
            <iframe className='figjam-iframe' src="https://embed.figma.com/board/TSAiQYZMeqWSLxH1cRTh8l/Prior-auth-workflow%3A-zoomed-in?node-id=0-1&embed-host=share" allowFullScreen></iframe>
            <br/><br/><p>Ultimately, I distilled those down to a "zoomed out" version that captures the key steps and decision points.</p>
            <iframe className='figjam-iframe-short' src="https://embed.figma.com/board/ySq6RGzgUPTiZbgomw2S4b/Prior-auth-workflow%3A-zoomed-out?node-id=0-1&embed-host=share" allowFullScreen></iframe>
            <h5>Some initial learnings from our research:</h5>
            <table className='research-table'>
               <tbody>
               <tr>
                  <td>Flexibility is key</td>
                  <td>While prior auth typically follows one of a couple paths, exceptions are inevitable. Users need the flexibility to take steps in any order and make changes to all data points.</td>
               </tr>
               <tr>
                  <td>Consolidation = efficiency</td>
                  <td>Because parts of this process take place in insurance company portals, there's a lot of copy/pasting involved that we can't control. But, we can ensure all info is in one place to make tedious steps less frustrating.</td>
               </tr>
               <tr>
                  <td>Good data collection up front saves time downstream</td>
                  <td>Users pointed out flaws with the existing request form that mean having to reach out to providers to collect additional details or corrections. Much of this could easily be avoided by adding logic and education to the new form.</td>
               </tr>
               </tbody>
            </table>
            </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section class='case-study-section'>
            <h4>Design Evolution: Internal</h4>
            <div className='right'>
            <h5>Layout & Editing</h5>
            <p>Initially, I gravitated towards the UI patterns used in most of our internal workflows: slideouts (drawers) and modals. Knowing this project would involve a hefty implementation, I relied as much as possible on existing patterns and components.</p>
            <div className='img-wrap'>
               {/* <img src='./assets/search/mixpanel-graph.png' className='img-shadow' alt="mixpanel graph of search data" /> */}
               <small>image of lofi and initial slideouts</small>
            </div>
            <p>However, feedback from design critiques helped me refocus on the goal of efficiency and <span className='highlight'>push outside the box, without straying from our design system.</span> The next iterations gave prior auth requests their own dedicated page with inline editing capabilities. This allows plenty of room for all the request and reference data and keeps the user in context as they complete tasks.</p>
            <div className='img-wrap'>
               {/* <img src='./assets/search/mixpanel-graph.png' className='img-shadow' alt="mixpanel graph of search data" /> */}
               <small>image of full page design (without extra data?)</small>
            </div>
            <h5>Flexibility vs Guidance</h5>
            <br/><p>Maintaining flexibility proved to be a surprisingly challenging goal. In most cases, I kept all fields editable, regardless of the user's presumed step, which led to feedback that the flow felt too open ended and without guidance.</p>
            <p>I experimented with dynamic CTAs to hint at likely next steps, but this neglected edge cases, and the copy felt misleading. This unlocked an important idea though: using the request's status to inform guidance on next steps.</p>
            <div className='img-wrap'>
               {/* <img src='./assets/search/mixpanel-graph.png' className='img-shadow' alt="mixpanel graph of search data" /> */}
               <small>image of dynamic ctas</small>
            </div>
            <p>After <strong>a lot</strong> of iteration, I landed on this floating, fixed "Next steps" callout. Considerations for this seemingly simple component included:</p>
            <ul>
               <li><p><strong>Context:</strong> No in-page position seemed quite right, as it's dynamic content can refer to various sections. Rather than being part of the page, this positioning lets it act as <span className='highlight'>commentary on the page itself.</span></p></li>
               <li><p><strong>Prominence:</strong> The floating position also lets it stand out without interrupting the user's flow or the page hierarchy. It's also collapsible for the users more accustomed with the process.</p></li>
               <li><p><strong>Implementation:</strong> Our design system doesn't have this exact component, but I kept scope manageable by using our existing banner and announcement components as foundations.</p></li>
            </ul>
            <div className='img-wrap'>
               {/* <img src='./assets/search/mixpanel-graph.png' className='img-shadow' alt="mixpanel graph of search data" /> */}
               <small>carousel: gif of scrolling with "next steps", status mapping, layout iterations</small>
            </div>
            <h5>Data Entry Interactions</h5>
            <p>I came upon an interesting interaction challenge when designing the first step of the flow: marking requirements. At this step, the only column the user adjusts is "Auth required?" and <span className='highlight'>it's not uncommon that none are required.</span> This surfaces an odd pattern where the user would...</p>
            <ol>
               <li>enter Edit mode</li>
               <br/><li>make <strong>no updates</strong> (no codes are required, and the default value of a checkbox is "false")</li>
               <br/><li>save "changes" (having done nothing)</li>
            </ol>
            <p>Not only is this a very uncomfy and unintuitive UX, it also poses an implementation challenge: how can we distinguish between a user indicating that there are no requirements and them simply entering Edit mode and exiting without making changes?</p>
            <p>I experimented with numerous selection components to replace the checkboxes, including dropdowns, which would allow for an initial "null" state. Although this helps clarify the action of selection, it directly opposes my "efficiency" goal by doubling the number of clicks in this step. Having shadowed these users through this and other workflows, I know how quickly unnecessary clicks build up in a day, and I felt adamant that we not add to that.</p>
            <div className='img-wrap'>
               {/* <img src='./assets/search/mixpanel-graph.png' className='img-shadow' alt="mixpanel graph of search data" /> */}
               <small>image of dropdowns and toggles</small>
            </div>
            <p>Ultimately, the solution I came up with is a "select all" (or rather, "select none") pattern. This gives the user <span className='highlight'>an explicit action to take with minimal clicks.</span> And, it gives engineers a concrete indicator to base logic on.</p>
            <div className='img-wrap'>
               {/* <img src='./assets/search/mixpanel-graph.png' className='img-shadow' alt="mixpanel graph of search data" /> */}
               <small>image of deselect all</small>
            </div>
            </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section class='case-study-section'>
               <h4>Final&nbsp;Designs</h4>
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
            <h4>Eng Collaboration</h4>
            <div className='right'>
            <h5>Handoff</h5>
            <br/><br/><small>Note: Collaboration with eng certainly didn't start at handoff, these are just some highlights.</small>
            <p>As with any project, my design handoff included annotations like these throughout the figma file detailing various functionality: data sources, character limits, form logic, error states, etc.</p>
            <div className='img-wrap'>
               {/* <img src='./assets/search/mixpanel-graph.png' className='img-shadow' alt="mixpanel graph of search data" /> */}
               <small>image of annotation and blurb</small>
            </div>
            <p>Since the steps of this flow can be tricky to learn, I also wrote blurbs to contextualize what the user's actions and goals are at each stage.</p>
            <p>At the initial handoff point, I recorded a walkthrough (I &#128155; Loom) of the designs and the workflow diagram in addition to doing a live walkthrough/Q&A with the engineers.</p>
            <p>I created a weekly project sync for updates, design q's and implementation discussions, and we maintain a tight communication loop through Figma comments and Slack.</p>
            <h5>Scoping</h5>
            <p>My PM and I worked together early on to define 3 milestones for this project, considering what a large design and engineering effort it would be. Each milestone could stand on its own and would make progress toward an ideal state.</p>
            <p>I also documented detailed user stories that the engineers used to estimate initial levels of effort and a rough timeline. However, almost all our engineers were quite new to the codebase, being recent hires at the time, and our newly-formed team had gaps in our process. Partway through the project, we realized these factors had led to a significant underestimation of LOE.</p>
            <p>Luckily, our tight communication loop helped us react quickly: I worked with our lead FE engineer to identify small pieces throughout the flow that weren't essential for release, and reduced the time to MVP by ____.</p>
            </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section class='case-study-section'>
            <h4>What's Next?</h4>
            <div className='right'>
            <h6>Now that all this prior authorization data will be recorded and stored in our database, the next step is to do something with it!</h6>
            <p>In the current workflow, when a provider submits a claim containing psychological testing services, a staff member checks whether they submitted an authorization request, if so, what the outcome was, and how that compares to the services on the claim. Now, we can work to automate this process by adding logic that checks the stored request data. This means that staff member's time can be put to better use on less tedious work.</p>
            <p>Plus, we can better educate providers about prior authorization in context and prevent them from delivering care that a patient won't be covered for.</p>
            <div className='img-wrap'>
               {/* <img src='./assets/search/mixpanel-graph.png' className='img-shadow' alt="mixpanel graph of search data" /> */}
               <small>image of appt slideout warning</small>
            </div>
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