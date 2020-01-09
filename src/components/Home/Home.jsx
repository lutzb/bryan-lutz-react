import React from 'react';
import './Home.css';
import NavigationBar from '../NavigationBar/NavigationBar'
import HomeTile from '../HomeTile/HomeTile'

function Home() {
  return (
    <div className="home">
      <NavigationBar />
      <header className="home-header">
        <h2>Bryan J. Lutz</h2>
        <p>
          Software Developer by day<br />
          Professional eSports enthusiast by night<br />
          The Ohio State University Alumni 2014<br />
        </p>
      </header>
      <div className='home-tiles'>
        <HomeTile text='This is a test!' />
        <HomeTile text='This is a test!' />
        <HomeTile text='This is a test!' />
        <HomeTile text='This is a test!' />
      </div>
    </div>
  );
}

export default Home;
