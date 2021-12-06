import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className="app-container-bg" style={{backgroundImage:'url(/assets/main.jpg)'}}></div>
    <div className="app-container-text">
      <h1>Hi, I'm Frontend Developer</h1>
    </div>
    </>
  );
};

export default Home;