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
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const Web = () => {
  const details = {
    imgsrc: "/assets/box-cricket.png",
    title: "Box Ballaebazi",
    Category: "Group",
    route: "/appliedscience/boxBallaebazi",
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
          <Link href="/appliedscience">
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
            <Box ml={["", "", "", "30"]}>
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading my="20px"> Description</Heading>
                <Text>
                  A team game of 6 खिलाडीz . You come, You play , You enjoy. The
                  flavor of cricket in our friendly style.
                </Text>
                <Heading my="20px"> Rules</Heading>
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

          <Box m={["", "", "", "20"]}>
            <Box>
              <Heading my="20px"> Judging Criterias</Heading>
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
