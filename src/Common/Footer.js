import { Box, Center, Container, Divider, Grid, GridItem, HStack, Img, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import logo from '../Assets/mdlogo.png'
import { Content, Label, MedHeading, Parcontent } from "./Style";
import { ImPhone } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
const Footer = () => {
    return (
        <>
            <Box bg='rgb(226 229 236)!important' h='380px'>
                <Container maxW='75%' m='auto' py='40px'>
                    <Grid templateColumns='repeat(3, 1fr)' gap='40px'  >
                        <GridItem colSpan={1}>
                            <Img src={logo} w='220px' />
                            <Parcontent pt='15px' pb='10px'>P.NO. 218 , 60 Feet Road, Prestige Garden, Industrial Area, Bindayaka, Jaipur(Raj.) - 302012</Parcontent>
                            <Box><HStack><ImPhone color="#000" fontSize={'15px'} /> <Parcontent>+91 80057 75964 , +91 94140 46267 </Parcontent></HStack></Box>
                            <Box><HStack><AiFillMail color="#000" fontSize={'15px'} /> <Parcontent>Madhurelectric@Gmail.com</Parcontent></HStack></Box>
                        </GridItem>
                        <GridItem colSpan={1} w='400px'>
                            <MedHeading pb='10px' fontSize='16px !important'>Service Range</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='50px' />
                            <HStack gap='40px'>
                            <SimpleGrid columns={1} spacing={20} py='20px' >
                                <Label href="/electrical-panel">
                                Electrical Panels
                                </Label>
                                <Label href="/motor-controls">
                                    Motor Control Centers
                                </Label>
                                <Label href="/HT-LT-distribution-panel">
                                HT / LT Distribution Panel
                                </Label>
                                <Label href="metering-panel">
                                    Metering Panel
                                </Label>
                                <Label href="/amf-panels">
                                    AMF Panel
                                </Label>
                                <Label href="/industrial-panels">
                                Industrial Panels
                                </Label>
                            </SimpleGrid>
                            <SimpleGrid columns={1} spacing={20} py='20px' >
                            <Label href="/APFC-panel">
                                    APFC Panels
                                </Label>
                                <Label href="/transmission-lines">
                                    Transmission Lines
                                </Label>
                                <Label href="/switch-yards">
                                 Switch Yards
                                </Label>
                                <Label href="/breakers">
                                    Breaker
                                </Label>
                                <Label href="/transformers">
                                Transformers
                                </Label>
                                <Label href="/DG-sets">
                                DG Sets
                                </Label>
                            </SimpleGrid>
                      
                            </HStack> 
                         
                        </GridItem>
                        <GridItem colSpan={1} >
                            <MedHeading pb='10px' fontSize='16px !important'>Usefull Links</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='50px' />
                            <SimpleGrid columns={1} spacing={20} py='20px'  >
                            
                            <Label href="/home">
                                Home
                                </Label>
                                <Label href="/about">
                                   About
                                </Label>
                                <Label href="/switch-yards">
                                  Products
                                </Label>
                                <Label href="/contact">
                                   Contact
                                </Label>
                            </SimpleGrid>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
            <Box width= '100%'
    height= 'auto'
    float= 'left'
    backgroundColor= '#222222'
    padding='20px 0px'>
<Container maxW='75%' m='auto'>
<Center><Label borderBottom='none !important'>Copyright© 2023. Madhur Electric Automation All Rights Reserved.</Label></Center>
</Container>

    </Box>


        </>
    )
}
export default Footer