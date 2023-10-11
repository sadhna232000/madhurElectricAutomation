

import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import electric_2 from "../../Assets/electric_2.jpg"
import { FaCheck } from "react-icons/fa";
const Motorcontrols =()=>{
    return(
        <>
          <Breadcrumbs name='MOTOR CONTROLS PANELS' home='Home' page='Motor Controls Panels' />
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
                            <Img src={electric_2} h='475px'   width='100%' objectPosition='bottom'
    objectFit= 'cover'/>

                            <MedHeading pb='10px' pt='20px'>MOTOR CONTROLS PANELS</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            A motor control panel, also known as a motor control center (MCC) or motor control cabinet, is an electrical enclosure that houses various components for controlling and protecting electric motors in industrial and commercial applications.                                
                                </Parcontent>
                            <Parcontent>
                            Here's a brief overview of motor control panels:                                </Parcontent>
                         
                            <Grid templateColumns='repeat(2, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Enclosure</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Motor Starters</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Circuit Protection</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Control Devices</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Control Logic</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Communication Interfaces</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Monitoring and Protection</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Safety Features</Text></HStack></GridItem>
                               
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
                            <Img src={electric_2}  width='100%' 
    />

                            <MedHeading pb='10px' pt='20px'>MOTOR CONTROLS PANELS</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            A motor control panel, also known as a motor control center (MCC) or motor control cabinet, is an electrical enclosure that houses various components for controlling and protecting electric motors in industrial and commercial applications.                                
                                </Parcontent>
                            <Parcontent>
                            Here's a brief overview of motor control panels:                                </Parcontent>
                         
                            <Grid templateColumns='repeat(1, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Enclosure</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Motor Starters</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Circuit Protection</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Control Devices</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Control Logic</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Communication Interfaces</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Monitoring and Protection</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Safety Features</Text></HStack></GridItem>
                               
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
export default Motorcontrols