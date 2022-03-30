import React from "react";
import { Box, Badge, Link, Image } from "@chakra-ui/react";

const Cards = (props) => {
  return (
    <Link text-decoration="none" href={props.route}>
      <Box
        boxShadow='xl'
        maxW="sm"
        m="10px"
        
        borderWidth="2px"
        rounded="lg"
        overflow="hidden"
      >
        <Image src={props.imgsrc} alt="Cannot Display" />

        <Box p="15">
          <Box
            color="black"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="18"
            textTransform="uppercase"
            text-align="center"
          >
            {props.title}
          </Box>

          <Badge ml="1" fontSize="15" colorScheme="teal" borderRadius="10">
            Details
          </Badge>
        </Box>
      </Box>
    </Link>
  );
};

export default Cards;
