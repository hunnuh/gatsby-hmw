import React, { Component } from "react";
import Link from "gatsby-link";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactModal from "react-modal";

import Photo from "../assets/data_image.jpg";


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


class DataPage extends React.Component {

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

  componentDidMount(){
    if (typeof(window) !== 'undefined') {
      ReactModal.setAppElement('body')
    }
  }

  render () {


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
          <div style={{backgroundColor: "#fff"}} className=" relative flex flex-column  greypattern">
            <div style={{backgroundColor:"#FDFDFD"}} className="mw8 self-center mv4 shadow-1 ph4-l">
              <div className="ph3">
                <h1 className="f2-ns f3 mb2 mw7 dark-gray">Interacting with Computers, The World, and The Data Contained Therein</h1>
                <h2 className="fw1 mb2 mt2 f5 mid-gray">My passion for data science, computers, and learning.</h2>
                <p className="f6 mb3 gray">By Hunter M. Wells</p>
              </div>

              <div className="flex flex-row-l flex-column lh-copy mb5 ph3">

                <div className="w-70-l w-100  pr4">
                  <img src={Photo} className="w-100 mv0"/>
                  <div className="w-100 bb b--moon-gray mb3 ">
                    <p className="f7 pb1 pl2 mv0 gray">Every item, product, animal, and minute, a point of data.</p>
                  </div>
                  <p>Despite the vastness of our world, we have found ways of keeping track of it. I'm astounded by this simple fact as I work with my computer.</p>
                  <p>Between hundreds of countries, thousands of cities, millions of buildings, and billions of people, the sheer quantity of <i>stuff</i> on this planet seems to be practically innumerable. Every thing, from corn cobs to brown bears, another point of data. To a computer, keeping track of it all is no big deal. </p>
                  <p> When we shop on Amazon, or take an Uber, we ourselves get to participate in the world of data. How amazing, that we can do this magic! We can build tools and answer questions based on the data that we gather about our world. It's this sense of wonder and opportunity that makes me so passionate about my career with technology. </p>
                  <h3>Information Systems & Me</h3>
                  <p>In 2016, I earned two bachelor's degrees. One was a B.A. in Geo-Information Systems (GIS). As a geographer, maps are my favorite example of how data, when presented visually, can help us understand our world. </p>
                  <p>My GIS degree included information systems coursework that is widely applicable. Algorithms, relational databases, statistical analysis, and web development are all included in the modern geographer's toolkit with the advent of pocket-sized GPS. </p>
                  <p>For my senior thesis, I invented an analytical process which measures the business clustering in regards to demographic distribution. This kind of analysis could serve as the basis of a consumer application, or be useful for a company&rsquo;s internal use.</p>
                  <p>By using high-resolution data sourced from USGS/ESRI, I was able to measure business clustering at a local level. I also used the ArcGIS GUI for combining python algorithms into a repeatable process (pictured on the left). This project culminated into a 35-page paper which proudly received an &ldquo;A.&rdquo;</p>
                  <h3>My Future With Technology</h3>
                  <p>For the past 4 years, I&rsquo;ve focused on becoming a top-notch web developer. Designing and programming for the web is something I'm quite passionate about. I find it to be the perfect way to combine my technological skills and my design talent. By studying interface design, networking, JavaScript programming, and algorithmic problem-solving, I've found a niche in which I can flourish. </p>
                  <p>In web development, my GIS experience often comes into play, as many modern web applications use relational databases, statistical visualization, and geographically referenced data. Becoming adept with JavaScript, React, remote APIs, and the entire web ecosystem has allowed me to compound my strengths and continue feeding the flames of my passion.</p>
                  <p>What's next? I want to be on a team that makes awesome web applications. My craving for problem solving and elbow grease has me searching for the right team to put my skills to work. </p>
                  <p> If you're reading this, it's likely because you think I have potential to succeed on your team. I can assure you that I'm the kind of guy that you're going to appreciate having around. Let's find out if we're as good of a fit as I think we are. Please don't hesitate to write or call - our next big project is waiting for us to build it.</p>
                  <p>--</p>
                  <p className="mt2 pt3 i"> Thank you for taking the time to read this article about my passion for data. Click <Link to={"/programming/"}>here</Link> if you would like to see some of my programming projects, <Link to={"/portfolio/"}>here</Link> to see my design work, and <Link to={"/about/"}>here</Link> to contact me. I can&rsquo;t wait to hear from you!</p>

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
            <img
              className="h-75 mv0 shadow-3 br3" src={this.state.modalPath}
              onClick={this.handleCloseModal}
            />
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
