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


const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding : '0px 0px 0px 0px',
    border : "0px",
    background : "none",
    overflowY : "hidden",
      },
  overlay : {
    background : "rgba(22, 28, 33, 0.9)"
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
      window.scrollTo({top, behavior:'smooth'})
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
        <div className="relative w-100 portfolioGradient">
          <div className=" relative flex flex-column ">

            <div
              style={{backgroundColor: "#0d202f", borderColor: "#0d202f"}}
              className="w-100 white flex justify-center bb bw1 shadow-3 ph2"
              id="ocean"
              >
              <div
                style={{margin:"5rem 0rem 5rem 0rem", backgroundColor: "#0d202f"}}
                className="center ba b--white mv5 relative br2 shadow-3 pa1 "
              >
                <h5
                  style={{top:"-.8rem", left:".8rem", backgroundColor: "#0d202f"}}
                  className="f7 tracked absolute top-0 ph2 pv1 br2 ba b--white"
                >
                  HUNTER SAYS:
                </h5>
                <p className="ma3 tracked tc lh-copy b" > "Scroll down forever to see <br className="dn db-ns"/> my best design work. <br/> Click to enlarge."</p>
              </div>
            </div>

            <div className="w-70-l w-90 self-center tc pt0 ">
              <div className=" w-100  flex flex-row-ns flex-column justify-start mv4 mw7-l center">
                <span style={{color: "#0d202f"}} className=" b f7 w3 mb2 mb0-ns flex flex-column justify-center">Skip to:</span>
                <div className=" flex flex-row-ns flex-wrap justify-around items-center w-100">
                  <SubNavLink pass={"#po"}>POSTERS</SubNavLink>
                  <SubNavLink pass={"#we"}>WEB DESIGN</SubNavLink>
                  <SubNavLink pass={"#pr"}>PRINT MEDIA</SubNavLink>
                  <SubNavLink pass={"#lo"}>LOGOS & BRANDS</SubNavLink>
                  <SubNavLink pass={"#ph"}>PHOTOS & RASTER</SubNavLink>
                  <SubNavLink pass={"#ot"}>OTHER</SubNavLink>
                </div>
              </div>
              <HH>POSTERS</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("flyers")}
                cols={4}
              />
              <HH>WEB DESIGN</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("websites").reverse()}
                cols={3}
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
                  style={{backgroundColor: "#0d202f"}}
                  className="center ba b--white relative br2"
                >
                  <h5
                    style={{top:"-.6rem", left:".6rem", backgroundColor: "#0d202f"}}
                    className=" f7 tracked absolute top-0 ph2 pt1 white br2"
                  >
                    HUNTER SAYS:
                  </h5>
                  <p className="ma3 tracked tc b lh-copy"> "Okay, maybe not <em>forever.</em> ;) <br/>  Thanks for looking. <Link to={"/programming/"} className="white"> Click here</Link> to see <br/> my programming projects."</p>
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
              style={{backgroundColor: "#0d202f"} }
              className = "flex flex-row justify-center items-center white w4 pv3 br3 shadow-3 b hover-bg-red ba"
            >
                <FontAwesome  name="arrow-up" className="mr2"/> TO TOP
            </div>
          </ScrollToTop>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
            style={modalStyles}
          >
            <img
              className="h-75 mv0 shadow-3 br3" src={this.state.modalPath}
              onClick={this.handleCloseModal}
            />
          </ReactModal>
        </div>
      </div>
    );
  }
}

const HH = ({children}) => (
  <div className="tl-ns tc mt5-l mt3 mb0 bb bw1-ns b--white-90" >
    <h1
      className=" f1-ns f3 mt0 mb1 white-90"
      id={children.substring(0, 2).toLowerCase()}
      style={{letterSpacing:"1rem",
      textShadow: "2px 2.5px 0px #0d202f"}}
    >
      {children}
    </h1>
  </div>
);

const SubNavLink = (props) => (
  <span
    style={{backgroundColor: "#0d202f"}}
    onClick={() => scrollToContent(props.pass)}
    className="pa1 pa2-l white f7 br3 no-underline underline-hover mv1 nowrap pointer ba b--white shadow-1">
    {props.children}
  </span>
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
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    }
  }
}
`;




export default PortfolioPage;
