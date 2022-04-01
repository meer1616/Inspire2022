import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CountDownTimer from "./CountDownTimer";

const PageContent = () => {
    return (
        <Box className="bckImg" height="100vh">
            <Flex
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
                color="white"
            >
                <Box mb={["48", "52", "56", "64"]} textAlign="center">

                    <Text fontSize={["2xl", "3xl", "4xl", "4xl"]}>Inspire 2022</Text>
                    <Text fontSize={["xl", "3xl", "4xl", "4xl"]} my="2" px="5">C.K. Pithawala College of Engineering and Technology</Text>
                    <Text fontSize={["xl", "3xl", "4xl", "4xl"]} my="2">11-12 April, 2022</Text>

                </Box >

                <CountDownTimer />
            </Flex>
        </Box>
    );
};

export default PageContent;
