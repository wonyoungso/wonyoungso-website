import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    let fgStyle = {
      color: this.props.colors.fgColor
    };


    let menuWidth = "auto";
    // if (this.props.windowWidth >= 768 && this.props.windowWidth <= 1104) {
    //   menuWidth = "30%";
    // } else if (this.props.windowWidth > 1105) {
    //   menuWidth = "auto";
    // }

    // menuWidth = this.props.isProject ? "30%" : "auto";

    // if (this.props.windowWidth < 768) {
    //   menuWidth = "auto";
    // } 

    return (
      <header>
        <Link to="/" className="main-link">
          <h1 className="main-title" style={fgStyle}>
            { this.props.windowWidth < 768 ? "WSO" : "Wonyoung So" }
          </h1>
        </Link>

        <div className="menu" style={{ width: menuWidth }}>
          <Link to="/publications" className="menu__link" style={fgStyle}>
            Publications
          </Link>
          <Link to="/projects/grid" className="menu__link" style={fgStyle}>
            Projects
          </Link>
          <a href="/so_cv_mostrecent.pdf" target="_blank" className="menu__link" style={fgStyle}>
            CV
          </a>
        </div>
      </header>
    );
  }
}

let mapStateToProps = state => {
  return {
    route: state.routing,
    windowWidth: state.windowWidth,
    colors: state.colors
  }
}

export default connect(mapStateToProps)(Header);