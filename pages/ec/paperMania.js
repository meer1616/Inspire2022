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
    imgsrc: "/assets/paper.jpg",
    title: "Paper Mania(Paper Presentation)",
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
            <Box ml={["", "", "", "30"]} fontSize="lg">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Rules</Heading>
                <OrderedList>
                  <ListItem>Maximum two students per group.</ListItem>
                  <ListItem>
                    Presentation Format must be in PowerPoint.
                  </ListItem>
                  <ListItem>Presentation time is 10 min.</ListItem>
                  <ListItem>
                    Candidates have to submit.
                    <OrderedList>
                      <ListItem>
                        One hard copy (At the time of presentation)
                      </ListItem>
                      <ListItem>
                        Abstract(E-mail:ninad.bhatt@ckpcet.ac.in){" "}
                      </ListItem>
                    </OrderedList>
                  </ListItem>
                  <ListItem>
                    Students of any Department can present papers on the topics
                    related to any other branch.
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
