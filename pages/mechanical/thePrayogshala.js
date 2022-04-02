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
    imgsrc: "/assets/prayogshala.jpg",
    title: "The Prayogshala",
    Category: "Group",
  };

  return (
    <Box p={["2", "2", "5", "10"]} mt={["0", "5", "", ""]}>
      <Container
        maxW="1200"
        boxShadow="dark-lg"
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
              height={["", "", "", "400"]}
              width="400"
              alt="Cannot Display"
            />
            <Box ml={["", "", "", "35"]}>
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>
              <Box
              // m={["", "", "", "30"]}
              >
                <Box>
                  <Heading mb="20px"> Description</Heading>
                  <OrderedList>
                    <ListItem>
                      The participants are responsible for their own health and
                      safety.
                    </ListItem>
                    <ListItem>User interface and User Experience.</ListItem>
                    <ListItem>
                      The given exercise should be completed in time to qualify
                      for next round.
                    </ListItem>
                    <ListItem>
                      Decision of judge and coordinator will be final and no
                      arguments will be tolerated.
                    </ListItem>
                  </OrderedList>
                </Box>
              </Box>
            </Box>
          </Flex>
          <Box
            // border="1px"
            width="100%"
          >
            <Heading my="20px"> Rules</Heading>
            <OrderedList>
              <ListItem>
                No certificates will be given to the participants if they do not
                appear in Round.
              </ListItem>
              <ListItem>
                Any team which is not ready at the time specified will be
                disqualified.
              </ListItem>
              <ListItem>
                The decision of the jury or coordinator will be final and
                binding in any circumstance. Arguments on their decision won’t
                be entertained and may lead to disqualification.
              </ListItem>
              <ListItem>
                The number of rounds and their contents may change before/during
                the event and the change will be informed to all registered
                participants.
              </ListItem>
            </OrderedList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Web;
