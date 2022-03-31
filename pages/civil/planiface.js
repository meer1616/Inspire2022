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
    imgsrc: "/assets/planiface.png",
    title: "Planiface",
    route: "/civil/planiface",
    Category: "Group",
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
              height="400"
              width="400"
              alt="Cannot Display"
            />
            <Box pl="30">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Description</Heading>
                <UnorderedList>
                  <ListItem>
                    This event is based on town-planning, in this event
                    participants have to plan the town.
                  </ListItem>
                  <ListItem>
                    This event will be conducted in two stages:
                    <OrderedList>
                      <ListItem>Auction</ListItem>
                      <ListItem>Manual/AutoCAD Planning</ListItem>
                    </OrderedList>
                  </ListItem>
                  <ListItem>Auction is compulsory for each team.</ListItem>
                  <ListItem>
                    In the second stage, planning will be performed either
                    manually or using AutoCAD.
                  </ListItem>
                  <ListItem>
                    AutoCAD participants will be provided an extra certificate
                    from Autodesk.
                  </ListItem>
                  <ListItem>
                    Planning for both manual and autoCAD is 2:00 hr.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>

          <Box p="20">
            <Box>
              <Heading mb="20px"> Judging Criterias</Heading>

              <UnorderedList>
                <ListItem>
                  Evaluation will be done based on principles of planning,
                  optimum usage of space and amenities for better living.
                </ListItem>
                <ListItem>
                  Final decision will be taken by jury members.
                </ListItem>
                <ListItem>
                  Criteria for Manual planning:
                  <OrderedList>
                    <ListItem>Per Group- 3/4 members.</ListItem>
                    <ListItem>
                      List of amenities will be provided to each team.
                    </ListItem>
                    <ListItem>
                      All necessary materials will be provided.
                    </ListItem>
                  </OrderedList>
                </ListItem>
                <ListItem>
                  Criteria for AutoCAD planning:
                  <OrderedList>
                    <ListItem>Per Group - 2 members.</ListItem>
                    <ListItem>
                      List of amenities will be provided to each team.
                    </ListItem>
                    <ListItem>
                      Computers with AutoCAD software will be provided.
                    </ListItem>
                  </OrderedList>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Web;
