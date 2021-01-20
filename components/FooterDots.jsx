/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useDeck } from "mdx-deck";
import { Box, Flex } from "theme-ui";
import { IconButton } from "theme-ui";
import range from "ramda/src/range";

export default () => {
  const deckState = useDeck();
  const { slide } = deckState;
  console.log(deckState.slides.length);
  console.log(deckState.index);

  return (
    <Flex sx={{ justifyContent: "center", marginBottom: 4 }}>
      {/* {range(1, deckState.slides.length).map((i) => (
        <Dot key={i} filled={i <= deckState.index + 1} />
      ))} */}
    </Flex>
  );
};

const Dot = ({ filled = false }) => (
  <IconButton aria-label="Toggle dark mode">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentcolor">
      <circle r={11} cx={12} cy={12} fill={filled ? "black" : "none"} stroke="currentcolor" strokeWidth={2} />
    </svg>
  </IconButton>
);
