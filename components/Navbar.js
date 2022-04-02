import {
  Box,
  Button,
  Flex,
  Spacer,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";
import React from "react";
import NavLink from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
import { CgMenuRightAlt } from "react-icons/cg";
import { useRouter } from "next/router";
// import Image from "next/image";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargerThan1280] = useMediaQuery("(min-width: 995px)");
  const router = useRouter();
  return (
    <>
      {isLargerThan1280 ? (
        <Box position="fixed" zIndex="10" width="100%" top="0">
          <Flex backgroundColor="#111" color="white" alignItems="center">
            <Box p="4">
              <Image src="/Finallogo.png" alt="Inspire 2022" htmlWidth="128" />
            </Box>
            <Spacer />
            <Box
              // p="4"
              className="nav"
              letterSpacing="wide"
              fontSize="large"
            >
              <NavLink px="5" href="/">
                <a
                  className={
                    router.pathname == "/" ? "active marginof5" : "marginof5"
                  }
                >
                  Home
                </a>
              </NavLink>
              <NavLink px="5" href="/#events">
                <a
                  className={
                    router.pathname == "/#events"
                      ? "active marginof5"
                      : "marginof5"
                  }
                >
                  Events
                </a>
              </NavLink>
              <NavLink px="5" href="/about">
                <a
                  className={
                    router.pathname == "/about"
                      ? "active marginof5"
                      : "marginof5"
                  }
                >
                  About Us
                </a>
              </NavLink>
              <NavLink px="5" href="/ourteam">
                <a
                  className={
                    router.pathname == "/ourteam"
                      ? "active marginof5"
                      : "marginof5"
                  }
                >
                  Our Team
                </a>
              </NavLink>
              <NavLink px="5" href="/faculty-committee">
                <a
                  className={
                    router.pathname == "/faculty-committee"
                      ? "active marginof5"
                      : "marginof5"
                  }
                >
                  Faculty Committee
                </a>
              </NavLink>
              <NavLink px="5" href="#enroll">
                <a
                  className={
                    router.pathname == "/enroll"
                      ? "active marginof5"
                      : "marginof5"
                  }
                >
                  Enroll Now
                </a>
              </NavLink>
              {/* <Link px="5">Events</Link>
                <Link px="5">Our Team</Link>
                <Link px="5">About Us</Link>
                <Link px="5">Faculty Committee</Link>
                <Link px="5">Enroll now</Link> */}
            </Box>
          </Flex>
        </Box>
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
              <Image src="/Finallogo.png" alt="Inspire 2022" width="40"></Image>
            </Box>
            <Box>
              {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                Open
              </Button> */}
              <CgMenuRightAlt
                fontSize="25px"
                ref={btnRef}
                colorScheme="teal"
                onClick={onOpen}
                src="/right-align.png"
              ></CgMenuRightAlt>
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
                  <Box fontSize="xl" letterSpacing="wide" color="white" mt="12">
                    <Box>
                      <NavLink px="5" href="/">
                        <a className="marginof5" onClick={onClose}>
                          Home
                        </a>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink px="5" href="/#events">
                        <a className="marginof5" onClick={onClose}>
                          Events
                        </a>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink px="5" href="/about">
                        <a className="marginof5" onClick={onClose}>
                          About Us
                        </a>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink px="5" href="/ourteam">
                        <a className="marginof5" onClick={onClose}>
                          Our Team
                        </a>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink px="5" href="/faculty-committee">
                        <a className="marginof5" onClick={onClose}>
                          Faculty Committee
                        </a>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink px="5" href="">
                        <a className="marginof5" onClick={onClose}>
                          Enroll Now
                        </a>
                      </NavLink>
                    </Box>
                  </Box>
                </DrawerContent>
              </Drawer>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Navbar;
