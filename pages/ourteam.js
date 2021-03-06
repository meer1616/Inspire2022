import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
// import Carosal from "../components/committee/Carosal";
import CarosalTest from "../components/committee/CarosalTest";
// import Navbar from "../components/Navbar";
import { TeamData } from "../components/ourTeamData/TeamData"
const Ourteam = () => {
    return <div>
        {/* <Navbar /> */}
        {/* <Carosal /> */}
        <Flex position="relative">
            <Box  mt="28" ml="20">
                {TeamData.map((data,index) => {
                    return <Text key={index} fontSize="large" fontWeight="normal" textDecor="none">
                        <Link textDecor="none" href={`#${data.committee}`}><a>{data.committee}</a></Link>
                    </Text>
                    // <p id={`${data.committee}`}>{data.committee}</p>
                })}
            </Box>
            <CarosalTest />
        </Flex>
    </div>;
};

export default Ourteam;
