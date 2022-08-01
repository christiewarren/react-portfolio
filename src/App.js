import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'
import About from './components/About.js'
import Home from './components/Home.js'
import Search from './components/projects/Search.js'
import NavRedesign from './components/projects/NavRedesign.js'
import Lionplanner from './components/projects/Lionplanner.js'
import Revu from './components/projects/Revu.js'
import FamHistory from './components/projects/small/FamHistory.js'
import MentorApp from './components/projects/small/MentorApp.js'
import WestArete from './components/projects/small/WestArete.js'
import LearnThisInstead from './components/projects/LearnThisInstead.js'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <>
      <Link to="/" className='home-nav-link'>*</Link>
      <div className='nav-blur'/>
      <div className='nav-wrap'>
        <Link to="/about-me" className='nav-link'>About</Link>
        <Link to="/#projects" className='nav-link'>Work</Link>
        <Link to="/#projects" className='nav-link'>Resume</Link>
      </div>

      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about-me' element={<About/>} />
          {/* Projects */}
          <Route path='/sitewide-search' element={<Search/>} />
          <Route path='/nav-redesign' element={<NavRedesign/>} />
          <Route path='/lionplanner' element={<Lionplanner/>} />
          <Route path='/revu' element={<Revu/>} />
          <Route path='/learn-this-instead' element={<LearnThisInstead/>} />
          <Route path='/family-archive' element={<FamHistory/>} />
          <Route path='/mentor-app' element={<MentorApp/>} />
          <Route path='/west-arete' element={<WestArete/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
