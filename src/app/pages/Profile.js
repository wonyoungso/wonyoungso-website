import React, { Component } from 'react';
import { connect } from 'react-redux';

var tinycolor = require("tinycolor2");
class Firstpage extends Component {
  constructor(props){
    super(props);
    this.state = {
      mouseOver: false
    }
  }

  componentDidMount(){
  }

  componentWillReceiveProps(newProps){
  }


  handleMouseOver(e){
    this.setState({
      mouseOver: true
    })
  }

  handleMouseOut(e){
    this.setState({
      mouseOver: false
    })
  }

  render() {

    let { colors } = this.props;
    var color1 = tinycolor(colors.bgColor);

    let fgStyle = {
      color: this.props.colors.fgColor
    };

    let borderStyle = {
      borderColor: this.props.colors.fgColor
    }; 

    return (

      <div className="container">
        <section className="profile">

          <div className="about-area">
            <p className="about-area__text" style={fgStyle}>
              I study how urban technology has been historically used to orchestrate, predict, and police public life and how the future of urban technology can be different if we care more about empowering marginalized groups in the city.
            </p>
          </div>

          <div className="l-apple-box"></div>
          <div className="border--10" style={borderStyle}>

          </div>

          <div className="l-apple-box"></div>
          <div className="profile-desc-cv">
            <div className="profile-desc-cv__desc">
              <img onTouchEnd={this.handleMouseOut.bind(this)} onTouchStart={this.handleMouseOver.bind(this)} onMouseEnter={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)}
                 style={{
                  mixBlendMode: this.state.mouseOver ? 
                    "normal" : (color1.isLight() ? "multiply" : "luminosity"),
                  opacity: this.state.mouseOver ? 1 : 0.85 
                }}
                className="profile-photo" src="/so_wonyoung_headshot_cropped.jpg" alt="headshot of Wonyoung So"/>
              <p className="profile-paragraph" style={fgStyle}>
                I am a Ph.D. candidate in Urban Science at the Department of Urban Studies and Planning (DUSP) at the Massachusetts Institute of Technology (MIT), where I was a <a href="https://oge.mit.edu/fellowships/presidential-graduate-fellowship-program/"  style={fgStyle} target="_blank">Presidential Fellow</a>. I am also working as a research assistant and technical lead at the <a href="https://dataplusfeminism.mit.edu" target="_blank" style={fgStyle}>Data + Feminism Lab</a> at MIT. In 2011, I co-founded the crowdfunding platform Tumblbug and demonstrated an alternative to the sustainability of the DIY movement. I was a research fellow at the Senseable City Lab at MIT, and I co-curated Seoul Libre Maps at the Seoul Biennale of Architecture and Urbanism to realize the vision of a citizen-organized data community. I hold a Master in City Planning from MIT DUSP, a BFA in Visual Communication Design from Kookmin University, and I studied at the School for Poetic Computation in New York City. My work has been recognized by the Information is Beautiful Awards, Adobe, MIT Museum, the Seoul Biennale of Architecture and Urbanism, IEEE, Fast Co. Design, The Atlantic, CNN, The Guardian, Seoul Museum of Art, and Wired, among others.
              </p>
            </div>
            <div className="profile-desc-cv__cv">
              <p className="profile-paragraph">
                <a href="/so_cv_mostrecent.pdf" target="_blank" style={fgStyle}>
                  CV
                </a><br/>
                <a href="https://dusp.mit.edu/people/wonyoung-so" target="_blank" style={fgStyle}>
                  DUSP Page
                </a>
              </p>
            </div>
          </div>
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