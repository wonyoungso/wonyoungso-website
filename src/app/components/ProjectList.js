import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

class ProjectList extends Component {
  render() {

    let fgStyle = {
      color: this.props.colors.fgColor
    };
    
    let category = _.first(this.props.categories);
    let categories = [];
    if (!_.isUndefined(category)) {
      categories.push(category);
    }
    return (
      <Link to={`/${this.props.permalink}`} className="project-list">

        <div className="project-list__title" style={fgStyle}>
          { this.props.title_en }
        </div>

        <div className="project-list__category">
          { _.map(categories, (c, i) => {
            return (
              <span key={i} style={fgStyle}>{ c.name_en }</span>
            );
          })}
        </div>

      </Link>
    );
  }
}

let mapStateToProps = state => {
  return {
    colors: state.colors
  }
};

export default connect(mapStateToProps)(ProjectList);