
import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import junction from "../../Assets/juction-box.png"
import { FaCheck } from "react-icons/fa";
const Switchyards =()=>{
    return(
        <>
          <Breadcrumbs name='EARTHING' home='Home' page='Earthing' />
            <Container maxW={{base:'100%',sm:'100%',md:'100%',lg:'75%',xl:'75%','2xl':'75%' }} m='auto' py='20px' >

                <Grid
                    //   h='200px'
                    // W='100%'
                    //   templateRows='repeat(2, 1fr)'
                    templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(1, 1fr)',lg:'repeat(6, 1fr)',xl:'repeat(6, 1fr)','2xl':'repeat(6, 1fr)' }}
                    columnGap={{base:'0',sm:'0',md:'0',lg:'30',xl:'30','2xl':'30' }}
                >
                    <GridItem colSpan={4}>
                        <Stack>
                            {/* <Img src={junction} h='325px' /> */}

                            <MedHeading pb='10px' pt='20px'>EARTHING</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent pt='10px'>
                            Earthing, also known as grounding in some regions, is a critical electrical safety practice used to protect people, equipment, and structures from electrical faults and lightning strikes. It involves creating a low-resistance electrical path between electrical equipment, systems, or structures and the Earth's surface. </Parcontent>                           
                            <Parcontent>
                            Proper earthing provides several essential functions:                            </Parcontent>
                            <Grid    templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(2, 1fr)',xl:'repeat(2, 1fr)','2xl':'repeat(2, 1fr)' }}
 gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Electrical Safety</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Equipment Protection</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Static Charge Dissipation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Lightning Protection</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>EMI and EMC</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Ground Electrode</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Grounding Conductor</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Grounding System Design</Text></HStack></GridItem>
                               
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
                    <GridItem colSpan={4}>
                        <Stack>
                            {/* <Img src={junction} h='325px' /> */}

                            <MedHeading pb='10px' pt='20px'>EARTHING</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            Earthing, also known as grounding in some regions, is a critical electrical safety practice used to protect people, equipment, and structures from electrical faults and lightning strikes. It involves creating a low-resistance electrical path between electrical equipment, systems, or structures and the Earth's surface. </Parcontent>                           
                            <Parcontent>
                            Proper earthing provides several essential functions:                            </Parcontent>
                            <Grid templateColumns='repeat(1, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Electrical Safety</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Equipment Protection</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Static Charge Dissipation</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Lightning Protection</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>EMI and EMC</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Ground Electrode</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Grounding Conductor</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Grounding System Design</Text></HStack></GridItem>
                               
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
export default Switchyards