import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image
        width="96"
        height="96"
        href="https://raw.githubusercontent.com/smartdev1990/Rice-Core-Asset/main/Assets/0xA5d20d84deeEd3850a7538e993E3b2592bf997A0.png"
      />
    </Svg>
  );
};

export default Icon;
