import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box height="100vh" id="about" width="80%" m="auto">
      <Text textAlign="center" fontSize="3xl" mb="12">
        About
      </Text>
      <Flex alignItems="center" justifyContent="center" height="80%">
        <Box width="50%">
          <Text width="90%" fontSize="xl">
            C K Pithawala College of Engineering and Technology, Surat welcomes
            you all for the Grand Technical Festival, Inspire - 2022 on April 11
            & 12, 2022. It is a matter of great pride to announce that the
            Technical Festival has a befitting Theme of “Peace & Humanity”. Over
            the period of two days, various Technical & Non-Technical,
            Individual & Group Events, such as ‘C’ Quiz, Circuit Samixa, LAN
            Gaming, Yantrik Nilami, Planiface, Box Cricket, War A Minute, etc.
            are being organized by the Experienced Faculty Coordinators along
            with the Joyous & Spirited Students. Apart from this, there will be
            plenty of on-the-spot events also, to entertain you as always. Be a
            part of the Technical Extravaganza - Inspire 2022
          </Text>
        </Box>
        <Box width="50%">
          <Image src="/aboutImg.svg"></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
