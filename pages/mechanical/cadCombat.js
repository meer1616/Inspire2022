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
    imgsrc: "/assets/cad.png",
    title: "Cad Combat",
    Category: "Individual",
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
              height="500"
              width="500"
              alt="Cannot Display"
            />
            <Box p="35">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Rules</Heading>
                <UnorderedList>
                  <ListItem>
                  The organizers reserve the right to change any or all of the rules as they deem fit. Changes in rules, if any, will be highlighted on the website.

                  </ListItem>
                  <ListItem>
                  Violation of any of the rules will result in immediate disqualification.

                  </ListItem>
                  <ListItem>
                  In all cases, the judges' decision will be final and binding.

                  </ListItem>
                  <ListItem>
                  Students from different institute can form a team for the event.

                  </ListItem>
                  <ListItem>
                  Student should carry the valid college identity cards of their respective institute at the time of reporting.

                  </ListItem>
                  <ListItem>
                  Certificate of participation will be given to all participants.
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
