import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TeamData } from "../ourTeamData/TeamData";
const CarosalTest = () => {
  return (
    <Box
      width="80%"
      margin="auto"
      //   border="1px"
      height="100vh"
      overflow="auto"
      className="carosalScrollNone"
    >
      <Box mt="10" >

        {TeamData.map((data, index) => {
          return (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="center"
              my="20"
              id={data.committee}
            >
              {/* <Box width="40%"> */}
              {/* <Text className="styleFont" ml="20" fontSize="5xl">
                Committee{" "}
              </Text> */}
              {/* </Box> */}
              <Box width="60%">
                <Text className="styleFont" fontSize="5xl">
                  {/* Technical{" "} */}
                  {data.committee}
                </Text>
                <Carousel
                  showIndicators={true}
                  infiniteLoop={true}
                  useKeyboardArrows={true}
                  showArrows={true}
                  showStatus={false}
                  showThumbs={false}
                  autoPlay={true}
                  stopOnHover={true}
                  swipeable={true}
                  emulateTouch={true}
                  dynamicHeight={true}
                  autoFocus={false}
                >
                  {data.imgSrc.map((img, index) => {
                    return (
                      <div key={index}>
                        <Image
                          src={img.imgUrl}
                          alt={img.name}
                          width="50%"
                          height="50%"
                        />
                        <p className="legend" style={{ fontSize: "18px" }}>
                          {img.name}
                        </p>
                      </div>
                    );
                  })}

                  {/* <div>
                  <Image src="/bck.jpg" alt="1" />
                  <p className="legend" style={{ fontSize: "18px" }}>
                    Meer Patel
                  </p>
                </div>
                <div>
                  <Image src="/bck.jpg" alt="1" />
                  <p className="legend" style={{ fontSize: "18px" }}>
                    Meer Patel
                  </p>
                </div> */}
                </Carousel>
              </Box>
            </Flex>
          );
        })}
      </Box>

    </Box>
  );
};

export default CarosalTest;
