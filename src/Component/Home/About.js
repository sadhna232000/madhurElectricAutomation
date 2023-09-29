import { Box, Container, Divider, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React from "react";
import slider from '../../Assets/slider1.png'
import Breadcrumbs from "../../Common/Breadcrumbs";
import { MedHeading, Parcontent } from "../../Common/Style";
import slider2 from '../../Assets/slider2.png'
import Footer from "../../Common/Footer";
const About = () => {
    return (
        <>
            {/* <Box h='500px'>
                <Container maxW='75%' padding='2em 0'>
                    <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                        <GridItem colSpan={3}>
                            <Box>
                                <Text fontSize= '15px'
    fontWeight= '500'
    color= 'grey'
    fontFamily= 'sans-serif'
    textAlign='start'>We are Electric Company</Text>
                                <Text  
                                textAlign='start'
                                fontSize='1.9em'
                                    fontWeight='600'
                                    fontFamily='sans-serif'>Produce Your Own Clean Save The Environment</Text>

                            </Box>
                        </GridItem>
                        <GridItem colSpan={3}>
                            <Box>


                            </Box>
                        </GridItem>

                    </Grid>
                </Container>
            </Box> */}
            <Breadcrumbs name='ABOUT' home='Home' page='About' />
            <Container maxW='70%' m='auto' py='40px'>
                <Grid templateColumns='repeat(2, 1fr)' gap={30}>
                    <GridItem >
                        <MedHeading pb='15px'>WHO ARE WE ?</MedHeading>
                        <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />
                        <Parcontent py='20px'>Ankit Electricals Private Limited was established in 1984. The Company was incorporated as an Industrial Trading House and is a group of professionals having vast experience in Trading and Marketing of various type of electrical goods.</Parcontent>
                        <Parcontent pb='20px' >Ankit Electicals is a leading stockist and supplier for all sort of Electrical items of various reputed makes.</Parcontent>
                    </GridItem>
                    <GridItem  display="flex" justifyContent="end" alignItems="end" >
                       
                        <Img src={slider2} />
                        

                    </GridItem>
                </Grid>
            </Container>
            <Footer/>
        </>
    )
}
export default About