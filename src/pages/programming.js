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

  handleChangeProject(number){
    this.setState({projectNumber:number})
  }

  componentDidMount(){
    if (typeof(window) !== 'undefined') {
      ReactModal.setAppElement('body')
    }
  }

  trimData(portfolioSection){
    let trimmedData = this.props.data.allFile.edges.reduce((acc, curr) => acc.concat(curr.node), []).filter(e => e.relativeDirectory === portfolioSection );

    return trimmedData;
  }

  render () {

    let {projectNumber} = this.state

    let Rows = Projects.map((proj, index)=>
      <ProjectRow key={index} project={proj} id={`proj` + index} current={this.state.projectNumber} open={(path) => this.handleOpenModal(path)} clickButton={(number) => this.handleChangeProject(number)}/>)

    return (
      <div style={{minHeight:"100vh"}} className="relative">
        <Nav page={"programming"}/>

        <div  className="relative w-100 h-100" style={{height:"calc(100vh - 72px)"}}>
          <div className="relative flex flex-column items-center h-100 ">
            {Rows[projectNumber]}
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
  }
}


class ProjectRow extends React.Component {
  constructor () {
    super();
    this.state = {
      codeView: true
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(){
    this.setState({codeView: !this.state.codeView})
  }

  render () {
    let {codeView} = this.state;
    let {project, current} = this.props;

    let paras = project.desc.p.map((p, index)=>
      <p key={index} className=" mt0 mb1  measure lh-copy">{p}</p>
    )

    let links = project.desc.tech.map((tech, index)=>
      <li
        key={index}
        className=" f7 dib mv0 mh0 ml0 pointer mh1">
        <a
          target="_blank"
          href={tech.link}
          className={`black-70 hover-white link b no-underline `}
        >
        ::  {tech.name}
        </a>
      </li>
    )

    let projectButtons = Projects.map((proj, index)=>
      <li
        className={`h3 w-100 list flex flex-column justify-center bb ph4 fr
          br3-l br--left-l br3 br--top mh0 mv2-l mv0 f5 b shadow-3
          black-60 ${current == index ? "  bl bt bb b--white ": " pointer bl bt bb projectButton"}`}
        key={index}
        onClick={() => this.props.clickButton(index)}
        style={
          {
          backgroundColor: `${current == index ? "#ebf8ff" : "#7989a3"}`,
          borderColor: `${current == index ? "#7989a3" : "#ebf8ff"  }`
          }
        }
      >
        {proj.title.toUpperCase()}
      </li>)

    return  (
      <div style={{backgroundColor:"#e5d7bd"}} className=" flex flex-row justify-center w-100 h-100 " id="concrete" >
        <div className="w-100 pv3-l pt2 flex flex-row-l flex-column mw9 ">
          <div className="w-20-l w-100 ">
            <div className="mh0 fr-l mb0 pt3-l pt0 pl2-l pl0 flex flex-row flex-column-l overflow-x-auto overflow-y-hidden">
              {projectButtons}
            </div>
          </div>

          <div className="w-50-l w-100 h-100 flex flex-row-l flex-column justify-center pv4-l ba  br3-l br--left-l shadow-3 " style={{ backgroundColor: "#7989a3", color: "#ebf8ff", borderColor: "#0d202f"  }}>

            {codeView &&
              <div className="LARGE db dn-l h-100 w-100 pv4">
                <div className="w-100 ph4 h-100 ">
                  <div className="" style={{height:"auto"}}>
                    <h1 className="white f2-l f4 mt0 mb2 pb2 w-100 bb programming-shadow" >{project.title} &ensp;
                      <span className={"f5 underline-hover pointer"} onClick={() => this.changeView()}><br className="db dn-ns"/>  (Click for Info)</span>
                    </h1>
                    <p className="f7 mt0 tracked mb2" > : : Click the tabs below to see more.</p>
                  </div>
                  <div className="" style={{height:"88%"}}>

                    <ProgramHighlighter
                      className="javascript"
                      snippets={project.snippets}
                      id={this.props.id}
                    />
                  </div>
                </div>
              </div>
            }


              {codeView ||
                <div className="db dn-l w-100 h-100 pv4 ph4 flex flex-column items-center br3-l br--right-l bb bt br shadow-3" style={{ background: "#8a9cb7", borderColor: "#0d202f" }}>
                  <div className="mb0">
                    <h1 className="white f3-m f5 mt0 mb2 pb2 w-100 bb programming-shadow">{project.title} ({project.date})
                      <span className={"f5 underline-hover pointer"} onClick={() => this.changeView()}>&ensp; <br className="dn-ns db"/> (Click to see code) </span>
                    </h1>
                    <ul className="mt1 mb2 mh0 list pa0">{links}</ul>
                    <img className="db shadow-1 mt4 center w-70 ba b--black-80 mv0 pointer" onClick={() => this.props.open(project.src)} src={project.src}/>
                    <p className="f7 b tracked-mega black-30 mt2 mb4-m mb2 pl5">Click to enlarge.</p>
                  </div>


                  <div className="pa3 br2 overflow-y-scroll ba shadow-3 w-80-ns black " style={{ background: "#ebf8ff", borderColor: "#0d202f"}}>
                    {paras}
                  </div>
                </div>
              }


            <div className=" dn db-l h-100 w-100 ">
              <div className="w-100 ph4 h-100 ">
                <div className="" style={{height:"auto"}}>
                  <h1 className="white f2 mt0 mb2 pb2 w-100 bb programming-shadow" >{project.title}</h1>
                  <p className="f7 mt0 tracked mb2" > : : Click the tabs below to see more snippets.</p>
                </div>
                <div className="" style={{height:"88%"}}>

                  <ProgramHighlighter
                    className="javascript"
                    snippets={project.snippets}
                    id={this.props.id}
                  />
                </div>
              </div>
            </div>



          </div>

          <div

            className="dn flex-l w-30-l flex-column-l flex-row items-start pr2-l bw1 "
          >
            <div className="w-100 h-100-l h-auto h4 pv4 ph4 flex flex-column items-start br3-l br--right-l bb bt br shadow-3" style={{ background: "#8a9cb7", borderColor: "#0d202f" }}>
              <div className="mb0">
                <h1 className="f5 mt0 mb0 white bb pb2 programming-shadow">{project.title} ({project.date})</h1>
                <ul className="mt1 mb2 mh0 list pa0">{links}</ul>
                <img className="db shadow-1 center w-100 ba b--black-80 mv0 pointer" onClick={() => this.props.open(project.src)} src={project.src}/>
                <p className="f7 b tracked-mega black-30 mv2 ">Click to enlarge.</p>
              </div>


              <div className="pa3 br2 overflow-y-scroll ba shadow-3 f7" style={{ background: "#ebf8ff", borderColor: "#0d202f"}}>
                {paras}
              </div>
            </div>
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
