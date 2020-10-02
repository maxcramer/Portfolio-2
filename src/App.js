import React from 'react';
import logo from './logo.svg';
import './App.css';

import HeadBanner from './components/HeadBanner/HeadBanner'
import NavBar from './components/NavBar/NavBar';
import GitHubGraph from './components/GitHubGraph/GitHubGraph';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <HeadBanner />
      <GitHubGraph />
      <PersonalProjects />
    </div>
  );
}

export default App;
