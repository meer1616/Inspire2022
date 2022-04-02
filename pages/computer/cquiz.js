import React from "react";
// import Data from "./Data";
import { Box, Heading, Flex, Container, Text, Image } from "@chakra-ui/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
// import Link from "next/link";
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
    <Box p={["2", "2", "5", "10"]} mt={["0", "5", "", ""]}>
      <Container
        maxW="1200"
        boxShadow="0 5px 10px gray"
        p="6"
        rounded="xl"
        bg="blackAlpha.300"
        width={["95%", "90%", "80%", "70%"]}
        margin="auto"
        position="relative"
      >
        <Box position="absolute" top={["2", "2", "3", "4"]} cursor="pointer">
          {/* <Text> Back</Text> */}
          <Link href="/computer">
            <a >
              <Flex color="blue.500">
                <IoIosArrowRoundBack fontSize="25px" />
                <Text>Back</Text>
              </Flex>
            </a>
          </Link>
        </Box>
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
          <Flex flexDir={["column", "column", "row", "row"]}>
            <Image
              src={details.imgsrc}
              height={["", "", "500", "500"]}
              width="500"
              alt="Cannot Display"
            />
            <Box ml="30" fontSize="lg">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Rules</Heading>
                <UnorderedList>
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
                    Number of participants carried forward to the next round
                    will be decided at the time of the event considering the
                    total number of participants.
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
