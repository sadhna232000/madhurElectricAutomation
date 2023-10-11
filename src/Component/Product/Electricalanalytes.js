

import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container, Divider, Grid, GridItem, Img, Stack } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import junction from "../../Assets/juction-box.png"
const Electricalanalytes =()=>{
    return(
        <>
          <Breadcrumbs name='ELECTRICAL DRIVE QUALITY' home='Home' page='Electrical Drive Quality' />
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

                            <MedHeading pb='10px' pt='20px'>ELECTRICAL DRIVE QUALITY</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            Electrical drive quality refers to the characteristics and performance of an electrical drive system, which is used to control and power electric motors. The quality of an electrical drive system is a critical factor in various applications, including industrial automation, transportation, and renewable energy systems. 
                            </Parcontent>                          
                              
                            <Parcontent>
                            The quality of an electrical drive system is determined by the design, components, and manufacturing processes used in its construction. When selecting or evaluating electrical drives, it's essential to consider these quality factors to ensure that the drive system meets the specific needs and requirements of the application while providing efficiency, reliability, and performance. Proper installation and maintenance also play a significant role in maintaining drive quality throughout its operational life.                            </Parcontent>
                           
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

                            <MedHeading pb='10px' pt='20px'>ELECTRICAL DRIVE QUALITY</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            Electrical drive quality refers to the characteristics and performance of an electrical drive system, which is used to control and power electric motors. The quality of an electrical drive system is a critical factor in various applications, including industrial automation, transportation, and renewable energy systems. 
                            </Parcontent>                          
                              
                            <Parcontent>
                            The quality of an electrical drive system is determined by the design, components, and manufacturing processes used in its construction. When selecting or evaluating electrical drives, it's essential to consider these quality factors to ensure that the drive system meets the specific needs and requirements of the application while providing efficiency, reliability, and performance. Proper installation and maintenance also play a significant role in maintaining drive quality throughout its operational life.                            </Parcontent>
                           
                            {/* <Grid templateColumns='repeat(6, 1fr)'>
                                <GridItem></GridItem>
                            </Grid> */}
                        </Stack>
                    </GridItem>
                    <GridItem  pt='20px'>
                        <Sidebar />

                    </GridItem>

                </Grid>
            </Container>
            <Footer />

        
        </>
    )
}
export default Electricalanalytes