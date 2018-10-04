import React from "react";
import Resume from "../assets/Hunter_M_Wells_resume.pdf";
import FontAwesome from "react-fontawesome";
import Link from "gatsby-link";

const FootLink = ({link, children}) => (

  <Link to={link} className={"f7 flex flex-column justify-center no-underline hover-white white-60 mh2"}>{children}</Link>
);


const Footer = () => (
  <div style={{backgroundColor: "#9d1c1f"}} className="white-60 w-100 mt0 pv2  flex flex-row items-center ">
    <div className="center flex flex-row justify-between items-center mw8 w-100 ph4">
      <h5 className="mv0 f7 fw1 tracked nowrap">© HMW 2017-2018</h5>
      <div className="pa1 flex-ns flex-row-l flex-wrap-m dn justify-center">
        <div className="flex flex-row">
          <FootLink link={"/"}>Home</FootLink>
          <span>|</span>
          <FootLink link={"/programming/"}>Projects</FootLink>
          <span>|</span>
          <FootLink link={"/portfolio/"}>Design</FootLink>
          <span>|</span>
        </div>

        <div className="flex flex-row">
          <FootLink link={"/data/"}>Education</FootLink>
          <span>|</span>
          <FootLink link={"/resume/"}>Résumé</FootLink>
          <span>|</span>
          <FootLink link={"/about/"}>About</FootLink>
        </div>
      </div>
      <div className="f5 pa1 flex flex-row flex-nowrap ">
        <a href="http://github.com/hunter-digital"><FontAwesome name="github" className="white-60 hover-white mh2"/></a>
        <a href="http://www.linkedin.com/u/hmw"><FontAwesome name="linkedin" className="white-60 hover-white mh2"/></a>
        <Link to={"/resume/"}><FontAwesome name="clipboard" className="white-60 hover-white mh2"/></Link>
      </div>
    </div>

  </div>
);

export default Footer;
