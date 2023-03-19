import './App.css';
import { HashLink as Link } from 'react-router-hash-link'


function App() {
  return (
      <>
      <Link to="/" className='home-nav-link'>*</Link>
      <div className='nav-blur'/>
      <div className='nav-wrap'>
        <Link to="/about-me" className='nav-link'>About</Link>
        <Link to="/#projects" className='nav-link'>Work</Link>
        <Link to="/assets/christie-warren-resume2023.pdf" target={'_blank'} className='nav-link'>Resume</Link>
      </div>
      </>
  );
}

export default App;
