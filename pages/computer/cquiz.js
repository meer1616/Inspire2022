import React from "react";
// import Data from "./Data";
import { Box, Heading, Flex, Container, Text, Image } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
// import Format from "../Format";

const CQuiz = () => {
  const details = {
    imgsrc: "/assets/cquiz.png",
    route: "/computer/cquiz",
    Category: "Individual",
    title: "C Quiz",
    description: "",
    
  };

  return (
    <Box p="10">
      <Container maxW="1200" boxShadow='dark-lg'  p='6' rounded='xl' bg="blackAlpha.300">
      <Heading p="5"  fontSize="45" fontFamily="Helvetica" align="center" textShadow='2px 2px #008080' >{details.title}</Heading>
      <Box      
        mx="auto"
        my="5"        
        color="black"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="20"     
      >
        <Flex>
        <Image src= {details.imgsrc} height="500"width="500" alt="Cannot Display" />
        <Box>
          <Heading>Event Category</Heading>

          <Text m="3">{details.Category}</Text>

          <Box>
            <Heading mb="20px"> Rules</Heading>
            <UnorderedList >
              <ListItem>Mode of the quiz will be Online.</ListItem>
              <ListItem>
                Event will be completed in three rounds
                <UnorderedList>
                  <ListItem>
                    Round 1 - (Beginner)
                    <UnorderedList>
                      <ListItem>30 questions</ListItem>
                      <ListItem> 30 minutes</ListItem>
                    </UnorderedList>
                  </ListItem>

                  <ListItem>
                    Round 2 - (Intermediate)
                    <UnorderedList>
                      <ListItem>20 questions</ListItem>
                      <ListItem> 30 minutes</ListItem>
                    </UnorderedList>
                  </ListItem>
                  <ListItem>
                    Round 3 - (Final)
                    <UnorderedList>
                      <ListItem>15 questions</ListItem>
                      <ListItem> 30 minutes</ListItem>
                    </UnorderedList>
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                Number of participants carried forward to the next round will be
                decided at the time of the event considering the total number of
                participants.
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
        </Flex>
        <Box height="full" width="100"></Box>
      </Box>
      </Container>
    </Box>
  );
};

export default CQuiz;
