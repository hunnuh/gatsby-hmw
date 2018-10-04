import React, { Component } from "react";
import Link from "gatsby-link";
import FontAwesome from "react-fontawesome";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Atom from "../assets/atom.svg";


import Projects from "../data/projects";
import { withPrefix } from 'gatsby-link'
import ReactModal from "react-modal";


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


class ProgrammingPage extends React.Component {
  constructor () {
    super();
    this.state = {
      modalPath: "",
      showModal: false,
      projectNumber:0
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

  handleChangeProject(number){
    this.setState({projectNumber:number})
  }

  trimData(portfolioSection){
    let trimmedData = this.props.data.allFile.edges.reduce((acc, curr) => acc.concat(curr.node), []).filter(e => e.relativeDirectory === portfolioSection );
    return trimmedData;
  }

  render () {

    let {projectNumber} = this.state

    let Rows = Projects.map((proj, index)=>
      <ProjectRow
        key={index}
        project={proj}
        id={`proj` + index}
        open={(path) => this.handleOpenModal(path)}/>)

    return (
      <div className="relative h-100" style={{backgroundColor:"#19382B", minHeight: "100vh"}} id="back">
        <Nav page={"programming"}/>
        <div className="relative mw8 flex flex-column items-center center pv5-ns pv3 ph3">
          <img className="white mw4 mv0" src={Atom}/>
          <h1 className="tc white f3 f2-ns lh-copy-ns" >I'm a smart, creative frontend developer. <br/> Just what your team is looking for.</h1>
          <p className="f5-ns f6 mw6 lh-copy tc white-80" >
            My years of experience with React and JavaScript make me a worthy developer. I create practical, functional, and beautiful applications. Don't just take it from me; browse my programming projects below.
          </p>
          <div className="bb b--white mh3-m">
            <h2 className="white self-start mt5 mb3"><FontAwesome name="code"/> Programming Projects:</h2>
            {Rows}
          </div>

        </div>
        <Footer/>

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Programming Project"
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
    );
  }
}


class ProjectRow extends React.Component {
  constructor () {
    super();
    this.state = {
      codeView: true
    };
  }


  render () {
    let {project} = this.props;

    let paras = project.desc.p.map((p, index)=>
      <p key={index} className=" mt0 mb2 f6 white-80 " style={{lineHeight:"1.25rem", textIndent:"1.3rem"}}>{p}</p>
    )

    let links = project.desc.tech.map((tech, index)=>
      <li
        key={index}
        className=" f7 dib mv0 pointer mh1">
        <a
          target="_blank"
          href={tech.link}
          className={`white-40 link b no-underline hover-white`}
        >
        ::  {tech.name}
        </a>
      </li>
    )

    return  (
      <div  className=" flex flex-row-ns flex-column justify-start-ns items-center w-100 pv3 bt b--white " >
          <div className=" mw5 w-100 pa3 flex flex-column justify-center ">
            <img className="db shadow-1 ba b--black-80 mv0 pointer grow"
              onClick={() => this.props.open(project.src)}
              src={project.src}/>
          </div>
          <div className="w-100 pa3">
            <h1 className="white f4 mt0 mb0 w-100 flex flex-row items-center" >{project.title}
              <span className="ml2 f6 fw1 " style={{color: "#BC772A"}}>
                // ({project.date})
              </span>
            </h1>
            <ul className="mb1 mv2-l mh0 list pa0">{links}</ul>
            <div className="pr4-l measure-wide">
              {paras}
            </div>
            <div className="flex flex-row-ns flex-column mt3 tc tl-ns">

              {project.links.featured.enabled ?

              <a
                href={project.links.featured.url}
                target={"_blank"} style={{backgroundColor: "#BC772A"}}
                className="white mr3-ns f7 pa2 br1 no-underline shadow-3 mb3 mb0-ns">
                  <FontAwesome name="certificate" className="mr2 fa-lg"/>
                  {project.links.featured.text}
              </a>

              : ""

            }
              <a href={project.links.github} target={"_blank"} className="f7 white ba b--white bg-transparent pa2 br1 no-underline hover-bg-white hover-black">
                <FontAwesome name="github" className="mr2 fa-lg"/>
                View Repository
              </a>
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
