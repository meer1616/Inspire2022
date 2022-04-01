import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box className="container">
      <Flex>
        <Box width={["95%", "95%", "70%", "50%"]}>
          <Text
            fontSize={["lg", "lg", "xl", "xl"]}
            my={["7", "7", "", ""]}
            className="content"
          >
            <p>
              C K Pithawala College of Engineering and Technology, Surat
              welcomes you all for the Grand Technical Festival, Inspire - 2022
              on April 11 &amp; 12, 2022.
            </p>
            <p>
              It is a matter of great pride to announce that the Technical
              Festival has a befitting Theme of “Peace & Humanity”. Over the
              period of two days, various Technical & Non-Technical, Individual
              & Group Events, such as ‘C’ Quiz, Circuit Samixa, LAN Gaming,
              Yantrik Nilami, Planiface, Box Cricket, War A Minute, etc.
            </p>
            <p>
              These events are being organized by the Experienced Faculty
              Coordinators along with the Joyous & Spirited Students. Apart from
              this, there will be plenty of on-the-spot events also, to
              entertain you as always. Be a part of the Technical Extravaganza -
              Inspire 2022
            </p>
          </Text>
        </Box>
        <Box width={["95%", "95%", "70%", "50%"]}>
          <Image src="/aboutImg.svg" alt="About Image"></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
