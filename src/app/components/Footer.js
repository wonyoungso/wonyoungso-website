import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    let fgStyle = {
      color: this.props.colors.fgColor
    };
    
    return (
      <footer>
        <div className="footer__mail" style={fgStyle}>
          mail at wonyoung.so<br/>
          wso at mit.edu
        </div>
        <div className="footer__sm">
          <a href="https://twitter.com/wonyoungso" rel="noreferrer" target="_blank" style={fgStyle}>
            Twitter
          </a><br/>
          <a href="https://www.instagram.com/wonyoung.so" rel="noreferrer" target="_blank" style={fgStyle}>
            Instagram
          </a><br/>
          <a href="https://scholar.google.com/citations?hl=en&user=9S7B4AQAAAAJ" rel="noreferrer" target="_blank" style={fgStyle}>
            Google Scholar
          </a>
        </div>
      </footer>
    );
  }
}

let mapStateToProps = state => {
  return {
    colors: state.colors
  }
}

export default connect(mapStateToProps)(Footer);