import React, { Component } from "react";
import Hunterslide from "../components/Hunterslide"

import Down from "../assets/downarrow.svg";
import Link from "gatsby-link";


class Intro extends Component{

  scrollToContent(){
    let top = document.querySelector("#content").getBoundingClientRect().top;
    if(typeof window !== undefined){
      window.scrollTo({top, behavior:'smooth'})
    }
  }


  render(){
    return(
      <div
        className="relative self-center flex flex-row-l flex-column-reverse
        justify-between-ns w-80 w-100-l mw8 ph4-ns pt5 mt4-ns pb2 overflow-x-visible"
        style={{color:"#fff"}}>
        <div  className=" mt3 mt4-l tc tl-l ">
          <h7 className="f6 f5-l fw8  tracked " >LOOKING FOR A FRONTEND DEVELOPER? </h7>
          <h1 className="f1 f-5-l mv2 " >YOUR HUNT <br/> IS OVER.</h1>
          <Link
            to="/about/"
            style={{ borderColor: "#9d1c1f"}}
            className="mainbutton ba br2 mt2 pv2 ph3 fw8 tracked dib white no-underline hover-bg-red">
            Hire Hunter
          </Link>
          <div
            onClick={this.scrollToContent}
            style={{borderColor: "#fff"}}
            className="ba br2 mt2 pv2 ph3 fw8 tracked dib ml3 pointer hover-bg-white-80">
            Convince me...
          </div>

        </div>
        <div className="relative self-center" style={{width:"30rem"}} >

          <Hunterslide/>
        </div>


      </div>

    );
  }

}

export default Intro;
