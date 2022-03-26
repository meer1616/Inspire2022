import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import CountDownTimer from "./CountDownTimer";

const PageContent = () => {
    return (
        <Box className="bckImg" height="100vh">
            <Flex alignItems="center" justifyContent="center" height="100vh" color="white">
                <CountDownTimer />

            </Flex>
        </Box>
    );
};

export default PageContent;
