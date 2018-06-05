import React, { Component } from "react";
import { withPrefix } from 'gatsby-link'

class FeaturedDesign extends Component {
  constructor () {
    super();
    this.state = {
      path: ""
    };

    this.handleChangePic = this.handleChangePic.bind(this);
  }

  handleChangePic (path) {

    this.setState({ path: path });
  }

  componentDidMount() {
      this.setState({ path: this.props.content[1].relativePath});
  }

  render(props) {
    let thumbs = this.props.content
    return (
      <div className="white mt4 bb b--white-60 mb4">
        <h1 className="bb b--white-60 pb3"> Featured Graphic/Web Design:</h1>
        <div className="flex flex-row w-100 mb4">
          <div
            style={{maxHeight:"32rem"}}
            className=" w-60 bg-top bg-black-10 pa3 flex flex-column justify-center"
            >
              <div className="db relative center">
                <img
                  className="mv0 shadow-3 "
                  style={{maxHeight:"30rem"}}
                  src={`portfolio/${this.state.path}`}
                />
              </div>
          </div>
          <div className="flex flex-column  w-40 ">
            <div className="ml4">
              <p className="white-30 f7 tracked mt0 mb2 pv0">Click an image below:</p>
              <div className="flex flex-row">
                <Thumb back={thumbs[0].relativePath} picChange={this.handleChangePic} pos="bottom"/>
                <Thumb back={thumbs[1].relativePath} picChange={this.handleChangePic} pos="center"/>
                <Thumb back={thumbs[2].relativePath} picChange={this.handleChangePic} pos="bottom"/>
              </div>
              <div className="flex flex-row">
                <Thumb back={thumbs[3].relativePath} picChange={this.handleChangePic} pos="right"/>
                <Thumb back={thumbs[4].relativePath} picChange={this.handleChangePic} pos="top"/>
                <Thumb back={thumbs[5].relativePath} picChange={this.handleChangePic} pos="right"/>
              </div>
              <div className="flex flex-row mb2">
                <Thumb back={thumbs[6].relativePath} picChange={this.handleChangePic} pos="center"/>
                <Thumb back={thumbs[7].relativePath} picChange={this.handleChangePic} pos="left"/>
                <Thumb back={thumbs[8].relativePath} picChange={this.handleChangePic} pos="left"/>
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

  click = (path) => {
    this.props.picChange(path)
  }

  render(props) {
    let {pos, back} = this.props
    return (
      <div
        className={`w4 h4 shadow-3 bg-${pos} mr2 mb2 br1 grow`}
        style={{backgroundImage: `url(portfolio/${back})`}}
        onClick={() => this.click(back)}>
      </div>
    );
  }
}

export default FeaturedDesign;
