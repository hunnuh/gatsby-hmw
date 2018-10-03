import React, { Component } from "react";
import Hunterslide from "../components/Hunterslide"


import Down from "../assets/downarrow.svg";
import Link from "gatsby-link";


class Intro extends Component{

  scrollToContent(){
    let top = document.querySelector("#content").getBoundingClientRect().top;
    if(typeof window !== undefined){
      setTimeout(window.scroll({top, behavior:'smooth'}), 100)
    }
  }


  render(){
    return(
      <div
        className="relative self-center flex flex-row-l flex-column-reverse
        justify-between-ns w-80 w-100-l mw8 pt3 ph4-ns pt5-ns mt4-ns pb2 overflow-x-visible"
        style={{color:"#fff"}}>
        <div  className=" mt3-m mt4-l tc tl-l ">
          <h7 className="f6 f5-l fw8  tracked " >LOOKING FOR A FRONTEND DEVELOPER? </h7>
          <h1 className="f2 f1-m f-5-l mv2 " >YOUR HUNT <br/> IS OVER.</h1>
          <Link
            to="/about/"
            style={{ borderColor: "#9d1c1f"}}
            className="w-100 w-auto-ns mainbutton ba br2 mt2 pv2 ph3 fw8 tracked dib white no-underline hover-bg-red">
            Hire Hunter
          </Link>
          <div
            onClick={this.scrollToContent}
            style={{borderColor: "#fff"}}
            className="w-100 w-auto-ns ba br2 mt2 pv2 ph3 fw8 tracked dib ml3-ns pointer hover-bg-white-80">
            Convince me...
          </div>

        </div>
        <div className="relative self-center db-ns dn" style={{width:"30rem"}} >

          <Hunterslide/>
        </div>

        <div className="relative self-center db dn-ns" style={{width:"100%"}} >

          <Hunterslide/>
        </div>


      </div>

    );
  }

}

export default Intro;
