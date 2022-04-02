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
    imgsrc: "/assets/power.jpg",
    title: "Power Hour",
    Category: "Individual",
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
        <Box position="absolute" top={["2", "3", "4", "4"]} cursor="pointer">
          {/* <Text> Back</Text> */}
          <Link href="/mechanical">
            <a>
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
              height={["", "", "", "400"]}
              width="400"
              alt="Cannot Display"
            />
            <Box ml={["", "", "", "35"]}>
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading my="20px"> Rules</Heading>
                <OrderedList>
                  <ListItem>
                    The participants are responsible for their own health and
                    safety.
                  </ListItem>
                  <ListItem>
                    The given exercise should be completed in time to qualify
                    for next round.
                  </ListItem>
                  <ListItem>
                    Decision of judge and coordinator will be final and no
                    arguments will be tolerated.
                  </ListItem>
                  <ListItem>
                    No use of the internet (via PC or Mobiles) is allowed during
                    the event.
                  </ListItem>
                  <ListItem>
                    On-time availability of participants is a must. Schedule
                    would be given in advance to every registered participant.
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
            </Box>
          </Flex>

          <Box m={["", "", "", "30"]}>
            <Box>
              <Heading mb="20px"> Description</Heading>
              <OrderedList>
                <ListItem>
                  The participants are responsible for their own health and
                  safety.
                </ListItem>
                <ListItem>User interface and User Experience.</ListItem>
                <ListItem>
                  The given exercise should be completed in time to qualify for
                  next round.
                </ListItem>
                <ListItem>
                  Decision of judge and coordinator will be final and no
                  arguments will be tolerated.
                </ListItem>
              </OrderedList>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Web;
