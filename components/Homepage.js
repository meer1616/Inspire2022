import { Box } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Carosal from "./committee/Carosal";
import CountDownTimer from "./CountDownTimer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageContent from "./PageContent";

const Homepage = () => {
  return (
    <Box className="styleFont">
      {/* <Navbar /> */}
      <PageContent />
      <About />
      {/* <Footer /> */}
      {/* <Carosal /> */}
      {/* <CountDownTimer /> */}
    </Box>
  );
};

export default Homepage;
