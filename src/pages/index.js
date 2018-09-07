import React, { Component } from "react";

import TypeOut from "react-typeout";
import Animes from "../utils/animes.js";
import Link from "gatsby-link";

import { siteMetadata } from "../../gatsby-config";

import About from "../components/About";
import FeaturedDesign from "../components/FeaturedDesign";
import FeaturedProgramming from "../components/FeaturedProgramming";

import BlogLinks from "../components/BlogLinks";
import Skills from "../components/Skills";
import Before from "../components/Before";
import Favorite from "../components/Favorite";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Nav from "../components/Nav";

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

class IndexPage extends Component {
  componentDidMount(){
    Animes();
  }
  render(props) {

  let featuredDesign = this.props.data.allFile.edges
      .reduce((acc, curr) => acc.concat(curr.node), [])
      .filter(e => e.relativeDirectory === "featuredprojs" );

  let featuredProgramming = this.props.data.allFile.edges
      .reduce((acc, curr) => acc.concat(curr.node), [])
      .filter(e => e.relativeDirectory === "featuredprogs" );
console.log(featuredProgramming)
    return (
      <div className="" >
        <Nav/>
        <div className="relative w-100" style={{backgroundColor:"#19382B"}}>
          <div className="mv0 flex flex-column  ">
            <Intro />
          </div>
          <div style={{ background: "#19382B" }} className="relative flex flex-column  overflow-y-hidden">
            <img src={FishBG} style={{height:"50em", top:"11em"}} className="absolute z-0  right-0 " id="content"/>
            <img src={SpiderBG} style={{height:"52em", top:"44em"}} className="absolute z-0  left-0 " />
            <img src={MonkeyBG} style={{height:"50em", top:"84em"}} className="absolute z-0  right-0 " />
            <img src={ElephantBG} style={{height:"36em", top:"130em"}} className="absolute z-0  left-0 " />

            <div className="mw8 w-100 self-center z-4 mb4">
              <About />

            </div>
            <div className=" flex flex-column justify-center w-100 self-center z-4 bg-white ">
              <div className="mw8 w-100 self-center z-4 ">

                <h3 className="fw8 f2 black-60 lh-copy mv0 tc mv5"> Need strong skills? <strong style={{color: "#9d1c1f"}}>...I got 'em.</strong></h3>

                <div className="flex flex-row justify-center">
                  <div className="w-25 tc">
                    <h3 className="bb mw4 pb2 center mb3">✔ Hard Skills</h3>
                    <ul className="b f6 list pl0 ml0 black-70">
                      <li>JavaScript programming</li>
                      <li>Advanced digital design</li>
                      <li>Data analysis and DB's</li>
                      <li>Spatial statistics</li>
                      <li>Video & media production</li>
                    </ul>
                  </div>
                  <div className="w-25 tc">
                    <h3 className="bb mw4 pb2 center mb3">✔ Soft Skills</h3>
                    <ul className="b f6 list pl0 ml0 black-70">
                      <li>Fierce problem solver</li>
                      <li>Accomplished speaker</li>
                      <li>Effective self educator</li>
                      <li>Proven team loyalty</li>
                      <li>Well-adjusted and sane</li>
                    </ul>
                  </div>
                  <div className="w-25 tc">
                    <h3 className="bb mw4 pb2 center mb3">✔ Other Skills</h3>
                    <ul className="b f6 list pl0 ml0 black-70">
                      <li>Multi-instrumentalist</li>
                      <li>Pencil drawing & sketching</li>
                      <li>Electronics tinkering</li>
                      <li>Intermediate chess</li>
                      <li>Three ball juggling</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="mt5 mb6 pv4 ph5 center w-80 flex flex-row justify-between items-center bt bb b--black"
                >
                  <div className="flex flex-row items-center ">
                    <img src={Leaf} style={{height: "4rem"}} className="ma0 mr3 "/>
                    <h4 className="fw8 f3 black-80 lh-copy mv0 ">My résumé is ready for you.</h4>


                  </div>
                  <div className="flex flex-column justify-center ">
                    <a
                      style={{backgroundColor: "#9d1c1f"}}
                      className="white tracked br1 pointer fw8 f6 pv2 ph3 mw5 dib mt3 underline-hover"
                    >
                      RÉSUMÉ (PDF)
                    </a>
                    <p
                      style={{color: "#9d1c1f"}}
                      className="center f7 tracked fw1 mt1 mb0 o-70"
                    >
                      (05/25/18)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-column justify-center w-100 self-center z-4 bb bw2 b--black" style={{backgroundColor: "#0d202f"}}>
              <div className="mw8 pv5 w-100 self-center z-4 ">
                <FeaturedDesign content={featuredDesign}/>
              </div>
            </div>
            <div className=" flex flex-column justify-center w-100 self-center z-4 redbackground bb bw2 b--black">
              <div className="mw8 pt7 w-100 self-center z-4 ">
                <FeaturedProgramming content={featuredProgramming}/>
                <div className="mt7 mb6 pv6 w-100 tc">
                  <img src={Quotemark} className="h3 w3 self-center"/>
                  <p className="f2 mw7 white center lh-copy">Hunter is creative, sharp, and a hard worker. <br/> He's a valuable teammate.</p>
                  <span className="f7 white-50 center tracked">Dean Kolkey <br/> Founder @ NewsMaker </span>
                </div>
                <div className="pv7 w-100 flex flex-row justify-center">
                  <div className="ph5 pv4 mw7 ba b--black shadow-2 white br3 binding_dark tc">
                    <div className="flex flex-row justify-center mv4">
                      <div className="pa4 mw6 flex flex-column justify-center bg-white-10 ba b--white-40">
                        <h4 className="f2 mb0 bb pv2 mb2 shadow-4 br2 ba b--black-90" style={{ backgroundColor: "#9d1c1f"}}>Hunter + Data</h4>
                        <p className="f5 b lh-copy white-90 mv3  tracked " >Working with computers is a passion of mine.</p>
                        <p className="f6 lh-copy white-90 mt0 measure tracked ">To share some information about my background, I wrote a short article discussing my experience and achievements in the world of data. </p>
                        <Link to={"/data/"} style={{backgroundColor: "#9d1c1f"}} className="f6 mw4 pv2 ph3 self-center shadow-4 ba b--black-90 br2 white b pointer mt2 underline-hover no-underline tracked">READ IT</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-column justify-center w-100 self-center z-4 pv7 tc palmpattern">
              <div className=" mw6 ph5 pv3 center">
                <div style={{backgroundColor: "#9d1c1f"}} className="bw1 br3 ba b--black-60 pa4 flex flex-column justify-center shadow-3">
                <div className="w5 h5 mb0 pa4">
                  <img src={HeadshotSq} className="pa1 ba bw1 self-center z-4 br-pill shadow-3 bg-white b--near-black"/>
                </div>
                <h1 className="white mv0">Hunter M. Wells</h1>
                <p className="tracked f6 b white-90 mt2 mb3">DESIGNER | DEVELOPER</p>
                <p className="tracked f7 mb2 white-80 mb3" >hunter.m.wells@gmail.com</p>
                <div  className=" mt3 center dib">
                  <Link to={"/about/"} style={{color: "#9d1c1f"}} className="bg-white tracked br2 fw8 f6 pv2 ph3 shadow-3 no-underline underline-hover">SEE MORE</Link>
                </div>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
            path
            ProductHuntLink
            BlogPost
            Revenue
          }
        }
      }
    }
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
