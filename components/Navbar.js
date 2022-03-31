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
import NavLink from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
import { CgMenuRightAlt } from "react-icons/cg";
import { useRouter } from 'next/router';
// import Image from "next/image";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargerThan1280] = useMediaQuery("(min-width: 850px)");
  const router = useRouter();
  return (
    <Box >
      {isLargerThan1280 ? (
        <Flex
          zIndex="10"
          px="10"
          alignItems="center"
          justifyContent="space-between"
          background="black"
          color="white"
          position="fixed"
          top="0"
          width="100%"
          //   left="0"
          py="2"
        // style={{ backgroundColor: "black" }}
        >
          <Box >
            <Image src="/Finallogo.png" alt="Inspire 2022" width="44"></Image>
            {/* <Text color={["red", "blue"]}>Logo</Text> */}
          </Box>
          <Box fontSize="large" letterSpacing="wide">
            <NavLink px="5" href="/">
              <a className={router.pathname == "/" ? "active marginof5" : "marginof5"}>Home</a>
            </NavLink>
            <NavLink px="5" href="/#events" >
              <a className={router.pathname == "/#events" ? "active marginof5" : "marginof5"}>Events</a>
            </NavLink>
            <NavLink px="5" href="/about" >
              <a className={router.pathname == "/about" ? "active marginof5" : "marginof5"}>About Us</a>
            </NavLink>
            <NavLink px="5" href="/ourteam" >
              <a className={router.pathname == "/ourteam" ? "active marginof5" : "marginof5"}>Our Team</a>
            </NavLink>
            <NavLink px="5" href="/faculty-committee" >
              <a className={router.pathname == "/faculty-committee" ? "active marginof5" : "marginof5"}>Faculty Committee</a>
            </NavLink>
            <NavLink px="5" href="#enroll" >
              <a className={router.pathname == "/enroll" ? "active marginof5" : "marginof5"}>Enroll Now</a>
            </NavLink>
            {/* <Link px="5">Events</Link>
                <Link px="5">Our Team</Link>
                <Link px="5">About Us</Link>
                <Link px="5">Faculty Committee</Link>
                <Link px="5">Enroll now</Link> */}
          </Box>
        </Flex>
      ) : (
        <Box backgroundColor="black" color="white">
          <Flex
            width="90%"
            margin="auto"
            justifyContent="space-between"
            alignItems="center"
          // border="1px"
          >
            <Box>
              <Text>Log</Text>
            </Box>
            <Box>
              {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                Open
              </Button> */}
              <CgMenuRightAlt fontSize="25px" ref={btnRef} colorScheme="teal" onClick={onOpen} src="/right-align.png" ></CgMenuRightAlt>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent backgroundColor="black">
                  {/* <Flex alignItems="center" justifyContent="center"> */}
                  {/* <Box>Logo</Box> */}
                  <DrawerCloseButton color="white" />
                  {/* </Flex> */}
                  <Box fontSize="md" letterSpacing="wide" color="white" mt="12">
                    <Box>

                      <NavLink px="5" href="/" act>
                        <a className="marginof5">Home</a>
                      </NavLink>
                    </Box>
                    <Box>

                      <NavLink px="5" href="/#events" >
                        <a className="marginof5">Events</a>
                      </NavLink>
                    </Box>
                    <Box>

                      <NavLink px="5" href="/#about" >
                        <a className="marginof5">About Us</a>
                      </NavLink>
                    </Box>
                    <Box>

                      <NavLink px="5" href="/ourteam" >
                        <a className="marginof5">Our Team</a>
                      </NavLink>
                    </Box>
                    <Box>

                      <NavLink px="5" href="/faculty-committee" >
                        <a className="marginof5">Faculty Committee</a>
                      </NavLink>
                    </Box>
                    <Box>

                      <NavLink px="5" href="" >
                        <a className="marginof5">Enroll Now</a>
                      </NavLink>
                    </Box>
                  </Box>
                </DrawerContent>
              </Drawer>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
