import React, { Component } from 'react';

export default class Video extends Component {
  render() {
    return (
      <div className="video">
        <video controls>
          <source src={this.props.mp4_url} />
        </video>
      </div>
    );
  }
}
