import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Img } from "@chakra-ui/react";
import React from "react";
import { Head } from "./Style";
import slider from "../Assets/slider1.png"
const Breadcrumbs =(props)=>{
    return(
        <>
         <Box w='100%' position='relative'>
            <Box position='absolute' top='30px' zIndex='9999'>
                <Head>{props.name}</Head>
                <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='/home'>Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink>About</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
                </Box>
            <Img src={slider} w='100%' height= '160px'
    objectFit= 'cover'
    objectPosition= 'bottom'/>
            </Box>
        </>
    )
}
export default Breadcrumbs