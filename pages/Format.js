import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Image,
  HStack,
} from "@chakra-ui/react";

const Cards = (props) => {
  return (
    <Box
      mx="auto"
      my="5"
      mb="20px"
      align="center"
      color="black"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="18"
      text-align="center"
      justifyContent="center"
    >
      <Container maxW="1200" my="50px">
        <Flex mb="100px">
          <Image src="https://bit.ly/dan-abramov" alt="Cannot Display" />
          <Box>
            <Heading mb="50px"> Description</Heading>
            <Container maxW="1000">
              <Text>{props.description}</Text>
            </Container>
            {console.log(props.judgecriteria)}
          </Box>
        </Flex>

        <Box mb="100px">
          <Heading p="20px"> Rules</Heading>
          <Text>{props.rules} </Text>
        </Box>

        <Box mb="100px">
          <Heading p="20px"> Judging Criterias</Heading>
          <Text>{props.judgecriteria}</Text>
        </Box>
        <Box mb="100px">
          <Heading p="20px">Contact Here</Heading>
          <Flex
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            flexWrap="wrap"
            alignitem="center"
            justifyContent="center"
            padding="5"
          >
            <Box
              spacing="5"
              p={5}
              shadow="md"
              borderWidth="1px"
              flex="1"
              borderRadius="md"
            >
              <Heading fontSize="xl">Madhu Saini</Heading>
              <Text mt={4}>190090107056</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Madhu Saini</Heading>
              <Text mt={4}>190090107056</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Madhu Saini</Heading>
              <Text mt={4}>190090107056</Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Cards;
