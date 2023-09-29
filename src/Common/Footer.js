import { Box, Center, Container, Divider, Grid, GridItem, HStack, Img, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import logo from '../Assets/mdlogo.png'
import { Content, Label, MedHeading, Parcontent } from "./Style";
import { ImPhone } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
const Footer = () => {
    return (
        <>
            <Box bg='rgb(226 229 236)!important' h='300px'>
                <Container maxW='70%' m='auto' py='40px'>
                    <Grid templateColumns='repeat(3, 1fr)' gap='40px'  >
                        <GridItem>
                            <Img src={logo} w='100px' />
                            <Parcontent pt='15px' pb='10px'>P.NO. 218 , 60 Feet Road, Prestige Garden, Industrial Area, Bindayaka, Jaipur(Raj.) - 302012</Parcontent>
                            <Box><HStack><ImPhone color="#000" fontSize={'15px'} /> <Parcontent>+91234567890</Parcontent></HStack></Box>
                            <Box><HStack><AiFillMail color="#000" fontSize={'15px'} /> <Parcontent>madhurelectricals@gmail.com</Parcontent></HStack></Box>
                        </GridItem>
                        <GridItem>
                            <MedHeading pb='10px' fontSize='16px !important'>Electical Products</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='50px' />
                            <HStack gap='40px'>
                            <SimpleGrid columns={1} spacing={20} py='20px' >
                                <Label>
                                    Electrical Earthing
                                </Label>
                                <Label>
                                    Electrical Earthing
                                </Label>
                                <Label>
                                    Electrical Earthing
                                </Label>
                                <Label>
                                    Electrical Earthing
                                </Label>
                            </SimpleGrid>
                            <SimpleGrid columns={1} spacing={20} py='20px' >
                            <Label>
                                    Electrical Earthing
                                </Label>
                                <Label>
                                    Electrical Earthing
                                </Label>
                                <Label>
                                    Electrical Earthing
                                </Label>
                                <Label>
                                    Electrical Earthing
                                </Label>
                            </SimpleGrid>
                            </HStack>
                        </GridItem>
                        <GridItem pl={'80px'}>
                            <MedHeading pb='10px' fontSize='16px !important'>Usefull Links</MedHeading>
                            <Divider orientation='horizontal' border='1.5px solid #bd0000' width='50px' />
                            <SimpleGrid columns={1} spacing={20} py='20px'  >
                            
                            <Label href="/home">
                                Home
                                </Label>
                                <Label>
                                   About
                                </Label>
                                <Label>
                                  Products
                                </Label>
                                <Label>
                                   Contact
                                </Label>
                            </SimpleGrid>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
            <Box width= '100%'
    height= 'auto'
    float= 'left'
    backgroundColor= '#222222'
    padding='20px 0px'>
<Container maxW='70%' m='auto'>
<Center><Label borderBottom='none !important'>Copyright© 2023. Madhur Electric Automation All Rights Reserved.</Label></Center>
</Container>

    </Box>


        </>
    )
}
export default Footer