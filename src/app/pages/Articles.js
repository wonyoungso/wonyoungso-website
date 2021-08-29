import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ArticlesList } from '../components';
class Articles extends Component {

  componentDidMount(){
  }

  componentWillReceiveProps(newProps){

  }


  render() {

    let fgStyle = {
      color: this.props.colors.fgColor
    };
    
    // let sStyle = {
    //   color: this.props.colors.sColor
    // };
    
    let borderStyle = {
      borderColor: this.props.colors.fgColor
    }; 

    return (
      <div className="container">
        <section className="firstpage">
          <div className="about-area">
            <p className="about-area__text" style={fgStyle}>
              I study to answer the following questions: How has urban science been historically used to orchestrate, predict, and police public life, and how can the future of urban science be different if we care more about empowering marginalized groups in the city?
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