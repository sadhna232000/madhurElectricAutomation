

import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import junction from "../../Assets/juction-box.png"
import { FaCheck } from "react-icons/fa";
const ElectricalSubStations =()=>{
    return(
        <>
          <Breadcrumbs name='ELECTRICAL SUB STATIONS' home='Home' page='Electrical Sub Stations' />
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

                            <MedHeading pb='10px' pt='20px'>ELECTRICAL SUB STATIONS</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            Electrical substations, often referred to simply as "substations," are key components of electrical power distribution systems. They play a crucial role in managing and transforming electrical energy as it moves from power generation sources to end-users, such as homes, businesses, and industrial facilities.</Parcontent>                           
                             <Parcontent>
                             Substations are classified into several categories based on their roles and locations within the power grid:
                             </Parcontent>                        
                             <Grid templateColumns='repeat(2, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Generating Substation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Transmission Substation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Step-Down (Distribution) Substation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Switching Substation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Substation Automation:</Text></HStack></GridItem>
                               
                               
                            </Grid>
                            <Parcontent>
                            Substations are critical infrastructure in the electrical power grid, and their proper design, construction, and maintenance are essential to ensure a reliable and safe electricity supply. The layout, design, and equipment used in a substation are chosen based on factors such as local load requirements, voltage levels, safety considerations, and the capacity to meet the needs of the electrical network they serve.                             </Parcontent>  
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

                            <MedHeading pb='10px' pt='20px'>ELECTRICAL SUB STATIONS</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            Electrical substations, often referred to simply as "substations," are key components of electrical power distribution systems. They play a crucial role in managing and transforming electrical energy as it moves from power generation sources to end-users, such as homes, businesses, and industrial facilities.</Parcontent>                           
                             <Parcontent>
                             Substations are classified into several categories based on their roles and locations within the power grid:
                             </Parcontent>                        
                             <Grid templateColumns='repeat(1, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Generating Substation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Transmission Substation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Step-Down (Distribution) Substation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Switching Substation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Substation Automation:</Text></HStack></GridItem>
                               
                               
                            </Grid>
                            <Parcontent>
                            Substations are critical infrastructure in the electrical power grid, and their proper design, construction, and maintenance are essential to ensure a reliable and safe electricity supply. The layout, design, and equipment used in a substation are chosen based on factors such as local load requirements, voltage levels, safety considerations, and the capacity to meet the needs of the electrical network they serve.                             </Parcontent>  
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
export default ElectricalSubStations