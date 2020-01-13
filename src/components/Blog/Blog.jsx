import React from 'react';
import './Blog.scss';
import NavigationBar from '../NavigationBar/NavigationBar'

function Blog() {
  return (
    <div className="blog">
        <NavigationBar />
        <header className="blog-header">
        <p>Blog - Coming soon!</p>
      </header>
    </div>
  );
}

export default Blog;