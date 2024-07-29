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
      <>
        <div className="container--firstpage">
          <section className="firstpage">

            <h2 className="subtitle" style={fgStyle}>
              Data Visualization and Creative Projects
            </h2>
            
            <div className="creative-projects-subtitle">
              <div className="profile-desc-cv__desc">
              
                <p className="profile-paragraph" style={fgStyle}>
                  I use data visualization and participatory methods to work with community groups, making their neglected assets or issues visible. To see my academic projects, see my list of <Link to="/publications" style={fgStyle}><u>publications.</u></Link>
                </p>
              </div>
            </div>

            <div className="list-grid">
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
      </>
    );
  }
}


let mapStateToProps = state => {
  return {
    colors: state.colors
  }
};

export default connect(mapStateToProps)(Firstpage);