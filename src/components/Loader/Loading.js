import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../LoaderAnimation/animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const Loading = () => {
  return (
    <div style={{ marginTop: "10rem" }}>
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
};
