import { Box, Container, Divider, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React from "react";
import { MedHeading } from "../../Common/Style";
import product from "../../Assets/ourproduct.jpg"
const Ourproduct =()=>{
    return(
        <>
        {/* <Box  position='relative'> */}
         <Container maxW='70%' m='auto'  pt='80px' pb='60px'>
         <MedHeading pb='15px' textAlign='center'  fontWeight='500' fontSize='18px !important'>BEST ELECTRICAL PRODUCT</MedHeading>
                        {/* <Divider  orientation='horizontal' border='1.5px solid #bd0000' width='80px' m='auto' /> */}
                        <Text  
                        color='#333333'
                    fontFamily='sans-serif'
                    textAlign={'center'}
                    fontSize='2.4rem'   fontWeight='600' padding='2px 40px'
                    lineHeight= '51px'>
                        
                        "Superior Electrical Products for Optimal Performance and Efficiency."
                        </Text>

                        <Grid templateColumns='repeat(3, 1fr)' h='250px' gap='50px' py='3rem' >
                    <GridItem   backgroundColor='rgb(226 229 236)!important'>
                        
                        </GridItem>
                    <GridItem   backgroundColor='rgb(226 229 236)!important'>
                        
                        </GridItem>
                    <GridItem   backgroundColor='rgb(226 229 236)!important'>
                        
                        </GridItem>
                        </Grid>
             </Container>
             {/* <Img src={product} h='590px' w='100%'/>
             </Box> */}
        </>
    )
}
export default Ourproduct;