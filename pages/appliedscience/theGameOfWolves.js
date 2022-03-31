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
   
    imgsrc: "/assets/thegame.png",
    title: "The game of the wolves(Spread your fangs to survive)",
    route:"/appliedscience/theGameOfWolves",
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
            <Box ml="30">
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading mb="20px"> Description</Heading>
                <Text>Be wild.  Be Uncharted. Hunt for ultimate glory as a winner in the king of all games . Don't be a lion, be a wolf, make your pack and ravish the adrenaline as it takes over your soul.
</Text>
                <Heading mb="20px"> Rules</Heading>
                <UnorderedList>
                  <ListItem>
                  The Registration fees would be Rs. 200 per team.
                  </ListItem>
                  <ListItem>
                  Participants have to come with the receipt provided while registration. 

                  </ListItem>
                  <ListItem>Team will be of 4 Participants.
</ListItem>
                  <ListItem>
                  There will be three rounds all together.

                  </ListItem>
                  <ListItem>
                  All the rounds in total will be based on participant’s Strength, Knowledge, Mental ability and Entertainment. 

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
