

import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import junction from "../../Assets/juction-box.png"
import { FaCheck } from "react-icons/fa";
const HospitalServices =()=>{
    return(
        <>
          <Breadcrumbs name='HOSPITAL ELECTRICAL SERVICES' home='Home' page='Hospital Electrical Services' />
            <Container maxW='75%' m='auto' py='40px' className="remenu">

                <Grid
                    //   h='200px'
                    // W='100%'
                    //   templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    columnGap={30}
                >
                    <GridItem colSpan={4}>
                        <Stack>
                            {/* <Img src={junction} h='325px' /> */}

                            <MedHeading pb='10px' pt='20px'>HOSPITAL ELECTRICAL SERVICES</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            Hospital electrical services are specialized electrical systems designed to meet the unique and critical needs of healthcare facilities, including hospitals, clinics, and medical centers. These systems are essential to ensuring the continuous and safe operation of medical equipment, lighting, communication systems, and other critical functions in healthcare environments. Hospital electrical services are subject to rigorous standards and regulations to guarantee reliability, redundancy, and safety.</Parcontent>
                          
                            <Parcontent>
                            Here are some key aspects of hospital electrical services:                            </Parcontent>
                            <Grid templateColumns='repeat(2, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Emergency Power Systems</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Isolated Power Systems</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Redundancy</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Grounding and Isolation</Text></HStack></GridItem>
                              
                            </Grid>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Sidebar />

                    </GridItem>

                </Grid>
            </Container>
            <Container maxW='90%' m='auto' py='40px' className="reslider">

                <Grid
                    //   h='200px'
                    // W='100%'
                    //   templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(1, 1fr)'
                    // columnGap={30}
                >
                    <GridItem >
                        <Stack>
                            {/* <Img src={junction} h='325px' /> */}

                            <MedHeading pb='10px' pt='20px'>HOSPITAL ELECTRICAL SERVICES</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            Hospital electrical services are specialized electrical systems designed to meet the unique and critical needs of healthcare facilities, including hospitals, clinics, and medical centers. These systems are essential to ensuring the continuous and safe operation of medical equipment, lighting, communication systems, and other critical functions in healthcare environments. Hospital electrical services are subject to rigorous standards and regulations to guarantee reliability, redundancy, and safety.</Parcontent>
                          
                            <Parcontent>
                            Here are some key aspects of hospital electrical services:                            </Parcontent>
                            <Grid templateColumns='repeat(1, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Emergency Power Systems</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Isolated Power Systems</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Redundancy</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Grounding and Isolation</Text></HStack></GridItem>
                              
                            </Grid>
                        </Stack>
                    </GridItem>
                    <GridItem >
                        <Sidebar />

                    </GridItem>

                </Grid>
            </Container>
            <Footer />

        
        </>
    )
}
export default HospitalServices