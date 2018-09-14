import React from "react";
import Monkey from "../assets/monkey.svg";
import Bird from "../assets/bird.svg";
import Fish from "../assets/fish_color.svg";
import Spider from "../assets/spider_color.svg";
import Elephant from "../assets/elephant.svg";
import Leafbreak from "../assets/leafbreak.svg";

import FishBG from "../assets/fish_bkg.svg";
import SpiderBG from "../assets/spider_bkg.svg";
import MonkeyBG from "../assets/monkey_bg.svg";
import ElephantBG from "../assets/elephant_bg.svg";



import Link from "gatsby-link";

const About = () => (
  <div className="">
    <div className="mt3 ph4 ph2-l flex flex-column justify-center ">
      <h4
        style={{color: "#DFF4E9"}}
        className="fw8 f3 f2-ns tc lh-copy mt5 mt6-ns mt4-l mb0 "

        >
          I make <strong style={{color: "#BC772A"}}>slick, beautiful interfaces</strong> for <br className="dn db-l"/><strong style={{color: "#BC772A"}}>modern web applications.</strong>
      </h4>
      <div  style={{color: "#DFF4E9"}} className=" flex mt2 mb6 ph4-ns self-center flex-row-ns flex-column justify-between tc tl-l w-auto-ns f5-ns f6 z-2 w-100">
        <Link to={"/portfolio/"} style={{borderColor: "#BC772A"}} className="mv2 mv0-ns pv2 ph3 mh2-ns ba br1 w-100 w-auto-ns white-90 no-underline subbutton">Inspired Graphic Artist</Link>
        <Link to={"/programming/"} style={{borderColor: "#BC772A"}} className="mv2 mv0-ns pv2 ph3 mh2-ns ba br1 w-100 w-auto-ns white-90 no-underline subbutton">Savvy UI Programmer</Link>
        <Link to={"/data/"} style={{borderColor: "#BC772A"}} className="mv2 mv0-ns pv2 ph3 mh2-ns ba br1 w-100 w-auto-ns white-90 no-underline subbutton">Qualified and Educated</Link>
      </div>
      <Cards />
    </div>
  </div>
);

const Line = () => (<div className="bb b--white-20 w-100 mv2"/>)

const Cards = () => (
  <div
    id={"content"}
    style={{borderColor: "#9d1c1f #999", borderWidth: ".25rem 1px", }}
    className="flex flex-column flex-wrap w-100 self-center br3"

    >
      <div

        className="flex flex-column flex-wrap w-100 self-center  pv4 ph4-ns"
      >
        <Card
          icon={Fish}
          name={"fish"}
          sub={"CREATIVITY & ARTISTRY"}
          head={"Proven Design Talent"}
          blurb={
            "My digital design work has won several contests and awards. Check out my portfolio, let me know what you think."
          }
          linkText="Explore my design portfolio &nbsp;&nbsp; ⇾"
          linkLoc={"/portfolio/"}
          bg={<div>
                <img src={FishBG} style={{height:"50em", top:"-13em", right:"-10em"}} className="dn db-l dn-m absolute z-0 " />
                <img src={FishBG} style={{height:"45em", top:"-9em", right:"-6em"}} className="dn db-m dn-l absolute z-0 mw8" />
                <img src={FishBG} style={{height:"30em", top:"-9em", right:"-5em"}} className="dn-ns absolute z-0 mw8" />
              </div>}
        />
        <Card
          icon={Spider}
          sub={"PROGRAMMING & DEVELOPMENT"}
          head={"High-Level Web Skills"}
          rev={true}
          blurb={
            "Building awesome web applications is why I get up in the morning. Every day I work towards being a finer craftsman."
          }
          linkText="Inspect my programming projects &nbsp;&nbsp; ⇾"
          linkLoc={"/programming/"}
          bg={<div>
                <img src={SpiderBG} style={{height:"52em", left:"-35em", top:"-20em", maxWidth:"100000px"}} className="dn db-l dn-m absolute z-0" />
                <img src={SpiderBG} style={{height:"45em", left:"-29em", top:"-14em", maxWidth:"100000px"}} className="dn db-m dn-l absolute  z-0" />
                <img src={SpiderBG} style={{height:"31em", left:"-5em", top:"-5em"}} className="dn-ns absolute mw8 z-0" />
              </div>}
        />
        <Card
          icon={Monkey}
          sub={"INFO SYSTEMS & DATA SCIENCE"}
          head={"Computer Data Expertise"}
          blurb={
            "From algorithms to databases; I have a passion for computers. For me, working with modern technology is a constant source of gratitude and amazement."
          }
          linkText="Read my thoughts and qualifications &nbsp;&nbsp; ⇾"
          linkLoc={"/data/"}
          bg={<div>
                <img src={MonkeyBG} style={{height:"50em", top:"-14em", right:"-18em"}} className="dn db-l dn-m absolute z-0   " />
                <img src={MonkeyBG} style={{height:"50em", top:"-10em", right:"-18em"}} className="dn db-m dn-l absolute z-0  mw8 " />
                <img src={MonkeyBG} style={{height:"45em", top:"-8em", right:"-18em"}} className="dn-ns absolute z-0  mw8 " />
              </div>}
        />
        <Card
          icon={Elephant}
          sub={"QUALITY & COMMRADERE"}
          head={"Indomidable Ambition"}
          rev={true}
          blurb={
            "During my lifetime, Im striving to become a world-class professional. I want to be part of a hard-working team with smart people who share my passion."
          }
          linkText="See more about Hunter &nbsp;&nbsp; ⇾"
          linkLoc={"/about/"}
          bg={<div>

              </div>}
        />

      </div>
  </div>
);

const Card = ({icon, children, blurb, linkLoc, linkText, head, sub, rev, bg}) => (
  <div className={`relative flex flex-row-l ${rev ? "flex-column" : "flex-column-reverse"} justify-center items-center w-100 mt5-l mb7-l mb6 ph0`}>

    {rev ? <img src={icon} className="w-50-l w-80-m w-100 mv0 mr4-l z-2" /> : null}
    <div className={`z-2 flex flex-column justify-center w-50-l  tl pb3 pt2 ${rev ? " pl5-l" : ""}`}  >

      <h5 style={{fontSize:".65em"}} className=" mt0 mb3 white-40 tracked-mega">{sub}</h5>
      <div className="bl-ns b--white-40 pl3-ns mt1 z-2">
        <h4 style={{color: "#DFF4E9"}} className="f3 fw1 mb0 tracked">{head}</h4>
        <p style={{lineHeight:"1.75em", letterSpacing:".05em"}} className="f5-ns f6 white-80 mt3 mb3 measure-narrow ">{blurb}</p>
        <Link to={linkLoc} style={{color: "#BC772A"}} className="f6-ns f7 fw8 mt2 mb0 pointer no-underline underline-hover">{linkText}</Link>
      </div>
    </div>
    {rev ? null : <img src={icon} className="w-50-l w-80-m w-100 mv0 ml4-l z-2" />}
    {bg}
  </div>
);


export default About;
