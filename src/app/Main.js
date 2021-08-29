import React, { Component } from 'react';
import { connect } from 'react-redux';
import { windowResize, changeProjects, changeArticles } from './actions';
import { Header, Footer } from './components';
import _ from 'lodash';
import { Route, Switch } from 'react-router-dom';
import workData from './data/works.json';
import Firstpage from './pages/Firstpage';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Articles from './pages/Articles';
import { withRouter } from 'react-router';
import "./stylesheets/style.scss";
// import { getSiteMap } from './utils';

class Main extends Component {
  
  componentDidMount(){

    this.props.dispatch(changeProjects(workData.works));
    this.props.dispatch(changeArticles(workData.articles));

    window.addEventListener('resize', this.resizeHandler.bind(this));
    this.resizeHandler();

  }

  resizeHandler(e){
    this.props.dispatch(windowResize({
      width: window.innerWidth,
      height: window.innerHeight
    }));
    
  }

  render() {  
    let isProject = !_.isUndefined(this.props.match.params.permalink);

    return (
      <section>
        <Header isProject={isProject} />

        <Switch>
          <Route exact path="/" component={Firstpage} />
          <Route exact path="/projects/grid" component={Firstpage} />
          <Route exact path="/projects/list" component={Firstpage} />
          <Route exact path="/about" component={Profile} />
          <Route exact path="/publications" component={Articles} />
          <Route exact path="/:permalink" component={Project} />
        </Switch>
        
        <Footer />
      </section>
    );
  }
}

let mapStateToProps = (state) => {
  return state;
}

export default withRouter(connect(mapStateToProps)(Main));