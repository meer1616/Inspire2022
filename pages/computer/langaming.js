import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

// import Data from "./Data";
import {
  Box,
  Heading,
  Flex,
  Container,
  Text,
  Image,
  ListItem,
  UnorderedList,
  OrderedList,
} from "@chakra-ui/react";

const Lan = () => {
  const details = {
    imgsrc: "/assets/lan-gaming.png",
    route: "/computer/langaming",
    title: "LAN Gaming",
    Category: "Individual/Group",
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
          <Flex flexDir={["column", "column", "column", "row"]}>
            <Image
              src={details.imgsrc}
              height={["", "", "", "500"]}
              width="500"
              alt="Cannot Display"
            />
            <Box ml="30" fontSize={["md", "md", "lg", "lg"]}>
              <Text fontSize={["2xl", "2xl", "4xl", "4xl"]} fontWeight="bold">
                Event Category
              </Text>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Text
                  fontSize={["2xl", "2xl", "4xl", "4xl"]}
                  fontWeight="bold"
                  mb="20px"
                >
                  Description
                </Text>
                <Text>Number of games : 2</Text>
                <OrderedList>
                  <ListItem>
                    Counterstrike
                    <OrderedList>
                      <ListItem>
                        Participation: 4 participants per group (Compulsory)
                      </ListItem>
                      <ListItem>
                        Winner of the first round will play in the second round.
                      </ListItem>
                      <ListItem>
                        Round time will be decided at the time of the event by
                        the organizer.
                      </ListItem>
                    </OrderedList>
                  </ListItem>
                  <ListItem>
                    Need of Speed
                    <OrderedList>
                      <ListItem>Participation: Individual</ListItem>
                      <ListItem>
                        Winner of the first round will play in the second round.
                      </ListItem>
                      <ListItem>
                        Map and Lap will be decided at the time of the event by
                        the organizer.
                      </ListItem>
                    </OrderedList>
                  </ListItem>
                </OrderedList>
              </Box>
            </Box>
          </Flex>

          <Box
            p="10"
            pl={["", "", "", "70"]}
            fontSize={["md", "md", "lg", "lg"]}
          >
            <Text
              fontSize={["2xl", "2xl", "4xl", "4xl"]}
              fontWeight="bold"
              mb="20px"
            >
              {" "}
              Rules
            </Text>
            <UnorderedList>
              <ListItem>
                The organizer has the right to change any rules, if needed.
              </ListItem>
              <ListItem>
                Each participant must have the identity card of his/her
                respected institute.
              </ListItem>
              <ListItem>
                The final decision is under authority. In any circumstances, it
                cannot be uttered.
              </ListItem>
              <ListItem>
                Participants must reach the specified place before 15 minutes.
              </ListItem>
              <ListItem>
                If any misbehavior or indiscipline will be noted from the
                participants then they will be disqualified from the event
                immediately.
              </ListItem>
              <ListItem>
                The certificate will be provided for participation.
              </ListItem>
              <ListItem>Representation</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Lan;
