import React, { Component } from "react";

class Header extends Component {
  render(){
    return (
      <div
        id={this.props.bg}
        className="bg-center w-100 flex  justify-center tc bb b--white-60">
        <div className="mw8 ">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;
