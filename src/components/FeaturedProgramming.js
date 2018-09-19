import React, { Component } from "react";
import Link, { withPrefix } from 'gatsby-link'

import Leafbreak from "../assets/leafbreak_white.svg";
import Arrow from "../assets/arrow.svg";

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
    let n = this.state.num
    let len = this.props.content.length
    if(n === 0){
      this.setState({num: len - 1})
    }
    else{
      this.setState({num: n-1})
    }
  }

  render(props) {

    let {num} = this.state;
    let thumbs = this.props.content.map( (e, i) =>
      <div className=" pa3 relative">
        <img
          className="mv0 shadow-3 ba b--white-20"
          src={`portfolio/${e.relativePath}`}
          style={{maxHeight:"25rem"}}
        />
      </div>
    )

    return (
      <div className=" mt4-ns mt0 flex flex-column justify-center tc white ">
        <h1 className="mb3 tracked-ns f3">PLAY HUNTER'S POKER</h1>

        <div className="flex flex-row-ns flex-column justify-center-ns justify-start items-center w-100 mb0  " style={{maxHeight:"28rem"}}>

          <div className="w-80-ns w-100 mw-100 ">
            {thumbs[num]}
          </div>

          <div className="flex flex-row w-100 justify-around  db dn-ns">

          </div>
        </div>
        <img src={Leafbreak} className="h2 mv0 center"/>
        <h1 className=" fw3 f4-ns f6 tracked-ns mt3-ns ph2"> Try your luck in Hunter's Poker, or use my interactive code browser to explore my programming projects...</h1>
        <div  className=" mt2-ns h3 center dib mb4 ph3 w-100  flex flex-row-ns flex-column justify-center ">
          <Link to={"/poker/"} style={{color: "#9d1c1f"}}
            className="mh2 mt3 mt0-ns bg-white tracked br2 fw8  h-auto-ns f6-ns w-100 w-auto-ns f7 pv3-ns pv2 ph3 no-underline underline-hover shadow-3 grow self-center">PLAY POKER</Link>
            <Link to={"/programming/"}
              className="mh2  mt2 mt0-ns ba white tracked br2 fw8  h-auto-ns f6-ns w-100 w-auto-ns f7 pv3-ns pv2 ph3 no-underline underline-hover shadow-3 grow self-center">EXPLORE CODE</Link>
        </div>
      </div>
    );
  }
}





export default FeaturedProgramming;
