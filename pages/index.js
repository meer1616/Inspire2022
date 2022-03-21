import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Homepage from "../components/Homepage";

export default function Home() {
  return (
    <Box >
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Tech-fest of CK Pithawala College of Engineering and technology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </Box>
  );
}
