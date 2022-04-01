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
    imgsrc: "/assets/yantrik.jpg",
    title: "Yantrik Nilami",
    Category: "Group",
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
          <Link href="/mechanical">
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
                  <ListItem>
                    The team that spends more money than the allotted figure
                    will be disqualified.
                  </ListItem>
                  <ListItem>
                    Participants are supposed to obey the instructions of
                    coordinators or else they will be disqualified.
                  </ListItem>
                  <ListItem>
                    The decision of the judge will be final and no arguments
                    will be tolerated.
                  </ListItem>
                </OrderedList>
              </Box>
            </Box>
          </Flex>

          <Box m={["", "", "", "20"]}>
            <Box>
              <Heading my={["", "", "", "20px"]}> Description: </Heading>
              <Text>There are two rounds in the whole event.</Text>
              <UnorderedList>
                <ListItem>
                  Round 1
                  <UnorderedList>
                    <ListItem>
                      Each team will be provided with some purchase money,
                      through which the participants can purchase the displayed
                      items. Each item has some credits (which will not be shown
                      on the screen), the team which will make the best
                      combination of purchased items or the team which have
                      items of highest credit will be promoted to the next
                      round.
                    </ListItem>
                  </UnorderedList>
                </ListItem>

                <ListItem>
                  Round 2
                  <UnorderedList>
                    <ListItem>
                      In this round the teams will have to answer the following
                      two questions regarding the items they purchased.
                    </ListItem>
                    <OrderedList>
                      <ListItem>
                        The idea behind the purchase of the particular
                        machinery?
                      </ListItem>
                      <ListItem>
                        Concept about how well the machineries will complement
                        each other?
                      </ListItem>
                    </OrderedList>
                    <ListItem>
                      Winner will be decided on the basis of how well a team
                      explains the reasons behind the money spent on the
                      particular items.
                    </ListItem>
                  </UnorderedList>
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
