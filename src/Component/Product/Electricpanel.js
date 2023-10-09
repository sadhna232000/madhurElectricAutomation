import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Box, Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import electric from "../../Assets/electrical_panel.png"
import electric_5 from "../../Assets/electric_5.jpg"
import electric_6 from "../../Assets/electric_6.jpg"
import { CgCheck } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";

const Electricpanel =()=>{
    return(
        <>
         <Breadcrumbs name='MAIN LT PANELS' home='Home' page='Main LT Panels' />
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
                            <Img src={electric} />

                            <MedHeading pb='10px' pt='20px'>Main LT Panel</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            An electrical panel, also known as a circuit breaker panel or distribution board, is a crucial component of an electrical system in a building. It serves as the central hub that distributes electrical power to various circuits throughout the structure while also providing protection against overloads and electrical faults.
                            </Parcontent>                            <Parcontent>
                            Here's an explanation of its key components and functions:-</Parcontent>
                           
                            <Grid templateColumns='repeat(2, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Main Service Disconnect</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Circuit Breakers</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Branch Circuits</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Neutral Bus Bar</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Grounding Bus Bar</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Hot Bus Bars</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Labels and Markings</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Panel Cover</Text></HStack></GridItem>
                               
                            </Grid>
                            <Grid  templateColumns='repeat(2, 1fr)' gap={'40px'} py='20px'>
                                  <GridItem>
<Box bg='#F7F8FA' border='2px solid #ffb9b9' _hover={{border:'2px solid #bd0000'}} borderRadius='30px' py='40px' px='0'>
    <Box w='230px'  m='auto'><Img src={electric_6} w='230px'/></Box>
</Box>


                                  </GridItem>
                                  <GridItem>
<Box bg='#F7F8FA' border='2px solid #ffb9b9' _hover={{border:'2px solid #bd0000'}} borderRadius='30px' py='40px' px='0'>
<Box w='230px'  m='auto'> <Img src={electric_5} w='230px' h='180px' objectFit='cover'/></Box>
</Box>


                                  </GridItem>
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
export default Electricpanel