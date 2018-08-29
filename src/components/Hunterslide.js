import HMWfloat from "../assets/SVG/hunter.svg";
import Plant from "../assets/plant_set.svg";
import Window from "../assets/window.svg";
import Carpet from "../assets/carpet.svg";
import Books from "../assets/books.png";
import Laptop from "../assets/laptop.png";

import ReactLogo from "../assets/reactlogo.svg";
import JSLogo from "../assets/jslogo.svg";
import AdobeLogo from "../assets/adobelogo.svg";

import React, { Component } from 'react';

class Hunterslide extends Component {


  render() {
    return (
      <div id="hunterslide" className=" relative h-50 ">

        <img id="meditating-hunter" className="absolute z-2 top-0" src={HMWfloat}/>
        <img className="absolute z-0 top--2 left--2 w5" src={Window}/>
        <img className="absolute z-0 top-1 left-2 " src={Plant}/>
        <img className="absolute z-0 top-2 mt4 " src={Carpet}/>

        <img className="absolute top-0 reacticon h3 w3  " src={ReactLogo}/>
        <img className="absolute top-0 jsicon h3 w3  " src={JSLogo}/>
        <img className="absolute top-0 adobeicon h3 w3  " src={AdobeLogo}/>

      </div>
    );
  }

}

export default Hunterslide;
