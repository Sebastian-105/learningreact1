import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
	return (
		<div className="mainDiv">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark top" id="navbar1">
				<div id="navMainMenu" className="navbar-collapse collapse">
					<Link to="https://sebastian-105.org" className="nav-item nav-link" idName="icon105" aria-expanded="false">
						<img src="https://sebastian-105.org/105-noborder.png" style={{borderRadius: '50%', width: '50px', height: '50px'}} alt="105" />
					</Link>
					<Link to="/" className="nav-item nav-link"></Link>
					<Link to="/" className="nav-item nav-link">
						Home
					</Link>
					<Link to="/games" className="nav-item nav-link">
						games
					</Link>
					<div className="navbar-nav ml-auto navBarItems"></div>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
