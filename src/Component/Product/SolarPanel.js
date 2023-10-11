import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import solarpanel from "../../Assets/solarpanel.jpeg"
import { Container, Divider, Grid, GridItem, Img, Stack } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
 const SolarPanel = () => {
    return (
        <>
            <Breadcrumbs name='SOLAR PANEL' home='Home' page='Solar Panel' />
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
                            <Img src={solarpanel}  h='325px'/>

                            <MedHeading pb='10px' pt='20px'>SOLAR PANEL</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            Solar panels, also known as photovoltaic (PV) panels, are devices that convert sunlight into electricity through the photovoltaic effect. These panels are made of semiconductor materials, typically silicon, which generates a direct current (DC) electrical voltage when exposed to sunlight. Solar panels play a vital role in harnessing renewable energy and are a key component of solar power systems. 
                            </Parcontent>
                            <Parcontent>
                            Solar panels have a wide range of applications, from small-scale residential installations to large-scale solar farms. They are a sustainable and increasingly cost-effective source of electricity and have a positive impact on reducing energy costs and mitigating the effects of climate change.                                                            </Parcontent>
                            
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
                        <Img src={solarpanel} width='100%'/>

                            <MedHeading pb='10px' pt='20px'>SOLAR PANEL</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            Solar panels, also known as photovoltaic (PV) panels, are devices that convert sunlight into electricity through the photovoltaic effect. These panels are made of semiconductor materials, typically silicon, which generates a direct current (DC) electrical voltage when exposed to sunlight. Solar panels play a vital role in harnessing renewable energy and are a key component of solar power systems. 
                            </Parcontent>
                            <Parcontent>
                            Solar panels have a wide range of applications, from small-scale residential installations to large-scale solar farms. They are a sustainable and increasingly cost-effective source of electricity and have a positive impact on reducing energy costs and mitigating the effects of climate change.                                                            </Parcontent>
                            
                        </Stack>
                    </GridItem>


                    <GridItem pt='20px'>
                        <Sidebar />

                    </GridItem>

                </Grid>
            </Container>
            <Footer />


        </>
    )
}
export default SolarPanel