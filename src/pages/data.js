import React, { Component } from "react";
import Link from "gatsby-link";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactModal from "react-modal";
import FontAwesome from "react-fontawesome";

import Photo from "../assets/data_image.jpg";
import Tech from "../assets/technology.svg";

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


class DataPage extends React.Component {

  constructor () {
    super();
    this.state = {
      modalPath: "",
      showModal: false,
      showAlert: true,
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

  componentDidMount(){
    if (typeof(window) !== 'undefined') {
      ReactModal.setAppElement('body')
    }
  }

  render () {

    let {showAlert} = this.state

    let content = this.props.data.allFile.edges
        .reduce((acc, curr) => acc.concat(curr.node), [])
        .filter(e => e.relativeDirectory === "datamaps" )
        .map((e, i) =>
        <img className="w-100 mb0 " src={`/portfolio/${e.relativePath}`}/>

      );

    let thumbs = content.map((e, i) => <Thumb thumb={e} key={i} caption={e.src} openModal={(path) => this.handleOpenModal(path)}/>)

    return (
      <div>
        <Nav page="data"/>
        <div  className="relative w-100 ">
          <div style={{backgroundColor: "#19382B"}} id="back" className=" relative flex flex-column items-center ph2-m">

            {showAlert &&
              <div style={{backgroundColor:"#FDFDFD"}} className="mw8 flex flex-row justify-start-l justify-center items-center mt4 shadow-1 ph4-l br3-ns w-100 pv3 relative ">
              <FontAwesome onClick={() => this.setState({showAlert:false})} name="close" style={{top:".6rem", right:".8rem"}} className="absolute fa-lg moon-gray pointer"/>

              <div className=" flex flex-row-ns flex-column justify-center items-center ph3 ph4-m ph0-l tc tl-ns">
                <img className="pa0 ma0" src={Tech} style={{height:"5.5rem"}}/>
                <div className="ml4-ns pr5-l">
                  <h1 className="f1 f3 dark-gray pv0 mb2 mt0">Working with computers is a passion of mine.</h1>
                  <h2 className="fw1 f5 mid-gray pv0 mv0" style={{lineHeight:"1.25rem"}}>To share some information about my education and background, I wrote this article discussing my achievements in the world of technology. For more about me, please <Link  style={{color: "#9d1c1f"}} to={"/about/"}>click here</Link>.</h2>
                </div>
              </div>

            </div>
          }

            <div style={{backgroundColor:"#FDFDFD"}} className="mw8 self-center mv4 shadow-1 ph4-l br3-ns">
              <div className="ph3 pv2">
                <h1 className="f2-ns f3 mb2 mw7 dark-gray">Interacting with Computers, The World, and The Data Contained Therein</h1>
                <h2 className="fw1 mb2 mt2 f5 mid-gray">My passion for data science, computers, and learning.</h2>
                <p className="f6 mb3 gray">By Hunter M. Wells</p>
              </div>

              <div className="flex flex-row-l flex-column lh-copy mb5 ph3">

                <div className="w-70-l w-100  pr4-l">
                  <img src={Photo} className="w-100 mv0"/>
                  <div className="w-100 bb b--moon-gray mb3 ">
                    <p className="f7 pb1 pl2 mv0 gray">Every person, place, thing, a point of data.</p>
                  </div>
                  <p>Our world is vast, but we have ways of keeping track of it. I'm astounded by this simple fact as I work with my computer every day.</p>
                  <p>Between hundreds of countries, thousands of cities, millions of buildings, and billions of people, the sheer quantity of <i>stuff</i> on this planet seems to be practically innumerable. Every thing, from corn cobs to brown bears, another point of data. To a computer, keeping track of it all is no big deal. </p>
                  <p> When we shop on Amazon, or take an Uber, we utilize sets of data to interact with our world. We also become computer data ourselves. How amazing, that we can do this magic! We can build tools and answer questions based on the data that we gather about our world. It's this sense of wonder and opportunity that makes me so passionate about my career with technology. </p>
                  <h3>Information Systems & Me</h3>
                  <p>During undergraduate, I earned two bachelor's degrees. One of them was a bachelor's in Geo-Information Systems (GIS). As a geographer, maps are my favorite example of how data (presented visually) can help us understand and interact with our world. </p>
                  <p>My GIS degree included information systems coursework that is applicable in many different fields of computer-based work. Algorithms, relational databases, statistical analysis, and web development are all included in the modern geographer's toolkit with the advent of pocket-sized GPS. </p>
                  <p>For my senior thesis, I invented an analytical process which measures business clustering in regards to demographic distribution. This kind of analysis could serve as the basis of a consumer application, or be useful for a company&rsquo;s internal use.</p>
                  <p>By using high-resolution data sourced from USGS/ESRI, I was able to measure business clustering at a local level. I also used the ArcGIS GUI for combining python algorithms into a repeatable process (pictured on the left). This project culminated into a 35-page paper which proudly received an &ldquo;A.&rdquo;</p>
                  <h3>My Future With Technology</h3>
                  <p>For the past 4 years, I&rsquo;ve focused on becoming a top-notch web developer. Designing and programming for the web is something I'm quite passionate about. I find it to be the perfect way to combine my technological skills and my design talent. By studying interface design, networking, JavaScript programming, and algorithmic problem-solving, I've found a niche which I can occupy proudly. </p>
                  <p>In web development, my GIS experience often comes into play, as many modern web applications use relational databases, statistical visualization, and geographically referenced data. Becoming adept with JavaScript, React, remote APIs, and the entire web ecosystem has allowed me to compound my strengths and continue feeding the flames of my passion.</p>
                  <p>What's next? I want to be on a team that makes awesome web applications. My craving for problem solving and elbow grease has me searching for the right team to put my skills to work. </p>
                  <p> If you're reading this, it's likely because you think I have potential to succeed on your team. I can assure you that I'm the kind of guy that you're going to appreciate having around. Let's find out if we're as good of a fit as I think we are. Please don't hesitate to write or call - our next big project is waiting for us to build it.</p>
                  <p>--</p>
                  <p className="mt2 pt3 i"> Thank you for taking the time to read this article about my passion for data. Click <Link style={{color: "#9d1c1f"}} to={"/programming/"}>here</Link> if you would like to see some of my programming projects, <Link style={{color: "#9d1c1f"}} to={"/portfolio/"}>here</Link> to see my design work, and <Link style={{color: "#9d1c1f"}} to={"/about/"}>here</Link> to contact me.</p>

                </div>
                <div className="w-30-l w-100">
                  <h5 className="mb2 mt0 pa2 white tc tracked" style={{backgroundColor: "#9d1c1f"}}>MAPS I MADE </h5>
                  <div className="bg-light-gray pa3 flex flex-column justify-center items-center ">
                    {thumbs}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Footer />
          </div>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
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
  };
};

let captionMap = {
  "/portfolio/datamaps/mapprocess.png": "Demographic Analysis Procedure (My Thesis)",
  "/portfolio/datamaps/sfv.png": "Businesses In the San Fernando Valley",
  "/portfolio/datamaps/southamerica.png": "Ancient Civilizations of South America",
  "/portfolio/datamaps/tarawa.jpg": "Battle of Tarawa, WWII",
  "/portfolio/datamaps/grackle.jpg": "Grackle Breeding Patterns",
  "/portfolio/datamaps/reinier.jpg": "Mount Reinier, WA",
}



const Thumb = (props) => (
  <div className="flex flex-column mw6" onClick={() => props.openModal(props.thumb.props.src)}>
    {props.thumb}
    <p className="f7 pa2 mt0 mb2">{captionMap[props.thumb.props.src]}</p>
  </div>
);




export const dataQuery = graphql`
  query dataQuery {
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


export default DataPage;
