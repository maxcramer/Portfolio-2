import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


import './SideDrawer.scss';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }
    // if(!props.show) {
    //   drawerClasses = 'side-drawer';
    // }
    

    // function closeDrawer () {
    //   let drawerClasses = document.getElementsByClassName('drawerClasses');
    //   drawerClasses.className.remove('open');
    // }
    

  return (
  <nav className={drawerClasses} 
  // onClick={closeDrawer}
  onClick={props.click}
  
  >
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