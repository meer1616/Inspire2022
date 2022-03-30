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
    imgsrc: "/assets/recruit.jpg",
    title: "Recruit-E Race(Get Hired or Fired)",
    Category: "Individual",
    route: "/appliedscience/recruitRace",
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
              width="350"
              height="350"
              alt="Cannot Display"
            />
            <Box ml="35">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Description</Heading>
                <Text>
                  The name defines the game. An exemplary creation of
                  circumstances that you will face when someone will indeed
                  value your skills and invest in yourself as recruitment.
                </Text>
                <Heading mb="20px"> Rules</Heading>
                <UnorderedList>
                  <ListItem>
                    The Registration fees would be Rs. 50 per participant.
                  </ListItem>
                  <ListItem>
                    Participants have to come with the receipt provided while
                    registration.
                  </ListItem>
                  <ListItem>
                    This event consists of 3 rounds all together.
                  </ListItem>
                  <ListItem>
                    Participants will face the same scenario as the recruitment
                    process.
                  </ListItem>
                  <ListItem>
                    The final decision would be given by a respected Jury and it
                    would not be Questionable.
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
