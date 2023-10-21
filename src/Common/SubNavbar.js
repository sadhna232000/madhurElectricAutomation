import { Box, VStack, Container, Flex, Grid, GridItem, HStack, Text, Link, Circle } from "@chakra-ui/react";
import React from "react";
import { AiFillPhone, AiFillMail, AiOutlineGooglePlus } from 'react-icons/ai';
import { FaFacebookF, FaGooglePlusG, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import CustomButton from "./CustomButton";
import { Content } from "./Style";
import { SocialIcon } from "react-social-icons";
import WaveLoader from "../Component/Home/Loading";
import { useNavigate } from "react-router-dom";

// import { ImWhatsapp } from "react-icons/im";

const SubNavbar = () => {
    const openGmail = () => {
        const mailtoLink = 'https://mail.google.com/mail/u/0/#inbox';
        window.open(mailtoLink, '_blank');
    };

    // const navigate = useNavigate();

    const email = 'madhurelectric@gmail.com';
    return (
        <>
            <Box bg='#333333' pt='10px' pb='10px'>
                <Container maxW='75%' m='auto' className='respnev1' >

                    <Flex justifyContent={"space-between"}>
                        <HStack gap='30px'>

                            <Box ><HStack ><ImPhone color="#fff" fontSize={'15px'} /> <Content >+91 80057 75964 , +91 94140 46267</Content></HStack></Box>
                            <Link textDecoration='none' href={`mailto:${email}`}><HStack><AiFillMail color="#fff" fontSize={'15px'} /> <Content>madhurelectric@gmail.com</Content></HStack></Link>
                        </HStack>
                        <HStack gap='65px'>
                            <HStack gap='15px'>
                                <SocialIcon target="_blank" url="https://facebook.com" style={{ width: '30px', height: '30px' }} />
                                <a onClick={openGmail} target="_blank" >
                                    <Circle size='30px' bg='#c00404' color='white' cursor='pointer'>
                                        <FaGooglePlusG fontSize='19px' />
                                    </Circle>
                                </a>
                                {/* <SocialIcon target="_blank" onClick={openGmail}  style={{ width:'30px' , height:'30px' }}  /> */}
                                <a href="https://wa.me/919414046267" target="_blank"  cursor='pointer'>
                                    <Circle size='31px' bg='green' color='white'>
                                        <FaWhatsapp fontSize='20px' />
                                    </Circle>
                                </a>
                            </HStack>
                            <CustomButton click="/contact" content='Contact' radius='0' width='100px' height='30px' size='14px' color='#fff' bgcolor='#bd0000' />
                        </HStack>
                    </Flex>
                </Container>
                {/* /***mobile view */}
                <Container maxW='100%' m='auto' className='respnev2'>
                    <VStack>
                        {/* <HStack gap='30px'> */}
                        <Box ><HStack ><ImPhone color="#fff" fontSize={'15px'} /> <Content >+91 80057 75964 , +91 94140 46267</Content></HStack></Box>
                        <Link textDecoration='none' href={`mailto:${email}`}><HStack><AiFillMail color="#fff" fontSize={'15px'} /> <Content>madhurelectric@gmail.com</Content></HStack></Link>
                        {/* </HStack>  */}
                        <HStack gap='15px'>
                            <SocialIcon target="_blank" url="https://facebook.com" style={{ width: '30px', height: '30px' }} />
                            <a onClick={openGmail} target="_blank" >
                                    <Circle size='30px' bg='#c00404' color='white' cursor='pointer'>
                                        <FaGooglePlusG fontSize='18px' />
                                    </Circle>
                                </a>
                                {/* <SocialIcon target="_blank" onClick={openGmail}  style={{ width:'30px' , height:'30px' }}  /> */}
                                <a href="https://wa.me/919414046267" target="_blank"  cursor='pointer'>
                                    <Circle size='31px' bg='green' color='white'>
                                        <FaWhatsapp fontSize='20px' />
                                    </Circle>
                                </a>   </HStack>
                        <CustomButton click="/contact" content='Contact' radius='0' width='100px' height='30px' size='14px' color='#fff' bgcolor='#bd0000' />
                    </VStack>
                </Container>



            </Box>

        </>
    )
}
export default SubNavbar
