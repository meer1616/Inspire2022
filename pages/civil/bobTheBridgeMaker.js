import React from "react";
import {
  Box,
  Heading,
  Flex,
  UnorderedList,
  ListItem,
  Container,
  Text,
  Image,
} from "@chakra-ui/react";

const Bob = () => {
  const details = {
    imgsrc: "/assets/bob.jpg",
    title: "Bob - The Bridge maker",
    Category: "Group",
    route: "/civil/bobTheBridgeMaker",
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
            <Box ml="70">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Description</Heading>
                <UnorderedList>
                  <ListItem>Materials will be provided.</ListItem>
                  <ListItem>Per Group - 3/4 members.</ListItem>
                  <ListItem>Time for the event = 1 hour 30 minutes.</ListItem>
                  <ListItem>Length of Bridge = 45 cm</ListItem>
                  <ListItem>Width of Bridge = min. 10cm</ListItem>
                  <ListItem>Starting Load = 100 gm</ListItem>
                </UnorderedList>
              </Box>
              <Box>
                <Heading mb="20px"> Judging Criterias</Heading>
                <UnorderedList>
                  <ListItem>Deflection</ListItem>
                  <ListItem>Weight Capacity</ListItem>
                  <ListItem>Per Load Time = 10sec</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Bob;
