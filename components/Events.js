import React from "react";
import { Box,Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Card from "./Card.js";
import CardData from "./CardData.js";

const Events = () => {
  return (
    <Box mx="auto" my="5" mb="20px" align="center" justifyContent="center" id="events">
      <Heading mb="20px">Department events</Heading>
      <Flex flexWrap="wrap" alignitem="center" justifyContent="center" padding="5">

      {
        CardData.map((value, index) => {
          return <Card  key={index} imgsrc={value.imgsrc} title={value.title} route={value.route}/>;
        })
      }
      </Flex>
    </Box>
  );
};

export default Events;
