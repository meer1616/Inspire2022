import { Box, Divider, Flex, Text, Image, Center } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <Box backgroundColor="black" color="white" py="2">
      <Flex alignItems="center" justifyContent="space-between" px="5" flexDir={["column", "column", "row", "row"]}>
        <Box>
          {/* <Text>
            <span className="bold">I</span> - Inspire the community
          </Text>
          <Text>
            <span className="bold">N</span> - Needs of young technocrates mind
          </Text>
          <Text>
            <span className="bold">S</span> - Serve the society
          </Text>
          <Text>
            <span className="bold">P</span> - Progress making in students life
          </Text>
          <Text>
            <span className="bold">I</span> - Indicator of bright future
          </Text>
          <Text>
            <span className="bold">R</span> - Right way to unity
          </Text>
          <Text>
            <span className="bold">E</span> - Enterpreneur creating
          </Text> */}
          <Image src="/Finallogo.png" width="56" alt="Inspire 2022"></Image>
        </Box>

        <Box>
          <Text fontSize="2xl" textAlign="center">
            {" "}
            Link
          </Text>
          <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
            <Link px="5" href="">
              <a className="marginof5">Home</a>
            </Link>
            <Link px="5" href="">
              <a className="marginof5">Events</a>
            </Link>
            <Link px="5" href="">
              <a className="marginof5">About Us</a>
            </Link>
            {/* </Box> */}
            {/* <Box> */}
            <Link px="5" href="">
              <a className="marginof5">Faculty Committee</a>
            </Link>
            <Link px="5" href="">
              <a className="marginof5">Enroll Now</a>
            </Link>
          </Flex>
        </Box>
        <Box mt="5">
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
      <Divider />
      <Text textAlign="center" p="2" fontSize="lg">
        © 2021 Copyright: Inspire Innovator Club
      </Text>
    </Box >
  );
};

export default Footer;
