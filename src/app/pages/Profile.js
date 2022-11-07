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
                Now I am a Ph.D. student in Urban Information Systems at the Department of
                Urban Studies and Planning (DUSP) at the Massachusetts Institute of Technology (MIT), where I was Presidential Fellow. I am also working as a research assistant and technical lead at the Data + Feminism Lab at MIT. In 2011, I co-founded the crowdfunding platform Tumblbug and demonstrated an alternative about the sustainability of the DIY movement. I was a research fellow at at the Senseable City Lab at MIT, and I co-curated Seoul Libre Maps in Seoul Biennale of Architecture and Urbanism for realizing the vision of a citizen-organized data community. I hold a Master in City Planning at MIT DUSP, a BFA in Visual Communication Design from Kookmin University, and I studied at the School for Poetic Computation in New York City. My work has been recognized by the Information is Beautiful Awards, Adobe, MIT Museum, the Seoul Biennale of Archiecture and Urbanism, IEEE, Fast Co. Design, The Atlantic, CNN, The Guardian, Seoul Museum of Art and Wired, among others.
              </p>
            </div>
            <div className="profile-desc-cv__cv">
              <p className="profile-paragraph">
                <a href="/cv_20221105.pdf" target="_blank" style={fgStyle}>
                  CV
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