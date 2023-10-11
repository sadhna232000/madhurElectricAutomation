

import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Box, Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import meter from "../../Assets/meter.jpg"
import openmeter from "../../Assets/openmeter.jpg"
import closemeter from "../../Assets/closemeter.jpg"
import { FaCheck } from "react-icons/fa";
const Meteringpanel =()=>{
    return(
        <>
          <Breadcrumbs name='METERING PANEL' home='Home' page='Metering Panel' />
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
                            <Img src={meter} h='525px' />

                            <MedHeading pb='10px' pt='20px'>METERING PANEL</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            A metering panel, often referred to as a meter panel or electrical meter panel, is an essential component in electrical systems and buildings for monitoring and measuring electrical consumption. It typically houses various types of electrical meters, which are used to measure and display the amount of electricity being consumed within a particular location. Metering panels are commonly found in residential, commercial, and industrial settings.</Parcontent>
                            <Parcontent>
                            Metering panels may include different types of meters, such as:</Parcontent>
                            
                            <Grid templateColumns='repeat(2, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Electricity Meters</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Water Meters</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Gas Meters</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Heat Meters</Text></HStack></GridItem>
                                
                            </Grid>
                            <Grid  templateColumns='repeat(2, 1fr)' gap={'40px'} py='20px'>
                                  <GridItem>
<Box bg='#F7F8FA' border='2px solid #ffb9b9' _hover={{border:'2px solid #bd0000'}} borderRadius='30px' py='40px' px='0'>
    <Box w='230px'  m='auto'><Img src={openmeter} w='230px' h='180px'/></Box>
</Box>


                                  </GridItem>
                                  <GridItem>
<Box bg='#F7F8FA' border='2px solid #ffb9b9' _hover={{border:'2px solid #bd0000'}} borderRadius='30px' py='40px' px='0'>
<Box w='230px'  m='auto'> <Img src={closemeter} w='230px' h='180px' objectFit='cover' objectPosition='top'/></Box>
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
                            <Img src={meter} w='100%'/>

                            <MedHeading pb='10px' pt='20px'>METERING PANEL</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='80px' />

                            <Parcontent>
                            A metering panel, often referred to as a meter panel or electrical meter panel, is an essential component in electrical systems and buildings for monitoring and measuring electrical consumption. It typically houses various types of electrical meters, which are used to measure and display the amount of electricity being consumed within a particular location. Metering panels are commonly found in residential, commercial, and industrial settings.</Parcontent>
                            <Parcontent>
                            Metering panels may include different types of meters, such as:</Parcontent>
                            
                            <Grid templateColumns='repeat(1, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Electricity Meters</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Water Meters</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Gas Meters</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Heat Meters</Text></HStack></GridItem>
                                
                            </Grid>
                            <Grid  templateColumns='repeat(1, 1fr)' gap={'40px'} py='20px'>
                                  <GridItem>
<Box bg='#F7F8FA' border='2px solid #ffb9b9' _hover={{border:'2px solid #bd0000'}} borderRadius='30px' py='40px' px='0'>
    <Box w='230px'  m='auto'><Img src={openmeter} w='230px' h='180px'/></Box>
</Box>


                                  </GridItem>
                                  <GridItem>
<Box bg='#F7F8FA' border='2px solid #ffb9b9' _hover={{border:'2px solid #bd0000'}} borderRadius='30px' py='40px' px='0'>
<Box w='230px'  m='auto'> <Img src={closemeter} w='230px' h='180px' objectFit='cover' objectPosition='top'/></Box>
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
export default Meteringpanel