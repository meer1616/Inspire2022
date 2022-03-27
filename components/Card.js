import { Box, Badge, Link, Image } from "@chakra-ui/react";
import React from "react";
// import Link from "next/Link"
//import web from "../pages/assets/computer.png"

const Card = (props) => {
  return (
    // <Link>
    // </Link>

    <Link text-decoration="none" href={props.route}>
      <Box
        maxW="md"
        mb="15"
        m="25px"
        shadow="lg"
        borderWidth="1px"
        border
        borderRadius="lg"
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
            Events
          </Badge>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
