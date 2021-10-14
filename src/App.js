import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Experience from './routes/Experience';
import Project from './routes/Project';
import Contact from './routes/Contact';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  return (
    <HashRouter>
      <div className="app-container"> 
      {/* 모달창 */}
      {/* <div className="menu-modal">
        MODAL
      </div> */}
      <HamburgerMenu />
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
