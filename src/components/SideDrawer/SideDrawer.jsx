import React from 'react';
import './SideDrawer.scss';


function sideDrawer(props) {

  function closeDrawer () {
    const drawerElements = document.getElementsByClassName('side-drawer');
    for (let i=0; i< drawerElements.length; i++) {
        drawerElements.item(i).classList.remove('open');
    }
  }

  if (!props.show) {
    closeDrawer();
  }

  const menuItems = [
    { name: 'Personal Projects', to: '#personalprojects' },
    { name: 'Development Work', to: '#work' },
    { name: 'Development Positions', to: '#positions' },
    { name: 'About Max', to: '#about_container' },
    { name: 'Onewheel', to: '#onewheel' },
    { name: 'Links', to: '#links' },
    { name: 'Contact', to: '#contacts' },
  ];

  return (
    <nav className={props.show ? 'side-drawer open' : 'side-drawer'}>
      <ul>
          {menuItems.map((menuItem, index) => {
            return <li key={index}>
              <a href={menuItem.to} onClick={props.drawerClickHandler}>{menuItem.name}</a>
            </li>
          })}
      </ul>
    </nav>
  );
};
  
export default sideDrawer;