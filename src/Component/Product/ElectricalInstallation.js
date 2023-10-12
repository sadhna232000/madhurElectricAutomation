
import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import junction from "../../Assets/juction-box.png"
import { FaCheck } from "react-icons/fa";
const Electricalinstallation =()=>{
    return(
        <>
          <Breadcrumbs name='ELECTRICAL INSTALLATION SERVICES' home='Home' page='Electrical Installation Services' />
            <Container maxW={{base:'100%',sm:'100%',md:'100%',lg:'75%',xl:'75%','2xl':'75%' }} m='auto' py='20px' >

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

                            <MedHeading pb='10px' pt='20px'>ELECTRICAL INSTALLATION SERVICES</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            Electrical installation services refer to the process of designing, planning, installing, and maintaining electrical systems in residential, commercial, industrial, and institutional settings. These services are crucial for ensuring the safe, efficient, and reliable distribution of electricity to meet the power needs of buildings and facilities. 
                            </Parcontent>                          
                             
                            <Parcontent>
                            Electrical installation services encompass various components and considerations, including:                            </Parcontent>
                            <Grid   templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(2, 1fr)',xl:'repeat(2, 1fr)','2xl':'repeat(2, 1fr)' }}
 gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Wiring and Circuit Installation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Electrical Panels and Distribution</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Lighting Installation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Outlet Installation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Safety Systems</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Electrical Equipment Installation</Text></HStack></GridItem>
                               
                               
                            </Grid>
                            <Parcontent>

                            Electrical installation services are provided by licensed electricians and electrical contractors who have the expertise and knowledge to design, install, and maintain electrical systems in a safe and compliant manner. These services are essential for residential, commercial, and industrial buildings to ensure the availability of electricity for lighting, power, and various electrical appliances and systems.
                            </Parcontent>
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
export default Electricalinstallation