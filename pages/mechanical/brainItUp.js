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
    imgsrc: "/assets/brain.png",
    title: "Brain It Up",
    Category: "Group",
  };

  return (
    <Box p="10">
      <Container maxW="1200" boxShadow='dark-lg'  p='6' rounded='xl' bg="blackAlpha.300">
        <Heading p="5"  fontSize="45" fontFamily="Helvetica" align="center" textShadow='2px 2px #008080' >
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
            <Box p="35">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Rules</Heading>
                <OrderedList>
                  <ListItem>
                    Mobile phones are not allowed in Quiz room
                  </ListItem>
                  <ListItem>
                    Any team which is not ready at the time specified will be
                    disqualified from the competition.
                  </ListItem>
                  <ListItem>
                    The decision of the judges and coordinators will be final
                    and no arguments will be tolerated.
                  </ListItem>
                  <ListItem>
                    The number of rounds and their content may change under odd
                    circumstances by the coordinator or judge.
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
