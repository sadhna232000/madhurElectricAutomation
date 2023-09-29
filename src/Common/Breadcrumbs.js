import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Img } from "@chakra-ui/react";
import React from "react";
import { Head } from "./Style";
import slider from "../Assets/slider1.png"
const Breadcrumbs =(props)=>{
    return(
        <>
         <Box w='100%' position='relative'>
            <Container maxW='70%' m='auto'>

          
            <Box position='absolute' top='30px' zIndex='9999'>
                <Head>{props.name}</Head>
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