
import React, { Component } from "react";
import { withPrefix } from 'gatsby-link'

class Masonry extends Component {

  click = (path) => {
    this.props.openModal(path)
  }

  render(props){


  let allContent = this.props.content.map(
      (e, i) => <img key={i} onClick={() => this.click(e.relativePath)} className="mv3 db shadow-1 w-100 pointer dim " src={e.relativePath} />
    )

  let columns = new Array(this.props.cols);

  for (let i = 0; i < columns.length; i++) {
    columns[i] = [];
  }

  for (let i = 0; i < allContent.length; i += columns.length) {
    for (let j = 0; j < columns.length; j++){
      columns[j].push(allContent[i+j]);
    }


  }

  let organizedMasonry = columns.map((col, i) => <div key={i} className={`ph2 w-` + Math.floor(100/columns.length) + (i % 2 ? ` mt4` : ``)}>{col}</div>)


    return (
      <div
        className="relative self-center flex flex-row justify-between w-100 mv3"
        style={{color:"#EBFFFC"}}
      >
        {organizedMasonry}

      </div>
    );
  }
}

export default Masonry;
