import { Box, Text } from "@chakra-ui/react";
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
      <span>Days:{timing.remDays}</span>
      <span>Hour:{timing.remHour}</span>
      <span>Min:{timing.remMin}</span>
      <span>Sec:{timing.remSec}</span>
    </Box>
  );
};

export default CountDownTimer;
