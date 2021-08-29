import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArticleList extends Component {
  render() {

    let fgStyle = {
      color: this.props.colors.fgColor
    };
    
    return (
      <a href={this.props.url} rel="noreferrer" target="_blank" className="article-list">

        <div className="article-list__title" style={fgStyle}>
          { this.props.title }
        </div>

      </a>
    );
  }
}

let mapStateToProps = state => {
  return {
    colors: state.colors
  }
};

export default connect(mapStateToProps)(ArticleList);