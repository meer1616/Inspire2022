import { Box, Divider, Flex, Text, Image, Center } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <Box backgroundColor="black" color="white" py="3">
      <Flex alignItems="center" justifyContent="space-between" width="95%" m="auto">
        <Flex justifyContent="center" alignItems="center">
          <Image src="/Finallogo.png" width="56"></Image>
          <Box border="1px" backgroundColor="white" height="10" mx="4"></Box>
          <Text fontSize="xl">@ 2022 Inspire</Text>
        </Flex>
        <Box >
          {/* <Text fontSize="3xl" textAlign="center">
            Socials
          </Text> */}
          <Box display="inline-block" mx="2" >
            {/* <Image
              src="/Instagram.svg"
              alt="Instagram"
              height="100%"
              width="100%"
            ></Image> */}
            <Link href="https://instagram.com/ckp_inspire22?utm_medium=copy_link"><a target="_blank" >
              <BsInstagram fontSize="24px" />
            </a>
            </Link>
          </Box>
          <Box display="inline-block" mx="2">
            {/* <Image
              src="/Facebook.svg"
              alt="Instagram"
              height="100%"
              width="100%"
            ></Image> */}
            <FaFacebookSquare fontSize="26px" />
          </Box>
          <Box display="inline-block" mx="2">
            {/* <Image
              src="/Facebook.svg"
              alt="Instagram"
              height="100%"
              width="100%"
            ></Image> */}
            <BsLinkedin fontSize="23.5px" />
          </Box>
        </Box>
      </Flex>
    </Box >
  );
};

export default Footer;
