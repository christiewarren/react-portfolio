import React, { useEffect } from 'react'
import ProgressBar from "react-scroll-progress-bar"
import { HashLink as Link } from 'react-router-hash-link'
import ScrollAnimation from 'react-animate-on-scroll'
import Footer from '../../Footer'

export default function MentorApp(){
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
               <h1>Mentor App</h1>
            </div>
            <div className='proj-hero-wrap'>
               <img src={'/assets/mentor-app/mentor-screens.png'} alt="mentor app final design" className='proj-hero'/>
            </div>
      </div>
      <main>
         <span className='section-divider'><h3>TLDR;</h3><hr/></span>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section id='tldr'>
            <h6>I designed a mobile app to help underclassmen connect with upperclassmen mentors at Penn State as part of my application for the 2020 Google UX internship.
            <br/><br/>I used this week-long project as an opportunity to improve my process and specifically to emphasize user research.</h6>
            <Link to="/mentor-app/#case-study"><a className='styled'>read more<img src='/assets/search/arrow-down-plain.svg' className='link-arrow'/></a></Link>
         </section>
         </ScrollAnimation>

         <span className='section-divider' id='case-study'><h3>Project Details</h3><hr/></span>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section context'>
            <h4>Context</h4>
            <div className='right'>
               <p>Prompt: Your school wants to strengthen the community by encouraging experienced students to connect with new students and help them adjust to campus life. Design an experience that allows mentors and mentees to discover each other. Consider the needs of both mentors and mentees,including how someone may become a mentor and how to connect mentors to mentees.</p>   
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Research&nbsp;&amp; Planning</h4>
            <div className='right'>
               <h5>Initial Thoughts</h5>
               <p>The first part of my process was jotting down some initial thoughts and questions about the prompt and considerations I should plan on making.</p>
               <div className="img-wrap">
                  <img src={'/assets/mentor-app/initial-thoughts.jpg'} alt="written initial thoughts" className='img-shadow'/>
                  <small>With broad briefs like this, I tend to start by writing down what I know, what I need to know, and what I want to keep in mind. This helps me define an area to work within.</small>
               </div>

               <h5>Surveys</h5>
               <p>Next, I sent a brief survey to some under and upperclassmen peers to get a starting point in terms of users' general reactions to this application. I sent separate surveys to under/upperclassmen, both asking three questions:</p>
               <ol>
                  <li>How interested are you in having an upper(under)classman as a mentor(ee)?</li>
                  <li>Which characteristics would be important for you and your mentor(ee) to have in common?</li>
                  <li>Are there any reasons you'd be hesitant to have a student mentor(ee)?</li>
               </ol>
               <div className="img-wrap">
                  <img src={'/assets/mentor-app/upper-responses.jpg'} alt="upperclassmen survey responses" className='img-shadow'/>
               </div>
               <div className="img-wrap">
                  <img src={'/assets/mentor-app/under-responses.jpg'} alt="underclassmen survey responses" className='img-shadow'/>
               </div>
               <h6>These survey results helped me outline some key goals to focus on:</h6>
               <ul>
                  <li>Present relevant information to highlight compatibility.</li>
                  <li>Increase interest in upperclassmen to become mentors.</li>
                  <li>Provide both groups with transparent and flexible relationships.</li>
               </ul>

               <h5>Organization &amp; Brainstorming</h5>
               <p>My next step was organizing all the information I had about my users, which was largely info gathered in the surveys.</p>
               <div className="img-wrap">
                  <img src={'/assets/mentor-app/user-specs.jpg'} alt="user information" className='img-shadow'/>
               </div>
               <p>I also began brainstorming potential features for my application based on the needs and concerns of my users. During this phase, I tried to get all my thoughts on the board, without deciding whether or not they were the best option.</p>
               <div className="img-wrap">
                  <img src={'/assets/mentor-app/feature-list.jpg'} alt="feature list" className='img-shadow'/>
               </div>

               <p>Once I narrowed features and concepts down, I created a very basic user journey for three users:</p>     
               <ul>
                  <li>Mentors</li>
                  <li>Mentees (serious)</li>
                  <li>Mentees (casual)</li>
               </ul>
               <div className="img-wrap">
                  <img src={'/assets/mentor-app/user-journey-mentees.jpg'} alt="mentee user journey" className='img-shadow'/>
                  <small>Though the underclassmen I surveyed were overwhelmingly in favor of having student mentors, I still anticipate that some will be intimidated by the process. For this group, I created a more gradual experience that would hopefully lead them to finding a mentor at their own pace.</small>
               </div>
               <div className="img-wrap">
                  <img src={'/assets/mentor-app/user-journey-mentors.jpg'} alt="mentor user journey" className='img-shadow'/>
               </div>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Early&nbsp;Designs</h4>
            <div className='right'>
               <h5>Sketches</h5>
               <p>My next move was sketching some wireframe flows on my (well-loved) whiteboard. The flows are fairly similar for mentors vs. mentees, but I still chose to sketch a separate flow for each so that I could distinguish them better in my mind and get a more concrete idea of the differences.</p>
               <div className="img-wrap">    
                  <img src={'/assets/mentor-app/mentee-sketches.jpg'} alt="mentee wireframe sketches" className='img-shadow'/>
               </div>
               <div className="img-wrap">    
                  <img src={'/assets/mentor-app/mentor-sketches.jpg'} alt="mentor wireframe sketches" className='img-shadow'/>
               </div>

               <h5>Navigation</h5>
               <p>At this stage I settled on having four bottom navigation tabs, since this seems like the least daunting form of navigation, and some users may be hesitant to explore. The tabs include: </p>
               <ul>
                  <li>Browse Mentors(ees)</li>
                  <li>Quick Questions</li>
                  <li>Messages</li>
                  <li>Meetups &amp; Time Log</li>
               </ul>
               
               <h5>Lo-Fis</h5>
               <p>Next, I created a low fidelity mockups of the application's flow. At this stage I chose to mock up only the flow for mentees. Like I said earlier, the two flows are very similar, and I got a good enough grasp on the differences from wireframing, so making a whole other flow seemed unnecessary, and a poor use of time.</p>
               <div className="img-wrap">    
                  <img src={'/assets/mentor-app/lowfis.jpg'} alt="lofi designs" className='img-shadow'/>
               </div>
               <p>This stage helped me establish consistency throughout the app's design, again ensuring that the learning curve is as minimal as possible.</p>
               <p>I also further developed the onboarding process and which questions would be asked of the users. In order to make this a succinct but valuable process, I based these questions on what users deemed important in the surveys. 
               <br/>Plus, users will sign in with their Penn State credentials, verifying that they are a student and determining whether they are an upper or underclassmen, and therefore if they qualify to be a mentor or mentee.</p>
               <p>The last aspect I fleshed out in this stage is the voice of the app. By using a casual, inviting voice I hope to accomplish two things:</p>
               <ul>
                  <li>Mentees will feel less intimidated, and therefore more open to reach out.</li>
                  <li>Mentors will view it more as building relationships with people like them, instead of just another formal, school-run service.</li>
               </ul>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Visual&nbsp;Design</h4>
            <div className='right'>
               <p>When considering the visual design of this app, my biggest priority was setting it apart from traditional school-run apps, as these tend to be a bit dated with overdone color palettes (at least at Penn State). I wanted to make this app seem separate from the school, so that students would be more interested in it.</p>
               <p>I designed this Material UI using a modern color palette, rounded elements, and visually interesting, yet simple icons. These choices mimic the way I hope students will feel when using the app: comfortable, but eager to be bold. </p>
               <div className="img-wrap">    
                  <img src={'/assets/mentor-app/visual-design.jpg'} alt="visual design system" className='img-shadow'/>
               </div>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>UX&nbsp;Highlights</h4>
            <div className='right'>
               <h5>Browsing &amp; Profiles</h5>
               <p>Students' answers in my surveys showed that some of the most important considerations to both under and upperclassmen are major and personality when choosing a mentor(ee). So, I highlighted bios and descriptions in the browse view, allowing users to get a good idea of these aspects quickly. Users can also filter by major or interest on the browse page, if they so choose.</p>
               <div className="img-wrap">    
                  <img src={'/assets/mentor-app/browse.png'} alt="browse screen"/>
               </div>
               <p>Giving users the flexibility to describe themselves in a few sentences also helps to give the app itself more personality, which moves towards strengthening the Penn State community as a whole. </p>
               <p>In profile details, a user can choose to send someone a message request, and they can also save that person, with the ability to filter their browsing by those they've saved.</p>

               <h5>Messaging</h5>
               <p>Both mentees and mentors are required to request to send their first message to someone, in an effort to give the most control to the user as possible. Once a message request has been accepted, this is where I anticipate returning users will spend the majority of their time, planning meetups, asking for advice, etc.</p>
               <div className="img-wrap">    
                  <img src={'/assets/mentor-app/messages.png'} alt="messaging screens"/>
               </div>

               <h5>Quick Questions</h5>
               <p>The main goal of the Quick Questions page is to help those who are hesitant get their feet wet before they make a commitment. For mentees, this looks like asking a question or two and seeing the benefit of connecting with upperclassmen. For mentors, it can look like testing out a mini-mentorship by answering a question and seeing that it doesn't have to be a formal, every day commitment.</p>
               <div className="img-wrap">    
                  <img src={'/assets/mentor-app/quick-questions.png'} alt="quick questions screen"/>
               </div>

               <h5>A Note on Mentors</h5>
               <h6>As I mentioned earlier, there would be some slight differences in the way mentors experience the app. The main differences include the ability to:</h6>
               <ul>
                  <li>View both mentor and mentee profiles</li>
                  <li>Create meetups for a mentee they are in contact with</li>
                  <li>Comment on Quick Questions</li>
                  <li>Log time spent mentoring to potentially receive course credits (further ahead)</li>
               </ul>
               <p>In this current solution, any upperclassman at Penn State is eligible to become a mentor. However, in the future, once the app has more users, there would ideallybe an interview system in which current mentors evaluate potential mentors. For the time being, I chose not to apply this limitation, as there are already obstacles for encouraging students to become mentors.</p>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Out of Scope Improvements</h4>
            <div className='right'>
               <h6>Throughout this exercise, I had multiple brainstorming sessions on one obstacle: how to encourage college students to use this app. With exceptions, many college students are reluctant to do something if the benefits are not immediately clear.</h6>
               <p>One potential solution to this dilemma is making this app more social. I mean this in the same way that when a college student hears a song or sees a meme that reminds them of a friend, they want to share it with them. Placing a "Recommend to a Friend" option on each mentor or mentee's profile would serve as a reminder that it could be kind of fun to look through profiles until you find one that reminds you of a friend.</p>
               <div className="img-wrap">    
                  <img src={'/assets/mentor-app/recommend.png'} alt="recommend to a friend screen"/>
               </div>
               <p>This button would allow users to share the selected profile on their external messaging app, helping to bring new users to the mentor app. Existing users would then ideally act as a highly personalized recommendation system that reaches beyond the app's walls.</p>
            </div>
         </section>
         </ScrollAnimation>
      </main>
      <Footer/>
      </>
   )
}