// import { Box, Divider, Grid, GridItem, Img, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from '../Assets/mdlogo.png'
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Box, Flex, Link, Text, Button, Spacer, Menu, MenuButton, MenuList, MenuItem, Img, Container, HStack, Grid, GridItem } from '@chakra-ui/react';
import { Label, Top } from "./Style";
import { RiArrowDropDownLine } from 'react-icons/ri';
const Navbar = () => {
    return (
        // <>
        //     <Box>
        //         <Grid
        //             // h='200px'
        //             templateColumns='repeat(8, 1fr)'
        //             gap={4}
        //         >

        //             <GridItem colSpan={2}>
        //                 <VStack>
        //                     <Img src={Logo} h='110px' />
        //                     {/* <Divider orientation='vertical'  h='100px' w='30px'/> */}

        //                 </VStack>
        //             </GridItem>
        //             <GridItem colSpan={3}>
        //                 <Grid templateColumns='repeat(7, 1fr)'
        //                     gap={3}

        //                 >
        //                     <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
        //                     _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
        //                         fontSize='14px'
        //                         fontWeight='500'
        //                         fontFamily='sans-serif'
        //                         cursor='pointer'
        //                         color='#545d66'
        //                         _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
        //                         >
        //                             {/* <Link  > */}
        //                         Home
        //                         {/* </Link> */}
        //                         </Text></Box>
        //                 </GridItem>

        //                     <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
        //                     _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
        //                         fontSize='14px'
        //                         fontWeight='500'
        //                         fontFamily='sans-serif'
        //                         cursor='pointer'
        //                         color='#545d66'
        //                         _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
        //                         >
        //                             {/* <Link  > */}
        //                         Pages
        //                         {/* </Link> */}
        //                         </Text></Box>
        //                 </GridItem>

        //                     <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
        //                     _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
        //                         fontSize='14px'
        //                         fontWeight='500'
        //                         fontFamily='sans-serif'
        //                         cursor='pointer'
        //                         color='#545d66'
        //                         _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
        //                         >
        //                             {/* <Link  > */}
        //                         Service
        //                         {/* </Link> */}
        //                         </Text></Box>
        //                 </GridItem>

        //                     <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
        //                     _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
        //                         fontSize='14px'
        //                         fontWeight='500'
        //                         fontFamily='sans-serif'
        //                         cursor='pointer'
        //                         color='#545d66'
        //                         _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
        //                         >
        //                             {/* <Link  > */}
        //                         Project
        //                         {/* </Link> */}
        //                         </Text></Box>
        //                 </GridItem>

        //                     <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
        //                     _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
        //                         fontSize='14px'
        //                         fontWeight='500'
        //                         fontFamily='sans-serif'
        //                         cursor='pointer'
        //                         color='#545d66'
        //                         _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
        //                         >
        //                             {/* <Link  > */}
        //                         Shop
        //                         {/* </Link> */}
        //                         </Text></Box>
        //                 </GridItem>

        //                     <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
        //                     _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
        //                         fontSize='14px'
        //                         fontWeight='500'
        //                         fontFamily='sans-serif'
        //                         cursor='pointer'
        //                         color='#545d66'
        //                         _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
        //                         >
        //                             {/* <Link  > */}
        //                         Blog
        //                         {/* </Link> */}
        //                         </Text></Box>
        //                 </GridItem>

        //                     <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
        //                     _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
        //                         fontSize='14px'
        //                         fontWeight='500'
        //                         fontFamily='sans-serif'
        //                         cursor='pointer'
        //                         color='#545d66'
        //                         _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
        //                         >
        //                             {/* <Link  > */}
        //                         Contact
        //                         {/* </Link> */}
        //                         </Text></Box>
        //                 </GridItem>





        //                 </Grid>


        //             </GridItem>
        //             <GridItem colSpan={2}>
        //             {/* <ColorModeSwitcher justifySelf="flex-end" />  */}

        //             </GridItem>

        //         </Grid>

        //     </Box>
        // </>
        <>
            {/* <nav className="navbar">
      <div className="navbar-brand">Your App Name</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="dropdown-toggle">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <a href="/dropdown-item-1">Dropdown Item 1</a>
            </li>
            <li className="dropdown-item">
              <a href="/dropdown-item-2">Dropdown Item 2</a>
            </li>
            <li className="divider"></li>
            <li className="dropdown-item">
              <a href="/dropdown-item-3">Dropdown Item 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav> */}
           
           <Container maxW='70%' m='auto'>               
            <Flex alignItems="center" justifyContent={'space-between'}>
                    <Img src={Logo} h='110px' objectPosition={'center'} />
                    <Spacer />
                    <HStack  gap='10px'>

                        <Top href="/home">
                            Home
                        </Top>

                        <Top href="/about">
                            About
                        </Top>
                        <Top href="/product">
                                Product
                            </Top>
                        <Text className="nav-item dropdown">
                            <HStack>
                            
                            <RiArrowDropDownLine/>
                            </HStack>
                           
                          
                            <Box className="dropdown-menu" >
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
                            </Box>
                        </Text>
                        {/* <Top href="/">
                            Client
                        </Top>

                        <Top href="/">
                            Dealers
                        </Top> */}

                        <Top href="/contact">
                            Contact
                        </Top>


                      
                    </HStack>
                </Flex>
                </Container>
            


        </>
    )
}
export default Navbar