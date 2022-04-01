import {
  Box,
  Divider,
  Flex,
  Text,
  Image,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 850px)");

  return (
    <Box backgroundColor="black" color="white" py="3">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDir={["column", "column", "row", "row"]}
        width="95%"
        m="auto"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir={["column", "column", "row", "row"]}
        >
          <Image src="/Finallogo.png" width="56" alt="Inspire2022"></Image>
          {isLargerThan1280 && (
            <Box border="1px" backgroundColor="white" height="10" mx="4"></Box>
          )}
          <Text className="footer" fontSize="xl" mb={["3", "3", "0", "0"]} >
            ©2022 Copyright Inspire
          </Text>
        </Flex>
        <Box className="box">
          <Box className="icons">
            <Box className="icon" display="inline-block" mx="2">
              <a>
                <BsLinkedin id="4" className="id" fontSize="23.5px" />
              </a>
            </Box>
            <Box className="icon" display="inline-block" mx="2">
              <Link href="https://instagram.com/ckp_inspire22?utm_medium=copy_link">
                <a className="icon" target="_blank">
                  <BsInstagram id="3" className="id" fontSize="24px" />
                </a>
              </Link>
            </Box>

            <Box className="icon" display="inline-block" mx="2">
              <a>
                <BsTwitter id="1" className="id" fontSize="23.5px" />
              </a>
            </Box>
            <Box className="icon" display="inline-block" mx="2">
              <a>
                <BsFacebook id="2" className="id" fontSize="26px" />
              </a>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
