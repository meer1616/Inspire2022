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
                <Box mb="64" textAlign="center">

                    <Text fontSize="5xl">Inspire 2022</Text>
                    <Text fontSize="3xl" my="2">C.K. Pithawala College of Engineering and Technology</Text>
                    <Text fontSize="3xl" my="2">11-12 April, 2022</Text>

                </Box >

                <CountDownTimer />
            </Flex>
        </Box>
    );
};

export default PageContent;
