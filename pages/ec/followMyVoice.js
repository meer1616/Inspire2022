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
    imgsrc: "/assets/followMyVoice.jpg",
    title: "Follow my Voice(Blind Robo)",
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
              height="300"
              width="300"
              alt="Cannot Display"
            />
            <Box ml="35px">
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
