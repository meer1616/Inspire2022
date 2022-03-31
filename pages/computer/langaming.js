import React from "react";
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
    <Box p="10">
      <Container
        maxW="1200"
        boxShadow="dark-lg"
        p="6"
        rounded="xl"
        bg="blackAlpha.300"
      >
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
          <Flex>
            <Image
              src={details.imgsrc}
              height="500"
              width="500"
              alt="Cannot Display"
            />
            <Box>
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px">Description</Heading>
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

          <Box p="10" pl="70">
            <Heading mb="20px"> Rules</Heading>
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
