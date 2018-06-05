import HMWfloat from "../assets/hunterslide5.png";
import Plant from "../assets/plant_set.png";
import Window from "../assets/window.png";
import Carpet from "../assets/carpet.png";
import Books from "../assets/books.png";
import Laptop from "../assets/laptop.png";

import ReactLogo from "../assets/reactlogo.svg";
import JSLogo from "../assets/jslogo.svg";
import AdobeLogo from "../assets/adobelogo.svg";

import React, { Component } from 'react';

class Hunterslide extends Component {


  render() {
    return (
      <div id="hunterslide" className=" relative h-50">

        <img id="meditating-hunter" className="absolute z-2 top-0" src={HMWfloat}/>
        <img className="absolute z-0 top--2 left--2" src={Window}/>
        <img className="absolute z-0 top-0 left-2" src={Plant}/>
        <img className="absolute z-0 top-2" src={Carpet}/>
        <img className="absolute z-0 mt4 right--2" src={Laptop}/>
        <img className="absolute z-0 mt4 left-0" src={Books}/>
        <img className="absolute top-0 reacticon h3 w3  " src={ReactLogo}/>
        <img className="absolute top-0 jsicon h3 w3  " src={JSLogo}/>
        <img className="absolute top-0 adobeicon h3 w3  " src={AdobeLogo}/>

      </div>
    );
  }

}

export default Hunterslide;
