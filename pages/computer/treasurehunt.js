import React from "react";
import { Box, Heading, Flex, Container, Text, Image } from "@chakra-ui/react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Tresurehunt = () => {
  const details = {
    imgsrc: "/assets/e-treasure.png",
    route: "/computer/treasurehunt",
    title: "E-Treasure Hunt",
    Category: "Individual",
  };

  return (
    <Box p="10">
      <Container
        maxW="1200"
        boxShadow="dark-lg"
        p="6"
        rounded="xl"
        bg="blackAlpha.300"
      >
        <Heading
          p="5"
          fontSize="45"
          fontFamily="Helvetica"
          align="center"
          textShadow="2px 2px #008080"
        >
          {details.title}
        </Heading>
        <Box
          mx="auto"
          my="5"
          color="black"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="20"
        >
          <Flex>
            <Image
              src={details.imgsrc}
              height="400"
              width="400"
              alt="Cannot Display"
            />
            <Box>
              <Box ml="70">
                <Heading>Event Category</Heading>

                <Text m="3">{details.Category}</Text>
                <Heading mb="20px"> Rules</Heading>
                <Text>There will be 3 levels.</Text>
                <UnorderedList>
                  <ListItem>
                    Level 1: Solving Logical Reasoning
                    <OrderedList>
                      <ListItem>Solve 20-25 Questions</ListItem>
                      <ListItem> Maximum time limit - 30 minutes</ListItem>
                      <ListItem>
                        Elimination based on - Fastest Fingers First
                      </ListItem>
                    </OrderedList>
                  </ListItem>

                  <ListItem>
                    Level 2: Solving Riddles (Pen & Paper Round)
                    <OrderedList>
                      <ListItem>
                        Solve 2-3 Riddles to get a Visualization Puzzle
                      </ListItem>
                      <ListItem> Maximum time limit - 15 minutes</ListItem>
                      <ListItem>
                        Elimination based on - Fastest Fingers First
                      </ListItem>
                    </OrderedList>
                  </ListItem>
                  <ListItem>
                    Level 3: Visualization Puzzle (Googling)
                    <OrderedList>
                      <ListItem>Trace the Clue from the Artwork.</ListItem>
                      <ListItem> Maximum time limit - 20 minutes.</ListItem>
                    </OrderedList>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Tresurehunt;
