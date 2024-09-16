import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArticlesList } from '../components';
class Articles extends Component {

  componentDidMount(){
  }

  componentWillReceiveProps(newProps){

  }


  render() {

    let fgStyle = {
      color: this.props.colors.fgColor
    };
    
    // let sStyle = {
    //   color: this.props.colors.sColor
    // };
    
    // let borderStyle = {
    //   borderColor: this.props.colors.fgColor
    // }; 

    return (
      <div className="container">
        <section className="firstpage">
          <h2 className="subtitle" style={fgStyle}>
            Research Publications
          </h2>
          <div className="profile-desc-cv">
            <div className="profile-desc-cv__desc">
              <p className="profile-paragraph" style={fgStyle}>
                I work at the intersection of urban planning, critical data studies, and data visualization to explore how data and technology control the access to resources and opportunities, particularly in the housing sector. My research centers on justice and equity, promoting democratic participation for marginalized residents who are often excluded from resources and opportunities, governed by algorithms and AI.
              </p>

              <p className="profile-paragraph" style={fgStyle}>
                My research focuses on three primary areas:
              </p>
              <ul className="research-areas" style={fgStyle}>
                <li>
                  <b>Systemic Inequality in Housing Technology.</b> I attend to the housing technologies' process of collecting data and training algorithms that render historical harms invisible during the measurement process. 
                </li>
                <li>
                  <b>Developing Reparative Algorithms for Housing Justice.</b> My work develops an actionable reparative lending programs that have direct implications for racial justice in housing policy. 
                </li>
                <li>
                  <b>Community-Centric Data Visualization and Participatory Methods.</b> I combine data visualization and participatory methods to work directly with community groups, making their neglected assets or issues visible. To see my data visualization and creative projects, see my list of <Link to="/projects" style={fgStyle}><u>projects.</u></Link>
                </li>
              </ul>

              <p className="profile-paragraph" style={fgStyle}>
              </p>
              <p className="profile-paragraph" style={fgStyle}>
                My work has been published in leading journals and proceedings across various fields, including Housing Policy Debate, Geoforum, Big Data & Society, ACM Conference on Fairness, Accountability, and Transparency (ACM FAccT), among others.
              </p>

              <p className="profile-paragraph" style={fgStyle}>
                You can also find my articles on <a href="https://scholar.google.com/citations?user=9S7B4AQAAAAJ" target="_blank" style={{...fgStyle, textDecoration: "underline"}} rel="noreferrer">my Google Scholar profile.</a>
              </p>
              <div className="l-apple-box">

              </div>
              <h3 className="subtitle" style={fgStyle}>
                Peer Reviewed Journal Articles & Conference Publications
              </h3>

              <ul className="articles">
                <li className="article" style={fgStyle}>
                  <u>So, W.</u> <a href="https://doi.org/10.1080/14649357.2024.2397017"   target="_blank" style={fgStyle} rel="noreferrer"><u>Reparative Urban Science: Challenging the Myth of Neutrality and Crafting Data-driven
                  Narratives.</u></a> <i>Planning Theory and Practice</i>. 0(0), 1-18.
                </li>

                <li className="article" style={fgStyle}>
                  Liu, E., <u>So, W.</u>, Hosoi, A.E., & D’Ignazio, C. <a href="https://www.dropbox.com/scl/fi/fxefjocf8vleivkkzukc0/Liu_etal_EAAMO_singlecolumn.pdf?rlkey=wxc2vrwhiw4jsr640p2jja80h&dl=0"   target="_blank" style={fgStyle} rel="noreferrer"><u>Racial Steering by Large Language Models: A Prospective Audit of GPT-4 on Housing Recommendations.</u></a> Forthcoming to the 2024 ACM Conference on Equity and Access in Algorithms, Mechanisms, and Optimization (EAAMO ‘24)
                </li>

                <li className="article" style={fgStyle}>
                  <u>So, W.</u>, D’Ignazio, C., 2023. <a href="https://journals.sagepub.com/doi/10.1177/20539517231210272"  target="_blank" style={fgStyle} rel="noreferrer"><u>Race-neutral vs race-conscious: Using algorithmic methods to evaluate the reparative potential of housing programs.</u></a> <i>Big Data & Society</i>, 10(2), 1-16.
                </li>

                <li className="article" style={fgStyle}>
                  <u>So, W.</u>, 2023. <a href="https://www.tandfonline.com/doi/full/10.1080/10511482.2022.2113815"  target="_blank" style={fgStyle} rel="noreferrer"><u>Which Information Matters? Measuring Landlord Assessment of Tenant Screening Reports.</u></a> <i>Housing Policy Debate</i>. 33(6), 1484-1510.
                </li>

                <li className="article" style={fgStyle}>
                  <u>So, W.</u>, Lohia, P., Pimplikar, R., Hosoi, A.E., D’Ignazio, C., 2022.  <a href="https://www.tandfonline.com/doi/full/10.1080/10511482.2022.2113815"  target="_blank" style={fgStyle} rel="noreferrer"><u>Beyond Fairness: Reparative Algorithms to Address Historical Injustices of Housing Discrimination in the US</u></a>, in: <i>2022 ACM Conference on Fairness, Accountability, and Transparency, FAccT ’22.</i> ACM, New York, NY, USA, pp. 988–1004.
                  <ul>
                    <li className="sub-article" style={fgStyle}>
                    <a href="https://www.youtube.com/watch?v=J1zGPqVgWgo" target="_blank" style={fgStyle} rel="noreferrer"><u>Presentation Video</u></a> and <a href="https://d29fjc9dxfrl92.cloudfront.net/public/beyond-fairness/So_etal_beyond_fairness_poster-42inches.pdf" target="_blank" style={fgStyle} rel="noreferrer"><u>Poster</u></a>. 
                    </li>
                  </ul>
                </li>

                <li className="article" style={fgStyle}>
                  Suresh, H., Movva, R., Dogan, A.L., Bhargava, R., Cruxen, I., Cuba, A.M., Taurino, G., <u>So, W.</u>, D’Ignazio, C., 2022. <a href="https://doi.org/10.1145/3531146.3533132"  target="_blank" style={fgStyle} rel="noreferrer"><u>Towards Intersectional Feminist and Participatory ML: A Case Study in Supporting Feminicide Counterdata Collection</u></a>, in: <i>2022 ACM Conference on Fairness, Accountability, and Transparency, FAccT ’22</i>. Association for Computing Machinery, New York, NY, USA, pp. 667–678. <b>Best student paper award.</b>
                </li>


                <li className="article" style={fgStyle}>
                  D’Ignazio, C., Cruxên, I., Val, H.S., Cuba, A.M., García-Montes, M., Fumega, S., Suresh, H., <u>So, W.</u>, 2022. <a href="https://doi.org/10.1016/j.patter.2022.100530"  target="_blank" style={fgStyle} rel="noreferrer"><u>Feminicide and counterdata production: Activist efforts to monitor and challenge gender-related violence.</u></a>, <i>Patterns</i> 3, 100530.
                </li>

                <li className="article" style={fgStyle}>
                  <u>So, W.</u>, Duarte, F., 2020. <a href="https://doi.org/10.1016/j.geoforum.2020.02.008"  target="_blank" style={fgStyle} rel="noreferrer"><u>Cartographers of North Korea: Who are they and what are the technical, political, and social issues involved in mapping North Korea.</u></a>, <i>Geoforum</i> 110, 147–156. 
                  <ul>

                    <li className="sub-article" style={fgStyle}>
                      <b>Gold Award: Information is Beautiful Awards</b>
                    </li>
                    <li className="sub-article" style={fgStyle}>
                    <a href="https://cartographers-nk.wonyoung.so" style={fgStyle} rel="noreferrer"><u>Data Visualization</u></a>, <Link to="/cartographers-nk" style={fgStyle} rel="noreferrer"><u>Project Page</u></Link>, <a href="https://www.youtube.com/watch?v=jT7cqkCgtPw" target="_blank" style={fgStyle} rel="noreferrer"><u>1-min Video</u></a>
                    </li>
                  </ul>
                </li>

                <li className="article" style={fgStyle}>
                  <u>So, W.</u>, Bogucka, E.P., Scepanovic, S., Joglekar, S., Zhou, K., Quercia, D., 2020. <a href="https://doi.org/10.1109/TVCG.2020.3030391"  target="_blank" style={fgStyle} rel="noreferrer"><u>Humane Visual AI: Telling the Stories Behind a Medical Condition.</u></a>, <i>IEEE Transactions on Visualization and Computer Graphics</i> 27, 678–688. 
                  <ul>
                    <li className="sub-article" style={fgStyle}>
                    <Link to="/humane-ai-for-health" style={fgStyle} rel="noreferrer"><u>Project Page</u></Link>, <a href="https://www.youtube.com/watch?v=YCmPjt_2DMo" target="_blank" style={fgStyle} rel="noreferrer"><u>1-min Video</u></a>
                    </li>
                  </ul>
                </li>


                <li className="article" style={fgStyle}>
                  Bogucka, E.P., Constantinides, M., Aiello, L.M., Quercia, D., <u>So, W.</u>, Bancilhon, M., 2020. <a href="https://doi.org/10.1109/MCG.2020.3026596"  target="_blank" style={fgStyle} rel="noreferrer"><u>Cartographic Design of Cultural Maps.</u></a>, <i>IEEE Computer Graphics and Applications</i> 40, 12–20.
                </li>
              </ul>


              <div className="l-apple-box">

              </div>
              <h3 className="subtitle" style={fgStyle}>
                Book Chapters, Workshop Papers, and Other Publications
              </h3>


              <ul className="articles">
                
                <li className="article" style={fgStyle}>
                  D’Ignazio, C., <u>So, W.</u>, Ntim-Addae, N., 2022. <a href="https://www.taylorfrancis.com/chapters/edit/10.4324/9781003112464-20/audit-catherine-ignazio-wonyoung-nicole-ntim-addae"  target="_blank" style={fgStyle} rel="noreferrer"><u>The Audit: Perils and possibilities for contesting oppression in the heritage landscape,</u></a> in: <i>The Routledge Handbook of Architecture, Urban Space and Politics</i>, Volume I. Routledge.
                </li>

                <li className="article" style={fgStyle}>
                  Bhargava, R., Suresh, H., Dogan, A., <u>So, W.</u>, Suarez Val, H., Fumega, S., and D’Ignazio, C. 2022. <a href="https://dataculture.northeastern.edu/static/files/C_J22_Data_Against_Feminicide_Paper.pdf"  target="_blank" style={fgStyle} rel="noreferrer"><u>News as Data for Activists: A Case Study in Feminicide Counterdata Production.</u></a> <i>Computation + Journalism 2022.</i> New York, NY.
                </li>

                <li className="article" style={fgStyle}>
                  D’Ignazio, C., Val, H., Fumega, S., Suresh, H., Cruxen, I., <u>So, W.</u>, Martinez, A., and Garcia-Montes, M. 2020. <a href="https://dataculture.northeastern.edu/static/files/C_J22_Data_Against_Feminicide_Paper.pdf"  target="_blank" style={fgStyle} rel="noreferrer"><u>Feminicide & Machine Learning: Detecting Gender-based Violence to Strengthen Civil Sector Activism.</u></a> <i>MD4SG ‘20: 4th Workshop on Mechanism Design for Social Good,</i> August 17-19, 2020. <b>New Horizons award for most inspiring paper.</b>
                </li>

                <li className="article" style={fgStyle}>
                  Kang, E., <u>So, W.</u>, 2016. <a href="http://koreantypography.org/wp-content/uploads/2016/08/kst_13_8_1_01.pdf.pdf"  target="_blank" style={fgStyle} rel="noreferrer"><u>multilingual.js: A Javascript Library for Multilingual Typesetting.</u></a> <i>LetterSeed 13: Technology and Typography.</i> Korean Society of Typography. Seoul, Korea.
                </li>

                <li className="article" style={fgStyle}>
                  <u>So, W.</u>, Koh, A., & Kang, E. 2016. <a href="https://www.dropbox.com/scl/fi/qnen10vrayrgenuyvmvq3/zeroboard.pdf?rlkey=g8s3hvsx38vzxppkoqhlpqh87&dl=0"  target="_blank" style={fgStyle} rel="noreferrer"><u>Zeroboard, Easy-to-Install BBS—Rough Sketch for a Techno-Cultural Maker History of the Korean Internet.</u></a> <i>Open Net Research Paper Competition.</i>, Seoul, Korea. 
                </li>
                 
              </ul>


              <div className="l-apple-box">

              </div>
              <h3 className="subtitle" style={fgStyle}>
                Reports and Essays
              </h3>


              <ul className="articles">
                
                <li className="article" style={fgStyle}>
                  TechEquity Collaborative & <u>So, W.</u>, 2024. <a href="https://techequity.us/2024/07/24/screened-out-of-housing-research-paper/" target="_blank" style={fgStyle} rel="noreferrer"><u>Screened Out of Housing: How AI-Powered Tenant Screening Hurts Renters.</u></a> 

                  <ul>
                    <li className="sub-article" style={fgStyle}>
                    <a href="https://techequity.us/press_release/opaque-ai-powered-tenant-screening-threatens-renter-protections/" style={fgStyle} rel="noreferrer" target="_blank"><u>Press Release</u></a>
                    </li>
                  </ul>
                </li>


                <li className="article" style={fgStyle}>
                  McElroy, E. & <u>So, W.</u>, 2021. <a href="https://metropolitics.org/Landlord-Tech-in-Covid-19-Times.html" target="_blank" style={fgStyle} rel="noreferrer"><u>Landlord Tech in Covid‑19 Times.</u></a> <i>Metropolitics.</i> 30 March 2021. 
                </li> 

                <li className="article" style={fgStyle}>
                  McElroy, E., <u>So, W.</u>, Weber, N. 2021. <a href="https://shelterforce.org/2021/03/25/keeping-an-eye-on-landlord-tech/" target="_blank" style={fgStyle} rel="noreferrer"><u>Keeping an Eye on Landlord Tech.</u></a> <i>Shelterforce.</i>
                </li> 


                <li className="article" style={fgStyle}>
                  <u>So, W.</u> 2017. <a href="https://medium.com/@wonyoungso/urban-data-visualzation-31a4766979b1" target="_blank" style={fgStyle} rel="noreferrer"><u>Urban Data Visualization.</u></a> <i>May 2017 Landscape Architecture Korea,</i> Seoul, Korea.
                </li> 

                <li className="article" style={fgStyle}>
                  <u>So, W.</u> 2017. <a href="https://actar.com/product/imminent-commons-live-from-seoul/" target="_blank" style={fgStyle} rel="noreferrer"><u>Seoul Libre Maps.</u></a> In: <i>Imminent Commons: Live from Seoul</i>. Actar Publishers. New York, NY.
                </li> 
        

              </ul>


              

            </div>
          </div>
{/* 
          <ArticlesList />
           */}
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

export default connect(mapStateToProps)(Articles);