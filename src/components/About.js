import React from "react";
import Monkey from "../assets/monkey.svg";
import Bird from "../assets/bird.svg";
import Fish from "../assets/fish_color.svg";
import Spider from "../assets/spider_color.svg";
import Elephant from "../assets/elephant.svg";
import Leafbreak from "../assets/leafbreak.svg";



const About = () => (
  <div className="">
    <div className="mt3 flex flex-column justify-center ">
      <h4
        style={{color: "#DFF4E9"}}
        className="fw8 f2 tc lh-copy mt4 mb0"
        >
          I make <strong style={{color: "#BC772A"}}>slick, beautiful interfaces</strong> for <strong style={{color: "#BC772A"}}>modern web applications.</strong>
      </h4>
        <div style={{color: "#DFF4E9"}} className="mt3 mb6 self-center flex flex-row justify-between ">
        <div style={{borderColor: "#BC772A"}} className="pv2 ph3 mh2 ba br1 b--white-70">Inspired Graphic Artist</div>
        <div style={{borderColor: "#BC772A"}} className="pv2 ph3 mh3 ba br1 b--white-70">Savvy UI Programmer</div>
        <div style={{borderColor: "#BC772A"}} className="pv2 ph3 mh2 ba br1 b--white-70">Qualified and Educated</div>
      </div>
      <Cards />
    </div>
  </div>
);

const Line = () => (<div className="bb b--white-20 w-100 mv2"/>)

const Cards = () => (
  <div
    style={{borderColor: "#9d1c1f #999", borderWidth: ".25rem 1px", }}
    className="flex flex-column flex-wrap w-100 self-center br3"
    >
      <div
        className="flex flex-column flex-wrap w-100 self-center  pv4"
      >
        <Card

          icon={Fish}
          sub={"CREATIVITY & ARTISTRY"}
          head={"Proven Design Talent"}
          blurb={
            "My digital design work has won several contests and awards. Check out my portfolio, let me know what you think."
          }
          link="Explore my design portfolio &nbsp;&nbsp; ⇾"
        />
        <Card
          icon={Spider}
          sub={"PROGRAMMING & DEVELOPMENT"}
          head={"High-Level Web Skills"}
          rev={true}
          blurb={
            "Building awesome web applications is why I get up in the morning. Every day I work towards being a finer craftsman."
          }
          link="Inspect my programming projects &nbsp;&nbsp; ⇾"
        />
        <Card
          icon={Monkey}
          sub={"INFO SYSTEMS & DATA SCIENCE"}
          head={"Expertise with Data"}
          blurb={
            "From algorithms to databases; I have a passion for data and computers. For me, working with computers is a constant source of gratitude and amazement."
          }
          link="Read my thoughts and qualifications &nbsp;&nbsp; ⇾"
        />
        <Card
          icon={Elephant}
          sub={"QUALITY & COMMRADERE"}
          head={"Indomidable Ambition"}
          rev={true}
          blurb={
            "During my lifetime, I am striving to become a world-class professional. I want to be part of a hard-working team with smart people who share my passion."
          }
          link="See more about Hunter &nbsp;&nbsp; ⇾"
        />

      </div>
  </div>
);

const Card = ({icon, children, blurb, link, head, sub, rev}) => (
  <div style={{height:"18em"}} className=" flex flex-row justify-center items-center w-100  mt5 mb7 ph0">

    {rev ? <img src={icon} className="w-50 mv0 mr4" /> : null}
    <div className={`flex flex-column justify-start w-50 tl pb3 pt2 ${rev ? " pl5" : ""}`}  >

      <h5 style={{fontSize:".65em"}} className=" mt0 mb3 white-40 tracked-mega">{sub}</h5>
      <div className="bl b--white-40 pl3 mt1">
        <h4 style={{color: "#DFF4E9"}} className="f3 fw1 mb0 tracked">{head}</h4>
        <p style={{lineHeight:"1.75em", letterSpacing:".05em"}} className="f5 white-80 mt3 mb3 measure-narrow ">{blurb}</p>
        <a style={{color: "#BC772A"}} className="f6 fw8 mt2 mb0 pointer underline-hover">{link}</a>
      </div>

    </div>
    {rev ? null : <img src={icon} className="w-50 mv0 ml4" />}
  </div>
);


export default About;
