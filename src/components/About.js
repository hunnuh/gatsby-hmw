import React from "react";
import Monkey from "../assets/monkey.svg";
import Bird from "../assets/bird.svg";
import Fish from "../assets/fish_color.svg";
import Spider from "../assets/spider_color.svg";
import Elephant from "../assets/elephant.svg";
import Leafbreak from "../assets/leafbreak.svg";
import Leaf from "../assets/leaf.svg";


const About = () => (
  <div className="">

    <div className="mt4 flex flex-column justify-center">


      <p className="center tc fw8 mt6 mb3 f7 black-30 tracked-mega ">.: NICE TO MEET YOU :.</p>
      <h4 className="fw8 f2 black-60 tc lh-copy mv0">I make <strong style={{color: "#9d1c1f"}}>slick, beautiful interfaces</strong> for <strong style={{color: "#9d1c1f"}}>modern web applications.</strong>
      </h4>
      <p className="center tc  mt3 mb3 f4 black-50 lh-copy ">I'm a developer & designer who has good judgement and excels in his craft.</p>
      <img src={Leafbreak} className="h2 mt2 mb6 center"/>

      <Cards />
      <img src={Leafbreak} className="h2 mb4 mt5 center"/>
    </div>
  </div>
);

const Line = () => (<div className="bb b--black-20 w-100 mv2"/>)

const Cards = () => (
  <div
    style={{borderColor: "#9d1c1f #999", borderWidth: ".25rem 1px", backgroundColor:"#F3FFFD"}}
    className="flex flex-column flex-wrap w-100 self-center br3 shadow-1 ba"
    >
    <p
      style={{backgroundColor: "#9d1c1f"}}
      className="w-100 center tc  mb2 pv3 f4 white tracked-mega bb b--black-20"
    >
      HERE'S WHAT I CAN ADD TO YOUR TEAM:</p>
      <div
        className="flex flex-column flex-wrap w-100 self-center ph5 pv4"
      >
        <Card

          icon={Fish}
          sub={"CREATIVITY & ARTISTRY"}
          head={"Proven Digital Design Talent"}
          blurb={
            "My design work has won several awards and contests. Check out my portfolio to see why."
          }
          link="Explore my design portfolio &nbsp;&nbsp; ⇾"
        />
        <Line/>
        <Card
          icon={Spider}
          sub={"PROGRAMMING & DEVELOPMENT"}
          head={"High-Level Web Technology Skills"}
          rev={true}
          blurb={
            "Building awesome web applications is why I get up in the morning. I specialize in the React ecosystem."
          }
          link="Inspect my programming projects &nbsp;&nbsp; ⇾"
        />
        <Line/>
        <Card
          icon={Monkey}
          sub={"INFO. SYSTEMS & DATA SCIENCE"}
          head={"Expertise with Data & Computers"}
          blurb={
            "Relational DBs and advanced statistical processes get me excited. I have a BA degree in this stuff."
          }
          link="See more about my experience &nbsp;&nbsp; ⇾"
        />
        <Line/>
        <Card
          icon={Elephant}
          sub={"QUALITY & COMMRADERE"}
          head={"Indomidable Attitude, Ambition"}
          rev={true}
          blurb={
            "I strive for excellence every single day. Add me to your squad, I'm sure to be a valuable addition!"
          }
          link="See more about Hunter &nbsp;&nbsp; ⇾"
        />
        <div
          className="mv5 pv3 ph4 center w-80 ba br3 b--black-20 bg-black-10
          flex flex-row justify-between items-center "
        >
          <div className="flex flex-row items-center ">
            <img src={Leaf} style={{height: "5rem"}} className="ma0 mr3 "/>
            <div>
              <h4 className="fw8 f3 black-60 lh-copy mv0 ">Can't get <strong style={{color: "#9d1c1f"}}>enough of Hunter?</strong>
              </h4>
              <p className=" mv0 f5 black-60 tracked ">My résumé is ready for you.</p>
            </div>

          </div>
          <div className="flex flex-column justify-center mr2">
            <a
              style={{backgroundColor: "#9d1c1f"}}
              className="white tracked br2 pointer fw8 f6 pv2 ph3 mw5 dib mt3">
              RÉSUMÉ (PDF)
            </a>
            <p
              style={{color: "#9d1c1f"}}
              className="center f7 tracked fw1 mt1 mb0 o-70"
            >
              (05/25/18)
            </p>
          </div>
        </div>
      </div>
  </div>
);

const Card = ({icon, children, blurb, link, head, sub, rev}) => (
  <div style={{height:"18em"}} className=" flex flex-row justify-center items-center w-100 mv5 ph5">

    {rev ? <img src={icon} className="w-50 mv0 mr4" /> : null}
    <div className="flex flex-column justify-start  w-50 tl pb3 pt2 ">

      <h5 style={{fontSize:".65em"}} className=" mt0 mb3 black-40 tracked-mega">{sub}</h5>
      <div className="bl b--black-40 pl3 mt1">
        <h4 className="f4 mb0 ">{head}</h4>
        <p style={{lineHeight:"1.75em"}}className="f5 black-70 mt3 mb3 measure ">{blurb}</p>
        <a style={{color: "#9d1c1f"}} className="f6 fw8 mt2 mb0 pointer underline-hover">{link}</a>
      </div>

    </div>
    {rev ? null : <img src={icon} className="w-50 mv0 ml4" />}
  </div>
);


export default About;
