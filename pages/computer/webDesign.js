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
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const Web = () => {
  const details = {
    imgsrc: "/assets/web2.png",
    route: "/computer/webDesign",
    title: "Website Designing",
    Category: "Individual",
  };

  return (
    <Box p={["2", "2", "5", "10"]} mt={["0", "5", "", ""]}>
      <Container
        position="relative"
        maxW="1200"
        boxShadow="0 5px 10px gray"
        p={["", "", "", "6"]}
        py="2"
        rounded="xl"
        bg="blackAlpha.300"
        width={["95%", "90%", "80%", "70%"]}
        margin="auto"
      >
        <Box position="absolute" top={["2", "2", "3", "4"]} cursor="pointer">
          {/* <Text> Back</Text> */}
          <Link href="/computer">
            <a >
              <Flex color="blue.500">
                <IoIosArrowRoundBack fontSize="25px" />
                <Text>Back</Text>
              </Flex>
            </a>
          </Link>
        </Box>
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
          m="10"
          color="black"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="18"
        >
          <Flex flexDir={["column", "column", "column", "row"]}>
            <Image
              src={details.imgsrc}
              // pt="10"
              height={["", "", "", "400"]}
              width="400"
              alt="Cannot Display"
            />
            <Box ml={["", "", "", "50px"]} fontSize={["17", "md", "", "lg"]}>
              <Heading mt="3">Event Category</Heading>

              <Text m={["", "", "", "3"]}>{details.Category}</Text>

              <Box>
                <Heading my="20px"> Rules</Heading>
                <UnorderedList>
                  <ListItem>
                    During the contest, Participants can use any Language or
                    Framework for structuring and designing the website
                  </ListItem>
                  <ListItem>
                    Contestants can use ready-made Templates , Material-Ui
                    design , online libraries and APIs.
                  </ListItem>
                  <ListItem>Internet Connection will be Provided.</ListItem>
                  <ListItem>
                    Contestants are required to follow all the rules and
                    instructions during the contest and submit within a time
                    limit. (1 hour for coding + 1 hour for examination and
                    representation)
                  </ListItem>
                  <ListItem>
                    In case of any conflict or misconduct, decisions taken by
                    the management will be final and no excuses will be
                    entertained.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>

          <Box>
            <Box fontSize={["17", "md", "", "lg"]}>
              <Heading my="20px"> Judging Criterias</Heading>
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
