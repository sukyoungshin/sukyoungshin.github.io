import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';

function Modal({ modalHandler }) {
  return (
    <div className="modal-bg">
      
      <div className="modal-content-wrapper">
        <ul className="modal-content">
          <li>
            <Link to="/" onClick={modalHandler}>HOME</Link>
          </li>
          <li>
            <Link to="/about" onClick={modalHandler}>ABOUT</Link>
          </li>
          <li>
            <Link to="/experience" onClick={modalHandler}>EXPERIENCE</Link>
          </li>
          <li>
            <Link to="/project" onClick={modalHandler}>PROJECT</Link>
          </li>
          <li>
            <Link to="/contact" onClick={modalHandler}>CONTACT</Link>
          </li>
        </ul>
        <footer>
          {/* &copy; 2021, SU-KYOUNG SHIN. ALL RIGHTS ARE RESERVED */}
          신수경 / 010-8949-6027 / 
          <a href="https://github.com/sukyoungshin" target="_blank" rel="noreferrer" title="깃허브 바로가기"> GitHub</a>
        </footer>
      </div>

    </div>
  );
};

export default Modal;