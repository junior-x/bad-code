import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./popupGithub.json";

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: true, isPaused: true };
  }

  render() {
    const buttonStyle = {
      display: "block",
      margin: "10px auto",
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          style={{
            pointerEvents: "none",
            alignItems: "center",
            height: "120px",
            width: "300px",
          }}
        />
      </div>
    );
  }
}
