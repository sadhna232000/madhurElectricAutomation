import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Box, Container, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Footer from "../../Common/Footer";
import { MedHeading, Parcontent } from "../../Common/Style";
import { ImLocation2, ImPhone } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
const Contact=()=>{
    const email = 'madhurelectric@gmail.com';
    return(
        <>
 <Breadcrumbs name='CONTACT' home='Home' page='Contact' />
            <Container maxW={{base:'100%',sm:'100%',md:'100%',lg:'75%',xl:'75%','2xl':'75%' }} m='auto' py='80px'>
<Text textAlign='center' fontSize= '24px'
    fontFamily= 'sans-serif'
    letterSpacing= '1px'
    fontWeight= '600'
    color='#333333'
>Have any Questions ?</Text>
<SimpleGrid columns={{base:'1',sm:'1',md:'1',lg:'3',xl:'3','2xl':'3' }} spacing={10} pt='70px'>
<Box>
<VStack gap='20px'>
    
<ImPhone color="#bd0000" fontSize={'35px'}/>
<MedHeading fontSize='20px !important' fontWeight='500'>Call us</MedHeading>
<Parcontent lineHeight='20px !important'>+91 80057 75964 , +91 94140 46267</Parcontent>
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
<Link href={`mailto:${email}`} textDecoration="none"><Parcontent lineHeight='20px !important'  color='#000 !important'>madhurelectric@gmail.com</Parcontent></Link>
</VStack>

</Box>
</SimpleGrid>
            </Container>

           
            <Footer/>
        </>
    )
}
export default Contact