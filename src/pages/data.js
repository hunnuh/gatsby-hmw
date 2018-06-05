import React, { Component } from "react";
import Link from "gatsby-link";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Analysis from "../assets/analysis.svg";


const captions = [
  ""
]



class DataPage extends React.Component {

  render () {
    let content = this.props.data.allFile.edges
        .reduce((acc, curr) => acc.concat(curr.node), [])
        .filter(e => e.relativeDirectory === "datamaps" )
        .map((e, i) => <img className="w-100 mb0 shadow-4" src={`/portfolio/${e.relativePath}`}></img>);

    return (
      <div>
        <Nav/>
        <div id="back" className="relative w-100 ">
          <div style={{backgroundColor: "#EBFFFC"}} className=" relative flex flex-column  ">
            <div className="mw8 self-center mt2">
              <h1 className="f1 mb3">Interacting with Computers, The World, and The Infinite Data Contained Therein</h1>
              <h2 className="fw4 mb3">My passion for data science, computers, and learning more about the world.</h2>
              <p className="f6  mb4">By Hunter M. Wells</p>
              <div className="flex flex-row lh-copy mb5">

                <div className="w-70 pr5 ">
                  <div id="data" className="w-100 h2 pb6 pt7"/>
                  <div className="w-100 bb b--black-30 mb4 ">
                    <p className="f7 pa2 mv0 i">Every item, product, animal, and minute, a point of data.</p>
                  </div>
                  <p>Despite the vastness of our world, we have found ways of keeping track of it. This simple fact astounds me! Between hundreds of countries, thousands of cities, millions of buildings, and billions of people, the sheer quantity of &ldquo;stuff&rdquo; on this planet seems to be practically innumerable. Every item, animal, and minute, a point of data.</p>
                  <p>Our world may be vast and deep, but that's not to say that interacting with it is impossible. Humans have learned to represent the world as data, and as a result, we can do things that are as close to magic as anything gets. </p>
                  <p>When we probe reality and collect data, we can answer questions with statistical reasoning. When we record and retain information about our surroundings, we can create systems which allow us to navigate our world with incredible precision. When we create ways send data to each other, we can interact with the billions of other earthlings. Data is the medium through which we can better understand our world, and build tools that help us interact with it.</p>
                  <p>This newfound ability to conjure up new knowledge and technology is, in my view, the most amazing thing that humans have ever gotten to take part in. This is why my passion for web development and data science is so relentless.</p>
                  <h3>A GIS Degree and Me</h3>
                  <p>In 2016, I earned a B.A. in Geo-Information Systems (GIS), my second Bachelor's Degree. I am enthusiastic about GIS in part because digital map technology is a beacon of how data can be used to represent and better understand the world. It has never been more relevant or important. Chances are that you use location-based services every day.</p>
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
                  <h5 className="mb3 mt0">Click to enlarge:</h5>
                  <Thumb thumb={content[0]}>Mount St. Helens, WA</Thumb>
                  <Thumb thumb={content[1]}>Battle of Tarawa, WWII</Thumb>
                  <Thumb thumb={content[2]}>Grackle Breeding Patterns</Thumb>
                  <Thumb thumb={content[3]}>Demographic Analysis</Thumb>
                  <Thumb thumb={content[4]}>Businesses In the San Fernando Valley</Thumb>
                  <Thumb thumb={content[5]}>Ancient Civilizations of South America</Thumb>

                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Footer />
          </div>


        </div>
      </div>
    );
  };
};


const Thumb = (props) => (
  <div className="flex flex-column">
    {props.thumb}
    <p className="f7 pa2 mt0 mb2 i">{props.children}</p>
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
