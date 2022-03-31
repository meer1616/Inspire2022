import React from "react";
import {
  Box,
  Heading,
  Flex,
  UnorderedList,
  ListItem,
  Container,
  OrderedList,
  Text,
  Image,
} from "@chakra-ui/react";

const Web = () => {
  const details = {
    imgsrc: "/assets/war.png",
    title: "War A Minute",
    Category: "Group(2)",
  };

  return (
    <Box p="10">
      <Container maxW="1200" boxShadow='dark-lg'  p='6' rounded='xl' bg="blackAlpha.300">
        <Heading p="5"  fontSize="45" fontFamily="Helvetica" align="center" textShadow='2px 2px #008080' >
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
            <Box ml="20" w="50">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Rules</Heading>
                <OrderedList>
                  <ListItem>Event is on one minute games</ListItem>
                  <ListItem>Event is divided into multiple rounds.</ListItem>
                  <ListItem>
                    Total no. of rounds decided based on event registrations.
                  </ListItem>
                  <ListItem>Initial round/s having one minute games.</ListItem>
                  <ListItem>
                    each round contains multiple one minute games
                  </ListItem>
                  <ListItem>
                    selected Winning teams will move forward to the last round.
                    Rest of the team will be out of the game.
                  </ListItem>
                  <ListItem>
                    Final round is based on quiz ( mind games current affairs,
                    sudoku)
                  </ListItem>
                  <ListItem>
                    The Winner team will be decided after the last round only.
                  </ListItem>
                  <ListItem>Final decision taken only by judges</ListItem>
                  <ListItem>
                    Necessary material require for a game will given by
                    institute
                  </ListItem>
                </OrderedList>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Web;
