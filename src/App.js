import React, { useState } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Experience from './routes/Experience';
import Project from './routes/Project';
import Contact from './routes/Contact';
import HamburgerMenu from './components/HamburgerMenu';
import Modal from './components/Modal';

function App() {

  const [ modal, setModal ] = useState(false); // when : (true)모달OPEN, (false)모달close
  const modalHandler = () => setModal(() => !modal); // 모달팝업 핸들러

  return (
    <HashRouter>
      <div className="app-container">
        {/* 햄버거 메뉴 및 모달팝업 */}
        <HamburgerMenu modalHandler={modalHandler} />
        {
          modal 
          ? <Modal modalHandler={modalHandler} />
          : null
        }


        {/* ROUTER */}      
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
