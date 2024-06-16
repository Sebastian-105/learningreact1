import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return(
        <sebastian>
            <div class="container-fluid">
                
                <h1 class="m2-5">Welcome</h1>
                <p>this site was created using node and react.</p>
                <Link to='https://sebastian-105.org' className="nav-item nav-link">By: 105 | Sebastian</Link>
                </div>
        </sebastian>
    );
}

export default Home;