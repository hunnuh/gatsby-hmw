import React, { Component } from "react";
import Link from "gatsby-link";
import TypeOut from "react-typeout";
import FontAwesome from "react-fontawesome";

import { siteMetadata } from "../../gatsby-config";

import Nav from "../components/Nav";
import About from "../components/About";
import BlogLinks from "../components/BlogLinks";
import Skills from "../components/Skills";
import Before from "../components/Before";
import Favorite from "../components/Favorite";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

import Headshot from "../assets/headshot.jpg";

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
    return (
      <div >
        <Nav page="about"/>
        <div id="back" style={{backgroundColor:"#19382B", height: "100vh",}} className="relative w-100">
        <div  className="relative pt5" >

          <div
            style={{

              display: "flex",
              justifyContent: "center",
              flexFlow: "row-reverse wrap",
              margin: "auto"
            }}
            className="mw7 "
          >

            <div className="flex flex-column justify-center w-100 " >
              <div className="flex flex-row justify-center w-100 br3 pa4 shadow-3" style={{background: "#EBFFFC"}}>
                <div className="w-30">
                  <img src={Headshot} className="w5 pa3 bg-white shadow-3 mb0 ba b--black-20"/>
                </div>
                <div className="w-70 pv0 ph4 flex flex-column justify-center " >
                  <span className="b f3 " style={{color: "#9d1c1f"}}>About Hunter:</span>
                  <p className="lh-copy f6 mb2 mt3 ">&emsp; Hunter has the vision to consider the big picture and the dexterity to articulate the fine details. His ability for composition is apparent in his <Link style={{color: "#9d1c1f"}} to={"/portfolio/"}>design portfolio</Link> as well as his <Link style={{color: "#9d1c1f"}} to={"/portfolio/"}>programming skills.</Link> </p>
                  <p className="lh-copy f6 mb2 ">&emsp; Hunter is all about problem solving, working together, and delivering excellence on a day to day basis. He's earned two bachelor's degrees, and he's accumulated years of experience with multimedia production and programming for the web. </p>
                  <p className="lh-copy f6 mb2 ">&emsp; His tendency to lead by example is fueled by his consistency, positivity, and work ethic. Most of all, he's excited to find success on your team.</p>

                </div>
              </div>
              <div  className=" w-100 flex flex-row justify-around pb2 f7 b self-center mt3">
                <div style={{color: "#9d1c1f", backgroundColor:"#EBFFFC"}} className="pv2 ph3 br4 shadow-3">
                  <FontAwesome style={{color: "#9d1c1f"}} name="envelope" className="black-70 mh1"/>
                  <a style={{color: "#9d1c1f"}} className="no-underline underline-hover pointer " target={"_blank"} href={"mailto:hunter.m.wells@gmail.com"}>| hunter.m.wells@gmail.com</a>
                </div>
                <div style={{color: "#9d1c1f", backgroundColor:"#EBFFFC"}} className="pv2 ph3 br4 shadow-3">
                  <FontAwesome style={{color: "#9d1c1f"}} name="phone" className="black-70 mh1"/>
                  <a style={{color: "#9d1c1f"}} className="no-underline underline-hover pointer " onClick={() => this.giveNumber()}>| {this.state.numberText}</a>
                </div>
                <div style={{color: "#9d1c1f", backgroundColor:"#EBFFFC"}} className="pv2 ph3 br4 shadow-3">
                  <FontAwesome style={{color: "#9d1c1f"}} name="linkedin" className="black-70 mh1"/>
                  <a className="no-underline underline-hover pointer " style={{color: "#9d1c1f"}} target={"_blank"} href={"https://www.linkedin.com/in/hmw"}>| linkedin.com/in/hmw</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


export default AboutPage;
