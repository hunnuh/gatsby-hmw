
import React, { Component } from "react";
import { withPrefix } from 'gatsby-link';
import Img from 'gatsby-image';

class Masonry extends Component {

  click = (path) => {
    this.props.openModal(path)
  }

  render(props){

  let gifs = this.props.content
    .filter((e, i) => e.extension === "gif")
    .map((e, i) => <img
      key={i+"g"}
      onClick={() => this.click(e.relativePath)}
      className="mv3 db shadow-1 w-100 pointer dim "
      src={e.relativePath}
    />)

    let optimized = this.props.content
    .filter((e, i) => e.extension !== "gif")
    .map((e, i) => <div key={i + "Do"} onClick={() => this.click(e.relativePath)}>
      <Img
          key={i+"o"}
          className="mv3 db shadow-1 w-100 pointer dim "
          src={e.relativePath}
          sizes={e.childImageSharp.sizes}
        />
      </div>
      )


  let allContent = [...gifs, ...optimized]

  let columns = new Array(this.props.cols);

  for (let i = 0; i < columns.length; i++) {
    columns[i] = [];
  }

  for (let i = 0; i < allContent.length; i += columns.length) {
    for (let j = 0; j < columns.length; j++){
      columns[j].push(allContent[i+j]);
    }


  }

  let organizedMasonryLarge = columns.map((col, i) => <div key={i+"L"} className={`ph2 w-` + Math.floor(100/columns.length) + (i % 2 ? ` mt4` : ``)}>{col}</div>)
  let organizedMasonryMed = columns.map((col, i) => <div key={i+"M"} className={`ph2 w-100`}>{col}</div>)


    return (
      <div
        className="relative w-100 mv3"
        style={{color:"#EBFFFC"}}
      >
        <div className="dn flex-l relative self-center flex-row justify-between w-100">{organizedMasonryLarge}</div>
        <div className="flex flex-column  dn-l db">
          <div className="flex flex-column justify-center dn-l db">
            {organizedMasonryMed}
          </div>
        </div>

      </div>
    );
  }
}

export default Masonry;
