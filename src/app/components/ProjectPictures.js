import React, { Component } from 'react';
import { Picture, Video } from './';
import _ from 'lodash';
import { connect } from 'react-redux';

class ProjectPictures extends Component {
  componentWillUnmount(){
    console.log("projectpictures unmounted");
  }
  componentDidMount(){  
    // this.setColor(this.props);
  }

  componentWillReceiveProps(newProps){
    // this.setColor(newProps);
  }

  setColor(props){

    // let { pictures } = props;
    // let pictureFirst = _.first(pictures);

    // if (!_.isUndefined(pictureFirst)) {

    //   // var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      
    //   // if (isFirefox) {
    //   //   this.img = new Image();

    //   //   this.img.onload = e => {
    //   //     let albumColors = new AlbumColors(this.img);
    //   //     albumColors.getColors(colors => {
    //   //       let resultColors = {
    //   //         fgColor: "",
    //   //         bgColor: "",
    //   //         sColor: ""
    //   //       };

    //   //       resultColors.bgColor = rgbToHex(colors[0][0], colors[0][1], colors[0][2]);
    //   //       resultColors.fgColor = rgbToHex(colors[1][0], colors[1][1], colors[1][2]);
    //   //       resultColors.sColor = rgbToHex(colors[2][0], colors[2][1], colors[2][2]);

    //   //       // this.props.dispatch(changeColors(resultColors));
    //   //       console.log(resultColors);
    //   //     });
    //   //   };

    //   //   this.img.crossOrigin = "";
    //   //   this.img.src = pictureFirst.url.desktop;
    //   // }
    // }
  }

  render() {
    let { pictures, videos, videoTag } = this.props;

    // let pictureFirst = _.first(pictures);

    return (
      <div className="project-pictures">
        {
          _.isNull(videoTag) ? 
          null :
          <div className="project-video" dangerouslySetInnerHTML={{__html: videoTag}}>
          </div>
        }

        {
          _.map (videos, (video, i) =>{
            return (
              <Video key={video.mp4_url} {...video } />
            );
          })
        }

        
        {
          _.map (pictures, (picture, i) =>{
            return (
              <Picture key={picture.id + "_" + i} {...picture} />
            );
          })
        }
      </div>
    );
  }
}

export default connect()(ProjectPictures);