import React, { useEffect } from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Box, Container, Divider, Grid, GridItem, HStack, Img, Stack, Text } from "@chakra-ui/react";
import Footer from "../../Common/Footer";
import junction from '../../Assets/juction-box.png'
import { MedHeading, Parcontent, Prolabel } from "../../Common/Style";
import Sidebar from "../../Common/Sidebar";
import { FaCheck } from "react-icons/fa";
const Product=()=>{
  useEffect(() => {
    window.scrollTo(0, 0);
  }, ["/breakers"]);
    return(
        <>
 <Breadcrumbs name='BREAKERS' home='Home' page='Breakers' />
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
    {/* <Img src={junction}  h='325px'/> */}
    
    <MedHeading pb='10px' pt='20px'>BREAKERS</MedHeading>
    <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

    <Parcontent>
    Circuit breakers are electrical devices designed to protect electrical circuits from damage caused by overcurrent conditions, such as short circuits, overloads, and other electrical faults. They are a crucial component in electrical distribution systems and are used to interrupt the flow of electricity when the current exceeds a safe level.    </Parcontent>
    
<Parcontent>
Here are some types of circuit breakers:    </Parcontent>
<Grid templateColumns='repeat(2, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Miniature Circuit Breakers (MCBs)</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Molded Case Circuit Breakers (MCCBs) </Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Air Circuit Breakers (ACBs)</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Oil Circuit Breakers</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Vacuum Circuit Breakers</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>SF6 Circuit Breakers </Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Digital and Smart Circuit Breakers</Text></HStack></GridItem>
                               
                            </Grid>
    </Stack>
    </GridItem>


  <GridItem  colSpan={2}>
  <Sidebar/>

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
    {/* <Img src={junction}  h='325px'/> */}
    
    <MedHeading pb='10px' pt='20px'>BREAKERS</MedHeading>
    <Divider orientation='horizontal' border='1.5px solid #bd0000' width='100px' />

    <Parcontent>
    Circuit breakers are electrical devices designed to protect electrical circuits from damage caused by overcurrent conditions, such as short circuits, overloads, and other electrical faults. They are a crucial component in electrical distribution systems and are used to interrupt the flow of electricity when the current exceeds a safe level.    </Parcontent>
    
<Parcontent>
Here are some types of circuit breakers:    </Parcontent>
<Grid templateColumns='repeat(1, 1fr)' gap={'20px'} py='20px'>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Miniature Circuit Breakers (MCBs)</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Molded Case Circuit Breakers (MCCBs) </Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Air Circuit Breakers (ACBs)</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Oil Circuit Breakers</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Vacuum Circuit Breakers</Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>SF6 Circuit Breakers </Text></HStack></GridItem>
                                <GridItem><HStack><FaCheck fontSize='12px' color='#bd0000'/><Text>Digital and Smart Circuit Breakers</Text></HStack></GridItem>
                               
                            </Grid>
    </Stack>
    </GridItem>


  <GridItem  colSpan={2}>
  <Sidebar/>

  </GridItem>  
  
</Grid>
            </Container>
            <Footer/>
        </>
    )
}
export default Product