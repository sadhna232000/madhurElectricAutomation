import React from "react";
import sliderimg from '../../Assets/slider1.png'
import { Box, Center, HStack, Img, Stack, Text, VStack } from "@chakra-ui/react";
import CustomButton from "../../Common/CustomButton";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import panel from "../../Assets/panel.jpg"
const HomeSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
    autoplaySpeed: 4000
      };
    return (
        <>
            <Box position='relative'  className="remenu">
               <Center h={'590px'} position='absolute' zIndex='9' w='100%'>
                <Stack>
               <Text color='#fff' data-aos="fade-up"
     data-aos-duration="3000"
                    fontFamily='sans-serif'
                    textAlign={'center'}
               lineHeight={'30px'}
                    
                    >WE ARE BEST ELECTRIC SERVICE COMPANY</Text>
                <Text color='#fff' 
                    fontFamily='sans-serif'
                    textAlign={'center'}
                    fontSize='4rem'
                     p='0 24rem' 
                     data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                        
                        Electric is All About of Electrician
                        </Text>
                        <HStack gap={20} justifyContent='center' pt='30px'>
                       <Box  data-aos="fade-right" data-aos-duration="3000"   > <CustomButton 
                   href="/about"
                       class='sliding-button' border='none' content='DISCOVER MORE' radius='0' width='180px' height='45px' size='14px' color='#fff' bgcolor='#bd0000'/></Box>
                       <Box  data-aos="fade-left" data-aos-duration="3000"> <CustomButton   href="/contact"  border='none' content='CONTACT' radius='0' width='180px' height='45px' size='14px' color='#fff' bgcolor='#bd0000'/></Box>
                        </HStack>
                        </Stack></Center>
                <Box bg={'#161617a6'} h='590px' w='100%' position='absolute' opacity='0.5'>
                </Box>
                <Slider {...settings}>
               
      <div><Img src={sliderimg} h='590px' w='100%' 
              objectFit={'cover'} 
                /></div>
       {/* <div><Img src={panel} h='590px' w='100%' 
              objectFit={'cover'} 
                /></div>
      <div><Img src={sliderimg} h='590px' w='100%' 
              objectFit={'cover'} 
                /></div> */}
      </Slider>
                

            </Box>


            {/* mobile view */}
            <Box position='relative'className="reslider">
               <Center h={'590px'} position='absolute' zIndex='9' w='100%'>
                <Stack>
               <Text color='#fff' 
                    fontFamily='sans-serif'
                    textAlign={'center'}
               lineHeight={'30px'}
                    
                    >WE ARE BEST ELECTRIC SERVICE COMPANY</Text>
                <Text color='#fff' 
                    fontFamily='sans-serif'
                    textAlign={'center'}
                    fontSize='3rem'
                     >
                        
                        Electric is All About of Electrician
                        </Text>
                        <VStack gap={20} justifyContent='center' pt='30px'>
                       <Box    > <CustomButton 
                   href="/about"
                       class='sliding-button' border='none' content='DISCOVER MORE' radius='0' width='180px' height='45px' size='14px' color='#fff' bgcolor='#bd0000'/></Box>
                       <Box > <CustomButton   href="/contact"  border='none' content='CONTACT' radius='0' width='180px' height='45px' size='14px' color='#fff' bgcolor='#bd0000'/></Box>
                        </VStack>
                        </Stack></Center>
                <Box bg={'#161617a6'} h='590px' w='100%' position='absolute' opacity='0.5'>
                </Box>
                <Slider {...settings}>
               
      <div><Img src={sliderimg} h='590px' w='100%' 
              objectFit={'cover'} 
                /></div>
       {/* <div><Img src={panel} h='590px' w='100%' 
              objectFit={'cover'} 
                /></div>
      <div><Img src={sliderimg} h='590px' w='100%' 
              objectFit={'cover'} 
                /></div> */}
      </Slider>
                

            </Box>
        </>
    )
}
export default HomeSlider