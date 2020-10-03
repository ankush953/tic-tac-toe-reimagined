import React, { Component } from "react";

class Button extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <div>
        <button
          disabled={this.state.text !== ""}
          onClick={this.props.clicked}
        >
          {this.state.text || this.props.value}
        </button>
      </div>
    );
  }
}

export default Button;
