import React, { Component } from "react";
import Link from "gatsby-link";

import FontAwesome from "react-fontawesome";

import spdf from "simple-react-pdf";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import Resume from "../assets/Hunter_M_Wells_resume.pdf";



class ResumePage extends Component {
  constructor () {
    super();

  }


  render() {

    let {data} = this.props


    return (
      <div >
        <div id="back" style={{backgroundColor:"#19382B", minHeight: "100vh",}} className="relative w-100">
        <Nav page="resume"/>

        <div  className="relative pv4-l pv3" >

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
              <div style={{minHeight:"30rem"}} className="flex flex-column justify-between  w-100-l mw8 pa3 bg-white-10 relative" >
                <p style={{top:"15rem", left:"45%"}} className="white absolute z-0 ">Loading...</p>
                <a
                  href={data.allFile.edges[0].node.publicURL}
                  target={"_blank"}
                  className="white-80 hover-white tc f5 tracked mb3"> Click to download PDF
                </a>
                <div className="mw8 flex flex-column justify-center ">
                   <spdf.SimplePDF file={data.allFile.edges[0].node.publicURL}/> 
                </div>
                  <a
                    href={data.allFile.edges[0].node.publicURL}
                    target={"_blank"}
                    className="white-80 hover-white tc f5 tracked mt3"> Click to download PDF
                  </a>
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

export const resQuery = graphql`
  query ResQuery {
  allFile(filter: { extension: { eq: "pdf" } }) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`;

export default ResumePage;
