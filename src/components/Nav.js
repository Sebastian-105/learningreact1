import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Sebastian">
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark top" id='navbar1'>
      <Link to="https://sebastian-105.org" className="nav-item nav-link" idName="Sebastian">
          <img src="https://sebastian-105.org/105-noborder.png" style={{ borderRadius: '50%', width: '50px', height: '50px' }} alt="105" />
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div id="navMainMenu" className="navbar-collapse collapse">
       
          <div className="navbar-nav ml-auto navBarItems">      
            <Link to="/" className="nav-item nav-link"></Link>
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/games" className="nav-item nav-link">games</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;