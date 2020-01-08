import React from 'react';
import './Home.css';
import NavigationBar from '../NavigationBar/NavigationBar'

function Home() {
  return (
    <div className="home">
      <NavigationBar />
      <header className="home-header">
        <p>Bryan Lutz</p>
      </header>
    </div>
  );
}

export default Home;
