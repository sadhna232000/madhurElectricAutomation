import { Box, Container, Divider, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React from "react";
import slider from '../../Assets/slider1.png'
import Breadcrumbs from "../../Common/Breadcrumbs";
import { MedHeading, Parcontent } from "../../Common/Style";
import MAINLTpanel from '../../Assets/MAINLTpanel.jpg'
import Footer from "../../Common/Footer";
const About = () => {
    return (
        <>
            
            <Breadcrumbs name='ABOUT' home='Home' page='About' />
            <Container maxW='75%' m='auto' py='40px' className="remenu">
                <Grid templateColumns='repeat(2, 1fr)' gap={30}>
                    <GridItem >
                        <MedHeading pb='15px'>WHO ARE WE ?</MedHeading>
                        <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />
                        <Parcontent py='20px'>
                        Madhur Electric Automation, Jaipur was established in the year 2011 
as a sole proprietorship to manufacturers, suppliers and third party 
service provider of all type of LT Panels, Motor 
Control Centers, HT/LT Distribution Panel, Metering Panel, AMF Panel, 
APFC Panels, VFD Panel, Electrical Services, Turnkey Electrical Projects, DG Sets, Consultancy and Liasoning. Under the 
vigilance of "Mr. Vishnu Gour", the company has served its customers 
competently.</Parcontent>
                        <Parcontent pt='10px' pb='20px'>We work with a commitment to our customers and in getting the
                            things done in accordance to the requirements of clients, we have
                            always did smart work to achieve our customer’s satisfaction. Our
                            products are designed and developed in a complete technical environ-
                            ment and in presence of manufacturing experts and engineers. The
                            products offered by us are tested for quality at every stage of develop-
                            ment by the analysts of quality working with us. We select the raw
                            material required in manufacturing of our product as per suggested by
                            team of professionals as per the need. Our products are appreciated for
                            a wide range of features that they exhibit like quality, durability, func-
                            tionality, sustainability and easy operations.
                        </Parcontent>

                    </GridItem>
                    <GridItem display="flex" justifyContent="end" alignItems="end" >

                        <Img src={MAINLTpanel} w='500px'
                            height='500px'
                            objectFit='cover'
                            objectPosition='center' />


                    </GridItem>
                </Grid>
            </Container>
            {/* mobile view */}
            <Container maxW='90%' m='auto' py='40px' className="reslider">
                <Grid templateColumns='repeat(1, 1fr)' gap={20}>
                    <GridItem >
                        <MedHeading pb='15px'>WHO ARE WE ?</MedHeading>
                        <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />
                        <Parcontent py='20px'>
                        Madhur Electric Automation, Jaipur was established in the year 2011 
as a sole proprietorship to manufacturers, suppliers and third party 
service provider of all type of LT Panels, Motor 
Control Centers, HT/LT Distribution Panel, Metering Panel, AMF Panel, 
APFC Panels, VFD Panel, Electrical Services, Turnkey Electrical Projects, DG Sets, Consultancy and Liasoning. Under the 
vigilance of "Mr. Vishnu Gour", the company has served its customers 
competently.</Parcontent>
                        <Parcontent pt='10px' pb='20px'>We work with a commitment to our customers and in getting the
                            things done in accordance to the requirements of clients, we have
                            always did smart work to achieve our customer’s satisfaction. Our
                            products are designed and developed in a complete technical environ-
                            ment and in presence of manufacturing experts and engineers. The
                            products offered by us are tested for quality at every stage of develop-
                            ment by the analysts of quality working with us. We select the raw
                            material required in manufacturing of our product as per suggested by
                            team of professionals as per the need. Our products are appreciated for
                            a wide range of features that they exhibit like quality, durability, func-
                            tionality, sustainability and easy operations.
                        </Parcontent>

                    </GridItem>
                    <GridItem display="flex" justifyContent="center" alignItems="end" >

                        <Img src={MAINLTpanel} 
                            height='400px'
                            w='100%'
                            objectFit='cover'
                            objectPosition='center' />


                    </GridItem>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
export default About