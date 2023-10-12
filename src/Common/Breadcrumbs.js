import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Container, Img } from "@chakra-ui/react";
import React from "react";
import { Head } from "./Style";
import slider from "../Assets/slider1.png"
const Breadcrumbs =(props)=>{
    return(
        <>
         <Box w='100%' position='relative'  >
            <Container maxW={{base:'100%',sm:'100%',md:'100%',lg:'75%',xl:'75%','2xl':'75%' }} m='auto'>
            <Box position='absolute' top={{base:'10px',sm:'10px',md:'30px',lg:'30px',xl:'30px','2xl':'30px' }}  zIndex='9999'>
                <Head  fontSize={{base:'28px !important',sm:'28px',md:'35px !important',lg:'42px',xl:'42px','2xl':'42px'}}>{props.name}</Head>
                <Breadcrumb color='#fff' pt={'10px'}>
  <BreadcrumbItem>
    <BreadcrumbLink textDecoration='none' href='/home'  color='grey' fontFamily={'sans-serif'}>{props.home}</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage >
    <BreadcrumbLink color='#fff' fontFamily={'sans-serif'}>{props.page}</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
                </Box>
                </Container>
            <Img src={slider} w='100%' height= '140px'
    objectFit= 'cover'
    objectPosition= 'bottom'/>
          
            </Box>
         
        
        </>
    )
}
export default Breadcrumbs