import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProjectThumb } from './';
import _ from 'lodash';

class ProjectsGrid extends Component {
  render() {
    let { projects } = this.props;

    return (
      <div className="projects-grid">
        {
          _.map(projects, (project, i) => {
            return (
              <ProjectThumb {...project} key={project.id} />
            );
          })
        }

        <div className="thumb-hidden"></div>
        <div className="thumb-hidden"></div>
        <div className="thumb-hidden"></div>
        <div className="thumb-hidden"></div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  
  return {
    projects: state.projects 
  }
};

export default connect(mapStateToProps)(ProjectsGrid);