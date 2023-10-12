import React, { useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  HStack,
  VStack,
  IconButton,
  useDisclosure,
  Collapse,
  Text,
  Button,
  Link,
  MenuItem,
  Grid,
  MenuList,
  Img,
  Menu, MenuButton, Container
} from '@chakra-ui/react';

// import Logo from '../Assets/mdlogo.png'
import { ColorModeSwitcher } from "../ColorModeSwitcher";
// import { Box, Flex, Text, Button, Spacer, , MenuList, MenuItem, Img, Container, HStack, Grid, GridItem, Link, MenuOptionGroup, MenuItemOption, MenuDivider, Image } from '@chakra-ui/react';
import { Label, Top } from "./Style";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { VscThreeBars } from 'react-icons/vsc';
import Logo from "../Assets/mdlogo.png"

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
  // const [isMobile, setIsMobile] = useState(false);

  // const handleResize = () => {
  //   setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  // };

  // // Add a resize event listener to check for changes in screen size
  // React.useEffect(() => {
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <>
      <Flex justifyContent='space-between' px='20px' className='reflex'  position="sticky" top="-1px" zIndex="9999999" bg='#fff' borderBottom='1px solid #80808038' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
          <Img src={Logo} h='65px' objectPosition={'center'} />
          
          <IconButton
          fontSize= '30px'
          border= 'none'
          background= 'none'
          color= '#000 !important'
            aria-label="Open Menu"
            size="lg"
            ml={'auto'}
            icon={isOpen ? <VscThreeBars/> : <VscThreeBars/>}
            onClick={onToggle}
          />
          </Flex>
          <Collapse in={isOpen}>
        <VStack p={4} alignItems="start" spacing={4}>
              <Link className={window.location.pathname === '/home' ? 'mbact' : 'mbnav'}href='/home' >Home</Link>
              <Link className={window.location.pathname === '/about' ? 'mbact' : 'mbnav'} href='/about'> About</Link>
              <Menu>          
                       <MenuButton as={Button} _expanded={{ bg: '#bd0000', color: '#fff !important', borderRadius: '0px', }}border='none'  bg='none'textAlign='start' width='100% !important' p='7px 15px'  fontSize= '14px'
    fontWeight= '600'
    rightIcon={isOpen2? <RiArrowDropDownLine /> : <RiArrowDropDownLine />}
    fontFamily= 'system-ui' 
    onClick={onToggle2}
    >
                  Service Range
               </MenuButton>
              
               <Collapse in={isOpen2} >
               <Grid templateColumns="repeat(1, 1fr)" columnGap={20} rowGap={2} >
                   <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                  <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href='/electrical-panel'>Main LT Panels</Link>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer'
                        href="/motor-controls"> Motor Controls Panels</Link>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/metering-panel">Metering Panel</Link>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/amf-panels">AMF Panel</Link>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/APFC-panel"> VFD Panels</Link>
                    </MenuItem>
                    {/* <MenuItem bg='#fff !important' border='none !important'  p='5px 15px'borderBottom='1px dashed darkgray !important'> */}

                    {/* <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer' href="/transmission-lines">Transmission Lines</Link>
    </MenuItem> */}

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/switch-yards"> Earthing</Link>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/breakers">Breaker</Link>
                    </MenuItem>

                    {/* <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer' href="/transformers">Transformers</Link>
    </MenuItem> */}

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px'   borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/industrial-panels">Load Management Panels</Link>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer'
                        href="/DG-sets"> DG Synchronizing Panel</Link>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer'
                        href="/cabel-earthling">Cabling</Link>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer'
                        href="/solar-panel">Solar Panel</Link>
                    </MenuItem>


                    {/* <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer' href="/HT-LT-distribution-panel">HT / LT Distribution Panel</Link>
    </MenuItem> */}
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/electrical-installation">Electrical Installations Services</Link>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/hospital-services">Hospital Electrical Services</Link>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/electrical-analytes">Electrical Drive Quality</Link>
                    </MenuItem>


                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/electrical-stations">Electical Sub Stations</Link>
                    </MenuItem>


                  </Grid>

               </Collapse>
               </Menu>
              <Link className={window.location.pathname === '/clients' ? 'mbact' : 'mbnav'} href='/clients'> Our Clients</Link>
              <Link className={window.location.pathname === '/contact' ? 'mbact' : 'mbnav'} href='/contact'> Contact</Link>
         
        </VStack>
      </Collapse>
  
    <Box  className='remenu' position="sticky" top="-1px" p='5px' zIndex="9999999" bg='#fff' borderBottom='1px solid #80808038' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
   
    <Container maxW='75%' m='auto' className='remenu' >       
    <Flex alignItems="center" justifyContent={'space-between'}>       
      <Img src={Logo} h='95px' objectPosition={'center'} />         
      <Spacer />
          <HStack gap='10px'>            
           <Box className={window.location.pathname === '/home' ? 'act' : 'nav'}>
              <Link className={window.location.pathname === '/home' ? 'active' : 'nav'} href='/home'> Home</Link>
        </Box    >       
           <Box className={window.location.pathname === '/about' ? 'act' : 'nav'} href='/about'>     
                     <Link className={window.location.pathname === '/about' ? 'active' : 'nav'} href='/about'> About</Link>
            </Box>         
                <Menu>          
                       <MenuButton bg='none !important' borderRadius= '50px' as={Button} _expanded={{ bg: '#bd0000 !important', color: '#fff !important', borderRadius: '50px' }} rightIcon={<RiArrowDropDownLine  fontSize='20px'/>}>
                  Service Range
               </MenuButton>
             <MenuList p='20px' pt='15px' w='400px !important' bg='#fff !important' border='0.5px solid #e7e1e1'>

                  <Grid templateColumns="repeat(2, 1fr)" columnGap={5} rowGap={3} >
                   <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                  <Link
                        fontSize='14px'
                        // borderBottom='1px dashed darkgray !important'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href='/electrical-panel'>Main LT Panels</Link>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer'
                        href="/motor-controls"> Motor Controls Panels</Link>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/metering-panel">Metering Panel</Link>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px'  h='40px'borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/amf-panels">AMF Panel</Link>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/APFC-panel"> VFD Panels</Link>
                    </MenuItem>
                    {/* <MenuItem bg='#fff !important' border='none !important'  p='5px'borderBottom='1px dashed darkgray !important'> */}

                    {/* <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer' href="/transmission-lines">Transmission Lines</Link>
    </MenuItem> */}

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/switch-yards"> Earthing</Link>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/breakers">Breaker</Link>
                    </MenuItem>

                    {/* <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer' href="/transformers">Transformers</Link>
    </MenuItem> */}

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/industrial-panels">Load Management Panels</Link>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer'
                        href="/DG-sets"> DG Synchronizing Panel</Link>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer'
                        href="/cabel-earthling">Cabling</Link>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer'
                        href="/solar-panel">Solar Panel</Link>
                    </MenuItem>


                    {/* <MenuItem bg='#fff !important' border='none !important' p='5px' borderBottom='1px dashed darkgray !important'>
      
      <Link 
    fontSize= '14px'
    paddingBottom='5px'
    fontWeight= '500'
    letterSpacing='1px'
    fontFamily= 'sans-serif'
    color= '#808080'
           textDecoration='none !important'
            cursor='pointer' href="/HT-LT-distribution-panel">HT / LT Distribution Panel</Link>
    </MenuItem> */}
                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/electrical-installation">Electrical Installations Services</Link>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/hospital-services">Hospital Electrical Services</Link>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/electrical-analytes">Electrical Drive Quality</Link>
                    </MenuItem>


                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>

                      <Link
                        fontSize='14px'
                        paddingBottom='5px'
                        fontWeight='500'
                        letterSpacing='1px'
                        fontFamily='sans-serif'
                        color='#808080'
                        textDecoration='none !important'
                        cursor='pointer' href="/electrical-stations">Electical Sub Stations</Link>
                    </MenuItem>


                  </Grid>

                </MenuList>
              </Menu>
              <Box className={window.location.pathname === '/clients' ? 'act' : 'nav'}>
                <Link className={window.location.pathname === '/clients' ? 'active' : 'nav'} href='/clients'> Our Clients</Link>
              </Box>
              <Box className={window.location.pathname === '/contact' ? 'act' : 'nav'}>
                <Link className={window.location.pathname === '/contact' ? 'active' : 'nav'} href='/contact'> Contact</Link>
              </Box>




            </HStack>
          </Flex>
        </Container>

    </Box>
    </>
  );
}

