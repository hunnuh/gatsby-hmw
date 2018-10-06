import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image"

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


class EducationPage extends React.Component {

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
        .filter(e => e.base !== "data_image.jpg" )
        .map((e, i) =>
        <img className="w-100 mb0 " src={`/portfolio/${e.relativePath}`}/>

      );

    let feature = this.props.data.allFile.edges
    .reduce((acc, curr) => acc.concat(curr.node), [])
    .filter(e => e.base === "data_image.jpg" )[0].childImageSharp.sizes

    let thumbs = content.map((e, i) => <Thumb thumb={e} key={i} caption={e.src} openModal={(path) => this.handleOpenModal(path)}/>)

    return (
      <div>
        <Nav page="education"/>
        <div  className="relative w-100 ">
          <div style={{backgroundColor: "#19382B"}} id="back" className=" relative flex flex-column items-center ph2-m">

            {showAlert &&
              <div style={{backgroundColor:"#FDFDFD"}} className="mw8 flex flex-row justify-start-l justify-center items-center mt4 shadow-1 ph4-l br3-ns w-100 pv3 relative ">
              <FontAwesome onClick={() => this.setState({showAlert:false})} name="close" style={{top:".6rem", right:".8rem"}} className="absolute fa-lg moon-gray pointer"/>

              <div className=" flex flex-row-ns flex-column justify-center items-center ph3 ph4-m ph0-l tc tl-ns">
                <img className="pa0 ma0" src={Tech} style={{height:"5.5rem"}}/>
                <div className="ml4-ns pr5-l">
                  <h1 className="f1 f3 dark-gray pv0 mb2 mt0">Doing excellent work on the computer is my specialty.</h1>
                  <h2 className="fw1 f5 mid-gray pv0 mv0 " style={{lineHeight:"1.25rem"}}>To share some information about my education and background, I wrote this article discussing my achievements in the world of technology. For more about me, or to get in touch, please <Link  style={{color: "#9d1c1f"}} to={"/about/"}>click here</Link>.</h2>
                </div>
              </div>

            </div>
          }

            <div style={{backgroundColor:"#FDFDFD"}} className="mw8 self-center mv4 shadow-1 ph4-l br3-ns">
              <div className="ph3 pv2">
                <h1 className="f2-ns f3 mb2 mw7 dark-gray">On Becoming a Modern Digital Professional</h1>
                <h2 className="fw1 mb2 mt2 f5 mid-gray">My path to digital nirvana via JavaScript, multimedia, and data science.</h2>
                <p className="f6 mb3 gray">By Hunter M. Wells | October, 2018</p>
              </div>

              <div className="flex flex-row-l flex-column lh-copy mb5 ph3">

                <div className="w-70-l w-100  pr4-l">
                  <Img sizes={feature} className="w-100 mv0 bg-mid-gray" />
                  <div className="w-100 bb b--moon-gray mb3 ">
                    <p className="f7 pb1 pl2 mv0 gray">You're not a real professional unless you have at least two screens going.</p>
                  </div>
                  <p>There's a whole lot of stuff out there to learn. Especially when it comes to computers.</p>
                  <p>Although there's a vast amount to learn, and no one could ever learn it all, a modern digital professional needs to have a lot of tools in their mental toolbox. It's been a lifelong goal of mine to become an advanced digital professional whose toolbox is a subject of envy. It seems to me that working with technology is a cumulative discipline, where your level of understanding is informed by all the skills you've developed and experiences you've had beforehand. The more time you've spent on a computer, the wiser your digital intuition becomes.</p>
                  <p>In my career, I've proven that I have the talent and brainpower needed to succeed. By the time I get to the top level, my skillset will draw upon decades of learning and expertise, and will culminate into wisdom that will make me an indispensable member of a team that makes amazing things. With my background, I'm well on my way, and I work towards becoming a better developer every day. By now, I've found a strong niche in web app frontend development using JavaScript and related tools, but I wasn't always so focused.</p>

                  <h3>Developing Into a Professional</h3>
                  <p>During my adolescence, I found a passion designing graphics and documents on my computer. This skill allowed me to work as a graphic designer for almost a decade, completing <Link style={{color: "#9d1c1f"}} to="/portfolio/">large-scale projects</Link> both in physical size and in distribution quantities. My success as a graphic designer was on the right track, but I felt there was a higher calling for me when it comes to creating on the computer.</p>
                  <p>In college, I was able to "double major" and earn two bachelor's degrees concurrently. One was in Geo-Information Systems (GIS), a field that includes relational databases, algorithms, data science, data visualization, and statistics. My other degree was in Multimedia Production and included coursework which covered web development, JavaScript programming, video production, and animation. </p>
                  <p>Colleagues have described me as a multidisciplinarian, but I see my skillset as a neatly woven patchwork which is well-suited for the development of web applications. As previously mentioned, the combination of these digital skills makes me a wiser digital professional. My culminated experience allows me to communicate with a diverse set of specialists and consider the bigger picture as I'm focusing on my own responsibilities. Someday, this breadth will make me an excellent team leader. While at CSUN, my university even <a target={"_blank"} style={{color: "#9d1c1f"}} href="https://www.csun.edu/mynorthridge/news/mapping-out-future">wrote an article about my potential</a>.</p>

                  <h3>Data & Information Systems</h3>
                  <p>As a geographer, maps are my favorite example of how data (presented visually) can help us understand and interact with our world. In web development, my GIS experience often comes into play, as many modern web applications use relational databases, statistical visualization, and geographically referenced data. </p>
                  <p>For my GIS senior thesis, I invented an analytical process which measures business clustering in regards to demographic distribution. This kind of analysis could serve as the basis of a consumer application, or be useful for a company&rsquo;s internal use.</p>
                  <p>By using high-resolution data sourced from USGS/ESRI, I was able to measure business clustering at a local level. I also used the ArcGIS GUI for combining python algorithms into a repeatable process (pictured on the left). This project culminated into a 35-page paper which proudly received an &ldquo;A.&rdquo;</p>

                  <h3>Digital Media</h3>
                  <p>Over the years, I've completed several digital media projects. While working with digital media, I often integrate my other skills such as scripting and programming. My junior year, I won a $3,000 dollar scholarship for accomplished students in the field of interactive media. At CSUN's yearly Multimedia Showcase, I was the recipient of 1st place two years in a row, in addition to winning the Student's Choice award once. </p>
                  <p>In the interactive games category, my game <a target={"_blank"} style={{color: "#9d1c1f"}} href="http://www.huntermaverickwells.com/">Bardo: The Savior</a> came out victorious. Bardo is an interactive point-and-click adventure game which includes hand-drawn art and animations, as well as several logic puzzles that must be completed to win. Bardo is programmed in JavaScript.</p>
                  <p>In the animation category, my short cartoon <a target={"_blank"} style={{color: "#9d1c1f"}} href="https://www.youtube.com/watch?v=j9aAnE_dtZE">ANKH</a> won first place and the student's choice award. ANKH is a crude and silly cartoon about a fictional slave that yearns for freedom and is "treated poorly by management."</p>
                  <p>For other multimedia projects I've worked on, you can check out my <Link style={{color: "#9d1c1f"}} to="/portfolio/">design portfolio</Link>, or my <a target={"_blank"} style={{color: "#9d1c1f"}} href="https://www.youtube.com/channel/UC539fUFHfOxBAUEeX_jJx7g/videos?sort=dd&view_as=subscriber&shelf_id=0&view=0">youtube channel.</a></p>

                  <h3>My Future With Technology</h3>
                  <p>For years now, I&rsquo;ve focused on becoming a top-notch web developer, and my culminated skills makes me a well-balanced professional. Frontend development is something I'm quite passionate about, and is the perfect way to combine my skills and talent. By studying interface design, networking, JavaScript programming, and algorithmic problem-solving, I've found a niche which I can occupy proudly. </p>
                  <p>What's next? I want to be on a team that makes awesome web applications. My craving for problem solving and elbow grease has me searching for the right team to put my skills to work. My educational background, in addition to the hard work I've put into becoming a frontend developer and digital professional at large will allow me to make a positive contribution to your projects.</p>
                  <p> If you're reading this, it's probably because you think I have potential to succeed on your team. I can assure you that I'm the kind of guy that you will benefit from having on your team. Let's find out if we're as good of a fit as I think we are. Please don't hesitate to write or call - our next big project is waiting for us to build it.</p>
                  <p>--</p>
                  <p className="mt2 pt3 i"> Thank you for taking the time to read this article about my background. Click <Link style={{color: "#9d1c1f"}} to={"/projects/"}>here</Link> if you would like to see some of my programming projects, <Link style={{color: "#9d1c1f"}} to={"/portfolio/"}>here</Link> to see my design work, and <Link style={{color: "#9d1c1f"}} to={"/about/"}>here</Link> to contact me.</p>

                </div>
                <div className="w-30-l w-100">
                  <h5 className="mb2 mt0 pa2 white tc tracked" style={{backgroundColor: "#9d1c1f"}}>MAPS & MORE </h5>
                  <div className="bg-light-gray pa3 flex flex-column flex-row-m flex-wrap-ns justify-center items-center ">
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
            contentLabel="Education Modal"
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
  "/portfolio/datamaps/mapprocess.png": "Demographic Analysis Procedure (Senior Thesis Project)",
  "/portfolio/datamaps/sfv.png": "Healthcare Businesses In the San Fernando Valley",
  "/portfolio/datamaps/southamerica.png": "Ancient Civilizations of South America",
  "/portfolio/datamaps/tarawa.jpg": "Battle of Tarawa, WWII",
  "/portfolio/datamaps/grackle.jpg": "Grackle Breeding Patterns",
  "/portfolio/datamaps/reinier.jpg": "Mount Reinier, WA - Shaded Relief Data",
  "/portfolio/datamaps/ankh.png": "ANKH (short cartoon)",
  "/portfolio/datamaps/oviatt.jpg": "CSUN, my Alma Mater",
  "/portfolio/datamaps/bardo.png": "Bardo: The Savior",
  "/portfolio/datamaps/nms.png": "NewsMaker Commercial",
}



const Thumb = (props) => (
  <div className="flex flex-column mw6 mw5-m mh3-m pointer" onClick={() => props.openModal(props.thumb.props.src)}>
    {props.thumb}
    <p className="f7 pa2 mt0 mb2">{captionMap[props.thumb.props.src]}</p>
  </div>
);




export const educationQuery = graphql`
  query EducationQuery {
    allFile (filter: {relativeDirectory: {eq: "education_page"}})
    {
      edges {
        node {
          relativeDirectory
          relativePath
          absolutePath
          base
          childImageSharp {
            sizes(maxWidth: 720) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }

    }

  }
`;


export default EducationPage;
