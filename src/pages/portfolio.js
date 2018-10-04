import React, { Component } from "react";
import Link from "gatsby-link";
import FontAwesome from "react-fontawesome";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Masonry from "../components/Masonry";
import ReactModal from "react-modal";
import ScrollToTop from "react-scroll-up";

import Briefcase from "../assets/briefcase.svg";
import Leaf from "../assets/leafbreak_white.svg";

const modalStyles = {
  content : {
    position: "relative",
    display: "flex",
    height: "100%",
    left: "0",
    right: "0",
    top:"0",
    bottom: "0",
    margin: "auto, 0",
    border : "0px",
    background : "none",
    overflowY : "hidden",
      },
  overlay : {
    background : "rgba(22, 28, 33, 0.9)",
    position: "fixed",
    width: "100%",
    top: "0",
    bottom: "0",
    left: "50%",
    transform: "translateX( -50%)",
  }
};


class PortfolioPage extends React.Component {
  constructor () {
    super();
    this.state = {
      modalPath: "",
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.scrollToContent = this.scrollToContent.bind(this);
  }

  handleOpenModal (path) {

    this.setState({ modalPath: path, showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentDidMount(){
    if (typeof(window) !== 'undefined') {
      ReactModal.setAppElement('body')
    }
  }

  scrollToContent(tag){
    console.log("tag")
    let top = document.querySelector(tag).getBoundingClientRect().top;
    if(typeof window !== undefined){
      setTimeout(window.scroll({top, behavior:'smooth'}), 100)
    }
  }

  trimData(portfolioSection){
    let trimmedData = this.props.data.allFile.edges
      .reduce((acc, curr) => acc.concat(curr.node), [])
      .filter(e => e.relativeDirectory === portfolioSection );

    return trimmedData;
  }

  render () {
    var document = typeof document === 'undefined' ? '' : document;
    let edges = this.props.data.allFile.edges;

    console.log()
    let flyers = edges.filter(e => e.node.relativeDirectory == "flyers");
    return (
      <div>
        <Nav page="portfolio"/>
        <div id="back" style={{backgroundColor: "#19382B"}} className="relative w-100 ">
          <div className=" relative flex flex-column ">

            <div
              style={{color: "#FDFDFD"}}
              className="w-100 mw8 br3 mt2 pa3 flex flex-column justify-center self-center tc"
              >
                <img className="mw6 self-center mv0" src={Leaf} />
                <h1 className="mt3 f1-ns f2 self-center">A collection of my best designs. </h1>
                <p className=" mw6 lh-copy self-center" >
                  For me, creating a beautiful project is not optional. Scroll down to see the design skills I've developed during my career. Click to enlarge.
                </p>
            </div>

            <div className="w-100 mw8 self-center tc pt0 ">
              <div className="dn w-100  flex-ns  flex-row-ns flex-column justify-start ph2 ph0-ns mw7-l center mb5 mb0-ns">
                <span className="white b f6 w3 mb2 mb0-ns flex flex-column justify-center">Skip to:</span>
                <div className=" flex flex-row-ns flex-wrap justify-around items-center w-100">
                  <SubNavLink pass={"#we"}>WEB DESIGN</SubNavLink>
                  <SubNavLink pass={"#po"}>POSTERS</SubNavLink>
                  <SubNavLink pass={"#pr"}>PRINT MEDIA</SubNavLink>
                  <SubNavLink pass={"#lo"}>LOGOS & BRANDS</SubNavLink>
                  <SubNavLink pass={"#ph"}>PHOTOS & RASTER</SubNavLink>
                  <SubNavLink pass={"#ot"}>OTHER</SubNavLink>
                </div>
              </div>
              <HH>WEB DESIGN</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("websites").reverse()}
                cols={3}
              />
              <HH>POSTERS</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("flyers")}
                cols={4}
              />
              <HH>PRINT MEDIA</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("collateral").reverse()}
                cols={4}
              />
              <HH>LOGOS & BRANDS</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("identity")}
                cols={4}
              />
              <HH>PHOTOS & RASTER</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("photos")}
                cols={3}
              />
              <HH>OTHER</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("other")}
                cols={4}
              />

              <div
                style={{margin:"30rem 0rem 30rem 0rem"}}
                className="w-100 white flex"
              >
                <div
                  style={{backgroundColor: "#9d1c1f"}}
                  className="center ba b--white relative br2"
                >
                  <h5
                    style={{top:"-.6rem", left:".6rem", backgroundColor: "#9d1c1f"}}
                    className=" f7 tracked absolute top-0 ph2 pt1 white br2"
                  >
                    HUNTER SAYS:
                  </h5>
                  <p className="ma3 tracked tc b lh-copy"> "Thanks for checking out my design work. <br/> <Link to={"/programming/"} className="white"> Click here</Link> to see my programming projects."</p>
                </div>
              </div>
            </div>

          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Footer />
          </div>
          {/*large*/}
          <ScrollToTop showUnder={960}>
            <div
              style={{backgroundColor: "#9d1c1f"} }
              className = "flex flex-row justify-center items-center white w4 pv3 br3 shadow-3 b hover-bg-red ba"
            >
                <FontAwesome  name="arrow-up" className="mr2"/> TO TOP
            </div>
          </ScrollToTop>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Portfolio Modal"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
            style={modalStyles}
          >
            <div className="h-100 w-100 flex flex-column justify-center items-center" onClick={this.handleCloseModal}>
              <img
                className=" mv0 shadow-3 br3 self-center" src={this.state.modalPath}
                onClick={this.handleCloseModal}
              />
            </div>

          </ReactModal>
        </div>
      </div>
    );
  }
}

const HH = ({children}) => (
  <div className="tl-ns tc mt5-l mt3 mb0 bb bw1-ns b--white-90 mh3 mh0-ns" >
    <h1
      className=" f2-ns f3 mt0 mb1 white-90"
      id={children.substring(0, 2).toLowerCase()}
      style={{letterSpacing:".80rem"}}
    >
      {children}
    </h1>
  </div>
);

const SubNavLink = (props) => (
  <a
    href={props.pass}
    className="pa1 pa2-l white hover-bg-white hover-black f7 br3 no-underline mv1 nowrap pointer ba b--white shadow-1">
    {props.children}
  </a>
);

function scrollToContent(tag){
  let top = document.querySelector(tag).getBoundingClientRect().top;
  if(typeof window !== undefined){
    window.scrollTo({top, behavior:'smooth'})
  }
}

export const portQuery = graphql`
  query PortfolioQuery {
  allFile(filter: {sourceInstanceName: {eq: "portfolio"}}) {
    edges {
      node {
        relativeDirectory
        relativePath
        absolutePath
        extension
        childImageSharp {
          sizes(maxWidth: 1240) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
}
`;




export default PortfolioPage;
