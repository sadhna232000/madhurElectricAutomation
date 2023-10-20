
import React, { useEffect } from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Box, Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { MedHeading, Parcontent } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import electric_7 from "../../Assets/electric_7.jpg"
import electric_8 from "../../Assets/electric_8.jpg"
import electric_1 from "../../Assets/electric_1.jpg"
import { FaCheck } from "react-icons/fa";
const DGsets =()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, ["/dg-synchronizing"]);
    return(
        <>
          <Breadcrumbs name='DG SYNCHRONIZING PANEL' home='Home' page='DG Synchronizing Panel' />
            <Container maxW={{base:'100%',sm:'100%',md:'100%',lg:'75%',xl:'75%','2xl':'75%' }} m='auto' py='40px' >

                <Grid
                    //   h='200px'
                    // W='100%'
                    //   templateRows='repeat(2, 1fr)'
                    templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(1, 1fr)',lg:'repeat(6, 1fr)',xl:'repeat(6, 1fr)','2xl':'repeat(6, 1fr)' }}
                    columnGap={{base:'0',sm:'0',md:'0',lg:'30',xl:'30','2xl':'30' }}                >
                    <GridItem colSpan={4}>
                        <Stack>
                            <Img src={electric_1} h='475px'   w='100%'/>

                            <MedHeading pb='10px' pt='20px'>DG SYNCHRONIZING PANEL</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

                            <Parcontent>
                            A DG Synchronizing Panel, also known as a Diesel Generator Synchronizing Panel, is an electrical control panel used in power generation systems to synchronize multiple diesel generators (DG sets) with each other and with the main power grid when applicable. This ensures that the generators work in harmony and share the load effectively.                                </Parcontent>
                               
                            <Parcontent>
                            Here's a brief overview of DG synchronizing panels:                            </Parcontent>
                            <Grid   templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(2, 1fr)',xl:'repeat(2, 1fr)','2xl':'repeat(2, 1fr)' }}
 gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Synchronization</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Load Sharing</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Control and Protection</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Synchronizing Device</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Governor Control</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Generator Start/Stop Control</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Manual and Auto Modes:</Text></HStack></GridItem>
                               
                            </Grid>
                                                    
                          
                            <Grid  templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(2, 1fr)',xl:'repeat(2, 1fr)','2xl':'repeat(2, 1fr)' }}
 gap={'40px'} py='20px'>
                                  <GridItem>
<Box bg='#F7F8FA' border='2px solid #ffb9b9' _hover={{border:'2px solid #bd0000'}} borderRadius='30px' py='40px' px='0'>
    <Box w='230px'  m='auto'><Img src={electric_7} w='230px'  h='170px' objectFit='cover'/></Box>
</Box>


                                  </GridItem>
                                  <GridItem>
<Box bg='#F7F8FA' border='2px solid #ffb9b9' _hover={{border:'2px solid #bd0000'}} borderRadius='30px' py='40px' px='0'>
<Box w='230px'  m='auto'> <Img src={electric_8} w='230px' h='170px' objectFit='cover'/></Box>
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
export default DGsets