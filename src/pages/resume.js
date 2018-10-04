import React, { Component } from "react";
import Link from "gatsby-link";

import FontAwesome from "react-fontawesome";

import { Document, Page } from 'react-pdf/dist/entry.webpack';

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
              <div className="flex flex-column justify-center items w-100-l mw8" >
                <a
                  href={data.allFile.edges[0].node.publicURL}
                  target={"_blank"}
                  className="white-80 hover-white tc f5 tracked mb3"> Click to download PDF
                </a>
                  <Document file={data.allFile.edges[0].node.publicURL} className="dn db-l self-center">
                    <Page pageNumber={1} width={1024} />
                  </Document>
                  <Document file={data.allFile.edges[0].node.publicURL} className="dn db-m self-center">
                    <Page pageNumber={1} width={600} />
                  </Document>
                  <Document file={data.allFile.edges[0].node.publicURL} className="db dn-ns self-center">
                    <Page pageNumber={1} width={250} />
                  </Document>
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
