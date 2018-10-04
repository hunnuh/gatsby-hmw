import React, { Component } from "react";

import FontAwesome from "react-fontawesome";
import Link from "gatsby-link";

import { siteMetadata } from "../../gatsby-config";

import About from "../components/About";
import FeaturedDesign from "../components/FeaturedDesign";
import FeaturedProgramming from "../components/FeaturedProgramming";

import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Animes from "../utils/animes.js";

import FishBG from "../assets/fish_bkg.svg";
import SpiderBG from "../assets/spider_bkg.svg";
import MonkeyBG from "../assets/monkey_bg.svg";
import ElephantBG from "../assets/elephant_bg.svg";
import Rightleaf from "../assets/rightleaf.svg";
import Quotemark from "../assets/quotemark.svg";
import Programming from "../assets/programming.svg";
import Analysis from "../assets/analysis.svg";
import Leaf from "../assets/leaf.svg";
import Headshot from "../assets/headshot.jpg";
import HeadshotSq from "../assets/headshot_square.jpg";

import Resume from "../assets/Hunter_M_Wells_resume.pdf";

class IndexPage extends Component {




  render(props) {


  let featuredDesign = this.props.data.allFile.edges
      .reduce((acc, curr) => acc.concat(curr.node), [])
      .filter(e => e.relativeDirectory === "featuredprojs" );

  let featuredProgramming = this.props.data.allFile.edges
      .reduce((acc, curr) => acc.concat(curr.node), [])
      .filter(e => e.relativeDirectory === "featuredprogs" );

  let resume = this.props.data.allFile.edges



    return (
      <div className="bg-red absolute relative-l overflow-x-hidden" style={{maxWidth: "100vw"}} >
        <Nav/>
        <div className="relative w-100" style={{backgroundColor:"#19382B"}}>
          <div className="mv0 flex flex-column">
            <Intro />
          </div>
          <div style={{ background: "#19382B" }} className="relative flex flex-column overflow-y-hidden overflow-x-hidden">
            <div className="mw8 w-100 self-center z-4 mb4 mt2 ">
              <About />
            </div>
            <div className=" flex flex-column justify-center w-100 self-center z-4 bg-white ">
              <div className="mw8 w-100 self-center z-4 ph0">
                <h3 className="fw8 f1-ns f3 black-60 lh-copy mv0 tc mv5-ns mv4"> Need strong skills? <br className="dn-l"/> <strong style={{color: "#9d1c1f"}}>...I got 'em.</strong></h3>
                <div className="flex flex-row-ns flex-column justify-center">
                  <div className="w-25-ns w-100 tc ">
                    <h3 className="f4 bb  mw5 pb2 ph2 center mb3 dib">
                      <FontAwesome  name="check" className=""/> Hard Skills
                    </h3>
                    <ul className="b f6 list pl0 ml0 black-70 mb4 mb3-ns">
                      <li>JavaScript programming</li>
                      <li>React UI development</li>
                      <li>Advanced digital design</li>
                      <li>Statistics & algorithms</li>
                      <li>Professional multimedia</li>
                    </ul>
                  </div>
                  <div className="w-25-ns w-100 tc">
                    <h3 className="f4 bb  mw5 pb2 ph2 center mb3 dib">
                      <FontAwesome  name="check" className=""/> Soft Skills
                    </h3>
                    <ul className="b f6 list pl0 ml0 black-70 mb4 mb3-ns">
                      <li>Fierce troubleshooter</li>
                      <li>Accomplished speaker</li>
                      <li>Effective self-educator</li>
                      <li>Proven MVP quality</li>
                      <li>Well-adjusted and sane</li>
                    </ul>
                  </div>
                  <div className="w-25-ns w-100 tc">
                    <h3 className="f4 bb  mw5 pb2 ph2 center mb3 dib">
                      <FontAwesome  name="check" className=""/> Other Skills
                    </h3>
                    <ul className="b f6 list pl0 ml0 black-70 mb4 mb3-ns">
                      <li>Multi-instrumentalist</li>
                      <li>Drawing & Sketching</li>
                      <li>PCs and Electronics</li>
                      <li>Chess & thinking games</li>
                      <li>Three-ball juggling</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="mt5 mb6 pv4  ph4-l center w-80 flex flex-row-ns flex-column justify-between items-center bt bb b--black"
                >
                  <div className="flex flex-row-ns flex-column items-center">
                    <img src={Leaf} style={{height: "4rem"}} className="ma0 mr3 dn db-ns "/>
                    <img src={Leaf} style={{height: "6rem"}} className="ma0 mr3 db dn-ns"/>
                    <h4 className="fw8 f3-ns f4 black-80 lh-copy mv0-ns mv3 tc tl-ns ">My résumé is <br className="dn db-m dn-l"/> ready for you.</h4>


                  </div>
                  <div className="flex flex-column justify-center w-100 w-30-ns tc  ">
                    <Link
                      to={"/resume/"}
                      style={{backgroundColor: "#9d1c1f"}}
                      className="white tracked br2 pointer fw8 f6 pv2 ph3 w-auto mw5-ns w-100 dib no-underline underline-hover"
                    >
                      RÉSUMÉ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-column justify-center w-100 self-center z-4 " style={{backgroundColor: "#9d1c1f"}}>
              <div className="mw8 w-100 self-center z-4 ">
                <FeaturedProgramming content={featuredProgramming}/>
              </div>
            </div>
            <div className=" flex flex-column justify-center w-100 self-center z-4" style={{backgroundColor: "#0d202f"}}>
              <div className="mw8 pv5-ns w-100 self-center z-4 ">
                <FeaturedDesign content={featuredDesign}/>
              </div>
            </div>
            <div className=" flex flex-column justify-center items-center w-100 self-center z-4 pv7-ns pv3 tc palmpattern">

                <div
                  style={{backgroundColor: "#9d1c1f", width:"20rem"}}
                  className=" bw1 br3-ns ba-ns b--black-60 pa4-ns pa2 pb4 flex flex-column justify-center items-center shadow-3"
                >
                  <div className="w5 h5 mb0 pa4 flex flex-row items-center">
                    <img src={HeadshotSq} className="pa1 ba bw1 self-center z-4 br-pill shadow-3 bg-white b--near-black"/>
                  </div>
                  <h1 className="white mv0">Hunter M. Wells</h1>
                  <p className="tracked f6 b white-90 mt2 mb0">FRONTEND DEVELOPER</p>
                  <p className="tracked f7 mv2 white-80" >hunter.m.wells@gmail.com</p>
                  <div className="f4 pa1 ">
                    <a href="http://github.com/hunter-digital"><FontAwesome name="github" className="white-70 hover-white mh2"/></a>
                    <a href="http://www.linkedin.com/u/hmw"><FontAwesome name="linkedin" className="white-70 hover-white mh2"/></a>
                    <Link to={"/resume/"}><FontAwesome name="clipboard" className="white-70 hover-white mh2 "/></Link>
                  </div>
                  <div  className=" mt3 center dib">
                    <Link to={"/about/"} style={{color: "#9d1c1f"}} className="bg-white tracked br2 fw8 f6 pv2 ph3 shadow-3 no-underline underline-hover">SEE MORE</Link>
                  </div>
                </div>

            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}





export const rootQuery = graphql`
  query IndexQuery {
    allFile
      {
      edges {
        node {
          relativeDirectory
          relativePath
          absolutePath
        }
      }
    }
  }
`;

export default IndexPage;
