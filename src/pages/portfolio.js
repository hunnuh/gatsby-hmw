import React, { Component } from "react";
import Link from "gatsby-link";

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
  }

  handleOpenModal (path) {

    this.setState({ modalPath: path, showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
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
              className="w-100 white flex justify-center bb bw1 shadow-3"
              id="ocean"
              >
              <div
                style={{margin:"5rem 0rem 5rem 0rem", backgroundColor: "#0d202f"}}
                className="center ba b--white mv5 relative br2 shadow-3 pa1"
              >
                <h5
                  style={{top:"-.8rem", left:".8rem", backgroundColor: "#0d202f"}}
                  className="f7 tracked absolute top-0 ph2 pv1 br2 ba b--white"
                >
                  HUNTER SAYS:
                </h5>
                <p className="ma3 tracked tc lh-copy b" > "Scroll down forever to see <br/> my best design work. <br/> Click to enlarge."</p>
              </div>
            </div>
            <div className="w-70 self-center tc pt0">
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
                ▲ TO TOP
            </div>
          </ScrollToTop>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            appElement={document && document.getElementById('app')}
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
  <div className="tl mt5 mb0 bb bw1 b--white-90" style={{boxShadow: "0px 2px 0px 0px #0d202f"}}>
    <h1
      className=" f1 mt0 mb1 white-90"
      style={{letterSpacing:"1rem",

      textShadow: "2px 2.5px 0px #0d202f"}}
    >
      {children}
    </h1>
  </div>
);




export const portQuery = graphql`
  query PortfolioQuery {
    allFile (
      filter:{sourceInstanceName: {eq:"portfolio"}}

    )
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




export default PortfolioPage;
