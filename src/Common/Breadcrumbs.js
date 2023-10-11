import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Container, Img } from "@chakra-ui/react";
import React from "react";
import { Head } from "./Style";
import slider from "../Assets/slider1.png"
const Breadcrumbs =(props)=>{
    return(
        <>
         <Box w='100%' position='relative'  className="remenu">
            <Container maxW='75%' m='auto'>
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
         
         <Box w='100%' position='relative' className="reslider">
            <Container maxW='90%' m='auto'>
            {/* <Center> */}
            <Box position='absolute' top='35px' zIndex='9999'>
                <Head fontSize='30px !Important'>{props.name}</Head>
                <Breadcrumb color='#fff' pt={'10px'}>
  <BreadcrumbItem>
    <BreadcrumbLink textDecoration='none' href='/home'  color='grey' fontFamily={'sans-serif'}>{props.home}</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage >
    <BreadcrumbLink color='#fff' fontFamily={'sans-serif'}>{props.page}</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
                </Box>
{/* </Center> */}
                </Container>
            <Img src={slider} w='100%' height= 'auto'
    objectFit= 'cover'
    objectPosition= 'bottom'/>
          
            </Box>
        </>
    )
}
export default Breadcrumbs