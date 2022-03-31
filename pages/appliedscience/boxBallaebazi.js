import React from "react";
import {
  Box,
  Heading,
  Flex,
  UnorderedList,
  ListItem,
  Container,
  Text,
  Image,
} from "@chakra-ui/react";

const Web = () => {
  const details = {
    imgsrc: "/assets/box-cricket.png",
    title: "Box Ballaebazi",
    Category: "Group",
    route: "/appliedscience/boxBallaebazi",
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
            <Box ml="30">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Description</Heading>
                <Text>
                  A team game of 6 खिलाडीz . You come, You play , You enjoy. The
                  flavor of cricket in our friendly style.
                </Text>
                <Heading mb="20px"> Rules</Heading>
                <UnorderedList>
                  <ListItem>
                    Registration fees per team would be Rs. 300.
                  </ListItem>
                  <ListItem>
                    Participants should bring their registration Receipt.
                  </ListItem>
                  <ListItem>
                    Time slots given to participants should be followed
                    Strictly.
                  </ListItem>
                  <ListItem>Only 6 players can play in one team.</ListItem>
                  <ListItem>
                    Umpire decision will be final and cannot be questioned.
                  </ListItem>
                  <ListItem>No runs behind the wickets.</ListItem>
                  <ListItem>
                    Each team will bowl 4 overs and bat for 4 overs.
                  </ListItem>
                  <ListItem> One substitute is allowed per team. </ListItem>
                  <ListItem>
                    Substitutes can only play if a player is injured and the
                    umpire will make the decision. Catch, stumping, run out, hit
                    wicket, and bowled will be considered as out.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>

          <Box m="20">
            <Box>
              <Heading mb="20px"> Judging Criterias</Heading>
              <UnorderedList>
                <ListItem>
                  Uniformity in design. ( keeping the essence the same and
                  providing a user experience that feels the same.)
                </ListItem>
                <ListItem>User interface and User Experience.</ListItem>
                <ListItem>
                  Dynamism ( Server-side and Client-side Both)
                </ListItem>
                <ListItem>Readability of code.</ListItem>
                <ListItem>
                  Structure Maintainability. ( Each Component Pages, and file
                  should be well structured )
                </ListItem>
                <ListItem>
                  Features of a website. ( Easy to Use, Optimized for Mobile,
                  Fresh, Quality Content)
                </ListItem>
                <ListItem>Representation</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Web;
