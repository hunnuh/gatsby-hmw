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
        <div id="back" className="relative w-100 ">
          <div style={{backgroundColor: "#fff"}} className=" relative flex flex-column  ">
            <div className="mw8 self-center mt2">
              <h1 className="f2 mb2 mw7 black-80">Interacting with Computers, The World, and The Data Contained Therein</h1>
              <h2 className="fw1 mb2 mt2 f4 gray">My passion for data science, computers, and learning.</h2>
              <p className="f6 mb3 gray">By Hunter M. Wells</p>
              <div className="flex flex-row lh-copy mb5">

                <div className="w-70 pr5">
                  <img src={Photo} className="w-100 mv0"/>
                  <div className="w-100 bb b--moon-gray mb3 ">
                    <p className="f7 pb1 pl2 mv0 gray">Every item, product, animal, and minute, a point of data.</p>
                  </div>
                  <p>Despite the vastness of our world, we have found ways of keeping track of it. This simple fact astounds me every single day as I work with my computer. </p>
                  <p>Between hundreds of countries, thousands of cities, millions of buildings, and billions of people, the sheer quantity of <i>stuff</i> on this planet seems to be practically innumerable. Every thing, from corn cobs to brown bears, another point of data. To a computer, keeping track of it all is no big deal. </p>
                  <p> How amazing, that we can do this magic! We can probe reality, store massive amounts of our gathered data, and use it to build tools and answer questions. I think it's this sense of wonder and opportunity that makes me so passionate about my career with technology. </p>
                  <h3>A GIS Degree and Me</h3>
                  <p>In 2016, I earned two bachelor's degrees. One was a B.A. in Geo-Information Systems (GIS). Maps are my favorite example of how data, when presented visually, can help us understand our world. </p>
                  <p>My GIS degree included information systems coursework that is widely applicable. Algorithms, relational databases, statistical analysis, and web development are all included in the modern geographer's toolkit. </p>
                  <p>For my thesis project, I created an automated analytical process which measured what kind of businesses tend to cluster near members of different demographics. This kind of analysis could serve as the basis of a consumer application, or be useful for a company&rsquo;s internal use.</p>
                  <p>To invent this process, I utilized data published by USGS/ESRI. This data was as granular as individual block groups, which is as fine-toothed as demographic data available to the public can be. I also used the ArcGIS visual automation tool, which is a flowchart-like GUI for combining python algorithms into repeatable processes. This project culminated into a 35-page paper which proudly received an &ldquo;A.&rdquo;</p>
                  <h3>My Future With Technology</h3>
                  <p>In the years since I have completed college, I&rsquo;ve focused on becoming a top-notch web developer. By studying interface design, networking, object-oriented programming, and algorithmic problem-solving, I have arrived at the perfect way to combine my technological skills and my design talent. In web development, my GIS experience often comes into play, as many modern web applications use relational databases, statistical visualization, and geographically referenced data. Becoming adept with JavaScript, React, APIs, and the entire web ecosystem has allowed me to compound my strenths and continue feeding the flames of my passion.</p>
                  <p>Right now, I&rsquo;m looking for the next step in my career, which is what brings you to this site in the first place. I want to be on a team that makes awesome application(s). My craving to put my skills with technology and design to work is only lacking the right opportunity. Let's find out if we're as good of a fit as I think we are. Please don't hesitate to write or call - our next big project is waiting for us to build it.</p>
                  <p>--</p>
                  <p className="mt6 pt3 i"> Thank you for taking the time to read this article about my passion for data. Click <a href="#">here</a> if you would like to see some of my programming projects, <a href="#">here</a> to see my design work, and <a href="#">here</a> to contact me. I can&rsquo;t wait to hear from you!</p>

                </div>
                <div className="w-30">
                  <h5 className="mb2 mt0 pa2 white tc tracked" style={{backgroundColor: "#9d1c1f"}}>MAPS I MADE </h5>
                  <div className="bg-light-gray pa3">
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
  <div className="flex flex-column" onClick={() => props.openModal(props.thumb.props.src)}>
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
