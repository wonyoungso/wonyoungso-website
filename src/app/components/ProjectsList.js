import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProjectList } from './';
import _ from 'lodash';

class ProjectsList extends Component {
  getYears(projects){
    let years = _.map(projects, p => { return p.year; });
    return _.uniq(years);
  }

  render() {
    let { projects, colors } = this.props;
    let years = this.getYears(projects);

    let fgStyle = {
      color: colors.fgColor
    };

    let borderStyle = {
      borderColor: colors.fgColor
    };
    
    return (
      <div className="projects-list">
        {
          _.map(years, year => {
            return (
              <div className="projects-list__year-area" key={year} style={borderStyle}>
                <div className="projects-list__year" style={fgStyle}>
                  {
                    year
                  }
                </div>
                <div className="projects-list__list">
                  {
                    _.map(_.filter(projects, p => { return p.year === year }), project => {
                      return (
                        <ProjectList {...project} key={project.id} />
                      )
                    })
                  }
                </div>

              </div>
            );
          })
        }
        
      </div>
    );
  }
}

let mapStateToProps = state => {
  
  return {
    projects: state.projects,
    colors: state.colors
  }
};

export default connect(mapStateToProps)(ProjectsList);