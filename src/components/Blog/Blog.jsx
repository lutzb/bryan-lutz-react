import React from 'react';
import './Blog.scss';
import NavigationBar from '../NavigationBar/NavigationBar'
import BlogEntry1 from './BlogEntries/BlogEntry1'

function Blog() {
  return (
    <div className="blog">
        <NavigationBar />
        <div className="blog-entries">
          <BlogEntry1 />
        </div>
    </div>
  );
}

export default Blog;
