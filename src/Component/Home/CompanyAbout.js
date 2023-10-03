import { Box, Center, Container, Divider, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React from "react";
import { MedHeading, Parcontent } from "../../Common/Style";
import about from '../../Assets/home_slider.jpg'
import electric from '../../Assets/electric_2.jpg'
import CustomButton from "../../Common/CustomButton";
const CompanyAbout = () => {
    return (
        <><Box
        //  backgroundColor='#F7F8FA !important' mb='30px'
        >
            <Container maxW='70%' m='auto' py='80px' pt='100px'>
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
                        <Parcontent fontSize='15px !important' pb='20px' pt='40px' textAlign={'center'} >Ankit Electricals Private Limited was established in 1984. The Company was incorporated as an Industrial Trading House and is a group of professionals having vast experience in Trading and Marketing of various type of electrical goods.</Parcontent>
                        <Parcontent pb='40px'  textAlign={'center'} >Ankit Electicals is a leading stockist and supplier for all sort of Electrical items of various reputed makes.</Parcontent>
                       <Center> <CustomButton border='none' content='DISCOVER MORE' radius='0' width='180px' height='45px' size='14px' color='#fff' bgcolor='#bd0000'/></Center>

                    </GridItem>

                </Grid>
            </Container>
        </Box>
        </>
    )
}
export default CompanyAbout