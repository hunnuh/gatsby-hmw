import React, { Component } from "react";
import Link, { withPrefix } from 'gatsby-link'

import Arrow from "../assets/arrow.svg";

class FeaturedDesign extends Component {
  constructor () {
    super();
    this.state = {
      num: 5
    };
    this.handleChangePic = this.handleChangePic.bind(this);
    this.picForward = this.picForward.bind(this);
    this.picBackward = this.picBackward.bind(this);
  }

  handleChangePic (num) {
    this.setState({ num: num });
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
    let content = this.props.content;
    let {num} = this.state;
    let thumbs = content.map((image, index) =>
      <Thumb back={content[index].relativePath} key={index} num={index} picChange={this.handleChangePic}/>
    )

    return (
      <div className="white mt4 bb b--white-60 mb4 ph4 mw8">
        <h1 className="bb b--white-60 pb3"> Featured Graphic/Web Design:</h1>
        <div className="flex flex-column flex-row-l w-100 mb4">
          <div
            style={{maxHeight:"32rem"}}
            className=" w-60-l w-100 bg-top bg-black-30 br4 pa0 relative flex flex-column justify-center"
            >
              <div className="dn-l flex w-100 h-100 center absolute flex-row justify-between items-center z-4">
                <div onClick={this.picBackward} className="flex flex-column justify-center h4 w3 bg-black-40 tc br4 br--right pointer">◀</div>
                <div onClick={this.picForward} className="flex flex-column justify-center h4 w3 bg-black-40 tc br4 br--left pointer">▶</div>
              </div>
              <div className="designHover dn flex-ns w-100 h-100 center absolute flex-row justify-between items-center z-4">
                <div onClick={this.picBackward} className="flex flex-column justify-center h4 w3 bg-black-40 tc br4 br--right pointer">◀</div>
                <div onClick={this.picForward} className="flex flex-column justify-center h4 w3 bg-black-40 tc br4 br--left pointer">▶</div>
              </div>
              <div className="db relative center pa3">

                <img
                  className="mv0 shadow-3 "
                  style={{maxHeight:"30rem"}}
                  src={`portfolio/${content[num].relativePath}`}
                />
              </div>
          </div>


          <div className="flex flex-column  w-40-l w-100 ml4">
            <div className="dn db-l">
              <p className="white-30 f7 tracked mt0 mb3 pv0">Click an image below:</p>
              <div className="flex flex-column mb0">
                {thumbs}
              </div>

            </div>
            <div className="w-100 flex flex-column ph4 ph0-l mt2">
              <Link to={"/portfolio/"} className="white-70 f5 tracked mv1 underline-hover no-underline self-end"> See more of my design work. ⇾</Link>
              <Link to={"/programming/"} className="white-40 f6 tracked mv1 underline-hover no-underline self-end"> Explore my programming projects. ⇾</Link>
              <Link to={"/about/"} className="white-40 f6 tracked mv1 underline-hover no-underline self-end"> Learn more about Hunter. ⇾</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Thumb extends Component {
  click = (num) => {
    console.log(num)
    this.props.picChange(num)
  }
  render(props) {
    let {pos, back, num} = this.props
    return (
      <div
        className={`w-100 h2 shadow-3 b--white-90 mr2 mb3 br1 grow ba bw1 overflow-hidden pointer`}
        onClick={() => this.click(num)}>
        <img className="o-40 marquee_button absolute top--1" src={`portfolio/${back}`}/>
      </div>
    );
  }
}

export default FeaturedDesign;
