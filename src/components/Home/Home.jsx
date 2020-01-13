import React from 'react';
import './Home.css';
import NavigationBar from '../NavigationBar/NavigationBar'
import HomeHeader from '../HomeHeader/HomeHeader'
import HomeTiles from '../HomeTiles/HomeTiles'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div className="home">
      <NavigationBar />
      <HomeHeader />
      <HomeTiles />
      <Footer />
    </div>
  );
}

export default Home;
