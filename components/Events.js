import React from "react";
import { Box,Flex,Heading, Text  } from "@chakra-ui/react";
import Card from "./Card.js";
import CardData from "./CardData.js";

const Events = () => {
  return (
    <Box mx="auto" my="5" mb="20px" align="center" justifyContent="center" id="events">
      <Text my="8" fontSize="3xl" fontWeight="semibold">Department events</Text>
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
