

import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container, Divider, Grid, GridItem, Img, Stack } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import junction from "../../Assets/juction-box.png"
const TransmissionLines =()=>{
    return(
        <>
          <Breadcrumbs name='TRANSMISSION LINES' home='Home' page='Transmission Lines' />
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
                            <Img src={junction} h='325px' />

                            <MedHeading pb='10px' pt='20px'>JUCTION BOX</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                                We are Leading Supplied of all types of Enclosure and Junction Box in Reputed Make Like: Hensel.</Parcontent>
                            <Parcontent>
                                We are offering high quality electrical enclosures and junction boxes. These junction boxes are manufactured from top quality materials thus providing maximum satisfaction to our clients.</Parcontent>
                            <Parcontent>
                                Further, our range of enclosures provides many choices for enclosing electrical and electronics equipment operating in hostile, harsh and demanding environments of industrial plants, unprotected out door areas, marine engineering applications and the areas with increased safety. We offer these enclosures and junction boxes at most competitive prices.
                            </Parcontent>
                            <Grid templateColumns='repeat(6, 1fr)'>
                                <GridItem></GridItem>
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
export default TransmissionLines
