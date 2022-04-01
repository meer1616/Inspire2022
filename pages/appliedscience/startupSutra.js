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
    imgsrc: "/assets/startup.png",
    title: "Start-Up Sutra(Great Minds Think Different)",
    Category: "Individual",
    route: "/appliedscience/startupSutra",
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
              height={["", "", "", "300"]}
              width="300"
              alt="Cannot Display"
            />
            <Box ml={["", "", "", "30"]}>
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading my="20px"> Description</Heading>
                <Text>
                  An inimitable act of brainstorming that will appease your
                  entrepreneur instinct and rack your greymatter till the jury
                  is satisfied. Or will it?
                </Text>
                <Heading my="20px"> Rules</Heading>
                <UnorderedList>
                  <ListItem>
                    The Registration fees would be Rs. 50 per participant.
                  </ListItem>
                  <ListItem>The game comprises two rounds.</ListItem>
                  <ListItem>
                    The first round would be an introduction of your business
                    idea.
                  </ListItem>
                  <ListItem>
                    The second round will consist of detailed representation of
                    your business idea with or without a prototype.
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
