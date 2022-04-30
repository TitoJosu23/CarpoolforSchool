import React, { useState } from "react";
import { css } from "styled-components";

import { Box, Heading, Grommet, CheckBox } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const checkboxCheckStyle = css`
  background-color: #2196f3;
  border-color: #2196f3;
`;

const customToggleTheme = {
  global: {
    colors: {
      "toggle-bg": "#757575 ",
      "toggle-knob": "white",
      "toggle-accent": "accent-2 ",
    },
  },
  checkBox: {
    border: {
      color: {
        light: "toggle-bg",
      },
    },
    color: {
      light: "toggle-knob",
    },
    check: {
      radius: " 2px",
    },
    hover: {
      border: {
        color: undefined,
      },
    },
    toggle: {
      background: { light: "toggle-accent" },
      color: {
        light: "toggle-knob",
      },
      size: " 52px",
      knob: {
        extend: `
            top: -2px;
            box-shadow:  0px 0px 2px 0px rgba(0,0,0,0.12),
              0px 2px 2px 0px rgba(0,0,0,0.24);
          `,
      },
      extend: ({ checked }) => `
          height:  24 px;
          ${checked && checkboxCheckStyle}
        `,
    },
    gap: "xsmall",
    size: "  28px",
  },
};

export const Toggle = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <Grommet theme={deepMerge(grommet, customToggleTheme)}>
      <Box align="space-between" background-color="light-3" pad="large">
        <Heading level={3}>Driver</Heading>
        <CheckBox
          {...props}
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
          toggle
        />
      </Box>
    </Grommet>
  );
};
