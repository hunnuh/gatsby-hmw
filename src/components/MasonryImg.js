
import React, { Component } from "react";
import { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'

class MasonryImg extends Component {

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

  let organizedMasonryLarge = columns.map((col, i) => <div key={i} className={`ph2 w-` + Math.floor(100/columns.length) + (i % 2 ? ` mt4` : ``)}>{col}</div>)
  let organizedMasonryMed = columns.map((col, i) => <div key={i} className={`ph2 w-100`}>{col}</div>)


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


export const sharpQuery = graphql`
  query MasonImgQuery {
    masonImage: imageSharp(id: { eq: "/header/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`

export default Masonry;
