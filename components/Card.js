import { Box, Badge, Link, Image, Flex } from "@chakra-ui/react";
import React from "react";
// import Link from "next/Link"
//import web from "../pages/assets/computer.png"

const Card = (props) => {
  return (
    // <Link>
    // </Link>

    <Link text-decoration="none" href={props.route}>
      <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
        maxW="md"
        mb="15"
        m="25px"
        shadow="lg"
        borderWidth="1px"
        // border
        borderRadius="lg"
        overflow="hidden"
        // padding="5"
        pt="5"
      >
        <Image src={props.imgsrc} width="80%" alt="Cannot Display" />

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

          {/* <Badge  px="3" py="1"  fontSize="15" colorScheme="teal" borderRadius="10">
            Events
          </Badge> */}
        </Box>
      </Flex>
    </Link>
  );
};

export default Card;
