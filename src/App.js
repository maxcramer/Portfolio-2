import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Home from "./Pages/Home/Home";

// import HeadBanner from "./components/HeadBanner/HeadBanner";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/Backdrop/Backdrop";
import SabButter from "./Pages/SabButter/SabButter";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";

// import GitHubGraph from "./components/GitHubGraph/GitHubGraph";
// import PersonalProjects from "./components/PersonalProjects/PersonalProjects";
// import Work from "./components/Work/Work";
// import Positions from "./components/Positions/Positions";
// import About from "./components/About/About";
// import Onewheel from "./components/Onewheel/Onewheel";
// import Links from "./components/Links/Links";
// import Contact from "./components/Contact/Contact";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // console.log('this.state.sideDrawerOpen: ', this.state.sideDrawerOpen);
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        {/* <header className="App-header"> */}
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        {/* {backdrop} */}
        {/* </header> */}
        <body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sab-butter" element={<SabButter />} />
          </Routes>
        </body>
        {/* <HeadBanner /> */}
        {/* <PersonalProjects />
        <Work />
        <Positions />
        <About />
        <Onewheel />
        <Links />
        <Contact /> */}
        <Footer />
      </div>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <NavBar />
//       </header>
//         <HeadBanner />
//         <GitHubGraph />
//         <PersonalProjects />
//         <Work />
//         <Positions />
//         <About />
//         <Onewheel />
//         <Links />
//         <Contact />
//         <Footer />
//     </div>
//   );
// }
