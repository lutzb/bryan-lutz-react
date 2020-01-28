import React from 'react'
import './HomeTile.scss'

class HomeTile extends React.Component {
  render() {
    return (
      <div className="column">
        <div className="card">
          <img src={this.props.image} className='card-image'></img>
          <div className="container">
            <h3>{this.props.header}</h3>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeTile