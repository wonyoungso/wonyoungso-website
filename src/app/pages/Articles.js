import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ArticlesList } from '../components';
import { Link } from 'react-router-dom';

class Articles extends Component {

  componentDidMount(){
  }

  componentWillReceiveProps(newProps){

  }


  render() {

    let fgStyle = {
      color: this.props.colors.fgColor
    };
    
    let sStyle = {
      color: this.props.colors.sColor
    };
    
    let borderStyle = {
      borderColor: this.props.colors.fgColor
    }; 

    return (
      <div className="container">
        <section className="firstpage">
          <div className="about-area">
            <p className="about-area__text" style={fgStyle}>
              I am a data visualization designer and researcher. I study civic data and spatial data justice, particularly how the civic data movement can effectively contribute to urban change.
            </p>
          </div>


          <div className="list-grid">
            <div className="border--10" style={borderStyle}>

            </div>
          </div>

          <ArticlesList />
          
        </section>
      </div>
    );
  }
}


let mapStateToProps = state => {
  return {
    colors: state.colors
  }
};

export default connect(mapStateToProps)(Articles);