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
      <div className=" relative">
        <img
          className="mv0 shadow-3 ba b--white-20"
          src={`portfolio/${e.relativePath}`}
          style={{maxHeight:"25rem"}}
        />
      </div>
    )

    return (
      <div className=" mt0 flex flex-column justify-center white pv6 ph4-ns">
        <h1 className=" ph3"> Featured Project:</h1>

        <div className="flex flex-row-l flex-column justify-center-ns justify-start items-center w-100 mb0  bb bt b--white pv4 ">

          <div className="mw7">

            {thumbs[num]}
          </div>

          <div className=" pa4-ns ph0">
            <div className=" pa4 bg-black-20-ns br2">
              <h1 className="mt1 mb3">Hunter's Poker</h1>
              <p className="measure f6 lh-copy">Hunter's Poker is a React-based draw poker game with a polished and engaging interface. Hunter's Poker implements the Fisher-Yates shuffle algorithm to generate a new virtual deck for each hand. Your opponent's AI is basic, but employs a winning long-term strategy. He always go for the flush!</p>
              <Link to={"/poker/"} style={{color: "#9d1c1f"}}
                className=" mt3 mt0-ns bg-white br2 f6-ns w-100 w-auto-ns f7 pv1 ph2 no-underline underline-hover shadow-3 fw8 ">PLAY POKER NOW</Link>
            </div>
          </div>
        </div>
        <h3 className=" tc mt4 mb1 tracked ph3 ph0-ns">Like what you see? Check out all my programming projects...</h3>
        <div  className=" mt2-ns h3 center dib ph3 w-100  flex flex-row-ns flex-column justify-center ">
            <Link to={"/projects/"}
              className="mh2 tc mt2 mt0-ns ba white tracked br2 fw8  h-auto-ns f6-ns w-100 w-auto-ns f7 pv3-ns pv2 ph3 no-underline underline-hover shadow-3 self-center">Explore projects</Link>
        </div>
      </div>
    );
  }
}





export default FeaturedProgramming;
