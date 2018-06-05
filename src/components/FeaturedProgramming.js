import React, { Component } from "react";
import { withPrefix } from 'gatsby-link'

import Leafbreak from "../assets/leafbreak_white.svg";


class FeaturedProgramming extends Component {
  constructor () {
    super();
    this.state = {
      path: ""
    };
  }


  render(props) {
    let thumbs = this.props.content.map( (e, i) =>
      <div className="w-33 h5 pa3 relative">
        <div
          className="db ma0 w-100 h-100 bg-center cover shadow-3 ba bw2 b--white grow"
          style={{backgroundImage:`url(portfolio/${e.relativePath})`}}
        />
      </div>
    )

    return (
      <div className=" mt4 mb4 flex flex-column justify-center tc white">
        <h1 className="pb3 tracked">Programming & UI Design</h1>
        <img src={Leafbreak} className="h2 mv2 center"/>
        <div className="flex flex-row w-100 mb3">
          {thumbs}
        </div>
        <img src={Leafbreak} className="h2 mv2 center"/>
        <h1 className=" fw3 f4 tracked mv4"> There's more under the surface...</h1>
        <div  className=" mt2 center dib mb4">
          <a style={{color: "#9d1c1f"}}
            className="bg-white tracked br2 fw8 f6 pv2 ph3 shadow-3 grow">EXPLORE CODE</a>
        </div>
      </div>
    );
  }
}


export default FeaturedProgramming;
