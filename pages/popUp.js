import React, { Component } from "react";
import LottieControl from "./popUpGithub";

export default class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: true };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div
        onClick={this.togglePopup.bind(this)}
        style={{ position: "absolute", paddingBottom: "60px" }}
      >
        {this.state.showPopup ? (
          <LottieControl
            style={{
              alignItems: "center",
              height: "120px",
              width: "300px",
            }}
          >
            Username do GITHUB!
          </LottieControl>
        ) : null}
      </div>
    );
  }
}
