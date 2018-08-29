import React, { Component } from "react";
import { withPrefix } from 'gatsby-link'

import Leafbreak from "../assets/leafbreak_white.svg";


class FeaturedProgramming extends Component {
  constructor () {
    super();
    this.state = {
      num: 2
    };
    this.picForward = this.picForward.bind(this);
    this.picBackward = this.picBackward.bind(this);
  }


  picForward(){
    let n = this.state.num
    let len = this.props.content.length
    if(n === len - 1){
      this.setState({num: 0})
    }
    else{
      this.setState({num: n+1})
    }
  }

  picBackward(){
    let num = this.state.num;
    this.setState({num: num--})
  }

  render(props) {

    let {num} = this.state;
    let thumbs = this.props.content.map( (e, i) =>
      <div className=" pa3 relative">
        <img
          className="mv0 shadow-3 ba b--white"
          src={`portfolio/${e.relativePath}`}
          style={{maxHeight:"25rem"}}
        />
      </div>
    )

    return (
      <div className=" mt4 mb4 flex flex-column justify-center tc white">
        <h1 className="mb3 tracked">Programming & UI Design</h1>

        <div className="flex flex-row justify-center items-center w-100 mb0  " style={{height:"28rem"}}>
          <div className="h4 w4 bg-red"/>
            <div className="w-80 ">
              {thumbs[num]}
            </div>
          <div className="h4 w4 bg-red" onClick={() => this.picForward()}/>
        </div>
        <img src={Leafbreak} className="h2 mv0 center"/>
        <h1 className=" fw3 f4 tracked mt3"> There's more under the surface...</h1>
        <div  className=" mt2 center dib mb4">
          <a style={{color: "#9d1c1f"}}
            className="bg-white tracked br2 fw8 f6 pv2 ph3 shadow-3 grow">EXPLORE CODE</a>
        </div>
      </div>
    );
  }
}





export default FeaturedProgramming;
