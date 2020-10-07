import React from 'react';

import './NavBar.scss';

function NavBar() {

    return (
        <div className="navbar">
            <h4><a href="#personalprojects">Personal Projects</a></h4>
            <h4><a href="#work">Development Work</a></h4>
            <h4><a href="#position">Development Positions</a></h4>
            <h4>About Max</h4>
            <h4>Onewheel</h4>
            <h4>Links</h4>
            <h4>Contact</h4>
        </div>
    );
}

export default NavBar;