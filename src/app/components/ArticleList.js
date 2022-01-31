import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArticleList extends Component {
  render() {

    let fgStyle = {
      color: this.props.colors.fgColor
    };
    
    let fgStyle_darker = {
      color: this.props.colors.fgColor,
      opacity: 0.5
    };
    
    return (
      <a href={this.props.url} rel="noreferrer" target="_blank" className="article-list">

        <div className="article-list__wrapper">

          <div className="article-list__title" style={fgStyle}>
            { this.props.title }
          </div>
          {
            this.props.authors ? 
            <div className="article-list__authors" style={fgStyle_darker}>
              { this.props.authors }
            </div> : null
          }

          {
            this.props.publisher ? 
            <div className="article-list__publisher" style={fgStyle_darker}>
              { this.props.publisher }
            </div> : null
          }
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