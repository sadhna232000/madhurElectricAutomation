import { Box, Container, Divider, Grid, GridItem, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import cabelpanel from "../../Assets/cabelpanel.jpg"
import Electricalpanel from "../../Assets/electric_panel.jpg"
import closemeter from "../../Assets/closemeter.jpg"
import lightpanel from "../../Assets/lightpanel.jpg"
import electric_5 from "../../Assets/electric_5.jpg"
import electric_6 from "../../Assets/electric_6.jpg"
import electric_2 from "../../Assets/electric_2.jpg"
import electric_8 from "../../Assets/electric_8.jpg"
import electric_1 from "../../Assets/electric_1.jpg"
import { MedHeading } from "../../Common/Style";
import Slider from "react-slick";
const PrevArrow = (props) => {
  return (
    <div className="arrow slide" onClick={props.onClick}>
      {/* Insert your previous arrow icon or component here */}
      <span>&lt;</span>
    </div>
  );
};
const NextArrow = (props) => {
  return (
    <div className="arrow show" onClick={props.onClick}>
      {/* Insert your previous arrow icon or component here */}
      <span>&gt;</span>
    </div>
  );
};
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows:false,
  prevArrow: <PrevArrow />, // Custom previous arrow component or icon
    nextArrow: <NextArrow />,
  // autoplay: true, // Enable autoplay
  // autoplaySpeed: 3000
};
const Project = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Container maxW={{ base: '100%', sm: '100%', md: '100%', lg: '75%', xl: '75%', '2xl': '75%' }} m='auto' pb='60px' >
        <MedHeading pb='15px' textAlign='center' fontWeight='500' fontSize='18px !important'>GALLERY</MedHeading>

        <Text
          color='#333333'
          fontFamily='sans-serif'
          textAlign={'center'}
          fontSize='2rem' fontWeight='600'

          pb='20px'
          lineHeight='20px'>
          OUR PROJECTS
        </Text>
        <Divider orientation='horizontal' m='auto' border='1.5px solid #bd0000' width='100px' />                {/* <Divider  orientation='horizontal' border='1.5px solid #bd0000' width='80px' m='auto' /> */}

        <Grid
          //   h='400px'
          pt='50px'
          //   templateRows='repeat(2, 1fr)'
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)', '2xl': 'repeat(4, 1fr)' }}

          gap={3}
        >
          <GridItem    ><Img src={electric_1} w='100%' h='250px' key={'2xl'} onClick={onOpen} /></GridItem>
          <GridItem><Img src={Electricalpanel} w='100%' h='250px' /></GridItem>

          <GridItem    ><Img src={cabelpanel} w='100%' h='250px' /></GridItem>
          <GridItem    ><Img src={lightpanel} w='100%' h='250px' /></GridItem>

          <GridItem    ><Img src={electric_5} w='100%' h='250px' /></GridItem>
          <GridItem    ><Img src={electric_6} w='100%' h='250px' /></GridItem>
          <GridItem    ><Img src={electric_8} w='100%' h='250px' /></GridItem>
          <GridItem    ><Img src={electric_2} w='100%' h='250px' /></GridItem>


        </Grid>
      </Container>
      {/* <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent top='70px' p='10px !important' >
        <ModalCloseButton  bg='#434141ba !important' p='10px' top='0' right='0' borderRadius='50px' color='#fff'/>
          <ModalBody  p='0px !important'>
          
            <Img src={electric_1} h='550px' w='100%'/>
           
          
          </ModalBody>


        </ModalContent>
      </Modal> */}
    </>
  )
}
export default Project