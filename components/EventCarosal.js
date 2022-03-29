import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';;
// import Image from 'next/image';
import {Heading, Image, Text} from "@chakra-ui/react"
import CardData from './CardData';
import Card from './Card';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };
const EventCarosal = () => {
    return (
        <div>
      <Text textAlign="center" mb="20px" fontSize="x-large" fontWeight="medium">Department events</Text>

            <Carousel
             swipeable={true}
             draggable={true}
             showDots={true}
             responsive={responsive}
             ssr={true} // means to render carousel on server-side.
             infinite={true}
             autoPlay={ true }
             autoPlaySpeed={3000}
             keyBoardControl={true}
             customTransition="all .5"
             transitionDuration={500}
            //  containerClass="carousel-container"
             removeArrowOnDeviceType={["tablet", "mobile"]}
            //  deviceType={this.props.deviceType}
            //  dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px"
            //  responsive={responsive}
             >
            {
        CardData.map((value, index) => {
          return <Card  key={index} imgsrc={value.imgsrc} title={value.title} route={value.route}/>;
        })
      }
            </Carousel>
        </div>
    )
}

export default EventCarosal
