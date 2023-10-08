import { Box, Center, Container, Divider, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React from "react";
import { MedHeading, Parcontent } from "../../Common/Style";
import about from '../../Assets/electric_2.jpg'
import electric from '../../Assets/electric_1.jpg'
import CustomButton from "../../Common/CustomButton";
const CompanyAbout = () => {
    return (
        <><Box
        //  backgroundColor='#F7F8FA !important' mb='30px'
        >
            <Container maxW='75%' m='auto' py='80px' pt='100px'>
                <Grid templateColumns='repeat(2, 1fr)' gap={40}>
                    <GridItem display="flex" justifyContent="end" alignItems="end" position='relative'>
                        <Img src={about} width='88%'
                            objectFit='cover'
                            height='414px' />
                        <Img src={electric} width='50%'
                            left='0px'
                            bottom='-60px'
                            border='7px solid #fff'
                            objectFit='cover'
                            position='absolute'
                            height='255px' />


                    </GridItem>
                    <GridItem >
                    <MedHeading pb='15px' textAlign='center' fontWeight='500' fontSize='18px !important'>WE ARE AUTOMATION ELECTRIC COMPANY</MedHeading>
                        
                    <Text
                    color='#333333'
                    fontFamily='sans-serif'
                    textAlign={'center'}
                    fontSize='2rem' fontWeight='600'
                    //  padding='2px 40px'
                    lineHeight='45px'>

                    "Produce your own clean save the environment"
                </Text>
                        <Parcontent fontSize='15px !important' pb='20px' pt='40px' textAlign={'center'} >
                        Madhur Electric Automation, Jaipur was established in the year 2011 
as a sole proprietorship to manufacturers, suppliers and third party 
service provider of all type of LT Panels, Transmissions Lines, Motor 
Control Centers, HT/LT Distribution Panel, Metering Panel, AMF Panel, 
APFC Panels, VFD Panel, Electrical Services, Turnkey Electrical Contrac- 
tors, DG Sets, Compound Lights, Consultancy and Liasoning. Under the 
vigilance of "Mr. Vishnu Gour", the company has served its customers 
competently.
          </Parcontent>
                       <Center> <CustomButton href="/about" border='none' content='DISCOVER MORE' radius='0' width='180px' height='45px' size='14px' color='#fff' bgcolor='#bd0000'/></Center>

                    </GridItem>

                </Grid>
            </Container>
        </Box>
        </>
    )
}
export default CompanyAbout