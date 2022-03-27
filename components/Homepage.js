import { Box } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import CountDownTimer from "./CountDownTimer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Events from "./Events";
import PageContent from "./PageContent";

const Homepage = () => {
  return (
    <Box>
      <Navbar />
      <PageContent />
      <About />
      <Events />
    </Box>
  );
};

export default Homepage;
