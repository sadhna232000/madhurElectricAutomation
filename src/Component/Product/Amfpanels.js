import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import electric_2 from "../../Assets/electric_2.jpg"
import { FaCheck } from "react-icons/fa";
const Amfpanels = () => {
    return (
        <>
            <Breadcrumbs name='amf-panels' home='Home' page='Amf-panels' />
            <Container maxW='75%' m='auto' py='40px'>

                <Grid
                    //   h='200px'
                    // W='100%'
                    //   templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    columnGap={30}
                >
                    <GridItem colSpan={4}>
                        <Stack>
                            <Img src={electric_2} h='475px'  objectFit='cover' objectPosition='bottom'/>

                            <MedHeading pb='10px' pt='20px'>AMF CUM LT PANEL</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            An AMF (Automatic Mains Failure) panel is an essential component in backup power systems, often used in industrial and commercial settings. Its primary function is to automatically switch the power source from the mains electricity supply to an alternate power source, typically a generator, when it detects a failure or disruption in the mains power supply. 
                                </Parcontent>
                            <Parcontent>
                            Below, I'll describe the key details and components of an AMF panel:                                                                </Parcontent>
                            
                            <Grid templateColumns='repeat(2, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Controller</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Generator Control</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Manual Control</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Mains Monitoring</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Automatic Transfer Switch (ATS)</Text></HStack></GridItem>
                               
                               
                            </Grid>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Sidebar />

                    </GridItem>

                </Grid>
            </Container>
            <Footer />

        </>
    )
}
export default Amfpanels