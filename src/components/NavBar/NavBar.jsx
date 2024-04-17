import React from "react";
import Burger from "./Burger";

import "./NavBar.scss";
import RightNav from "./RightNav";

const NavBar = () => {
  return (
    <div className="Nav">
      {/* <div className="logo"></div> */}
      <Burger />
    </div>
  );
};

export default NavBar;

// import React from 'react';

// import './NavBar.scss';

// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

// const NavBar = props => (
//     <header className="navbar">
//         <nav>
//             <div>
//                 <DrawerToggleButton click={props.drawerClickHandler}/>
//             </div>
//             <div className="navbar_desktop">
//                 <h4><a href="#personalprojects">Personal Projects</a></h4>
//                 <h4><a href="#work">Development Work</a></h4>
//                 <h4><a href="#position">Development Positions</a></h4>
//                 <h4><a href="#about_container">About Max</a></h4>
//                 <h4><a href="#onewheel">Onewheel</a></h4>
//                 <h4><a href="#links">Links</a></h4>
//                 <h4><a href="#contacts">Contact</a></h4>
//             </div>
//         </nav>
//     </header>
// )

// export default NavBar;

// function NavBar() {

//     return (
//         <div className="navbar">
//
//         </div>
//     );
// }

// export default NavBar;
