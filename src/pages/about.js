import React, { Component } from "react";
import Link from "gatsby-link";
import TypeOut from "react-typeout";
import FontAwesome from "react-fontawesome";
import Img from "gatsby-image"

import { siteMetadata } from "../../gatsby-config";

import Nav from "../components/Nav";
import About from "../components/About";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

import Headshot from "../assets/headshot.jpg";
import Leaf from "../assets/leaf.svg";

class AboutPage extends Component {
  constructor () {
    super();
    this.state = {
      numberText: "Click for Phone #",
    };

    this.giveNumber = this.giveNumber.bind(this);
  }

  giveNumber() {

    let number = "(" + (400+405).toString() + ") " + (450 + 455).toString() + "-" + (804+800).toString()
    this.setState({numberText:number});
  }

  render() {

    let {data} = this.props
    console.log(data)

    return (
      <div >
        <div id="back" style={{backgroundColor:"#19382B", minHeight: "100vh",}} className="relative w-100">
        <Nav page="about"/>

        <div  className="relative pv5-l pv4" >

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexFlow: "row-reverse wrap",
              margin: "auto"
            }}
            className="mw8 "
          >

            <div className="flex flex-column justify-center w-100 ph4-ns ph2" >
              <div className="flex flex-row-l flex-column justify-center w-100-l mw8 br3 pa4-ns pa3 shadow-3" style={{background: "#FDFDFD"}}>
                <div className="w-100 mw5 h-100 self-center mb4 mb0-l pa3 shadow-3 ba b--black-20">
                  <Img sizes={data.file.childImageSharp.sizes} className=" bg-white  mb0 "/>
                </div>
                <div className="w-70-l  pv0 ph4-l ph0 flex flex-column justify-center self-center " >
                  <span className="b f2-ns f3 flex flex-row bb pb2" style={{color: "#9d1c1f"}}>
                    <img
                      src={Leaf}
                      style={{height:"2.5rem"}}
                      className="mv0 mr2"/> About Hunter:
                  </span>
                  <p className="lh-copy f5-ns f6 mb2 mt2 measure-wide">&emsp; As a frontend developer, I have the vision to consider the big picture and the dexterity to articulate the fine details. My technical abilities are apparent in my <Link style={{color: "#9d1c1f"}} to={"/portfolio/"}>programming skills</Link> and <Link style={{color: "#9d1c1f"}} to={"/portfolio/"}>design portfolio</Link>. I know how to communicate highly effectively with programmers, developers, and designers alike. </p>
                  <p className="lh-copy f5-ns f6 mb2 measure-wide">&emsp; I'm all about problem solving, working together, and delivering excellence on a day to day basis. I have earned two bachelor's degrees, and accumulated years of experience with programming for the web, multimedia, and design. </p>
                  <p className="lh-copy f5-ns f6 mb2 measure-wide">&emsp; My tendency to lead by example is fueled by my consistency, positivity, and work ethic. I'm driven to succeed, and am not willing to accept anything less than greatness. Most of all, I'm excited to find success on your team.</p>

                </div>
              </div>
              <div  className=" w-100 flex flex-row-l flex-column justify-around pb2 f7-l f5-m f6 b self-center mt3">
                <div style={{color: "#9d1c1f", backgroundColor:"#FDFDFD"}} className="mv2 mv0-l pv2-ns pv3 ph2 ph3-l br4 shadow-3 tc">
                  <FontAwesome style={{color: "#9d1c1f"}} name="envelope" className="black-70 mh1"/>
                  <a style={{color: "#9d1c1f"}} className="no-underline underline-hover pointer " target={"_blank"} href={"mailto:hunter.m.wells@gmail.com"}>| hunter.m.wells@gmail.com</a>
                </div>
                <div style={{color: "#9d1c1f", backgroundColor:"#FDFDFD"}} className="mv2 mv0-l pv2-ns pv3 ph2 ph3-l br4 shadow-3 tc">
                  <FontAwesome style={{color: "#9d1c1f"}} name="clipboard" className="black-70 mh1"/>
                  <Link className="no-underline underline-hover pointer " style={{color: "#9d1c1f"}} to={"/resume/"}>| Résumé</Link>
                </div>
                <div style={{color: "#9d1c1f", backgroundColor:"#FDFDFD"}} className="mv2 mv0-l pv2-ns pv3 ph2 ph3-l br4 shadow-3 tc">
                  <FontAwesome style={{color: "#9d1c1f"}} name="phone" className="black-70 mh1"/>
                  <a style={{color: "#9d1c1f"}} className="no-underline underline-hover pointer " onClick={() => this.giveNumber()}>| {this.state.numberText}</a>
                </div>
                <div style={{color: "#9d1c1f", backgroundColor:"#FDFDFD"}} className="mv2 mv0-l pv2-ns pv3 ph2 ph3-l br4 shadow-3 tc">
                  <FontAwesome style={{color: "#9d1c1f"}} name="github" className="fa-lg black-70 mh1"/>
                  <a className="no-underline underline-hover pointer " style={{color: "#9d1c1f"}} target={"_blank"} href={"https://github.com/hunter-digital/"}>| github.com/hunter-digital</a>
                </div>
                <div style={{color: "#9d1c1f", backgroundColor:"#FDFDFD"}} className="mv2 mv0-l pv2-ns pv3 ph2 ph3-l br4 shadow-3 tc">
                  <FontAwesome style={{color: "#9d1c1f"}} name="linkedin" className="black-70 mh1"/>
                  <a className="no-underline underline-hover pointer " style={{color: "#9d1c1f"}} target={"_blank"} href={"https://www.linkedin.com/in/hmw"}>| linkedin.com/in/hmw</a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
    );
  }
}


export const aboutQuery = graphql`
  query AboutQuery {
  file(relativePath: { eq: "headshot.jpg" }) {
    childImageSharp {
      sizes(maxWidth: 700) {
        ...GatsbyImageSharpSizes
      }
    }
  }
}
`;

export default AboutPage;
