import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    let fgStyle = {
      color: this.props.colors.fgColor
    };
    
    return (
      <footer>
        
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