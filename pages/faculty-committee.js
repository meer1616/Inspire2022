import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Faculty } from "../components/FacultyCommittee/Faculty";
import Carosal from "../components/committee/Carosal";
// import Navbar from '../components/Navbar'

const FacultyComittee = () => {
  return (
    <Box>
      {/* <Navbar /> */}
      <Box mt={["", "5", "20", "24"]}>
        {Faculty.map((faculty, index) => {
          return (
            <Box key={index}>
              <Text
                textAlign="center"
                fontSize="2xl"
                fontWeight="medium"
                mt="14"
              >
                {faculty.department}
              </Text>
              {/* {faculty.facultyCordinatorName.map((faccord => { */}
              <Carosal
                facultyCordinator={faculty.facultyCordinatorName}
                studentCordinator={faculty.studentCordinatorName}
              />
              {/* }))} */}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default FacultyComittee;
