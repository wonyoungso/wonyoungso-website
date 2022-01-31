import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ImageWithLoader } from './';

class ProjectThumb extends Component {
  constructor(props){
    super(props);
    this.state = {
      mouseOver: false
    }
  }

  handleMouseOver(e){
    this.setState({
      mouseOver: true
    })
  }

  handleMouseOut(e){
    this.setState({
      mouseOver: false
    })
  }

  render() {

    let fgStyle = {
      color: this.props.colors.fgColor
    };

    let bgStyle = {
      color: this.props.colors.fgColor
    };
    
    let { windowWidth } = this.props;
    let height;

    if (windowWidth > 1105) {
      height = 900 * ((windowWidth - 20) * 0.25 - 20) / 1440;
    } else if (windowWidth > 1024 && windowWidth <= 1105) {      
      height = 900 * ((windowWidth - 20) * 0.33 - 20) / 1440;
    } else if (windowWidth > 768 && windowWidth <= 1024) {
      height = 900 * ((windowWidth - 20) * 0.5 - 20) / 1440;
    }  else {
      height =  900 * ((windowWidth - 20) - 20) / 1440;
    }

    return (
      <Link to={`/${this.props.permalink}`} onTouchEnd={this.handleMouseOut.bind(this)} onTouchStart={this.handleMouseOver.bind(this)} onMouseEnter={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)} className="project-thumb">
        <div className="project-thumb__thumb" style={bgStyle}>
          <ImageWithLoader height={height} imageUrl={this.props.pictures[0].url.thumb} mouseOver={this.state.mouseOver} alt={this.props.title_en} />
        </div>

        <div className="project-thumb__title" style={fgStyle}>
          { this.props.title_en }
        </div>
      </Link>
    );
  }
}

let mapStateToProps = state => {
  return {
    colors: state.colors,
    windowWidth: state.windowWidth
  }
};

export default connect(mapStateToProps)(ProjectThumb);