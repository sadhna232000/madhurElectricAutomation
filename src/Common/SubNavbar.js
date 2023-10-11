import { Box, VStack, Container, Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillPhone,AiFillMail } from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import { ImPhone} from 'react-icons/im';
import { ImWhatsapp} from 'react-icons/im'
import CustomButton from "./CustomButton";
import { Content } from "./Style";

const SubNavbar=()=>{
    return(
        <>
<Box bg='#333333' pt='10px' pb='10px'>
    <Container maxW='75%' m='auto'  className='respnev1' >
<Flex   justifyContent={"space-between"}>
    <HStack gap='30px'>
        <Box ><HStack ><ImPhone color="#fff" fontSize={'15px'}/> <Content >+91 80057 75964 , +91 94140 46267</Content></HStack></Box>
   <Box><HStack><AiFillMail color="#fff" fontSize={'15px'}/> <Content>madhurelectric@gmail.com</Content></HStack></Box>
    </HStack> 
    <CustomButton href="/contact" content='Contact' radius='0' width='100px' height='30px' size='14px' color='#fff' bgcolor='#bd0000'/>
</Flex>
</Container>
{/* /***mobile view */ }
<Container maxW='100%' m='auto'   className='respnev2'>
<VStack>
    {/* <HStack gap='30px'> */}
        <Box ><HStack ><ImPhone color="#fff" fontSize={'15px'}/> <Content >+91 80057 75964 , +91 94140 46267</Content></HStack></Box>
   <Box><HStack><AiFillMail color="#fff" fontSize={'15px'}/> <Content>madhurelectric@gmail.com</Content></HStack></Box>
    {/* </HStack>  */}
    <CustomButton href="/contact" content='Contact' radius='0' width='100px' height='30px' size='14px' color='#fff' bgcolor='#bd0000'/>
</VStack>
</Container>

 
   
</Box>

        </>
    )
}
export default SubNavbar
