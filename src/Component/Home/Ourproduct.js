import { Box, Center, Circle, Container, Divider, Grid, GridItem, IconButton, Img, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Label, MedHeading } from "../../Common/Style";
import product from "../../Assets/ourproduct.jpg"
import { ImPhone } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Ourproduct = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMouse, setIsMouse] = useState(false);
    const [isMouseHover, setIsMouseHover] = useState(false);
    const [isHoverRed, setIsHoverRed] = useState(false);
    const [isHoverBlue, setIsHoverBlue] = useState(false);
    const [isHoverGreen, setIsHoverGreen] = useState(false);
    // const [isHoverRed, setIsHoverRed] = useState(false);
    // const [isHoverRed, setIsHoverRed] = useState(false);
  
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    
    const handleRed= () => {
        setIsHoverRed(false);
      };
    const EnterRed = () => {
        setIsHoverRed(false);
      };
    const handleBlue= () => {
        setIsHoverBlue(false);
      };
    const EnterBlue = () => {
        setIsHoverBlue(true);
      };
    const handleGreen= () => {
        setIsHoverGreen(false);
      };
    const EnterGreen = () => {
        setIsHoverGreen(true);
      };
    const mouseEnter = () => {
        setIsMouseHover(true);
      };
    const mouseLeave = () => {
        setIsMouseHover(false);
      };
     
      const handleEnter = () => {
        setIsMouse(true);
      };
      const handleLeave = () => {
        setIsMouse(false);
      };
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
    autoplaySpeed: 3000
      };
    return (
        <>
            {/* <Box  position='relative'> */}
            <Container maxW='70%' m='auto' pt='80px' pb='0px'>
                <MedHeading pb='15px' textAlign='center' fontWeight='500' fontSize='18px !important'>BEST ELECTRICAL PRODUCT</MedHeading>
                {/* <Divider  orientation='horizontal' border='1.5px solid #bd0000' width='80px' m='auto' /> */}
                <Text
                    color='#333333'
                    fontFamily='sans-serif'
                    textAlign={'center'}
                    fontSize='2.4rem' fontWeight='600' padding='2px 40px'
                    lineHeight='51px'>

                    "Superior Electrical Products for Optimal Performance and Efficiency."
                </Text>
                <Box py='4rem'>
                <Slider {...settings}>
      <div>
      <Center w='290px'  h='250px' m='auto' onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}  backgroundColor={isHovered ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='15px' px='40px'>
                                <ImPhone color={isHovered ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isHovered ? '#fff !important' : '#333333'}>Cable wire</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isHovered ? '#fff !important' :' #808080'}> Electrical Products for Optimal Performance </Label>
                            <Circle size='45px' bg={isHovered ?  '#fff':'#bd0000' } color={isHovered ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center  w='290px'  h='250px' m='auto'  onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}  backgroundColor={isMouse ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='15px' px='40px'>
                                <ImPhone color={isMouse ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isMouse ? '#fff !important' : '#333333'}>Cable wire</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isMouse ? '#fff !important' :' #808080'}> Electrical Products for Optimal Performance </Label>
                            <Circle size='45px' bg={isMouse ?  '#fff':'#bd0000' } color={isMouse ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center w='290px'  h='250px' m='auto'  onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}  backgroundColor={isMouseHover ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='15px' px='40px'>
                                <ImPhone color={isMouseHover ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isMouseHover ? '#fff !important' : '#333333'}>Cable wire</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isMouseHover ? '#fff !important' :' #808080'}> Electrical Products for Optimal Performance </Label>
                            <Circle size='45px' bg={isMouseHover ?  '#fff':'#bd0000' } color={isMouseHover ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center w='290px'  h='250px' m='auto'  onMouseEnter={EnterRed}
      onMouseLeave={handleRed}  backgroundColor={isHoverRed ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='15px' px='40px'>
                                <ImPhone color={isHoverRed ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isHoverRed ? '#fff !important' : '#333333'}>Cable wire</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isHoverRed ? '#fff !important' :' #808080'}> Electrical Products for Optimal Performance </Label>
                            <Circle size='45px' bg={isHoverRed ?  '#fff':'#bd0000' } color={isHoverRed ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center w='290px'  h='250px' m='auto'  onMouseEnter={EnterBlue}
      onMouseLeave={handleBlue}  backgroundColor={isHoverBlue ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='15px' px='40px'>
                                <ImPhone color={isHoverBlue ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isHoverBlue ? '#fff !important' : '#333333'}>Cable wire</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isHoverBlue ? '#fff !important' :' #808080'}> Electrical Products for Optimal Performance </Label>
                            <Circle size='45px' bg={isHoverBlue ?  '#fff':'#bd0000' } color={isHoverBlue ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center w='290px'  h='250px' m='auto'  onMouseEnter={EnterGreen}
      onMouseLeave={handleGreen}  backgroundColor={isHoverGreen ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='15px' px='40px'>
                                <ImPhone color={isHoverGreen ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isHoverGreen ? '#fff !important' : '#333333'}>Cable wire</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isHoverGreen ? '#fff !important' :' #808080'}> Electrical Products for Optimal Performance </Label>
                            <Circle size='45px' bg={isHoverGreen ?  '#fff':'#bd0000' } color={isHoverGreen ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      
      {/* Add more slides as needed */}
    </Slider>
    </Box>
                {/* <Grid templateColumns='repeat(3, 1fr)' h='250px' gap='50px' py='3rem'   >
                   
                   
                
                   
                </Grid> */}
            </Container>
            {/* <Img src={product} h='590px' w='100%'/>
             </Box> */}
        </>
    )
}
export default Ourproduct;