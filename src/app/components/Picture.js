import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLightbox } from '../actions';
import _ from 'lodash';

class Picture extends Component {
  handleClick(e){
    e.preventDefault();
    let { project } = this.props;
    
    let idx = _.findIndex(project.pictures, image => { return image.id == this.props.id });
    this.props.dispatch(changeLightbox({
      currentIdx: idx
    }));
  }

  render() {
    return (
      <div className="picture">
        <a href={this.props.url.original} onClick={this.handleClick.bind(this)} rel="noreferrer">
          <img src={this.props.url.original} alt="Image with description" style={{borderColor: this.props.colors.sColor }} />
        </a>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    lightbox: state.lightbox,
    colors: state.colors,
    project: state.project    
  }
}

export default connect(mapStateToProps)(Picture);