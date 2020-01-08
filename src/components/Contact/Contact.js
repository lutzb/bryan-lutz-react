import React from 'react';
import './Contact.scss';
import NavigationBar from '../NavigationBar/NavigationBar'

function Contact() {
  return (
    <div className="contact">
      <NavigationBar />
      <header className="contact-header">
        <p>Contact</p>
      </header>
    </div>
  );
}

export default Contact;
