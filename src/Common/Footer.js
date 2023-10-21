import { Box, Center, Circle, Container, Divider, Grid, GridItem, HStack, Img, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import logo from '../Assets/mdlogo.png'
import { Content, Label, MedHeading, Parcontent } from "./Style";
import { ImPhone } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
import { SocialIcon } from "react-social-icons";
import { FaGooglePlusG, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    const openGmail = () => {
        const mailtoLink = 'https://mail.google.com/mail/u/0/#inbox';
        window.open(mailtoLink, '_blank');
    };
    return (
        <>
            <Box className="remenu" zIndex={'99999'}>
                <Box bg='rgb(226 229 236)!important' h='400px'>
                    <Container maxW='75%' m='auto' py='40px'>
                        <Grid templateColumns='repeat(3, 1fr)' gap='40px'  >
                            <GridItem colSpan={1} >
                                <Img src={logo} w='220px' />
                                <Parcontent pt='15px' pb='10px'>P.NO. 218 , 60 Feet Road, Prestige Garden, Industrial Area, Bindayaka, Jaipur(Raj.) - 302012</Parcontent>
                                <Box><HStack><ImPhone color="#000" fontSize={'15px'} /> <Parcontent>+91 80057 75964 , +91 94140 46267 </Parcontent></HStack></Box>
                                <HStack pb='10px'><AiFillMail color="#000" fontSize={'15px'} /> <Parcontent>madhurelectric@gmail.com</Parcontent></HStack>
                                <HStack gap='15px'>
                                    <SocialIcon  target="_blank" url="https://facebook.com"   style={{ width: '30px', height: '30px' }} />
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
                                </a>    </HStack>
                            </GridItem>
                            <GridItem colSpan={1} w='400px'>
                                <MedHeading pb='10px' fontSize='16px !important'>Service Range</MedHeading>
                                <Divider orientation='horizontal' border='1.5px solid #bd0000' width='50px' />
                                <HStack gap='40px'>
                                    <SimpleGrid columns={1} spacing={5} py='20px' >
                                        <Label onClick={()=>navigate("/electrical-panel")}>
                                            Main LT Panels
                                        </Label>
                                        <Label  onClick={()=>navigate("/motor-controls")} >
                                            Motor Controls Panels
                                        </Label>
                                        <Label onClick={()=>navigate("/load-managements")} >
                                            Load Management Panels
                                        </Label>
                                        <Label onClick={()=>navigate("/metering-panel")} >
                                            Metering Panels
                                        </Label>
                                        <Label onClick={()=>navigate("/amf-panels")} >
                                            AMF Panels
                                        </Label>
                                       
                                    </SimpleGrid>
                                    <SimpleGrid columns={1} spacing={5} py='20px' >
                                        <Label onClick={()=>navigate("/VFD-panel")} >
                                            VFD Panels
                                        </Label>
                                        <Label onClick={()=>navigate("/electrical-installation")}>
                                            Electrical Installation Services
                                        </Label>
                                        <Label onClick={()=>navigate("/electrical-quality")}>
                                            Electrical Drive Quality
                                        </Label>
                                        <Label onClick={()=>navigate("/earthing")}>
                                            Earthing
                                        </Label>
                                        <Label onClick={()=>navigate("/breakers")} >
                                            Breakers
                                        </Label>
                                    
                                    </SimpleGrid>

                                </HStack>

                            </GridItem>
                            <GridItem colSpan={1} >
                                <MedHeading pb='10px' fontSize='16px !important'>Usefull Links</MedHeading>
                                <Divider orientation='horizontal' border='1.5px solid #bd0000' width='50px' />
                                <SimpleGrid columns={1} spacing={5} py='20px'  >

                                    <Label onClick={()=>navigate("/home")} >
                                        Home
                                    </Label>
                                    <Label onClick={()=>navigate("/about")} >
                                        About
                                    </Label>
                                    <Label onClick={()=>navigate("/dg-synchronizing")}>
                                        Service Range
                                    </Label>
                                    <Label onClick={()=>navigate("/clients")} >
                                        Our Client
                                    </Label>
                                    <Label onClick={()=>navigate("/contact")} >
                                        Contact
                                    </Label>
                                </SimpleGrid>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>
                <Box width='100%'
                    height='auto'
                    float='left'
                    backgroundColor='#222222'
                    padding='20px 0px'>
                    <Container maxW='75%' m='auto'>
                        <Center><Label borderBottom='none !important'>Copyright© 2023. Madhur Electric Automation All Rights Reserved.</Label></Center>
                    </Container>

                </Box>
            </Box>
            {/* mobile view */}
            <Box className="reslider">
                <Box bg='rgb(226 229 236)!important' >
                    <Container maxW='100%' m='auto' py='20px'>
                        <Grid templateColumns='repeat(1, 1fr)' gap='40px'  >
                            <GridItem textAlign={'center'}>
                                <Img src={logo} w='250px' m='auto'/>
                                <Parcontent pt='15px' pb='10px'>P.NO. 218 , 60 Feet Road, Prestige Garden, Industrial Area, Bindayaka, Jaipur(Raj.) - 302012</Parcontent>
                                <Box><HStack justifyContent='center'><ImPhone color="#000" fontSize={'15px'} /> <Parcontent>+91 80057 75964 , +91 94140 46267 </Parcontent></HStack></Box>
                                <Box><HStack justifyContent='center'><AiFillMail color="#000" fontSize={'15px'} /> <Parcontent>madhurelectric@gmail.com</Parcontent></HStack></Box>
                                <HStack gap='15px' justifyContent='center' pt='15px'>
                                    <SocialIcon  target="_blank" url="https://facebook.com"   style={{ width: '30px', height: '30px' }} />
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
                                </a>      </HStack>
                            </GridItem>
                            <GridItem>
                                <MedHeading pb='10px' fontSize='16px !important'>Service Range</MedHeading>
                                <Divider orientation='horizontal' border='1.5px solid #bd0000' width='50px' />
                                {/* <HStack gap='40px'> */}
                                <SimpleGrid columns={1} spacing={5} py='20px' >
                                <Label onClick={()=>navigate("/electrical-panel")}>
                                            Main LT Panels
                                        </Label>
                                        <Label  onClick={()=>navigate("/motor-controls")} >
                                            Motor Controls Panels
                                        </Label>
                                        <Label onClick={()=>navigate("/load-managements")} >
                                            Load Management Panels
                                        </Label>
                                        <Label onClick={()=>navigate("/metering-panel")} >
                                            Metering Panels
                                        </Label>
                                        <Label onClick={()=>navigate("/amf-panels")} >
                                            AMF Panels
                                        </Label>
                                       
                                </SimpleGrid>
                                <SimpleGrid columns={1} spacing={5} py='20px' >
                                <Label onClick={()=>navigate("/VFD-panel")} >
                                            VFD Panels
                                        </Label>
                                        <Label onClick={()=>navigate("/electrical-installation")}>
                                            Electrical Installation Services
                                        </Label>
                                        <Label onClick={()=>navigate("/electrical-quality")}>
                                            Electrical Drive Quality
                                        </Label>
                                        <Label onClick={()=>navigate("/earthing")}>
                                            Earthing
                                        </Label>
                                        <Label onClick={()=>navigate("/breakers")} >
                                            Breakers
                                        </Label>
                                    
                                  
                                </SimpleGrid>


                            </GridItem>
                            <GridItem colSpan={1} >
                                <MedHeading pb='10px' fontSize='16px !important'>Usefull Links</MedHeading>
                                <Divider orientation='horizontal' border='1.5px solid #bd0000' width='50px' />
                                <SimpleGrid columns={1} spacing={5} py='20px'  >

                                <Label onClick={()=>navigate("/home")}>
                                        Home
                                    </Label>
                                    <Label onClick={()=>navigate("/about")}>
                                        About
                                    </Label>
                                    <Label onClick={()=>navigate("/dg-synchronizing")} >
                                        Service Range
                                    </Label>
                                    <Label onClick={()=>navigate("/clients")}>
                                        Our Client
                                    </Label>
                                    <Label onClick={()=>navigate("/contact")} >
                                        Contact
                                    </Label>
                                </SimpleGrid>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>
                <Box width='100%'
                    height='auto'
                    float='left'
                    backgroundColor='#222222'
                    padding='20px 0px'>
                    <Container maxW='90%' m='auto'>
                        <Center><Label borderBottom='none !important' textAlign='center'>Copyright© 2023. Madhur Electric Automation All Rights Reserved.</Label></Center>
                    </Container>

                </Box>
            </Box>

        </>
    )
}
export default Footer