import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from '@chakra-ui/react'
import ResponsiveNav from "./ResponsiveNav";


const Navbar = () => {

    const [isLargerThan1280] = useMediaQuery('(min-width: 600px)')

    return <Box>
        {isLargerThan1280 ? <Flex alignItems="center" justifyContent="space-evenly">
            <Box>
                {/* <Image src="" alt="Inspire 2022"></Image> */}
                <Text>Logo</Text>
            </Box>

            <Box>
                <Link px="5">Home</Link>
                <Link px="5">Events</Link>
                <Link px="5">Our Team</Link>
                <Link px="5">About Us</Link>
            </Box>
        </Flex> : <ResponsiveNav />}

    </Box>;
};

export default Navbar;
