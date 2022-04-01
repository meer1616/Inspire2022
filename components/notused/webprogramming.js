import React from "react";
// import Data from "./Data";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import Format from "../Format";
import Navbar from "../Navbar";

const Web = () => {
  const details = {
    imgsrc: "/assets/computer.png",
    title: "Computer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    rules:
      "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    judgecriteria:
      "lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    contact: "24355689797",
    name: "john",
  };

  return (
    <Box>
      <Navbar />
      <Box mx="auto" my="5" mb="20px" align="center" justifyContent="center">
        <Heading mb="20px">Web Programming</Heading>
        <Format
          imgsrc={details.imgsrc}
          title={details.title}
          description={details.description}
          rules={details.rules}
          judgecriteria={details.judgecriteria}
          contact={details.contact}
          name={details.name}
        />
      </Box>
    </Box>
  );
};

export default Web;
