import React from "react";
import sliderimg from '../../Assets/home_slider.jpg'
import { Box, Center, Img, Text } from "@chakra-ui/react";
const Slider = () => {
    return (
        <>
            <Box position='relative'>
                <Center color='#fff' position='absolute' zIndex='9'
                    fontFamily='sans-serif'
                    fontSize='5rem' p='0 24rem' h={'590px'}>Electric is All About of Electrician</Center>
                <Box bg={'#161617a6'} h='590px' w='100%' position='absolute' opacity='0.5'>
                </Box>
                <Img src={sliderimg} h='590px' w='100%' objectPosition={'top'} objectFit={'cover'} />

            </Box>
        </>
    )
}
export default Slider