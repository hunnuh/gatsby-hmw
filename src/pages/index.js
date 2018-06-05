import React, { Component } from "react";
import Link from "gatsby-link";
import TypeOut from "react-typeout";
import Animes from "../utils/animes.js";

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

import Leftleaf from "../assets/leftleaf.svg";
import Rightleaf from "../assets/rightleaf.svg";
import Quotemark from "../assets/quotemark.svg";
import Programming from "../assets/programming.svg";
import Analysis from "../assets/analysis.svg";


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
      <div className="ebug">
        <Nav/>
        <div id="back" className="relative w-100">
          <div className="mv0 flex flex-column  ">
            <Intro />
          </div>
          <div style={{ background: "#EBFFFC" }} className="relative flex flex-column  overflow-y-hidden">
            <img src={Rightleaf} style={{height:"150em", top:"0em"}} className="absolute z-0  right-0 " />

            <div className="mw8 w-100 self-center z-4 mb4">
              <About />
            </div>
            <div className=" flex flex-column justify-center w-100 self-center z-4 bg-dark-gray bb bw2 b--black">
              <div className="mw8 pv5 w-100 self-center z-4 ">
                <FeaturedDesign content={featuredDesign}/>
              </div>
            </div>
            <div className=" flex flex-column justify-center w-100 self-center z-4 redbackground bb bw2 b--black">
              <div className="mw8 pt7 w-100 self-center z-4 ">
                <FeaturedProgramming content={featuredProgramming}/>
                <div className="mt7 mb6 pv6 w-100 tc">
                  <img src={Quotemark} className="h3 w3 self-center"/>
                  <p className="f2 mw7 white center">Hunter has huge potential and is a great teammate. I was lucky to hire him.</p>
                  <span className="f7 white-50 center tracked">Gustavo Almadovar, Channel 4</span>
                </div>
                <div className="pv7 w-100">
                  <div className="ph5 pv4 bg-black shadow-2 white br4 bw2 ba b--white-40">
                    <div
                      style={{borderStyle:"dotted none none none"}}
                      className="w-90 center bb bw2 b--white-40 "
                    />
                    <div className="flex flex-row mv4">
                      <div className="w-50 tc pv5 mb0">
                        <img src={Analysis} className="h5 mt2 mr4 mb0"/>
                      </div>
                      <div className="w-50 pr6 pl4 pv4 flex flex-column justify-center bg-white-10 ba b--white-40">
                        <h4 className="f2 mb0 bb pv2 mb2" style={{borderColor: "#9d1c1f"}}>Me +  Data = {"<"}3</h4>
                        <p className="f5 lh-copy white-80 mb1 measure tracked">In addition to my skills in design, programming, and web dev, I have a degree in Geo-Information Systems (GIS).</p>
                        <p className="f5 lh-copy white-80 mv2 measure tracked"> Data Science is a passion of mine. I wrote an article about my experience and achievements in this area so you can learn a bit more about my skills. </p>
                        <a style={{color: "#9d1c1f"}} className="f5 pointer mt3 underline-hover tracked">Read the article ⇾ </a>
                      </div>
                    </div>
                    <div
                      style={{borderStyle:"dotted none none none"}}
                      className="w-90 center bb bw2 b--white-40 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-column justify-center w-100 self-center z-4 pv7 tc palmpattern">
              <div className=" mw6 ph5 pv3 center">
                <div className="bg-white br3 ba b--black-40 pa4 flex flex-column justify-center shadow-3">
                <div style={{borderColor: "#9d1c1f"}} className=" ba bw4 h5 w5 self-center z-4 br-pill shadow-3 bg-gray">

                </div>
                <h1>Hunter M. Wells</h1>
                <p className="tracked f7 black-50">DESIGNER + DEVELOPER</p>
                <p className="tracked f7 mb2 black-50" >hunter.m.wells@gmail.com</p>
                <p className="tracked f7 black-50">@hunnuh</p>
                <div  className=" mt2 center dib">
                  <a style={{backgroundColor: "#9d1c1f"}} className="white tracked br2 fw8 f6 pv2 ph3 shadow-3">SEE MORE</a>
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
