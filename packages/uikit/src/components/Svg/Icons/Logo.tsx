import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
      <image width="198" height="198" href="https://i.ibb.co/mcfFbPk/Rice-Logo.png" />
    </Svg>
  );
};

export default Icon;
