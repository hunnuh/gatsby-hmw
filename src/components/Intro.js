import React from "react";
import Hunterslide from "../components/Hunterslide"

import Down from "../assets/downarrow.svg";


const Intro = () => (
  <div className="relative self-center flex flex-row justify-between w-100 mw8" style={{color:"#EBFFFC"}}>
    <div  className="pt6 pb7 ">
      <h7 className="f5 fw8  tracked title-shadow" >LOOKING FOR A FRONTEND DEVELOPER? </h7>
      <h1 className="f-5 mv2 title-shadow" >YOUR HUNT <br/> IS OVER.</h1>
      <div style={{backgroundColor: "#9d1c1f", borderColor: "#9d1c1f"}} className="ba bw1 br2 mt2 pv2 ph3 fw8 tracked dib">You're Hired!</div>
      <div style={{borderColor: "#EBFFFC"}} className="ba bw1 br2 mt2 pv2 ph3 fw8 tracked dib ml3 ">Convince me...</div>
    </div>
    <div className="w-50 h-100 h5 mt5 pt3 self-start ">

      <Hunterslide/>
    </div>
    <div className="absolute bottom--1 h3 w-100 flex flex-row justify-center">
      <img className="w3 h3 z-4 mt3" src={Down}/>
    </div>
  </div>

);

export default Intro;
