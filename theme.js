import { themes } from "mdx-deck";

// export const theme = themes.yellow

const theme = themes.yellow;

console.log(theme);

theme.styles.Footer = {
  display: "flex",
  justifyContent: "center",
};

export default {
  ...theme,
};
