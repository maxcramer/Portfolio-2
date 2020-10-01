import React from 'react';
import logo from './logo.svg';
import './App.css';

import HeadBanner from './components/HeadBanner/HeadBanner'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <NavBar />
      <HeadBanner />
    </div>
  );
}

export default App;
