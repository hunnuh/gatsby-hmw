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
        <Nav/>
        <div id="back" className="relative w-100 ">
          <div  className="oceanpattern relative flex flex-column ">
            <Header bg="ocean">
              <img src={Briefcase} className="h3 mb0 mt6 " />
              <h1 style={{color: "#EBFFFC"}} className="f3 tracked-mega mb6">PORTFOLIO</h1>

            </Header>
            <div
              style={{backgroundColor: "#0d202f"}}
              className="w-100 white flex justify-center"
              >
              <div
                style={{margin:"5rem 0rem 5rem 0rem"}}
                className="center ba b--white mv5 relative br2 shadow-3"
              >
                <h5
                  style={{top:"-.5rem", left:".6rem", backgroundColor: "#0d202f"}}
                  className="f7 tracked absolute top-0 ph2"
                >
                  HUNTER SAYS:
                </h5>
                <p className="ma3 tracked tc lh-copy b"> "Scroll down forever to see <br/> my best design work."</p>
              </div>
            </div>
            <div className="w-70 self-center tc pt3">
              <HH >POSTERS</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("flyers")}
                cols={4}
              />
              <HH>WEBDEV</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("websites").reverse()}
                cols={3}
              />
              <HH>PRINTS</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("collateral").reverse()}
                cols={4}
              />
              <HH>BRANDS</HH>
              <Masonry
                openModal={this.handleOpenModal}
                content={this.trimData("identity")}
                cols={4}
              />
              <HH>PHOTOS</HH>
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
                  <p className="ma3 tracked tc b lh-copy"> "Okay, maybe not <em>forever.</em> ;) <br/>  Thanks for looking. Click here to see <br/> my programming projects."</p>
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
              className=" flex flex-row justify-center items-center white w4 pv3 br3 shadow-3 b hover-bg-red"
            >
                Back to top
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
  <div className="paperpattern shadow-2  center pa2 mt5 mb0">
    <h1
      className=" f-6 inset-shadow ml5 mt0 mb1"
      style={{color: "#0d202f",  letterSpacing:"4.5rem"}}
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
