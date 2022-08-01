import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default function Footer(){
   return(
      <div className='footer-wrap'>
         {/* <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={1000}> */}
         <p><span className='highlight'>made with &nbsp;<span className='smile'>&#128578;</span>,&nbsp; <img src={'./assets/react.svg'} alt='react' className='react-logo'/>, &nbsp;and sometimes <img src={'./assets/help-emoji.svg'} alt='help emoji' className='help'/></span></p>
         <small>cewarren801@gmail.com</small>
         {/* </ScrollAnimation> */}
      </div>
   )
}
