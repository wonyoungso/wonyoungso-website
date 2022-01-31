import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLightbox } from '../actions';

class Lightbox extends Component {
  constructor(props){
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount(){
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(){
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e){

    e = e || window.event;

    e.preventDefault();

    if (e.keyCode === 37 || e.keyCode === 39) {
      if (e.keyCode === 37) {
        this.handlePrevClick();
      } else if (e.keyCode === 39) {
        this.handleNextClick();
      }  
    } else if (e.keyCode === 27) {
      this.props.dispatch(changeLightbox(null));
    }

  }

  handlePrevClick(e){
    let { lightbox, project } = this.props;

    this.props.dispatch(changeLightbox({
      ...lightbox,
      currentIdx: lightbox.currentIdx - 1 < 0 ? project.pictures.length - 1 : lightbox.currentIdx - 1
    }));
  }

  handleNextClick(e){
    let { lightbox, project } = this.props;

    this.props.dispatch(changeLightbox({
      ...lightbox,
      currentIdx: lightbox.currentIdx + 1 > project.pictures.length - 1 ? 0 : lightbox.currentIdx + 1
    }));
  }

  handleCloseClick(e){
    this.props.dispatch(changeLightbox(null));
  }

  render() {
    let { lightbox, colors, project } = this.props;
    let bgStyle = {
      backgroundColor: colors.bgColor
    };
    let fgStyle = {
      color: colors.fgColor
    };

    // let colorBgStyle = {
    //   color: colors.bgColor
    // };
    
    return (
      <div className="lightbox" style={bgStyle}>
        <div className="lightbox__img-area">      
          <img src={project.pictures[lightbox.currentIdx].url.original} />
        </div>
        <div className="lightbox__prev-area" style={bgStyle}>
          <a href="javascript:void(0);" onClick={this.handlePrevClick.bind(this)} style={fgStyle}>←</a>
        </div>
        <div className="lightbox__next-area" style={bgStyle}>
          <a href="javascript:void(0);" onClick={this.handleNextClick.bind(this)} style={fgStyle}>→</a>
        </div>
        <div className="lightbox__close-area">
          <a href="javascript:void(0);" onClick={this.handleCloseClick.bind(this)}>
            <svg width="16px" height="16px" viewBox="0 0 16 16">
              <path d="M0.5,0.5 L15.0773797,15.0773797" id="Line-Copy" stroke={colors.fgColor}></path>
              <path d="M0.5,0.5 L15.0773797,15.0773797" id="Line-Copy-2" stroke={colors.fgColor} transform="translate(8.000000, 8.000000) scale(-1, 1) translate(-8.000000, -8.000000) "></path>
            </svg>
          </a>
        </div>
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

export default connect(mapStateToProps)(Lightbox);