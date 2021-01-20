import { themes } from "mdx-deck";

const theme = themes.yellow;

theme.styles.Footer = {
  display: "flex",
  justifyContent: "center",
};

export default {
  ...theme,
  styles: {
    h1: {
      maxWidth: "70%",
      letterSpacing: "0.1em",
    },
    blockquote: {
      fontStyle: "italic",
    },
    img: {
      maxWidth: "70%",
      width: "initial",
      height: "initial",
      horizontal: {
        height: 20,
      },
    },
    Slide: {},
    Header: {},
    Footer: {},
    li: {
      marginBottom: 4,
      textAlign: "left",
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
    horizontal: {
      height: 20,
    },
  },
};
