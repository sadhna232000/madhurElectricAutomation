import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Footer from "../../Common/Footer";
import { MedHeading, Parcontent } from "../../Common/Style";
import { ImLocation2, ImPhone } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
const Contact=()=>{
    return(
        <>
 <Breadcrumbs name='CONTACT' home='Home' page='Contact' />
            <Container maxW='70%' m='auto' py='80px'>
<Text textAlign='center' fontSize= '24px'
    fontFamily= 'sans-serif'
    letterSpacing= '1px'
    fontWeight= '600'
    color='#333333'
>Have any Questions ?</Text>
<SimpleGrid columns={3} spacing={10} pt='70px'>
<Box>
<VStack gap='20px'>
    
<ImPhone color="#bd0000" fontSize={'35px'}/>
<MedHeading fontSize='20px !important' fontWeight='500'>Call us</MedHeading>
<Parcontent lineHeight='20px !important'>+9148293849</Parcontent>
</VStack>

</Box>
<Box>
<VStack gap='20px'>
    
<ImLocation2 color="#bd0000" fontSize={'35px'}/>
<MedHeading fontSize='20px !important' fontWeight='500'>Address</MedHeading>
<Parcontent lineHeight='20px !important' textAlign='center'>P.NO. 218 , 60 Feet Road, Prestige Garden, Industrial Area, Bindayaka, Jaipur(Raj.) - 302012</Parcontent>
</VStack>

</Box>
<Box>
<VStack gap='20px'>
    
<AiFillMail color="#bd0000" fontSize={'35px'}/>
<MedHeading fontSize='20px !important' fontWeight='500'>Email</MedHeading>
<Parcontent lineHeight='20px !important'>madhurelectricals@gmail.com</Parcontent>
</VStack>

</Box>
</SimpleGrid>
            </Container>
            <Footer/>
        </>
    )
}
export default Contact