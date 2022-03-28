import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
// import Image from "next/image";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargerThan1280] = useMediaQuery("(min-width: 600px)");

  return (
    <Box position="relative">
      {isLargerThan1280 ? (
        <Flex
          zIndex="100"
          px="8"
          alignItems="center"
          justifyContent="space-between"
          background="black"
          color="white"
          position="fixed"
          top="0"
          width="100%"
          //   left="0"
          // style={{ backgroundColor: "black" }}
        >
          <Box>
            <Image src="/logo_dark.png" alt="Inspire 2022" width="36"></Image>
            {/* <Text color={["red", "blue"]}>Logo</Text> */}
          </Box>
          <Box fontSize="md" letterSpacing="wide">
            <Link px="5" href="/">
              <a className="marginof5">Home</a>
            </Link>
            <Link px="5" href="#events">
              <a className="marginof5">Events</a>
            </Link>
            <Link px="5" href="#about">
              <a className="marginof5">About Us</a>
            </Link>
            <Link px="5" href="/ourteam">
              <a className="marginof5">Our Team</a>
            </Link>
            <Link px="5" href="/faculty-committee">
              <a className="marginof5">Faculty Committee</a>
            </Link>
            <Link px="5" href="">
              <a className="marginof5">Enroll Now</a>
            </Link>
            {/* <Link px="5">Events</Link>
                <Link px="5">Our Team</Link>
                <Link px="5">About Us</Link>
                <Link px="5">Faculty Committee</Link>
                <Link px="5">Enroll now</Link> */}
          </Box>
        </Flex>
      ) : (
        <>
          <Flex
            width="90%"
            margin="auto"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text>Logo</Text>
            </Box>
            <Box>
              <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                Open
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                </DrawerContent>
              </Drawer>
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default Navbar;
