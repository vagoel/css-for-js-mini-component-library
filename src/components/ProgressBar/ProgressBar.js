/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  border-radius: 4px;
  background: var(--bg-color);
  box-shadow: var(--shadow);
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--value);
  background-color: var(--color);
  height: var(--height);
  border-radius: var(--radius);
`;

const STYLES = {
  small: {
    height: 8,
    radius: "4px 0px 0px 4px",
  },
  medium: {
    height: 12,
    radius: "4px 0px 0px 4px",
  },
  large: {
    height: 16,
    radius: "4px 0px 0px 4px",
  },
};


const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  return (
    <>
      <Wrapper
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        role="progressbar"
        style={{
          "--shadow": `0px 2px 4px 0px ${COLORS.transparentGray35} inset`,
          "--bgcolor": COLORS.transparentGray15,
        }}
      >
        {/* <VisuallyHidden>{value}%</VisuallyHidden> */}
        <Bar
          style={{
            "--value": value + "%",
            "--color": COLORS.primary,
            "--height": styles.height + "px",
            "--radius": styles.radius,
          }}
        ></Bar>
      </Wrapper>
    </>
  );
};

export default ProgressBar;
