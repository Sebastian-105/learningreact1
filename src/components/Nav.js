import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
	return (
		<div className="mainDiv">
			<nav className="navbar" id="navbar1">
				<div className="navBarItems">
					{/* <Link to="https://sebastian-105.org" className="nav-item nav-link" idName="icon105" aria-expanded="false">
						<img src="https://sebastian-105.org/105-noborder.png" style={{borderRadius: '50%', width: '50px', height: '50px'}} alt="105" />
					</Link> */}
					<Link to="/" className="navBarLinks">
						<i class="fa-solid fa-house"></i> Home
					</Link>
					<span className='divider'></span>
					<Link to="/games" className="navBarLinks">
						<i class="fa-solid fa-gamepad"></i> Games
					</Link>
					<div className="navbar-nav ml-auto navBarItems"></div>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
