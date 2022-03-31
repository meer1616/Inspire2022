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
    imgsrc: "/assets/prayogshala.jpg",
    title: "The Prayogshala",
    Category: "Group",
  };

  return (
    <Box p="10">
      <Container maxW="1200" boxShadow='dark-lg'  p='6' rounded='xl' bg="blackAlpha.300">
        <Heading p="5"  fontSize="45" fontFamily="Helvetica" align="center" textShadow='2px 2px #008080'>
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
            <Box ml="35">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Rules</Heading>
                <OrderedList>
                  <ListItem>
                    No certificates will be given to the participants if they do
                    not appear in Round.
                  </ListItem>
                  <ListItem>
                    Any team which is not ready at the time specified will be
                    disqualified.
                  </ListItem>
                  <ListItem>
                    The decision of the jury or coordinator will be final and
                    binding in any circumstance. Arguments on their decision
                    won’t be entertained and may lead to disqualification.
                  </ListItem>
                  <ListItem>
                    The number of rounds and their contents may change
                    before/during the event and the change will be informed to
                    all registered participants.
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
