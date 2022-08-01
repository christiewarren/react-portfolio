import React from 'react'
import projectData from '../ProjectData.js'
import Footer from './Footer.js'
import { HashLink as Link } from 'react-router-hash-link'
import ScrollAnimation from 'react-animate-on-scroll'

export default function ProjectList(){
   return(
      <div className='proj-list-wrap' id='projects'>
         <Link to="/#projects"><button className='view-work-btn'>things I've worked on<img src='./assets/home/arrow-up.svg' className='button-arrow'/></button></Link>
         {projectData.map(project =>{
            return(
               <Link to={project.path}>
                  <div className={'proj-wrap ' + project.wrapClass} key={project.title}>
                  <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={200}>
                     <div className='proj-text-wrap'>
                        <h4 className='proj-title'>{project.title}</h4>
                        <h2 className='proj-description'>{project.description}</h2>
                        {project.tags.map(tag =>{
                           return(
                              <div className='tag'>{tag}</div>
                           )
                        })}
                     </div>
                     <div className='proj-img-wrap'>
                        <img src={'./assets/' + project.image} className={project.imgClass}/>
                     </div>
                     </ScrollAnimation>
                  </div>
               </Link>
            )
         })}
         <h3 className='sm-proj-header'>More projects!</h3>
         <div className='sm-proj-list'>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
               <div className='sm-proj-wrap'>
                  <Link to="/learn-this-instead">
                     <img src={'./assets/home/learn-this-instead.jpg'} className='sm-proj-img'/>
                     <h4 className='sm-proj-title'>Learn This Instead</h4>
                     <small className='sm-proj-description'>A Chrome extension that redirects users from bad habits to a low-stress basics of CSS course</small>
                  </Link>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={250}>
               <div className='sm-proj-wrap'>
                  <Link to="/family-archive">
                     <img src={'./assets/home/family-archive.jpg'} className='sm-proj-img'/>
                     <h4 className='sm-proj-title'>Family History Archive</h4>
                     <small className='sm-proj-description'>An interactive archive of 7+ generations of family photos etc.</small>
                  </Link>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={500}>
            <div className='sm-proj-wrap'>
               <a href='https://christiewarren.com/reform/' target='blank'>
               <img src={'./assets/home/reform.jpg'} className='sm-proj-img'/>
               <h4 className='sm-proj-title'>Re/Form <img src={'/assets/home/external-link.svg'} className='external-link'/></h4>
               <small className='sm-proj-description'>The capstone exhibition for Penn State's Graphic Design Class of '21</small>
               </a>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={750}>
            <div className='sm-proj-wrap'>
               <Link to="/mentor-app">
                  <img src={'./assets/home/mentor.jpg'} className='sm-proj-img'/>
                  <h4 className='sm-proj-title'>College Mentor App</h4>
                  <small className='sm-proj-description'>An app for college students to connect with mentors</small>
               </Link>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={1000}>
            <div className='sm-proj-wrap'>
               <Link to="/west-arete">
                  <img src={'./assets/home/lms.jpg'} className='sm-proj-img'/>
                  <h4 className='sm-proj-title'>Research-Based LMS</h4>
                  <small className='sm-proj-description'>A Learning Management System that teaches students how to learn</small>
               </Link>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={1250}>
            <div className='sm-proj-wrap'>
               <a href='https://synthesis21.github.io/synthesis.github.io/' target='blank'>
                  <img src={'./assets/home/synthesis.jpg'} className='sm-proj-img'/>
                  <h4 className='sm-proj-title'>Synthesis <img src={'/assets/home/external-link.svg'} className='external-link'/></h4>
                  <small className='sm-proj-description'>The junior year exhibition for Penn State's Graphic Design Class of '21</small>
               </a>
            </div>
            </ScrollAnimation>
         </div>
         <Footer/>
      </div>
   )
}