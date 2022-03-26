import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link"
import Image from "next/image";

const Footer = () => {
    return <Box backgroundColor="blackAlpha.900" color="white" >
        <Flex alignItems="center" justifyContent="space-between" px="5">
            <Box>
                <Text><span className="bold">I</span> - Inspire the community</Text>
                <Text><span className="bold">N</span> - Needs of young technocrates mind</Text>
                <Text><span className="bold">S</span> - Serve the society</Text>
                <Text><span className="bold">P</span> - Progress making in students life</Text>
                <Text><span className="bold">I</span> - Indicator of bright future</Text>
                <Text><span className="bold">R</span> - Right way to unity</Text>
                <Text><span className="bold">E</span> - Enterpreneur creating</Text>
            </Box>

            <Box >
                <Text fontSize="3xl" textAlign="center"> Links</Text>
                <Box>

                    <Link px="5" href=""><a className="marginof5">Home</a></Link>
                    <Link px="5" href=""><a className="marginof5">Events</a></Link>
                    <Link px="5" href=""><a className="marginof5">About Us</a></Link>
                </Box>
                <Box>

                    <Link px="5" href=""><a className="marginof5">Faculty Committee</a></Link>
                    <Link px="5" href=""><a className="marginof5">Enroll Now</a></Link>
                </Box>
            </Box>
            <Box>
                <Text fontSize="3xl" textAlign="center">Socials</Text>
                <Box mx="3" display="inline-block">
                    <Image src="/Instagram.svg" alt="Instagram" height="50%" width="50%"></Image>
                </Box>
                <Box mx="3" display="inline-block">
                    <Image src="/Facebook.svg" alt="Instagram" height="50%" width="50%"></Image>
                </Box>
            </Box>

        </Flex>
        <Divider />
        <Text textAlign="center" p="2" fontSize="lg">© 2021 Copyright: Inspire Innovator Club</Text>

    </Box>;
};

export default Footer;
