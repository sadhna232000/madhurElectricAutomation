import React from "react";
import sliderimg from '../../Assets/slider1.png'
import { Box, Center, HStack, Img, Stack, Text } from "@chakra-ui/react";
import CustomButton from "../../Common/CustomButton";
const Slider = () => {
    return (
        <>
            <Box position='relative'>
               <Center h={'590px'} position='absolute' zIndex='9' w='100%'>
                <Stack>
               <Text color='#fff' data-aos="fade-up"
     data-aos-duration="3000"
                    fontFamily='sans-serif'
                    textAlign={'center'}
                    fontSize='18px' lineHeight={'30px'}>WE ARE BEST ELECTRIC SERVICE COMPANY</Text>
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
                       <Box  data-aos="fade-right" data-aos-duration="3000"> <CustomButton class='sliding-button' border='none' content='DISCOVER MORE' radius='0' width='180px' height='45px' size='14px' color='#fff' bgcolor='#bd0000'/></Box>
                       <Box  data-aos="fade-left" data-aos-duration="3000"> <CustomButton border='none' content='DISCOVER MORE' radius='0' width='180px' height='45px' size='14px' color='#fff' bgcolor='#bd0000'/></Box>
                        </HStack>
                        </Stack></Center>
                <Box bg={'#161617a6'} h='590px' w='100%' position='absolute' opacity='0.5'>
                </Box>
                <Img src={sliderimg} h='590px' w='100%' 
                // objectPosition={'top'} objectFit={'cover'} 
                />

            </Box>
        </>
    )
}
export default Slider