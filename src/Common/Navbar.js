// import { Box, Divider, Grid, GridItem, Img, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from '../Assets/mdlogo.png'
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Box, Flex,  Text, Button, Spacer, Menu, MenuButton, MenuList, MenuItem, Img, Container, HStack, Grid, GridItem, Link, MenuOptionGroup, MenuItemOption, MenuDivider, Image } from '@chakra-ui/react';
import { Label, Top } from "./Style";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
<>
          <Box  position="sticky" top="-1px" zIndex="100" bg='#fff' borderBottom= '1px solid #80808038' boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
           <Container maxW='70%' m='auto'>               
            <Flex alignItems="center" justifyContent={'space-between'}>
                    <Img src={Logo} h='110px' objectPosition={'center'} />
                    <Spacer />
                    <HStack  gap='10px'>
                      <Box className={window.location.pathname === '/home' ? 'act' : 'nav'}>
                    <Link  className={window.location.pathname === '/home' ? 'active' : 'nav'} href='/home'> Home</Link> 
                      </Box>
                      <Box className={window.location.pathname === '/about' ? 'act' : 'nav'} href='/about'>
                      <Link   className={window.location.pathname === '/about' ? 'active' : 'nav'} href='/about'> About</Link> 
                      </Box>
                      <Menu>
  <MenuButton as={Button}  _expanded={{ bg: '#bd0000',color:'#fff !important', borderRadius:'50px' }}  rightIcon={<RiArrowDropDownLine />}>
    Service Range
  </MenuButton>
  <MenuList p='20px' pt='15px' w='400px !important' bg='#fff !important' border='0.5px solid #e7e1e1'>

    <Grid templateColumns="repeat(2, 1fr)" columnGap={20} rowGap={10} >
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer' href='/product'>Electrical Panels</Link>
    </MenuItem>
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Motor Control Center</Link>
    </MenuItem>
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Metering Panel</Link>
    </MenuItem>
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>AMF Panel</Link>
    </MenuItem>
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>APFC Panels</Link>
    </MenuItem>
    <MenuItem bg='#fff !important' border='none !important'  p='5px'borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Transmission Lines</Link>
    </MenuItem>
   
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Switch Yards</Link>
    </MenuItem>
   
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Breaker</Link>
    </MenuItem>
   
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Transformers</Link>
    </MenuItem>
   
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Industrial Panels</Link>
    </MenuItem>
   
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>DG Sets</Link>
    </MenuItem>
   
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Cable Earthlings</Link>
    </MenuItem>
   
    
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>HT / LT Distribution Panel</Link>
    </MenuItem>
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Electrical Installations Services</Link>
    </MenuItem>
   
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Hospital Electrical Services</Link>
    </MenuItem>
   
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Electrical Drivesquality Analysts</Link>
    </MenuItem>
   
    
    <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer'>Electical Sub Stations</Link>
    </MenuItem>
   
   
    </Grid>
    
  </MenuList>
</Menu>
                      <Box className={window.location.pathname === '/product' ? 'act' : 'nav'}>
                      <Link   className={window.location.pathname === '/product' ? 'active' : 'nav'} href='/product'> Product</Link> 
                      </Box>
                    
{/* <NavLink></NavLink> */}
                        {/* <Top href="/home">
                         
                        </Top>

                        <Top href="/about">
                            About
                        </Top>
                        <Top href="/product">
                                Product
                            </Top> */}
                        {/* <Text className="nav-item dropdown">
                            <HStack>
                            
                            <RiArrowDropDownLine/>
                            </HStack>
                            */}
                          
                            {/* <Box className="dropdown-menu" >
                            <Grid templateColumns='repeat(4, 1fr)' rowGap={4} columnGap={10} p='20px'>
  <GridItem w='100%' h='30px'  borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  <GridItem w='100%' h='30px' borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  <GridItem w='100%' h='30px' borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  <GridItem w='100%' h='30px' borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  <GridItem w='100%'h='30px'  borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  <GridItem w='100%' h='30px' borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  <GridItem w='100%' h='30px' borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  <GridItem w='100%' h='30px'  borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  <GridItem w='100%' h='30px'  borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  <GridItem w='100%' h='30px'  borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  <GridItem w='100%' h='30px'  borderBottom='1px dashed #8080802e' >
    <Label>
cabel
    </Label>
  </GridItem>
  
</Grid>
                            </Box> */}
                        {/* </Text> */}
                        {/* <Top href="/">
                            Client
                        </Top>

                        <Top href="/">
                            Dealers
                        </Top> */}

                        {/* <Top href="/contact">
                            Contact
                        </Top> */}


                      
                    </HStack>
                </Flex>
                </Container>
            
                </Box>

        </>
    )
}
export default Navbar