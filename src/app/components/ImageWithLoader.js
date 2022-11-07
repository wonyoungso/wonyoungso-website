import React from 'react';
import _ from 'lodash';
// import { DuotoneImage } from 'react-duotone';
import { connect } from 'react-redux';
var tinycolor = require("tinycolor2");



class ImageWithLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: 1, // 0 loading 1 loaded 2 error
      opacity: 0
    }
  }
 
  handleImageLoaded() {
    this.setState({
      loaded: 1,
      opacity: 1
    });
  }
 
  handleImageErrored() {
    this.setState({
      loaded: 2
    });
  }
 
  render() {
    let { colors } = this.props;
    var color1 = tinycolor(colors.bgColor);
    
    // let c1, c2;

    // let bgColor = tinycolor(colors.bgColor).toRgb();

    // if (bgColor.r > 200 && bgColor.g > 200 && bgColor.b > 200) {
    //   let tc1= tinycolor(colors.fgColor).toRgb();
    //   if (tc1.r < 50 && tc1.g < 50 && tc1.b < 50) {
    //     c1 = "#444444";
    //   } else {
    //     c1 = colors.fgColor;
    //   }

    //   c2 = colors.bgColor;
    // } else {  
    //   c1 = colors.bgColor;

    //   let tc1 = tinycolor(c1).toRgb();
    //   if (tc1.r < 50 && tc1.g < 50 && tc1.b < 50) {
    //     c2 = colors.fgColor;
    //   } else {

    //     c2 = "#" + tinycolor(colors.bgColor).complement().toHex();
    //   }
    // }

    return (
      <div className="img-container" style={{overflow: 'hidden', width: _.isUndefined(this.props.width) ? 'auto' : this.props.width, height: _.isUndefined(this.props.height) ? 'auto' : (this.state === 1 ? 'auto' : this.props.height) }}>

       
        
        <img 
            className="img-container__img"
            style={{
              mixBlendMode: this.props.mouseOver ? 
                "normal" : (color1.isLight() ? "multiply" : "luminosity"),
              opacity: this.props.mouseOver ? 1 : 0.85
            }}
            alt={this.props.alt}
            src={this.props.imageUrl} />
        
      </div>
    );
  }
}

let mapStateToProps = state => { 
  return {
    colors: state.colors
  };
}

export default connect(mapStateToProps)(ImageWithLoader);