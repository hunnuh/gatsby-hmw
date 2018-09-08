
import React, { Component } from "react";
import Highlight from 'react-highlight';
import HighlightTheme from 'highlight.js/styles/atelier-lakeside-light.css';

class ProgramHighlighter extends Component {
  constructor () {
    super();
    this.state = {
      activeSnippet: 0
    };
    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(tab){
    this.setState({activeSnippet:tab})
    let scrollid = "." + this.props.id;
    document && document.querySelector(scrollid).scrollTo(0, 0)
  }

  render(props){
    let {snippets} = this.props;
    let {activeSnippet} = this.state;

    let buttons = snippets.map((snippet, index)=>
      <div
        className = {"h2 pv2 ph3 br3 br--top dib bt bl br b-black tracked mr1 bt bh b--mid-gray shadow-3 nowrap mb0" +
          (index === activeSnippet ? " defaultcursor bg-white-40" : " pointer bg-white-10") }
        onClick = {() => this.handleTab(index)}
        key = {index}
      >
        <p key={index} className=" f7 white mb0">{snippet.name}</p>
      </div>
    )

    return (
      <div style={{fontSize:".8rem", }} className="h-100 flex flex-column">
        <div className="ml2  overflow-x-auto overflow-y-hidden flex flex-row">{buttons}</div>
        <div className=" w-100 h-100 mt0 relative">
          <Highlight className={`javascript pl4 br2 ba b--mid-gray shadow-3 absolute w-100 h-100 top-0` + " " + this.props.id}>
            {snippets ? snippets[activeSnippet].snippet : ""}
          </Highlight>
        </div>
      </div>
    );
  }
}



export default ProgramHighlighter;
