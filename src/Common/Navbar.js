import { Box, Divider, Grid, GridItem, Img, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from '../Assets/mdlogo.png'
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Navbar = () => {
    return (
        <>
            <Box>
                <Grid
                    // h='200px'
                    templateColumns='repeat(8, 1fr)'
                    gap={4}
                >

                    <GridItem colSpan={2}>
                        <VStack>
                            <Img src={Logo} h='110px' />
                            {/* <Divider orientation='vertical'  h='100px' w='30px'/> */}

                        </VStack>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Grid templateColumns='repeat(7, 1fr)'
                            gap={3}

                        >
                            <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
                            _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
                                fontSize='14px'
                                fontWeight='500'
                                fontFamily='sans-serif'
                                cursor='pointer'
                                color='#545d66'
                                _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
                                >
                                    {/* <Link  > */}
                                Home
                                {/* </Link> */}
                                </Text></Box>
                        </GridItem>
                           
                            <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
                            _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
                                fontSize='14px'
                                fontWeight='500'
                                fontFamily='sans-serif'
                                cursor='pointer'
                                color='#545d66'
                                _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
                                >
                                    {/* <Link  > */}
                                Pages
                                {/* </Link> */}
                                </Text></Box>
                        </GridItem>
                           
                            <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
                            _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
                                fontSize='14px'
                                fontWeight='500'
                                fontFamily='sans-serif'
                                cursor='pointer'
                                color='#545d66'
                                _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
                                >
                                    {/* <Link  > */}
                                Service
                                {/* </Link> */}
                                </Text></Box>
                        </GridItem>
                           
                            <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
                            _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
                                fontSize='14px'
                                fontWeight='500'
                                fontFamily='sans-serif'
                                cursor='pointer'
                                color='#545d66'
                                _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
                                >
                                    {/* <Link  > */}
                                Project
                                {/* </Link> */}
                                </Text></Box>
                        </GridItem>
                           
                            <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
                            _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
                                fontSize='14px'
                                fontWeight='500'
                                fontFamily='sans-serif'
                                cursor='pointer'
                                color='#545d66'
                                _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
                                >
                                    {/* <Link  > */}
                                Shop
                                {/* </Link> */}
                                </Text></Box>
                        </GridItem>
                           
                            <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
                            _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
                                fontSize='14px'
                                fontWeight='500'
                                fontFamily='sans-serif'
                                cursor='pointer'
                                color='#545d66'
                                _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
                                >
                                    {/* <Link  > */}
                                Blog
                                {/* </Link> */}
                                </Text></Box>
                        </GridItem>
                           
                            <GridItem colSpan={1}><Box pt={'45px'}>    <Text   
                            _active={{borderBottom:'3px solid orange' ,   fontWeight:'600' ,color:'#000'}}
                                fontSize='14px'
                                fontWeight='500'
                                fontFamily='sans-serif'
                                cursor='pointer'
                                color='#545d66'
                                _hover={{borderBottom:'3px solid orange' ,  fontWeight:'600' ,color:'#000'}}
                                >
                                    {/* <Link  > */}
                                Contact
                                {/* </Link> */}
                                </Text></Box>
                        </GridItem>
                           
                          
                           
                          
                           
                        </Grid>


                    </GridItem>
                    <GridItem colSpan={2}>
                    {/* <ColorModeSwitcher justifySelf="flex-end" />  */}

                    </GridItem>

                </Grid>

            </Box>
        </>
    )
}
export default Navbar