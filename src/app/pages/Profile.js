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
{/* 
          <div className="about-area">
            <p className="about-area__text" style={fgStyle}>
              I study how urban technology has been historically used to orchestrate, predict, and police public life and how the future of urban technology can be different if we care more about empowering marginalized groups in the city.
            </p>
          </div> */}

          <div className="l-apple-box"></div>

          <div className="l-apple-box"></div>
          <div className="profile-desc-cv">
            <div className="profile-desc-cv__desc">
              <img onTouchEnd={this.handleMouseOut.bind(this)} onTouchStart={this.handleMouseOver.bind(this)} onMouseEnter={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)}
                 style={{
                  mixBlendMode: this.state.mouseOver ? 
                    "normal" : (color1.isLight() ? "multiply" : "luminosity"),
                  opacity: this.state.mouseOver ? 1 : 0.85 
                }}
                className="profile-photo" src="/so_wonyoung_headshot_cropped.jpg" alt="Headshot of Wonyoung So. A medium-skinned Asian man with short black hair wearing a light green shirt. Trees and other greenery are behind him."/>
              <p className="profile-paragraph" style={fgStyle}>
                Welcome! I work at the intersection of urban planning, critical data studies, and data visualization to study how access to resources and opportunities over space and place is mediated by data and technology, with a particular focus on housing. 
              </p>
              <p className="profile-paragraph" style={fgStyle}>
                I am a Postdoctoral Researcher at Data + Feminism Lab, MIT. In August 2025, I will join the Taubman College of Architecture and Urban Planning at University of Mighigan–Ann Arbor as an Assistant Professor of Urban Technology.
              </p>
                
              <p className="profile-paragraph" style={fgStyle}>
                I combine data-driven methods and data visualization practices to empirically bolster and rhetorically frame narratives for translating scholarly research into public impact. I center issues of justice and equity to promote the democratic participation of marginalized residents—particularly those marginalized by class, race, gender, and disability, among other durable categories of inequality—who are disproportionately excluded from accessing resources and opportunities, especially when such access is governed by algorithms and AI. 
              </p>

              <p className="profile-paragraph" style={fgStyle}>
                My research focuses on examining the role of AI, algorithms, and other data-driven technologies as key mechanisms of housing inequality in the US, particularly as such technologies are deployed in the specific domains of rental housing, eviction, and mortgage lending. I contribute to critical data studies and urban planning literature by analyzing contemporary housing data ecosystems. They reflect an existing world with disparate impacts based on legacies of structural racism that perpetuate these inequalities. This reality challenges the discourse on algorithmic fairness, which often centers on technical solutions to bias mitigation without sufficiently addressing the underlying socio-political and historical contexts. By examining the social and political dimensions of how data is collected and analyzed, illuminating the stakes involved, and showing how algorithmic priorities are set, I show how data practices perpetuate and exacerbate inequality. 
              </p>
              <p className="profile-paragraph" style={fgStyle}>
                In 2011, I co-founded Tumblbug, the largest crowdfunding platform for creative projects in Korea, demonstrating an alternative for the sustainability of the DIY movement. I have been a research fellow at the Senseable City Lab at MIT and co-curated Seoul Libre Maps at the Seoul Biennale of Architecture and Urbanism to realize the vision of a citizen-organized data community. I was an  <a href="https://oge.mit.edu/fellowships/presidential-graduate-fellowship-program/" style={{...fgStyle, textDecoration: "underline"}} target="_blank" rel="noreferrer">MIT Presidential Fellow</a> and worked as a research assistant and technical lead at <a href="https://dataplusfeminism.mit.edu" target="_blank" rel="noreferrer" style={{...fgStyle, textDecoration: "underline"}}>Data + Feminism Lab</a> at MIT.
              </p>
              <p className="profile-paragraph" style={fgStyle}>
                I hold a PhD and a Master in City Planning from MIT DUSP and a Bachelor of Fine Arts in Visual Communication Design from Kookmin University. My work has been recognized by Information is Beautiful Awards, MIT Museum, IEEE, Fast Co. Design, The Atlantic, CNN, The Guardian, Seoul Museum of Art, and Wired, among others.
              </p>
            </div>
            <div className="profile-desc-cv__cv">

              <p className="profile-paragraph" style={fgStyle}>
                wonyoung.so.work@gmail.com<br/>
                wso@mit.edu<br/><br/>
                <a href="https://dusp.mit.edu/people/wonyoung-so" target="_blank" rel="noreferrer" style={{...fgStyle, textDecoration: "underline"}}>DUSP Page</a><br/>
                <a href="https://www.linkedin.com/in/wonyoung-so-phd-3a819186/" rel="noreferrer" target="_blank" style={fgStyle}>
                  LinkedIn
                </a><br/>
                <a href="https://scholar.google.com/citations?hl=en&user=9S7B4AQAAAAJ" rel="noreferrer" target="_blank" style={fgStyle}>
                  Google Scholar
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