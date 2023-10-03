import { Box, Center, Circle, Container, Divider, Grid, GridItem, IconButton, Img, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Label, MedHeading } from "../../Common/Style";
import product from "../../Assets/ourproduct.jpg"
import { ImPhone } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
const Ourproduct = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMouse, setIsMouse] = useState(false);
    const [isMouseHover, setIsMouseHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    const handleEnter = () => {
        setIsMouse(true);
      };
    const mouseEnter = () => {
        setIsMouseHover(true);
      };
    const mouseLeave = () => {
        setIsMouseHover(false);
      };
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
      const handleLeave = () => {
        setIsMouse(false);
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

                <Grid templateColumns='repeat(3, 1fr)' h='250px' gap='50px' py='3rem'   >
                    <Center onMouseEnter={handleMouseEnter}
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
                    <Center onMouseEnter={handleEnter}
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
                    <Center onMouseEnter={mouseEnter}
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
                   
                </Grid>
            </Container>
            {/* <Img src={product} h='590px' w='100%'/>
             </Box> */}
        </>
    )
}
export default Ourproduct;