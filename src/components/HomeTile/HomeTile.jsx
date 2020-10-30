import React from 'react'
import './HomeTile.scss'

class HomeTile extends React.Component {
  render() {
    return (
      <div className="column">
        <div className="card">
          <img src={this.props.image} className='card-image' alt=''></img>
          <div className="container">
            <h3>{this.props.header1}</h3>
            <h3>{this.props.header2}</h3>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeTile
