import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ArticleList } from './';
import _ from 'lodash';

class ArticlesList extends Component {
  getYears(articles){
    let years = _.map(articles, p => { return p.year; });
    return _.uniq(years);
  }

  render() {
    let { articles, colors } = this.props;
    let years = this.getYears(articles);
    let fgStyle = {
      color: colors.fgColor
    };

    let borderStyle = {
      borderColor: colors.fgColor
    };
    
    return (
      <div className="articles-list">
        {
          _.map(years, year => {
            return (
              <div className="articles-list__year-area" key={year} style={borderStyle}>
                <div className="articles-list__year" style={fgStyle}>
                  {
                    year
                  }
                </div>
                <div className="articles-list__list">
                  {
                    _.map(_.filter(articles, p => { return p.year === year }), article => {
                      return (
                        <ArticleList {...article} key={article.id} />
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
    articles: state.articles,
    colors: state.colors
  }
};

export default connect(mapStateToProps)(ArticlesList);