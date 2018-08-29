import React from "react";
import Hunterslide from "../components/Hunterslide"

import Down from "../assets/downarrow.svg";


const Intro = () => (
  <div className="relative self-center flex flex-row justify-between w-100 mw8" style={{color:"#DFF4E9"}}>
    <div  className="pt6 pb6 mb5 ">
      <h7 className="f5 fw8  tracked " >LOOKING FOR A FRONTEND DEVELOPER? </h7>
      <h1 className="f-5 mv2 " >YOUR HUNT <br/> IS OVER.</h1>
      <div style={{backgroundColor: "#9d1c1f", borderColor: "#9d1c1f"}} className="ba br2 mt2 pv2 ph3 fw8 tracked dib">Hire Hunter</div>
      <div style={{borderColor: "#DFF4E9"}} className="ba br2 mt2 pv2 ph3 fw8 tracked dib ml3 ">Convince me...</div>

    </div>
    <div className="w-50 h-100 h5 mt5 pt2 self-start ">

      <Hunterslide/>
    </div>


  </div>

);

export default Intro;
