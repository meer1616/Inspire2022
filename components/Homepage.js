import { Box } from '@chakra-ui/react'
import React from 'react'
import About from './About'
import CountDownTimer from './CountDownTimer'
import Footer from './Footer'
import Navbar from './Navbar'
import PageContent from './PageContent'

const Homepage = () => {
    return (
        <Box>
            <Navbar />
            <PageContent />
            <About />
            <Footer />
            {/* <CountDownTimer /> */}
        </Box>
    )
}

export default Homepage