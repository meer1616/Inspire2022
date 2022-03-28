import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Faculty } from "../components/FacultyCommittee/Faculty"
import Carosal from "../components/committee/Carosal"
// import Navbar from '../components/Navbar'

const FacultyComittee = () => {
    return (
        <Box>
            {/* <Navbar /> */}
            <Box mt="24">

                {Faculty.map((faculty) => {
                    return <Box>
                        <Text textAlign="center" fontSize="xl" fontWeight="medium" mt="5">{faculty.department}</Text>
                        {/* {faculty.facultyCordinatorName.map((faccord => { */}
                        <Carosal facultyCordinator={faculty.facultyCordinatorName} studentCordinator={faculty.studentCordinatorName} />
                        {/* }))} */}
                    </Box>
                })}
            </Box>
        </Box>
    )
}

export default FacultyComittee
