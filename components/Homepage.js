import { Box } from "@chakra-ui/react";
import React from "react";
// import About from "../pages/About";
import EventCarosal from "./EventCarosal";
// import Carosal from "./committee/Carosal";
// import CountDownTimer from "./CountDownTimer";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import CountDownTimer from "./CountDownTimer";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
import Events from "./Events";
// import EventCarosal from "./EventCarosal";

import PageContent from "./PageContent";

const Homepage = () => {
  return (
    <Box className="styleFont" mt={["0", "0", "10", "10"]}>
      {/* <Navbar /> */}
      <PageContent />
      <Events />
      {/* <EventCarosal /> */}
      {/* <About /> */}
      {/* <Footer /> */}
      {/* <Carosal /> */}
      {/* <CountDownTimer /> */}
    </Box>

  );
};

export default Homepage;
