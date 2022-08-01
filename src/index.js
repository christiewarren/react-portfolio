import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
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
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
