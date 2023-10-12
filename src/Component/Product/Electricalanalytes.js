

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
            <Container maxW={{base:'100%',sm:'100%',md:'100%',lg:'75%',xl:'75%','2xl':'75%' }} m='auto' py='20px'>

                <Grid
                    //   h='200px'
                    // W='100%'
                    //   templateRows='repeat(2, 1fr)'
                    templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(1, 1fr)',lg:'repeat(6, 1fr)',xl:'repeat(6, 1fr)','2xl':'repeat(6, 1fr)' }}

                    columnGap={{base:'0',sm:'0',md:'0',lg:'30',xl:'30','2xl':'30' }}
                >
                    <GridItem colSpan={4} pb='20px'>
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
      
            <Footer />

        
        </>
    )
}
export default Electricalanalytes