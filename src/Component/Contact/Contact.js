import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Container } from "@chakra-ui/react";
import Footer from "../../Common/Footer";
const Contact=()=>{
    return(
        <>
 <Breadcrumbs name='CONTACT' home='Home' page='Contact' />
            <Container maxW='70%' m='auto' py='40px'></Container>
            <Footer/>
        </>
    )
}
export default Contact