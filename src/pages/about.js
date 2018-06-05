import React, { Component } from "react";
import Link from "gatsby-link";
import TypeOut from "react-typeout";


import { siteMetadata } from "../../gatsby-config";

import Nav from "../components/Nav";
import About from "../components/About";
import BlogLinks from "../components/BlogLinks";
import Skills from "../components/Skills";
import Before from "../components/Before";
import Favorite from "../components/Favorite";
import Footer from "../components/Footer";
import Intro from "../components/Intro";


class AboutPage extends Component {
  render() {

    return (
      <div >
        <Nav/>
        <div id="back" className="relative w-100">
        <div  className="relative ">

          <div
            style={{
              background: "#EBFFFC",
              display: "flex",
              justifyContent: "center",
              flexFlow: "row-reverse wrap",
              margin: "auto"
            }}
            className="mw7 br3 shadow-3"
          >

            <div className="flex flex-column justify-center">

              <div className="h5 pv7 mv7">

                <h1 style={{color: "#9d1c1f"}}>{siteMetadata.author}</h1>
              </div>
            </div>
          </div>
          <hr />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
    );
  }
}


export default AboutPage;
