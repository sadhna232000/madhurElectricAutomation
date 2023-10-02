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
               <Text color='#fff' 
                    fontFamily='sans-serif'
                    textAlign={'center'}
                    fontSize='18px' lineHeight={'30px'}>WE ARE BEST ELECTRIC SERVICE COMPANY</Text>
                <Text color='#fff' 
                    fontFamily='sans-serif'
                    textAlign={'center'}
                    fontSize='4rem' p='0 24rem' >
                        
                        Electric is All About of Electrician
                        </Text>
                        <HStack gap={20} justifyContent='center' pt='30px'>
                        <CustomButton border='none' content='DISCOVER MORE' radius='0' width='180px' height='45px' size='14px' color='#fff' bgcolor='#bd0000'/>
                        <CustomButton border='none' content='DISCOVER MORE' radius='0' width='180px' height='45px' size='14px' color='#fff' bgcolor='#bd0000'/>
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