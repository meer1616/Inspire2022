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
    imgsrc: "/assets/followMyVoice.jpg",
    title: "Follow my Voice(Blind Robo)",
    Category: "Group(2)",
  };

  return (
    <Box p={["2", "2", "5", "10"]} mt={["0", "5", "15", "20"]}>
      <Container
        maxW="1200"
        // boxShadow="dark-lg"
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
          <Link href="/ec">
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
          // fontSize="45"
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
              height={["", "", "", "300"]}
              width="300"
              alt="Cannot Display"
            />
            <Box ml={["", "", "", "35px"]} fontSize="lg">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Rules</Heading>
                <OrderedList>
                  <ListItem>
                    Each team is allowed to have only one robot.
                  </ListItem>
                  <ListItem>
                    The robot must fit into a cube of dimensions 30 cm x 30 cm x
                    30 cm and the maximum weight of the robot can be 5kg.
                  </ListItem>
                  <ListItem>
                    The Robot will be inspected for safety before the event
                    begins. If found to be unsafe for the
                    participants/spectators, it will be discarded.
                  </ListItem>
                  <ListItem>
                    All the required accessories have to be brought by the
                    participants.
                  </ListItem>
                  <ListItem>
                    Team members are not allowed to touch or reposition the
                    robot. If it is necessary to rearrange the robot, the touch
                    penalty will be counted.
                  </ListItem>
                  <ListItem>
                    The participants are not allowed to damage the track, or
                    indulge in any argument with the coordinator as this will
                    lead to disqualification of their robot.
                  </ListItem>
                  <ListItem>
                    The robot should have the mechanism/object to burst the
                    balloon.
                  </ListItem>
                  <ListItem>
                    The organizers reserve the right to change any or all of the
                    rules as they deem fit. Changes in rules, if any, will be
                    highlighted in advance.
                  </ListItem>
                  <ListItem>
                    In all cases, the judge’s decision will be final and
                    binding.
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
