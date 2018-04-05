import React, { Component } from "react";

class Example extends Component {
  aertOnClick = () => {
    alert("Button from example was clicked");
  };
  render() {
    return (
      <div>
        Hello from Example
        <button onClick={this.aertOnClick}>Click me</button>
      </div>
    );
  }
}

export default Example;
