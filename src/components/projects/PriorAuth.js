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
                  <br/>Multiple Operations teams
                  <br/>Customer support
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
            <br/><br/>The MVP of this project is estimated to save 40 hours of internal work per week once released and lays groundwork for automating even more of the prior auth process in the future.</h6>

            <Link to="/prior-authorizations/#case-study"><a className='styled'>read the case study<img src='./assets/search/arrow-down-plain.svg' className='link-arrow' alt="down arrow" /></a></Link>
         </section>
         </ScrollAnimation>

         <span className='section-divider' id='case-study'><h3>Case Study</h3><hr/></span>
         
         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section context'>
            <h4 id='context'>Context</h4>
            <div className='right'>
               <h5>What Alma does</h5>
               <p>Alma is a platform for mental health care providers (therapists, psychologists, etc.) to run private practices on. The platform reduces much of the administrative burden that typically comes with running a private practice: getting credentialed to take insurance, investigating/correcting claims, verifying patient benefits, etc.</p> 
               <p>Another insurance process Alma handles on a provider's behalf is getting authorization from insurance companies to conduct psychological and neuropsychological testing (prior authorization, or, "prior auth"). Providers submit the details of the testing they intend to conduct (a prior auth request), and Alma staff determine 1) whether prior auth is required for their case and 2) if so, whether the insurance company approves it.</p>  
               
               <h5>The problem</h5>
               <p>Before to this project, prior auth requests at Alma were handled entirely through Asana tickets, with outcomes being written in the comments. The biggest problem with this manual process was a <span className='highlight'>lack of stored and structured data,</span> which meant:
               </p>
               <ol>
                  <li><p>Processes that rely on this data downstream were fully manual and tedious</p></li>
                  <li><p>We couldn't prevent providers from delivering care that wouldn't be covered by insurance (they'd only find out once they submitted a claim)</p></li>
               </ol>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4 id='research'>Research &amp; diagramming</h4>
            <div className='right'>
               <h6>Realizing that prior authorizations were a complex, multi-team effort, I started by mapping out the existing processes. I believe this step is absolutely crucial: not only did it help me learn the many nuances, but the diagrams I made also became an invaluable resource for giving engineers, stakeholders, and design teammates a quick (or thorough) rundown.</h6>
               <div className='learning'><span className='learning-emoji'>&#128173;</span> <small>Designing in the world of insurance and internal tools, I've learned it's not enough for me to be intimately familiar with a workflow; I also need to be able to distill that nuance down and communicate it in, for example, a 20 minute design critique. And one thing's for sure: <span className='highlight'>visuals &#x1F44F; always &#x1F44F; help &#x1F44F;</span></small></div>
               
               <h5>User interviews / shadowing</h5>
               <p>My PM and I held 5 "shadow sessions" with future internal users, where they walked us through their day to day prior auth workflows. We asked many questions, learning not only from their expertise, but also from their pains and frustrations with the process.</p>
               <h5>Diagramming</h5>
               <p>I first mapped the process in as detailed a manner as possible, documenting nuances like each time the user copy/pasted a piece of info and where they navigated to to find it. The result was a lengthy diagram that visually emphasizes the tediousness, but isn't helpful for getting the gist at a glance.</p>
               <iframe className='figjam-iframe' src="https://embed.figma.com/board/TSAiQYZMeqWSLxH1cRTh8l/Prior-auth-workflow%3A-zoomed-in?node-id=0-1&embed-host=share" allowFullScreen></iframe>
               <br/><br/><p>Ultimately, I distilled those down to a "zoomed out" version that captures the key steps and decision points.</p>
               <iframe className='figjam-iframe-short' src="https://embed.figma.com/board/ySq6RGzgUPTiZbgomw2S4b/Prior-auth-workflow%3A-zoomed-out?node-id=0-1&embed-host=share" allowFullScreen></iframe>
               <h5>Some initial learnings from research:</h5>
               <table className='research-table'>
                  <tbody>
                  <tr>
                     <td>Flexibility is key</td>
                     <td>While prior auth typically follows one of a couple paths, exceptions are inevitable. Internal users need the <span className='highlight'>flexibility to take steps in any order</span> and make changes to all data points.</td>
                  </tr>
                  <tr>
                     <td>Consolidation = efficiency</td>
                     <td>Because parts of this process take place in insurance company portals, there's a lot of copy/pasting involved that we can't control. But, we can ensure <span className='highlight'>all info is in one place</span> to make tedious steps less frustrating.</td>
                  </tr>
                  <tr>
                     <td>Good data collection up front saves time downstream</td>
                     <td>Users pointed out flaws with the existing request form that mean having to reach out to providers to collect additional details or corrections. Much of this could easily be avoided by <span className='highlight'>adding logic and education to the new form.</span></td>
                  </tr>
                  </tbody>
               </table>
            </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section className='case-study-section'>
               <h4 id='design-evolution'>Design progression: Internal</h4>
               <div className='right'>
                  <h5>Layout & editing</h5>
                  <p>Initially, I gravitated towards the UI patterns in most of our internal workflows: slideouts (drawers) and modals. Knowing this project would involve significant engineering effort, I relied as much as possible on existing patterns and components.</p>
                  <div className='img-wrap'>
                     <img src='./assets/priorauth/lofi-v0.png'  alt="lo-fi and v0 explorations with slideouts and modals" />
                     <small>Early explorations using slideouts and modals for viewing and editing requests</small>
                  </div>
                  <p>However, feedback from design critiques helped me refocus on the goal of efficiency and <span className='highlight'>push outside the box, without straying from our design system.</span> The next iterations gave prior auth requests their own dedicated page with inline editing capabilities. This allows plenty of room for all the request and reference data and keeps the user in context as they complete tasks.</p>
                  <div className='img-wrap scrollable-img'>
                     <img src='./assets/priorauth/full-page.png' className='img-shadow' alt="prior auth full page" />
                     <small>The next iteration that allowed a full page for viewing and editing requests</small>
                  </div>
                  <h5>Flexibility vs guidance</h5>
                  <br/><p>Maintaining flexibility proved to be a surprisingly challenging goal. In most cases, I kept all fields editable, regardless of the user's presumed step, which led to feedback that the flow felt too open ended and without guidance.</p>
                  <p>I experimented with dynamic CTAs to hint at likely next steps, but this neglected edge cases, and the copy felt misleading. This unlocked an important idea though: using the request's status to inform guidance on next steps.</p>
                  <div className='img-wrap'>
                     <img src='./assets/priorauth/dynamic-ctas.png' className='sm-img' alt="dynamic CTA experimentation" />
                     <small>Explorations of dynamic primary and secondary CTAs in an effort to give guidance in the UI</small>
                  </div>
                  <p>After <strong>a lot</strong> of iteration, I landed on this floating, fixed "Next steps" callout. Considerations for this seemingly simple component included:</p>
                  <ul>
                     <li><p><strong>Context:</strong> No in-page position seemed quite right, as its dynamic content can refer to various sections. Rather than being part of the page, this positioning lets it act as <span className='highlight'>commentary on the page itself.</span></p></li>
                     <li><p><strong>Prominence:</strong> The floating position also lets it stand out without interrupting the user's flow or the page hierarchy. It's also collapsible for the users more accustomed with the process.</p></li>
                     <li><p><strong>Implementation:</strong> Our design system doesn't have this exact component, but I kept scope manageable by using our existing banner and announcement components as foundations.</p></li>
                  </ul>
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
                              <img src='./assets/priorauth/status-next-steps-mapping.png' alt="mapping from statuses to next steps content" />
                              <small className='slide-caption'>A mapping of statuses to the dynamic "Next steps" content (also used for handoff documentation)</small>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='./assets/priorauth/next-steps-scrolling.gif' className='img-shadow' alt="next steps content is fixed on scrolling" />
                              <small className='slide-caption'>The "Next steps" content is fixed as the user scrolls</small>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='./assets/priorauth/next-steps-exploration.png' alt="exploration for the placement of next steps content" />
                              <small className='slide-caption'>Other explorations for the placement of "Next steps"</small>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  {/* <h5>Data entry interactions</h5>
                  <p>I came upon an interesting interaction challenge when designing the first step of the flow: marking requirements. At this step, the only column the user adjusts is "Auth required?" and <span className='highlight'>it's not uncommon that none are required.</span> This surfaces an odd pattern where the user would...</p>
                  <ol>
                     <li>enter Edit mode</li>
                     <br/><li>make <strong>no updates</strong> (no codes are required, and the default value of a checkbox is "false")</li>
                     <br/><li>save "changes" (having done nothing)</li>
                  </ol>
                  <p>Not only is this a very uncomfy and unintuitive UX, it also poses an implementation challenge: how can we distinguish between a user indicating that there are no requirements and them simply entering Edit mode and exiting without making changes?</p>
                  <p>I experimented with numerous selection components to replace the checkboxes, including dropdowns, which would allow for an initial "null" state. Although this helps clarify the action of selection, it directly opposes my "efficiency" goal by doubling the number of clicks in this step. Having shadowed these users through this and other workflows, I know how quickly unnecessary clicks build up in a day, and I felt adamant that we not add to that.</p>
                  <div className='img-wrap'>
                     <small>image of dropdowns and toggles</small>
                  </div>
                  <p>Ultimately, the solution I came up with is a "select all" (or rather, "select none") pattern. This gives the user <span className='highlight'>an explicit action to take with minimal clicks.</span> And, it gives engineers a concrete indicator to base logic on.</p>
                  <div className='img-wrap'>
                     <small>image of deselect all</small>
                  </div> */}
               </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section className='case-study-section'>
               <h4 id='final-designs'>Final&nbsp;designs: Internal</h4>
               <div className='final-designs-iframe-wrap'>
                  <p>Note: some screens omitted for prototype simplicity.</p>
                  <iframe className='final-designs-iframe' src="https://embed.figma.com/proto/pr6CzP6CJaXrOyJKgXuhvk/Prior-auth-final-designs-(condensed)?node-id=1-4794&node-type=frame&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4794&embed-host=share" allowFullScreen></iframe>
               </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section className='case-study-section'>
               <h4>Design progression: External</h4>
               <div className='right'>
                  <h6>I also made improvements to the provider-facing request form (previously an Asana form), with my main goals including:</h6>
                  <ol>
                     <li>Better education, validations, and structure to ensure clean data entry</li><br/>
                     <li>A UI in the Alma provider portal for discoverability and brand consistency</li>
                  </ol>
                  <h5>Layout</h5>
                  <p>Similarly to the internal flow, I initially placed the request form in a modal, to lighten the implementation. But, initial feedback was that the long form felt daunting and would benefit from a more progressive approach. After further research, I also found that many requests involve 5+ CPT codes, which would be the most involved part of the form.</p>
                  <div className='img-wrap scrollable-img'>
                     <img src='./assets/priorauth/request-form-modal.png' className='img-shadow' alt="request form in a modal" />
                     <small>The first iteration of the request form was in a modal</small>
                  </div>
                  <p>In the next iteration, I reused the structure of an existing progressive form to break the form down into multiple pages, allowing the user to focus on each section at a time. This notably gives the most complex section (CPT codes) much more space and structure.</p>
                  <div className='img-wrap'>
                     <img src='./assets/priorauth/v1-cpt-codes-page.png' className='img-shadow' alt="cpt code page of the form" />
                     <small>The CPT code page illustrates the benefits of a progressive, more divided form</small>
                  </div>
                  <h5>Preventative education</h5>
                  <p>One stakeholder had the idea to educate about the timing of prior auth requests by adding an "appointment date" field. The final version of this displays a different message for dates in the past, dates not far enough in the future, and an "unsure" option.</p>
                  <ul>
                     <li><b>Dates in the past:</b> Warn that the testing services they already conducted may not be covered by insurance. Hopefully this also ensures they pause any testing until they receive authorization.</li><br/>
                     <li><b>Dates 15 days or less from today:</b> Warn about turnaround time and urge them not to conduct any testing before they receive authorization</li><br/>
                     <li><b>Unsure:</b> Inform about the turnaround time</li>
                  </ul>
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
                              <img src='./assets/priorauth/date-education-past.png' className='img-shadow' alt="warning for an appointment date in the past" />
                              <small className='slide-caption'>Warning for a date in the past</small>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='./assets/priorauth/date-education-too-soon.png' className='img-shadow' alt="warning for an appointment date to soon in the future" />
                              <small className='slide-caption'>Warning for a date too soon in the future</small>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='./assets/priorauth/date-education-unsure.png' className='img-shadow' alt="education for an unsure indication" />
                              <small className='slide-caption'>Education for an "unsure" indication</small>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  <p>This education about best practices will help providers <span className='highlight'>ensure their services get covered by patients' insurance,</span> and removes some of the mystery around this confusing process. As a bonus, staff can also use this date to prioritize requests that are more urgent.</p>
               </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section className='case-study-section'>
               <h4 id='final-designs'>Final&nbsp;designs: External</h4>
               <div className='final-designs-iframe-wrap'>
                  <p>Note: some screens omitted for prototype simplicity.</p>
                  <iframe className='final-designs-iframe' src="https://embed.figma.com/proto/pr6CzP6CJaXrOyJKgXuhvk/Prior-auth-final-designs-(condensed)?node-id=32-9216&node-type=frame&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=32%3A9216&embed-host=share" allowFullScreen></iframe>
               </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section className='case-study-section'>
               <h4 id='eng-collab'>Eng collaboration</h4>
               <div className='right'>
                  <h5>Handoff</h5>
                  <br/><br/><small>Note: Collaboration with eng certainly didn't start at handoff, these are just some highlights.</small>
                  <p>As with any project, my design handoff included annotations like these throughout the figma file detailing various functionality: data sources, character limits, form logic, error states, etc.</p>
                  <div className='img-wrap'>
                     <img src='./assets/priorauth/eng-annotations.png' className='img-shadow' alt="annotations for engineers in figma"/>
                     <small>An example of the annotations I made throughout the flow for engineering handoff</small>
                  </div>
                  <p>Since the steps of this flow can be tricky to learn, I also wrote blurbs to contextualize what the user's actions and goals are at each stage.</p>
                  <p>At the initial handoff point, I recorded a walkthrough (I &#128155; Loom) of the designs and the workflow diagram in addition to doing a live walkthrough/Q&A with the engineers.</p>
                  <p>I created a weekly project sync for updates, design q's and implementation discussions, and we continue to maintain a tight communication loop through Figma comments and Slack as questions come up during implementation.</p>
                  <h5>Scoping</h5>
                  <p>My PM and I worked together early on to define 3 milestones for this project, considering what a large design and engineering effort it would be. Each milestone could stand on its own and would make progress toward an ideal state.</p>
                  <p>I also documented detailed user stories that the engineers used to estimate initial levels of effort and a rough timeline. However, almost all our engineers were quite new to the codebase, being recent hires at the time, and our newly-formed team had gaps in our process. Partway through the project, we realized these factors had led to a significant underestimation of LOE.</p>
                  <p>Luckily, our tight communication loop helped us react quickly: I worked with our lead FE engineer and engineering manager to identify lower impact, higher effort items that weren't essential for release, and reduced the time to MVP launch by at least one month.</p>
                  <div className='learning'>&#128173; <small><span className='highlight'>I so appreciated the team pushing back on me</span> on the point of scope. At first, I had a hard time removing items from the MVP, but I then saw that we could make an impact significantly sooner while still working to deliver the whole scope iteratively. Being so familiar with the users' needs and what they could use a workaround for was extremely helpful here. In the future I plan to have more ruthless prioritization discussions with my PM early on.</small></div>
               </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section className='case-study-section'>
               <h4 id='next'>What's next?</h4>
               <div className='right'>
                  <h6>Now that all this prior authorization data will be recorded and stored in our database, the next step is to do something with it!</h6>
                  <p>In the current workflow, when a provider submits a claim containing psychological testing services, a staff member checks whether they submitted an authorization request, if so, what the outcome was, and how that compares to the services on the claim. Now, we can work to automate this process by adding logic that checks the stored request data. This means that staff member's time can be put to better use on less tedious work.</p>
                  <p>Plus, we can better educate providers about prior authorization in context and prevent them from delivering care that a patient won't be covered for.</p>
                  <div className='img-wrap'>
                     <img src='./assets/priorauth/appt-warnings.png' alt="prior auth warnings on appointment creation"/>
                     <small>In the future, we can warn providers ahead of creating a testing appointment if they don't have the necessary authorization</small>               
                  </div>
               </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section className='case-study-section'>
               <h4>Measuring success</h4>
               <div className='right'>
                  <p>This project is currently in development, but we plan to measure success by 1) monitoring the time to complete prior authorization tasks and 2) collecting feedback regularly from internal users.</p>
               </div>
            </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <section className='case-study-section reflection'>
               <h4>Reflection</h4>
               <div className='right'>
                  <h5>Learnings</h5>
                  <p>I was really excited to grow my diagramming skills with this project, and I've since learned that I can even take this a step further. Although I was thorough with my mapping, I was primarily focused on migrating those processes into the product 1:1 (as they existed previously). My key assumption being that those existing processes were the "right" way to do things. I received great feedback that I could've looked more closely for gaps or inefficiencies in the processes and strived to make the workflow even better in the product.</p>
               </div>
            </section>
            </ScrollAnimation>
         </main>
      <Footer/>
      </>
   )
}