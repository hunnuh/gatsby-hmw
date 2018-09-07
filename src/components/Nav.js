import React, {Component} from "react";
import Logo from "../assets/logo.svg";
import Link from "gatsby-link";
import FontAwesome from "react-fontawesome";

const NavLink = ({link, children, on}) => (

  <Link to={link} className={`${on ? "bg-red" : ""} flex flex-column justify-center fw8 no-underline ph3 hover-bg-red white`}>{children}</Link>
);

class Nav extends Component{
  constructor () {
    super();

  }
  render(props){
    let {page} = this.props
    return(
      <div style={{background: "#9d1c1f"}} className=" flex flex-row justify-center bb bw1 b--black-50">
        <div className="flex flex-row justify-between items-center w-100 mw8 ">
          <div className="flex flex-row items-center ">
            <Link to={"/"}>
              <div className="h3 mr3">
                <img src={Logo} className="h-75 mt2 pv1"/>
              </div>
            </Link>
            <div  className="h3 flex flex-row">
              <NavLink on={page === "portfolio"} link="/portfolio/">Designing</NavLink>
              <NavLink on={page === "programming"} link="/programming/">Programming</NavLink>
              <NavLink on={page === "data"} link="/data/">Computing</NavLink>
              <NavLink on={page === "about"} link="/about/">About</NavLink>
            </div>
          </div>
          <div className=" f3 pa3">
            <FontAwesome name="envelope" className="white mh2"/>
            <FontAwesome name="github" className="white mh2"/>
            <FontAwesome name="linkedin" className="white mh2"/>
          </div>
        </div>
      </div>
    )
  }
}



export default Nav;
