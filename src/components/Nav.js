import React, {Component} from "react";
import Logo from "../assets/logo.svg";
import Link from "gatsby-link";
import FontAwesome from "react-fontawesome";
import ReactModal from "react-modal";

const modalStyles = {
  content : {
    background : "none",
    padding : '0px 0px 0px 0px',
    border : "0px",
    overflowY : "hidden",
    zIndex:"500",
    bottom:"auto",
      },
  overlay : {
    background : "rgba(22, 28, 33, 0.9)",
    zIndex:"450",
    padding:"0px"
  }
};



const NavLink = ({link, children, on}) => (

  <Link to={link} className={`${on ? "bg-red" : ""} flex flex-column justify-center fw8 no-underline ph3 hover-bg-red white`}>{children}</Link>
);


const MobileNavLink = ({link, children, on}) => (

  <Link to={link} className={`${on ? "bg-red" : ""} f4 flex flex-column justify-center fw8 no-underline ph3 pv3 hover-bg-red white w-100 bt`}>{children}</Link>
);


class Nav extends Component{
  constructor () {
    super();
    this.state = {
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

  render(props){
    let {page} = this.props
    return(
      <div style={{background: "#9d1c1f"}} className=" flex flex-row justify-center bb bw1 b--black-50 ph4-ns ph2 debg">
        <div className="flex flex-row justify-between items-center w-100 mw8 ">
          <div className="flex flex-row items-center ">
            <Link to={"/"}>
              <div className="h3 mr3">
                <img src={Logo} className="h-75 mt2 pv1"/>
              </div>
            </Link>
            <div  className="h3 flex-l flex-row dn">
              <NavLink on={page === "portfolio"} link="/portfolio/">Designing</NavLink>
              <NavLink on={page === "programming"} link="/programming/">Programming</NavLink>
              <NavLink on={page === "data"} link="/data/">Computing</NavLink>
              <NavLink on={page === "about"} link="/about/">About</NavLink>
            </div>
          </div>
          <div className="dn db-l f3 pa3 ">
            <div className="br-pill ba b--white bw1 info-icon relative">
                <FontAwesome name="question" className="white mh2"/>
                <div
                  style={{borderColor: "#9d1c1f", letterSpacing: ".05rem"}}
                  className="info-box f7 absolute w5 z-4 right--1 top-2 bg-white pa2 lh-copy br2 mt2 shadow-1 ba bw1 dn mr2">
                    <p className="mb0 info-p">This site was developed with <a href="https://reactjs.org/" target="_blank">React,</a> generated in <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby,</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify.</a> Illustrations and CSS were designed by <Link to={"/about/"}>Hunter.</Link> </p>
                </div>
            </div>

          </div>
          <div className="dn-l f3 pa3">
            <FontAwesome onClick={this.handleOpenModal} name="bars" className="white mh2"/>
          </div>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Navigation Menu"
          appElement={document && document.getElementById('app')}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          style={modalStyles}
        >
          <div style={{background: "#9d1c1f"}} className="w-100 br4 pb3 ba bw1 b--black">
            <div className="w-100 flex flex-row justify-between pa3 bb b--white bg-black-20">
              <img src={Logo} style={{maxHeight:"2rem"}} className=" pv0 mv0"/>
              <div className="flex">
                <div className=" info-icon relative mr3 db-m dn">
                    <FontAwesome name="question" className="white mh2 fa-2x "/>
                    <div
                      style={{borderColor: "#9d1c1f", letterSpacing: ".05rem"}}
                      className="info-box f7 absolute w5 z-4 right--1 top-2 bg-white pa2 lh-copy br2 mt2 shadow-1 ba bw1 dn mr2">
                        <p className="mb0 info-p">This site was developed with <a href="https://reactjs.org/" target="_blank">React,</a> generated in <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby,</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify.</a> Illustrations and CSS were designed by <Link to={"/about/"}>Hunter.</Link> </p>
                    </div>
                </div>
                <FontAwesome onClick={this.handleCloseModal} name="close" className="white f1 fa-2x"/>
              </div>
            </div>
            <MobileNavLink on={page === "portfolio"} link="/portfolio/">Designing</MobileNavLink>
            <MobileNavLink on={page === "programming"} link="/programming/">Programming</MobileNavLink>
            <MobileNavLink on={page === "data"} link="/data/">Computing</MobileNavLink>
            <MobileNavLink on={page === "about"} link="/about/">About</MobileNavLink>
          </div>
        </ReactModal>
      </div>
    )
  }
}



export default Nav;
