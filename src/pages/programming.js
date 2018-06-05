import React, { Component } from "react";
import Link from "gatsby-link";
import ReactModal from "react-modal";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Programming from "../assets/programming.svg";
import ProgramHighlighter from "../components/ProgramHighlighter";

import Projects from "../data/projects";
import { withPrefix } from 'gatsby-link'

class ProgrammingPage extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  trimData(portfolioSection){
    let trimmedData = this.props.data.allFile.edges.reduce((acc, curr) => acc.concat(curr.node), []).filter(e => e.relativeDirectory === portfolioSection );

    return trimmedData;
  }

  render () {



    let Rows = Projects.map((proj, index)=>
      <ProjectRow key={index} project={proj} id={`proj` + index}/>
        )
    return (
      <div>
        <Nav/>
        <Header bg="web">
          <img src={Programming} className="h3 mb0 mt6 " />
          <h1 style={{color: "#EBFFFC"}} className="f3 tracked-mega mb6">PROGRAMMING</h1>

        </Header>
        <div  className="relative w-100 ">
          <div className="redbackground relative flex flex-column items-center">
            <p className="white b mw7 tc f2 mt5 mb0 pt3">These are my biggest & best projects. </p>
            <h1 className="white mt0 mb3 pv0 lh-solid tracked-mega">...</h1>
            <p className="white-80  f6 b mw6 tracked tc lh-copy mb5">In my practice, I utilize the JavaScript language along with the React framework to construct applications that computer geeks know as "Finite-State Machines." Scroll down to explore them.
            </p>
            {Rows}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Footer />
          </div>

          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      </div>
    );
  }
}


class ProjectRow extends React.Component {
  render () {
    let {project} = this.props;


    let paras = project.desc.p.map((p, index)=>
      <p key={index} className=" f7 f6-ns mt0 mb2 measure lh-copy">{p}</p>
    )

    let links = project.desc.tech.map((tech, index)=>
      <li
        key={index}
        className=" f7 dib mv0 ml0 pointer mh1">
        <a
          target="_blank"
          href={tech.link}
          className={`black-70 hover-blue link b no-underline `}
        >
        ::  {tech.name}
        </a>
      </li>
    )

    return  (
      <div className=" flex flex-row mv4 w-80 shadow-3 br3">
        <div className="w-60 bg-dark-gray flex flex-row justify-center pv4 br2 br--left bt bl bb bw1 b--near-black  ">
          <div className="w-100 ph4 h-100">
            <h1 className="f2 mt0 mb2 pb2 white-90 w-100 bb b--white-50">{project.title}</h1>
            <p className="f6 mt0 white-50 i"> : : Click the tabs below to see more snippets.</p>
              <ProgramHighlighter
                className="javascript"
                snippets={project.snippets}
                id={this.props.id}
              />
          </div>
        </div>

        <div
          style={{ background: "#EBFFFC" }}
          className="w-40 flex flex-column items-start pv5 ph4 bt br bb bw1 b--near-black br2 br--right"
        >
          <div className="">
            <img className="db shadow-1 w-80 ba b--black-80" src={project.src}/>
          </div>
          <h1 className="f4 mv0 ">{project.title} ({project.date})</h1>
          <ul className="ml0 mt2 mb3 list pa0">{links}</ul>
          <div className="bl b--black-50 pl3">
            {paras}
          </div>
        </div>
      </div>

    );
  }
}


export const progQuery = graphql`
  query ProgrammingQuery {
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




export default ProgrammingPage;
