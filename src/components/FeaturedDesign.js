import React, { Component } from "react";
import { withPrefix } from 'gatsby-link'

class FeaturedDesign extends Component {
  constructor () {
    super();
    this.state = {
      number: 5
    };
    this.handleChangePic = this.handleChangePic.bind(this);
    this.picForward = this.picForward.bind(this);
    this.picBackward = this.picBackward.bind(this);
  }

  handleChangePic (num) {
    this.setState({ number: num });
  }

  picForward(){
    let num = this.state.number;
    this.setState({number: num++})
  }

  picBackward(){
    let num = this.state.number;
    this.setState({number: num--})
  }

  render(props) {
    let content = this.props.content;
    let num = this.state.number;
    let thumbs = content.map((image, index) =>
      <Thumb back={content[index].relativePath} key={index} num={index} picChange={this.handleChangePic}/>
    )

    return (
      <div className="white mt4 bb b--white-60 mb4">
        <h1 className="bb b--white-60 pb3"> Featured Graphic/Web Design:</h1>
        <div className="flex flex-row w-100 mb4">
          <div
            style={{maxHeight:"32rem"}}
            className=" w-60 bg-top bg-black-10 pa3 relative flex flex-column justify-center"
            >

              <div className="db relative center">
                <div className="w-100 h-100 center absolute flex flex-row justify-between z-4">
                  <div className="flex flex-column justify-center h-100 w3 bg-black-40"></div>
                  <div className="flex flex-column justify-center h-100 w3 bg-black-40"></div>
                </div>
                <img
                  className="mv0 shadow-3 "
                  style={{maxHeight:"30rem"}}
                  src={`portfolio/${content[num].relativePath}`}
                />
              </div>
          </div>


          <div className="flex flex-column  w-40 ">
            <div className="ml4">
              <p className="white-30 f7 tracked mt0 mb3 pv0">Click an image below:</p>
              <div className="flex flex-column mb0">
                {thumbs}
              </div>
              <div className="w-100 flex flex-column ">
                <a className="white-70 f4 tracked mv1"> See more of my design work. ⇾</a>
                <a className="white-40 f6 tracked mv1"> Explore my programming projects. ⇾</a>
                <a className="white-40 f6 tracked mv1"> Learn more about Hunter. ⇾</a>
              </div>
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
        className={`w-100 h2 shadow-3 b--white-90 mr2 mb3 br1 grow ba bw1 overflow-hidden`}
        onClick={() => this.click(num)}>
        <img className="o-40" src={`portfolio/${back}`}/>
      </div>
    );
  }
}

export default FeaturedDesign;
