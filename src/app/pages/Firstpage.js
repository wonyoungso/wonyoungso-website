import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProjectsList, ProjectsGrid } from '../components';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class Firstpage extends Component {

  componentDidMount(){
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

    let isGrid = this.props.match.path === "/projects/grid" || this.props.match.path === "/" || _.isUndefined(this.props.match.path);
    return (

      <div className="container--firstpage">
        <section className="firstpage">
          <div className="about-area">
            <p className="about-area__text" style={fgStyle}>
            I study to answer the following questions: How has urban science been historically used to orchestrate, predict, and police public life, and how can the future of urban science be different if we care more about empowering marginalized groups in the city?
            </p>
          </div>


          <div className="list-grid">
            <div className="border--10" style={borderStyle}>

            </div>

            <Link to="/projects/grid" style={ isGrid ? fgStyle : sStyle} className="list-grid__link" >
              Grid
            </Link>

            <Link to="/projects/list" style={ isGrid ? sStyle : fgStyle} className="list-grid__link">
              List
            </Link>

          </div>

          {
            isGrid ? 
            <ProjectsGrid /> :
            <ProjectsList />
          }
          
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

export default connect(mapStateToProps)(Firstpage);