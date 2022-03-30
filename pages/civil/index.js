import React from 'react'
import {Box, Flex, Heading} from "@chakra-ui/react"
// import Card from "../Card";
import Card from "../../components/eventsData/Card";

import Civil from "../../components/eventsData/Civil";

const Comp = () => {
  return (
    <Box mx="auto" my="5" mb="20px" align="center" justifyContent="center">
    <Heading mb="20px">View Events</Heading>
    <Flex flexWrap="wrap" alignitem="center" justifyContent="center" padding="5">

    {
      Civil.map((value, index) => {
        return <Card  key={index} imgsrc={value.imgsrc} title={value.title}  route={value.route} Category={value.Category} description={value.description} rules={value.rules} judgecriteria={value.judgecriteria} contact={value.contact}  />;
      })
    }
    </Flex>
  </Box>
    
  )
}

export default Comp