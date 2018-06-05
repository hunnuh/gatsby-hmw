import React from "react";
import Logo from "../assets/logo.svg";
import Link from "gatsby-link";
import FontAwesome from "react-fontawesome";

const NavLink = ({link, children}) => (

  <Link to={link} className="flex flex-column justify-center white-90 fw8 no-underline ph3 hover-bg-red">{children}</Link>
);

const Nav = ({}) => (
  <div style={{background: "#9d1c1f"}} className=" flex flex-row justify-center ">
    <div className="flex flex-row justify-between items-center w-100  mw8">
      <div className="flex flex-row items-center ">
        <Link to={"/"}>
          <div className="h3 mr3">
            <img src={Logo} className="h-75 mt2 pv1"/>
          </div>
        </Link>
        <div  className="h3 flex flex-row">
          <NavLink link="/portfolio/">Design</NavLink>
          <NavLink link="/programming/">Programming</NavLink>
          <NavLink link="/data/">Data</NavLink>
          <NavLink link="/about/">About</NavLink>
        </div>
      </div>
      <div className=" f3 pa3">
        <FontAwesome name="envelope" className="white mh2"/>
        <FontAwesome name="github" className="white mh2"/>
        <FontAwesome name="linkedin" className="white mh2"/>
      </div>
    </div>
  </div>
);

export default Nav;
