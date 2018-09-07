import React, { Component } from "react";
import Hunterslide from "../components/Hunterslide"

import Down from "../assets/downarrow.svg";
import Link from "gatsby-link";



class Intro extends Component{

  scrollToContent(){
    let top = document.querySelector('#content').getBoundingClientRect().top
    if(typeof window !== undefined){
      (console.log("I hope this works"))
      window.scrollTo({top, behavior: 'smooth'})
    }
  }

  render(){
    return(
      <div className="debug relative self-center flex flex-row-ns flex-column-reverse justify-between-ns w-90 w-100-l mw8" style={{color:"#DFF4E9"}}>
        <div  className="pv4 pv6-l  mb5 ">
          <h7 className="f6 f5-l fw8  tracked " >LOOKING FOR A FRONTEND DEVELOPER? </h7>
          <h1 className="f1 f-5-l mv2 " >YOUR HUNT <br/> IS OVER.</h1>
          <Link to="/about/" style={{ borderColor: "#9d1c1f"}} className="mainbutton ba br2 mt2 pv2 ph3 fw8 tracked dib white no-underline hover-bg-red">Hire Hunter</Link>
          <div onClick={this.scrollToContent} style={{borderColor: "#DFF4E9"}} className="ba br2 mt2 pv2 ph3 fw8 tracked dib ml3 pointer hover-bg-white-80">Convince me...</div>

        </div>
        <div className="w-50 h-100 h5 mt5-l mt3 pt2 self-start ">

          <Hunterslide/>
        </div>


      </div>

    );
  }

}

export default Intro;
