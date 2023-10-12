import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import VFD from "../../Assets/VFD.jpg"
import electric_10 from "../../Assets/electric_10.jpg"
import { FaCheck } from "react-icons/fa";
const APFCpanel =()=>{
    return(
        <>
          <Breadcrumbs name='VFD PANELS' home='Home' page='VFD Panels' />
            <Container maxW={{base:'100%',sm:'100%',md:'100%',lg:'75%',xl:'75%','2xl':'75%' }} m='auto' py='40px' >

                <Grid
                    //   h='200px'
                    // W='100%'
                    //   templateRows='repeat(2, 1fr)'
                                 templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(1, 1fr)',lg:'repeat(6, 1fr)',xl:'repeat(6, 1fr)','2xl':'repeat(6, 1fr)' }}

                                 columnGap={{base:'0',sm:'0',md:'0',lg:'30',xl:'30','2xl':'30' }}
                >
                    <GridItem colSpan={4}>
                        <Stack>
                            <HStack>
                            <Img src={VFD} h='500px' />
                            <Img src={electric_10} h='500px' w='400px' className="remenu"/>

                            </HStack>

                            <MedHeading pb='10px' pt='20px'>VFD PANELS</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent pt='10px'>
                            A Variable Frequency Drive (VFD) panel, also known as a Variable Speed Drive (VSD) panel or Inverter panel, is an electrical control panel designed to operate and control electric motors using variable frequency and voltage settings. These panels are commonly used in industrial and commercial applications to regulate the speed and torque of electric motors, thereby offering energy efficiency, precise control, and soft starting capabilities</Parcontent>
                            <Parcontent>
                            Here are some key details and components typically found in VFD panels:
                                </Parcontent>
                           
                                <Grid  templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(2, 1fr)',xl:'repeat(2, 1fr)','2xl':'repeat(2, 1fr)' }}
 gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Motor Control</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>User Interface</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Circuit Protection</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Power Supply</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>EMI/RFI Filters</Text></HStack></GridItem>
                               
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
export default APFCpanel