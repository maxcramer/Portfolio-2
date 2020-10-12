import React from 'react';

import './SideDrawer.scss';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

  return (
  <nav className={drawerClasses}>
    <ul>
        <li><a href="#personalprojects">Personal Projects</a></li>
        <li><a href="#work">Development Work</a></li>
        <li><a href="#positions">Development Positions</a></li>
        <li><a href="#about_container">About Max</a></li>
        <li><a href="#onewheel">Onewheel</a></li>
        <li><a href="#links">Links</a></li>
        <li><a href="#contacts">Contact</a></li>
    </ul>
  </nav>
  )
};

  
  
  export default sideDrawer;