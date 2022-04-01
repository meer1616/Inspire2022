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
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const Web = () => {
  const details = {
    imgsrc: "/assets/circuitsamiksha.png",
    title: "Circuit Samixa",
    Category: "Group(02)",
  };

  return (
    <Box p={["2", "2", "5", "10"]} mt={["0", "5", "15", "20"]}>
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
        <Box position="absolute" top={["2", "3", "4", "4"]} cursor="pointer">
          {/* <Text> Back</Text> */}
          <Link href="/electrical">
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
          fontSize={["35", "40", "42", "45"]}
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
          <Flex flexDir={["column", "column", "column", "row"]}>
            <Image
              src={details.imgsrc}
              height={["", "", "", "500"]}
              width="500"
              alt="Cannot Display"
            />
            <Box ml="30" fontSize="lg">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Rules</Heading>
                <OrderedList>
                  <ListItem>Each team consists of 2 participants.</ListItem>
                  <ListItem>
                    All the necessary components will be provided.
                  </ListItem>
                  <ListItem>
                    Students should have the knowledge of basic electrical and
                    electronics engineering.
                  </ListItem>
                  <ListItem>Event consists of three rounds.</ListItem>
                  <ListItem>
                    Disqualification rules:
                    <OrderedList>
                      <ListItem>
                        If any team fails to report at a given time, the team
                        will be disqualified.
                      </ListItem>
                      <ListItem>
                        Use of mobile phones and internet during the competition
                        is strictly prohibited.In case of violating this rule,
                        they will be disqualified at that moment.
                      </ListItem>
                      <ListItem>
                        The decision of the organizers in conducting the event
                        and declaring the results will be final. No queries in
                        this regard will be entertained.
                      </ListItem>
                      <ListItem>
                        Misbehavior of any member may disqualify the entire
                        team.
                      </ListItem>
                    </OrderedList>
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
