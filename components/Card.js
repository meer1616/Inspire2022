import { Box, Badge, Link, Image, Flex } from "@chakra-ui/react";
import React from "react";
// import Link from "next/Link";
//import web from "../pages/assets/computer.png"

const Card = (props) => {
  return (
    // <Link>
    // </Link>

    <Link textDecoration="none" href={props.route}>
      <Box
        maxW="sm"
        mb="15"
        m="10"
        shadow="lg"
        borderWidth="1px"
        // border
        borderRadius="lg"
        overflow="hidden"
        // padding="5"
        pt="5"
      >
        <Flex flexDir="column" alignItems="center" justifyContent="center">
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
      </Box>
    </Link>
  );
};

export default Card;
