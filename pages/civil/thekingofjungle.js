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
    imgsrc: "/assets/kingofjungle.jpg",
    title: "King of Jungle",
    route: "/civil/thekingofjungle",
    Category: "Group",
  };

  return (
    <Box p={["2", "2", "5", "10"]} mt={["0", "5", "", ""]}>
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
          <Link href="/civil">
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
                <Heading mb="20px"> Description</Heading>
                <UnorderedList>
                  <ListItem>Per Group - 3/4 members</ListItem>
                  <ListItem>
                    The teams will be qualified on the basis of their time to
                    complete the given task.
                  </ListItem>
                  <ListItem>These events include a series of games.</ListItem>
                  <ListItem>
                    Other rules will be given on the day of the event.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Web;
