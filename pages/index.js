import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Homepage from "../components/Homepage";
import Events from "../components/events";

export default function Home() {
  return (
    <Box >
      <Head>
        <title>Inspire 2022</title>
        <meta
          name="description"
          content="Tech-fest Inspire 2022 of C.K Pithawala College of Engineering and technology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
      
    </Box>
  );
}
