
import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return(
    <sebastian class="Sebastain">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto navBarItems" >
                    <Link to='/' className="nav-item nav-link"></Link>
                    <Link to='/' className="nav-item nav-link">Home</Link>
                    <Link to='/games' className="nav-item nav-link">games</Link>
                </div>
            </div>
        </nav>
    </sebastian >
    );
}

export default Nav;
