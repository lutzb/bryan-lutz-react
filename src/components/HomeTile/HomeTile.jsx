import React, { Component } from 'react'
import './HomeTile.scss'

class HomeTile extends React.Component {
  render() {
    return (
      <div className='tile'>
        <p className='tile-text'>{this.props.text}</p>
      </div>
    );
  }
}

export default HomeTile