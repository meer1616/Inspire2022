import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const CountDownTimer = () => {
  useEffect(() => {
    setInterval(timingFunc, 1000);
  }, []);

  const [timing, setTiming] = useState({});
  const timingFunc = () => {
    const currentTime = new Date();
    const festDate = new Date("11 Apr 2022 12:00:00");

    let remSec = Math.floor((festDate - currentTime) / 1000) % 60;
    let remMin = Math.floor((festDate - currentTime) / 1000 / 60) % 60;
    let remHour = Math.floor((festDate - currentTime) / 1000 / 60 / 60) % 24;
    let remDays = Math.floor((festDate - currentTime) / 1000 / 60 / 60 / 24);

    setTiming({ remSec, remMin, remHour, remDays });
  };
  return (
    <Box>
      <Flex flexWrap="wrap">
        <Box
          mx={["2", "2", "3", "5"]}
          fontSize={["xl", "xl", "2xl", "2xl"]}
          className="styleFont"
        >
          <Text
            textAlign="center"
            className="active"
            fontSize={["lg", "lg", "3xl", "3xl"]}
          >
            {timing.remDays}
          </Text>
          <Text>Days</Text>{" "}
        </Box>
        <Box
          mx={["2", "2", "3", "5"]}
          fontSize={["xl", "xl", "2xl", "2xl"]}
          className="styleFont"
        >
          <Text
            textAlign="center"
            className="active"
            fontSize={["lg", "lg", "3xl", "3xl"]}
          >
            {timing.remHour}
          </Text>
          <Text>Hour</Text>{" "}
        </Box>
        <Box
          mx={["2", "2", "3", "5"]}
          fontSize={["xl", "xl", "2xl", "2xl"]}
          className="styleFont"
        >
          <Text
            textAlign="center"
            className="active"
            fontSize={["lg", "lg", "3xl", "3xl"]}
          >
            {timing.remMin}
          </Text>
          <Text>Minute</Text>{" "}
        </Box>
        <Box
          mx={["2", "2", "3", "5"]}
          fontSize={["xl", "xl", "2xl", "2xl"]}
          className="styleFont"
        >
          <Text
            textAlign="center"
            className="active"
            fontSize={["lg", "lg", "3xl", "3xl"]}
          >
            {timing.remSec}
          </Text>
          <Text>Second</Text>{" "}
        </Box>
      </Flex>
    </Box>
  );
};

export default CountDownTimer;
