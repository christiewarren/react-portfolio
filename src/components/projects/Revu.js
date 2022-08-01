import React, { useEffect } from 'react'
import ProgressBar from "react-scroll-progress-bar"
import Footer from '../Footer'
import { HashLink as Link } from 'react-router-hash-link'
import ScrollAnimation from 'react-animate-on-scroll'


export default function Revu(){
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
               <h1>Revu</h1>
               <div className='proj-header-text-sm'>
                  <p>
                  <b>Role:</b>
                  <br/>UI/UX Designer
                  <br/>JSX Dev
                  </p>
                  <p>
                  <b>Collaborators</b>
                  <br/>Full Stack Dev
                  </p>
               </div>
            </div>
            <div className='proj-hero-wrap'>
               <img src={'/assets/revu/edit-quiz.jpg'} alt="LionPlanner final design" className='proj-hero'/>
            </div>
         </div>
         <main>
         <span className='section-divider'><h3>TLDR;</h3><hr/></span>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section id='tldr'>
            <h6>I worked as a UI/UX designer along with a full stack developer to create a web app that generates multiple choice quizzes from a passage of text.
            <br/><br/>This was yet another extremely rewarding experience competing in the NittanyAI Challenge, and my teammate, Matt, and I were so grateful to receive first place.</h6>

            <Link to="/revu/#case-study"><a className='styled'>read the case study<img src='/assets/search/arrow-down-plain.svg' className='link-arrow'/></a></Link>
         </section>
         </ScrollAnimation>

         <span className='section-divider' id='case-study'><h3>Case Study</h3><hr/></span>
         
         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section context'>
            <h4>Context</h4>
            <div className='right'>
               <p>The Nittany AI Challenge prompt was to build an application that uses AI to solve a problem in education. Our idea stemmed from my teammate's interest in the unsolved problem of creating an algorithm to generate multiple choice questions and answers from a passage of text. </p>
               <p>With this in mind, our proposal outlined a web app called Revu (pronounced "Review") that would help students stay focused while reading by providing a multiple choice quiz to keep them engaged. While our concept evolved past this early on (more on this below), we were so excited to be one of the 20 teams selected to create a prototype.</p>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Understanding the Problem</h4>
            <div className='right'>
               <h5>User Interviews</h5>
               <h6>Initially our idea was to make Revu a tool for students to study with and stay focused while reading out of class assignments. After interviewing multiple students and speaking with professors, it became clear that this tool would be <span className='highlight'>much more impactful in the hands of teachers.</span></h6>
               <p>We learned that the problem lies with students not reading out of class in the first place, not with their studying habits. This phase showed us that it would be tough to motivate students to read, unless their teachers got involved.</p>
            
               <h5>Problem Statment</h5>
               <h6>Based on the feedback in the user interviews, we defined the primary problem we would aim to address:</h6>
               <p>A significant majority of students do not complete out of class reading assignments, and the options instructors have to remedy this take valuable time from them and from their class time.</p>

               <h5>A Closer Look at This Problem</h5>
               <p><b>Students don't read</b></p>
               <p>We found that studies have shown that 70% of students do not complete out of class reading assignments, causing them to miss out on course content and reading skill development.</p>

               <p><b>Extra teacher time required</b></p>
               <p>Teachers have to put in extra time to create quizzes or summarize readings to ensure their students are learning the material they didn't read.</p>

               <p><b>Class time misused</b></p>
               <p>Finite class time ends up being used to cover material from the readings, when it should be used to cover fundamental material.</p>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Defining&nbsp;a Solution</h4>
            <div className='right'>
               <h5>Incentivization</h5>
               <h6>One of the biggest obstacles to designing Revu was determining how to incentivize students to do these readings.</h6>
               <p>Extra credit is a possible incentive, but the professors and educators we spoke with didn't like the idea of rewarding students for doing what they should be expected to do (understandably).</p>
               <p>I decided to survey some students to determine what other incentives could be effective.</p>
               <p>The students I surveyed were nearly 70% more likely to complete an out of class reading if <span className="highlight">their professor can see whether they did it,</span> regardless of it being attached to a grade.</p>
               <p>Using this information, we decided to include functionality for teachers to <span className="highlight">keep track of their students' participation,</span> also allowing for <span className="highlight">more insight and value</span> on their end.</p>
               <div className='img-wrap'>
                  <img src={'/assets/revu/student-incentive.jpg'} alt="graph of students' willingness to read outside of class" className='img-shadow'/>
               </div>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Revu's&nbsp;Primary Users</h4>
            <div className='right'>
               <h5>1. The Quick Quizzer</h5>
               <p>This teacher has little time to spare, but wants to know which of their students are actually completing readings. They can tell many students aren't, but don't want to use class time to give quizzes. The reading content for this class usually reiterates content from lectures, so questions can be largely pulled from the text to test students' memory. </p>
               <div className='user-needs'>
                  <p><b>Needs</b></p>
                  <ul>
                     <li>fast, hands-off process</li>
                     <li>quickly scan through questions</li>
                     <li>easily check who took quiz</li>
                  </ul>
               </div>
               <h5>2. The Insight Seeker</h5>
               <p>This teacher wants to get insight on which of their students are struggling with outside reading content as well as what specific content their class is having trouble with. The reading content for their class is more in-depth content that won't be covered during class, so it's important that students demonstrate comprehension.</p>
               <div className='user-needs'>
                  <p><b>Needs</b></p>
                  <ul>
                     <li>ability to edit quiz in depth</li>
                     <li>ask critical thinking questions</li>
                     <li>view specific content students struggle with</li>
                  </ul>
               </div>
            </div>
         </section> 
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Functionality &amp; UX Goals</h4>
            <div className='right'>
               <h6>Together, our team determined the functionality we'd aim to include in LionPlanner in order to make it an improvement on most students' course planning processes:</h6>
               <h5><span className='highlight'>Relieve teachers of extra tasks</span></h5>
               <p>Automate quiz generation to create a solution that doesn't take lots of time from teachers</p>   
               <h5><span className='highlight'>Improve student participation</span></h5>
               <p>Provide teachers with a list of students who complete the reading, incentivizing students without extra credit</p>
               <h5><span className='highlight'>Provide teachers with insight</span></h5>
               <p>Show teachers specific content students are struggling with so they can steer their lectures towards these areas</p>
            </div>
         </section>
         </ScrollAnimation>

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section'>
            <h4>Feature&nbsp;Design</h4> 
            <div className='right'>
               <h5>Passage Entry &amp; Quiz Preferences</h5>
               <p>Teachers can easily paste a reading here from a textbook PDF, article etc., starting the <span className="highlight">fast, hands-off process.</span></p>
               <p>Each quiz has a title and class associated with it, and teachers can choose the number of distractors per question.</p>
               <div className="img-wrap">
                  <img src={'/assets/revu/input.jpg'} alt="passage entry page" className='img-shadow'/>
               </div>

               <h5>Editable Questions</h5>
               <p>Easy editing is especially important, since Revu is powered by AI. This allows teachers to easily <span className="highlight">fix any small errors</span> that may occur while our algorithms are in development and is especially useful for the "Insight Seeker" to <span className="highlight">edit the quiz in depth.</span></p>
               <div className="img-wrap">
                  <img src={'/assets/revu/editable-question.png'} alt="editable question" className='img-shadow sm-img'/>
               </div>
               <div className="img-wrap">
                  <img src={'/assets/revu/edit-question.png'} alt="question in edit mode" className='img-shadow sm-img'/>
               </div>

               <h5>"Where is this from?"</h5>
               <p>A teacher can click this to highlight the text where the question is from, allowing them to <span className='highlight'>ensure the question is relevant.</span></p>
               <div className="img-wrap">
                  <img src={'/assets/revu/where-from.jpg'} alt="where is this from highlight" className='img-shadow'/>
               </div>

               <h5>Create New Questions</h5>
               <p>Teachers can add questions simply by filling in a blank template question. This is designed with the "Insight Seeker" in mind, allowing them to <span className="highlight">ask critical thinking questions</span> in addition to the recall-based ones Revu provides.</p>
               <div className="img-wrap">
                  <img src={'/assets/revu/new-question.png'} alt="new question template" className='img-shadow sm-img'/>
               </div>

               <h5>Quiz Insights Dashboard</h5>
               <p><b>A. Student List</b></p>
               <p>A list of who has completed the quiz, their score, and when they completed it. Satisfying the need both teachers have to <span className="highlight">know which students are participating.</span></p>
               <p><b>B. Frequently Incorrect Questions</b></p>
               <p>A list of the specific questions students commonly got wrong, so the teacher knows <span className="highlight">what specific content students are struggling with.</span> (particularly useful for the "Insight Seeker")</p>
               <p><b>C. Sharable Quiz Link</b></p>
               <p>Simple link sharing with students is a time saver and makes Revu easy to integrate into any classroom. This UX is also familiar to teachers who use common tools like Google Docs.</p>
               <p><b>D. Student View (Preview Mode)</b></p>
               <p>Shows the teacher what their quiz looks like from a student's perspective.</p>
               <div className="img-wrap">
                  <img src={'/assets/revu/dashboard.jpg'} alt="insight dashboard" className='img-shadow'/>
               </div>
            </div>
         </section> 
         </ScrollAnimation>  

         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
         <section className='case-study-section reflection'>
            <h4>Reflection</h4>
            <div className='right'>
               <h5>Next Time...</h5>
               <p>The pivoting we did during this project emphasized to me the importance of user research, and how it can change the direction of a product. If I could redo this process, next time I would do more research sooner, to make sure the design is steered in the "right" direction from the start.</p>
               <div className='img-wrap'>
                  <img src={'/assets/revu/pitch.jpg'} alt="Revu team" className='img-shadow sm-img'/>
                  <small>Matt (the dev I worked with) and me after our final presentation of Revu.</small>
               </div> 
            </div>   
         </section>
         </ScrollAnimation>
      </main>
      <Footer/>
      </>
   )
}