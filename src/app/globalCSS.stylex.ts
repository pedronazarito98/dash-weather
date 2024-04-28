import * as stylex from "@stylexjs/stylex";

export const tokens = stylex.defineVars({
  primaryText: "#818181",
  secondaryText: "#fff",
  accent: "blue",
  background: "white",
  lineColor: "gray",
  borderRadius: "4px",
  fontFamily: "system-ui, sans-serif",
  fontSize: "16px",
});
// A constant can be used to avoid repeating the media query
const DARK = "@media (prefers-color-scheme: dark)";

export const colors = stylex.defineVars({
  primaryText: { default: "#818181", [DARK]: "white" },
  secondaryText: { default: "#fff", [DARK]: "#ccc" },
  accent: { default: "blue", [DARK]: "lightblue" },
  background: { default: "white", [DARK]: "black" },
  lineColor: { default: "gray", [DARK]: "lightgray" },
});

export const spacing = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});