export default Navbar;



//       
// {/* /*Mobile view navbar */}
//       <Box
//       className="respnev2"
//         position="sticky"
//         top="-1px"
//         p="5px"
//         zIndex="9999999"
//         bg="#fff"
//         borderBottom="1px solid #80808038"
//         boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
//       >
//         <Container maxW="100%" m="auto">
//           <Flex
// justifyContent='space-between'            alignItems="center"
//           >
//             <Img src={Logo} h="95px" objectPosition="center" />
//             <Spacer />

//             <Menu>
//               <MenuButton
//                 as={Button}
//                 _expanded={{
//                   bg: "#bd0000",
//                   color: "#fff !important",
//                   // borderRadius: "50px"
//                 }}
//                 rightIcon={<VscThreeBars />}
//               >
               
//               </MenuButton>
//               <MenuList>
//     <MenuItem><Link className ='nav' href='/home'> Home</Link></MenuItem>
//     <MenuItem>Create a Copy</MenuItem>
//     <MenuItem>Mark as Draft</MenuItem>
//     <MenuItem>Delete</MenuItem>
//     <MenuItem>Attend a Workshop</MenuItem>
//   </MenuList>
//             </Menu>

//             {/* <Box className={window.location.pathname === "/contact" ? "act" : "nav"}>
//               <Link className={window.location.pathname === "/contact" ? "active" : "nav"} href="/contact">Contact</Link>
//             </Box> */}
//           </Flex>
//         </Container>
//       </Box>



//     </>
//   )
// }
// export default Navbar