import React, { useEffect } from 'react';
import ProjectList from './ProjectList.js'

export default function Home() {
   useEffect(() => {
      window.scrollTo({
         top: 0, 
         left: 0,
         behavior: 'instant'})
   }, [])
  return (
      <>
      <section id="welcome">
        <div className="welcome-text">
         <h2><span className='hi'>Hi! I'm Christie.</span>I'm a product designer creating thoughtful, clean experiences. <span style={{textDecoration: 'line-through'}}>No&nbsp;frills.</span>&nbsp;*</h2>
         <h3 className='asterisk'><span className='welcome-highlight'>* Frills in moderation. Who doesn't love a good frill?</span></h3>
         <div className='currently'>
            <p><b>Currently</b></p>
            <p>Product designer @ Alma</p>
            <p>San Francisco, CA</p>
         </div>
        </div>
      </section>
      <ProjectList />
      </>
  );
}
