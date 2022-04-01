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
    imgsrc: "/assets/raysHope.png",
    title: "Rays of Hope",
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
              height={["", "", "", "400"]}
              width="400"
              alt="Cannot Display"
            />

            <Box ml={["", "", "", "35"]}>
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>
              <Heading mb="20px"> Rules</Heading>
              <OrderedList>
                <ListItem>
                  Participants from any branch or stream can participate in this
                  event.
                </ListItem>
                <ListItem>
                  Two participants are allowed in each team. Participants must
                  register as a team.
                </ListItem>
                <ListItem>
                  Participants must not possess any mirror or any other
                  reflection friendly smooth materials during the event.
                </ListItem>
                <ListItem>
                  No use of the internet (via PC or Mobiles) is allowed during
                  the event.
                </ListItem>
                <ListItem>
                  On-time availability of participants is a must. Schedule would
                  be given in advance to every registered participant.
                </ListItem>
                <ListItem>
                  Decisions taken by jury will be considered as “FINAL”.
                </ListItem>
                <ListItem>
                  No material except pen or pencil is needed from participants
                  during the event.
                </ListItem>
                <ListItem>
                  Number of rounds in the event will be decided based on the
                  entries and will be informed on the day of the event.
                </ListItem>
              </OrderedList>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Web;
