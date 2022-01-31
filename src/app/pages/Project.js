import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { changeProject, changeColors } from '../actions';
import { ProjectPictures, Lightbox } from '../components';
import works from '../data/works';
import { withRouter } from 'react-router';

class Project extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.props.dispatch(changeProject(null));
    this.loadData(this.props);
  }

  loadData(props){

    let workData  = _.find(works.works, w => w.permalink === this.props.match.params.permalink);
    
    this.props.dispatch(changeProject(workData));
        
    this.props.dispatch(changeColors({
      fgColor: workData.fg_color,
      bgColor: workData.bg_color,
      sColor: workData.s_color
    }));
  }

  render() {

    let { project } = this.props;

    let fgStyle = {
      color: this.props.colors.fgColor
    };
    
    let borderStyle = {
      borderColor: this.props.colors.fgColor
    };


    return (

      <div className="container">
        <section className="project">

          <div className="project-ty">
            <div className="project-ty__title">
              <div className="border--10" style={borderStyle}></div>
              <div className="l-apple-box--quarter"></div>

              <h2 className="main-title" style={fgStyle}>
                { !_.isNull(project) ? project.title_en : "-" }
              </h2>
            </div>

            <div className="project-ty__year" style={fgStyle}>
              { !_.isNull(project) ? project.year : "-" } <br/>
              
              <div className="project-ty__category">
                { 
                  !_.isNull(project) ? _.map(project.categories, (c, i) => {
                    return (
                      <div key={i} style={fgStyle}>{ c.name_en }</div>
                    );
                  }) : null
                }
              </div>

            </div>
          </div>
    
          {
            project ? 
            <div className="project-info">
              <div className="project-info__desc">
                {
                  project.website ? 
                  <>
                    <a href={ project.website} rel="noreferrer" target="_blank" className="project-info__link" style={fgStyle}>
                    { project.website }
                    </a>
                    <div className="l-apple-box--double"></div>
                  </> : null  
                }
                
                <div className="border--10" style={borderStyle}></div>
                <div className="l-apple-box"></div>
                <div className="project-info__desc--en" dangerouslySetInnerHTML={{__html: !_.isNull(project) ? project.description_en : "<p>-</p>"}} style={fgStyle}>
                </div>
                
                <div className="l-apple-box"></div>
                <div className="project-info__desc--ko" dangerouslySetInnerHTML={{__html: !_.isNull(project) ? project.description_ko : "<p>-</p>"}} style={fgStyle}>
                </div>
              </div>


              <div className="project-info__credit" dangerouslySetInnerHTML={{__html: !_.isNull(project) ? project.credit_en : "<p>-</p>"}} style={fgStyle}>
              </div>
            </div> : null
          }
          
          {
            !_.isNull(project) ?
            <ProjectPictures videoTag={project.video_tag} pictures={project.pictures} videos={project.videos} />
            : null
          }
          {
            _.isNull(this.props.lightbox) ? 
            null : <Lightbox />  
          }
       
        </section>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    project: state.project,
    colors: state.colors,
    lightbox: state.lightbox
  };
};

export default withRouter(connect(mapStateToProps)(Project));