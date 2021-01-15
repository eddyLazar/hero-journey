import React from "react";
import { useDeck } from "mdx-deck";
import { Box, Flex } from "theme-ui";

export default () => {
  const deckState = useDeck();
  const { slide } = deckState;
  console.log(deckState);
  console.log(slide);
  return (
    <Flex>
      <h1>hello world from footer</h1>
      <Box></Box>
    </Flex>
  );
};
