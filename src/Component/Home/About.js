import { Box, Container, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React from "react";
import slider from '../../Assets/slider1.png'
import Breadcrumbs from "../../Common/Breadcrumbs";
const About = () => {
    return (
        <>
            {/* <Box h='500px'>
                <Container maxW='75%' padding='2em 0'>
                    <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                        <GridItem colSpan={3}>
                            <Box>
                                <Text fontSize= '15px'
    fontWeight= '500'
    color= 'grey'
    fontFamily= 'sans-serif'
    textAlign='start'>We are Electric Company</Text>
                                <Text  
                                textAlign='start'
                                fontSize='1.9em'
                                    fontWeight='600'
                                    fontFamily='sans-serif'>Produce Your Own Clean Save The Environment</Text>

                            </Box>
                        </GridItem>
                        <GridItem colSpan={3}>
                            <Box>


                            </Box>
                        </GridItem>

                    </Grid>
                </Container>
            </Box> */}
           <Breadcrumbs name='ABOUT'/>

        </>
    )
}
export default About