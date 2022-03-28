import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Carosal = ({ facultyCordinator, studentCordinator }) => {
  // let slides = [
  //     <Image height="100" width="100" src="/Facebook.png" alt="1" />,
  //     <Image height="100" width="100" src="/Facebook.png" alt="2" />  ,
  //     <Image height="100" width="100" src="/Facebook.png" alt="3" />  ,
  //     <Image height="100" width="100" src="/Facebook.png" alt="4" />  ,
  //     <Image height="100" width="100" src="/Facebook.png" alt="5" />   ];
  //     const callback = function(index){
  //         console.log("callback",index);
  //     }
  return (
    <Box width="80%" margin="auto">

      <Flex alignItems="center" justifyContent="center">
        {/* <Box width="40%">
          <Text className="styleFont" fontSize="5xl">Technical </Text>
          <Text className="styleFont" ml="20" fontSize="5xl">Committee </Text>
        </Box> */}
        <Box width="60%" mx="3">
          <Text textAlign="center" fontSize="lg">Faculty Cordinator</Text>

          <Carousel
            showIndicators={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={true}
            autoFocus={false}
          >
            {facultyCordinator.map((faculty) => {
              return <div>
                <Image src="/bck.jpg" alt="1" />
                <p className="legend" style={{ fontSize: "18px" }}>{faculty}</p>
              </div>
            })}
            {/* <div>
              <Image src="/bck.jpg" alt="1" />
              <p className="legend" style={{ fontSize: "18px" }}>Meer Patel</p>
            </div>
            <div>
              <Image src="/bck.jpg" alt="1" />
              <p className="legend" style={{ fontSize: "18px" }}>Meer Patel</p>
            </div>
            <div>
              <Image src="/bck.jpg" alt="1" />
              <p className="legend" style={{ fontSize: "18px" }}>Meer Patel</p>
            </div> */}
          </Carousel>
        </Box>
        <Box width="60%" mx="3">
          <Text textAlign="center" fontSize="lg">Student Cordinator</Text>
          <Carousel
            showIndicators={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={true}
            autoFocus={false}
          >
            {studentCordinator.map((faculty) => {
              return <div>
                <Image src="/bck.jpg" alt="1" />
                <p className="legend" style={{ fontSize: "18px" }}>{faculty}</p>
              </div>
            })}
            {/* <div>
              <Image src="/bck.jpg" alt="1" />
              <p className="legend" style={{ fontSize: "18px" }}>Meer Patel</p>
            </div>
            <div>
              <Image src="/bck.jpg" alt="1" />
              <p className="legend" style={{ fontSize: "18px" }}>Meer Patel</p>
            </div>
            <div>
              <Image src="/bck.jpg" alt="1" />
              <p className="legend" style={{ fontSize: "18px" }}>Meer Patel</p>
            </div> */}
          </Carousel>
        </Box>

      </Flex>

    </Box>
  );
};

export default Carosal;
