import React from "react";
import {
  Box,
  Heading,
  Container,
  ListItem,
  Image,
  UnorderedList,
  Flex,
  Text,
} from "@chakra-ui/react";

const Tresurehunt = () => {
  const details = {
    imgsrc: "/assets/takneek.png",
    title: "Takaneeke-e-Khoj",
    Category: "Group",
  };

  return (
    <Box p="10">
      <Container
        maxW="1200"
        boxShadow="dark-lg"
        p="6"
        rounded="xl"
        bg="blackAlpha.300"
      >
        <Heading
          p="5"
          fontSize="45"
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
                <Heading mb="20px"> Description</Heading>
                <UnorderedList>
                  <ListItem>Per Group - 2/3 members</ListItem>
                  <ListItem>
                    Evaluation will be done with reference to performance &
                    time.
                  </ListItem>
                  <ListItem>The event will be played in levels. </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Tresurehunt;
