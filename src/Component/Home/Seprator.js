import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../Common/CustomButton";
const Seprator = () => {
    return (
        <>
            <Container maxW='75%' m='auto' pb='0px' pt='50px' px='40px'>
                <Box p='10px'  color='#fff' bg='#bd0000'>
                   <HStack justifyContent='space-between' border='1px dashed #fff' p='20px'>
                    <Text color='#fff' 
                    fontFamily='sans-serif'
                    // textAlign={'center'}
                    letterSpacing='1px'
                    fontSize='18px' lineHeight={'30px'}>
  ONE STOP SOLUTION FOR ALL EMECTRICAL NEED                        </Text>         
                  <CustomButton href="/contact" border='none' content='CONTACT US' radius='0' width='180px' height='45px' size='14px' color='#bd0000' bgcolor='#fff'/>
</HStack></Box>

            </Container>


        </>
    )
}
export default Seprator