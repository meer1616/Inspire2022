import React from "react";
import { Box, Heading, Flex, Container, Text, Image } from "@chakra-ui/react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Relay = () => {
  const details = {
    imgsrc: "/assets/relay-code.png",
    route: "/computer/relaycoding",
    title: "Relay Coding",
    Category: "Group-2 Participant",    
  };

  return (
    <Box p="10">
      <Container maxW="1200"
        boxShadow="dark-lg"
        p="6"
        rounded="xl"
        bg="blackAlpha.300">
        <Heading p="5"
          fontSize="45"
          fontFamily="Helvetica"
          align="center"
          textShadow="2px 2px #008080">
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
            <Box ml="30px">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>
              
              <Box>
              <Heading mb="20px"> Description</Heading>
                <UnorderedList>
                  <ListItem>
                    The prerequisite for participation in this event is sound
                    knowledge of C/C++Programming.
                  </ListItem>
                  <ListItem>
                    The participants should report at the venue 15 minutes
                    before the scheduled time of the event.
                  </ListItem>
                  <ListItem>
                    Internet usage will not be allowed to the participants.
                  </ListItem>
                  <ListItem>
                    If a lesser number of teams register for this event, there
                    will be only the second and final round.
                  </ListItem>
                  <ListItem>
                    If any rules are found to be broken by any of the team
                    members, it will lead to their disqualification.
                  </ListItem>
                  <ListItem>
                    The decision of the event organizers would be final and
                    shall not be subject to any change.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>

          <Box p="50">
            <Box>
            <Heading mb="20px"> Rules</Heading>
            <Text>There are 3 levels.</Text>
            <UnorderedList>
              <ListItem>
                Round 1 (Preliminary Round)
                <OrderedList>
                  <ListItem>
                    Statement will be given at the time of the event.
                  </ListItem>
                  <ListItem>Platform: Ubuntu.</ListItem>
                  <ListItem> Tools: Code blocks, Gedit</ListItem>
                  <ListItem>Compiler: gcc</ListItem>
                  <ListItem> Language: ‘C/C++’</ListItem>
                  <ListItem>
                    Time Limit: 10 minutes.
                    <UnorderedList>
                      <ListItem>
                        First 5 minutes will be given to First participant
                      </ListItem>
                      <ListItem>
                        Next 5 minutes will be given to second participant to
                        complete the remaining code
                      </ListItem>
                    </UnorderedList>
                  </ListItem>
                </OrderedList>
              </ListItem>
              <ListItem>
                Round 2 (Second Round)
                <OrderedList>
                  <ListItem>
                    Statement will be given at the time of the event.
                  </ListItem>
                  <ListItem>Platform: Ubuntu.</ListItem>
                  <ListItem> Tools: Code blocks, Gedit</ListItem>
                  <ListItem>Compiler: gcc</ListItem>
                  <ListItem> Language: ‘C/C++’</ListItem>
                  <ListItem>Time Limit: 20 minutes.</ListItem>
                  <ListItem>
                    In 20 minutes,
                    <UnorderedList>
                      <ListItem>
                        First 10 minutes will be given to First participant
                      </ListItem>
                      <ListItem>
                        Next 10 minutes will be given to second participant to
                        complete the remaining code
                      </ListItem>
                    </UnorderedList>
                  </ListItem>
                </OrderedList>
              </ListItem>
              <ListItem>
                Round 3 (Final Round)
                <OrderedList>
                  <ListItem>
                    Statement will be given at the time of the event.
                  </ListItem>
                  <ListItem>Platform: Ubuntu.</ListItem>
                  <ListItem> Tools: Code blocks, Gedit</ListItem>
                  <ListItem>Compiler: gcc</ListItem>
                  <ListItem> Language: ‘C/C++’</ListItem>
                  <ListItem>Time Limit: 50 minutes.</ListItem>
                  <ListItem>
                    In 50 minutes,
                    <UnorderedList>
                      <ListItem>
                        First 20 minutes will be given to First participant
                      </ListItem>
                      <ListItem>
                        Next 20 minutes will be given to second participant to
                        complete the remaining code
                      </ListItem>
                      <ListItem>
                        Remaining 10 minutes remaining, both can code together.
                      </ListItem>
                    </UnorderedList>
                  </ListItem>
                </OrderedList>
              </ListItem>
            </UnorderedList>
            </Box>
            <Heading p="30">Criterias</Heading>
            <OrderedList>
              <ListItem>Coordination</ListItem>
              <ListItem>Problem Completion Level</ListItem>
              <ListItem>Logic</ListItem>
            </OrderedList>
          </Box>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Relay;
