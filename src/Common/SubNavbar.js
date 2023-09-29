import { Box, Container, Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
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
    <Container maxW='container.lg'>
<Flex   justifyContent={"space-between"}>
    <HStack gap='30px'>
        <Box><HStack><ImPhone color="#fff" fontSize={'15px'}/> <Content>+91234567890</Content></HStack></Box>
   <Box><HStack><AiFillMail color="#fff" fontSize={'15px'}/> <Content>madhurelectricals@gmail.com</Content></HStack></Box>
    </HStack>
    <CustomButton content='Contact' radius='0' width='100px' height='30px' size='14px' color='#fff' bgcolor='#bd0000'/>
</Flex>


 
    </Container>
</Box>

        </>
    )
}
export default SubNavbar