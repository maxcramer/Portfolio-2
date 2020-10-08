import React from 'react';
import logo from './logo.svg';
import './App.css';

import HeadBanner from './components/HeadBanner/HeadBanner'
import NavBar from './components/NavBar/NavBar';
import GitHubGraph from './components/GitHubGraph/GitHubGraph';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';
import Work from './components/Work/Work';
import Positions from './components/Positions/Positions';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <HeadBanner />
        <GitHubGraph />
        <PersonalProjects />
        <Work />
        <Positions />
        <About />
    </div>
  );
}

export default App;
