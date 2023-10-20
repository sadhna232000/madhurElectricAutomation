

import React, { useEffect } from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import management from "../../Assets/management.jpg"
import { FaCheck } from "react-icons/fa";
import MAINLTpanel from '../../Assets/MAINLTpanel.jpg'

const Industrialpanels = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, ["/load-managements"]);
    return (
        <>
            <Breadcrumbs name='LOAD MANAGEMENT PANELS' home='Home' page='Load Management Panels' />
            <Container maxW={{ base: '100%', sm: '100%', md: '100%', lg: '75%', xl: '75%', '2xl': '75%' }} m='auto' py='40px'>

                <Grid
                    //   h='200px'
                    // W='100%'
                    //   templateRows='repeat(2, 1fr)'
                    templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)', xl: 'repeat(6, 1fr)', '2xl': 'repeat(6, 1fr)' }}
                    columnGap={{ base: '0', sm: '0', md: '0', lg: '30', xl: '30', '2xl': '30' }}
                >
                    <GridItem colSpan={4}>
                        <Stack>
                            <Img src={MAINLTpanel} h='555px' w='100%' />

                            <MedHeading pb='10px' pt='20px'>LOAD MANAGEMENT PANELS</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                                Load Management Panels, also known as Load Control Panels or Load Shedding Panels, are electrical control panels designed to monitor and manage the distribution of electrical loads in a facility or system. These panels are typically used in industrial, commercial, and residential settings to ensure that electrical demand does not exceed the available supply, prevent overloading of electrical systems, and maintain power quality.</Parcontent>
                            <Parcontent>
                                Here are some key details and components commonly found in load management panels.</Parcontent>
                            <Parcontent>
                                Further, our range of enclosures provides many choices for enclosing electrical and electronics equipment operating in hostile, harsh and demanding environments of industrial plants, unprotected out door areas, marine engineering applications and the areas with increased safety. We offer these enclosures and junction boxes at most competitive prices.
                            </Parcontent>
                            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(2, 1fr)', '2xl': 'repeat(2, 1fr)' }}
                                gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000' /><Text>Generator Integration</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000' /><Text>Voltage Regulation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000' /><Text>Load Shedding Control</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000' /><Text>Protection Features</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000' /><Text>Load Monitoring</Text></HStack></GridItem>


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
export default Industrialpanels