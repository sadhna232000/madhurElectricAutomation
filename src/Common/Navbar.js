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
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Add state for the dropdown

  // Function to close the dropdown
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <HStack justifyContent='space-between' px='20px' className='reflex'  position="sticky" top="-1px" zIndex="9999999" bg='#fff' borderBottom='1px solid #80808038' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
         <Link href='/home'><Img src={Logo} h='65px' objectPosition={'center'} cursor='pointer' /></Link> 
          
          <IconButton
          fontSize= '30px'
          border= 'none'
          background= 'none'
          color= '#000 !important'
            aria-label="Open Menu"
            size="lg"
            ml={'auto'}
            icon={isOpen ? <VscThreeBars bg='none !important'/> : <VscThreeBars bg='none !important'/>}
            onClick={onToggle}
          />
          </HStack>
          <Collapse in={isOpen}  
           style={{
                position: 'sticky',
    top: '60px',
    zIndex: '999999',
    backgroundColor: '#fff',
    boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
               }}
               >
        <VStack p={4} alignItems="start" spacing={4}>
        <Box className={window.location.pathname === '/home' ? 'mbact' : 'mbnav'} 
        
        onClick={()=>{
          closeDropdown();
          navigate("/home")}}
        >Home     </Box>
        <Box className={window.location.pathname === '/about' ? 'mbact' : 'mbnav'} onClick={()=>{  closeDropdown(); navigate("/about")}}>About     </Box>
             
              <Menu>          
                       <MenuButton as={Button} _expanded={{ bg: '#bd0000', color: '#fff !important', borderRadius: '0px', }}border='none'  bg='none'textAlign='start' width='100% !important' p='7px 15px'  fontSize= '14px'
    fontWeight= '600'
    rightIcon={isOpen2? <RiArrowDropDownLine  fontSize='25px'/> : <RiArrowDropDownLine fontSize='25px' />}
    fontFamily= 'system-ui' 
    onClick={onToggle2}
    >
                  Service Range
               </MenuButton>
              
               <Collapse in={isOpen2}  style={{ width: '100%', }}
     > 
   
               <Grid  height= '250px !important' 
    //            height= '200px !important'
    overflow= 'auto !important'
    // width= '100% !important'   
             templateColumns="repeat(1, 1fr)" columnGap={20} rowGap={2} >
                   <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                   <Box className={window.location.pathname === '/electrical-panel' ? 'navside' : 'navside'} onClick={()=>navigate("/electrical-panel")}>Main LT Panels</Box>

                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/motor-controls' ? 'navside' : 'navside'} onClick={()=>navigate("/motor-controls")}> Motor Controls Panels</Box>

                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/metering-panel' ? 'navside' : 'navside'} onClick={()=>navigate("/metering-panel")}>Metering Panel</Box>

                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/amf-panels' ? 'navside' : 'navside'} onClick={()=>navigate("/AMF Panel")}>AMF Panel</Box>

                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/VFD-panel' ? 'navside' : 'navside'} onClick={()=>navigate("/VFD-panel")}> VFD Panels</Box>

                    </MenuItem>

        

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/earthing' ? 'navside' : 'navside'} onClick={()=>navigate("/earthing")}>  Earthing</Box>

                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/breakers' ? 'navside' : 'navside'} onClick={()=>navigate("/breakers")}>Breakers</Box>

                    </MenuItem>

                  

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px'   borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/load-managements' ? 'navside' : 'navside'} onClick={()=>navigate("/load-managements")}>Load Management Panels</Box>

                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/dg-synchronizing' ? 'navside' : 'navside'} onClick={()=>navigate("/dg-synchronizing")}> DG Synchronizing Panel</Box>

                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/cabling' ? 'navside' : 'navside'} onClick={()=>navigate("/cabling")}>Cabling</Box>

                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/solar-panel' ? 'navside' : 'navside'} onClick={()=>navigate("/solar-panel")}>Solar Panel</Box>

                    </MenuItem>


                   
                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/electrical-installation' ? 'navside' : 'navside'} onClick={()=>navigate("/electrical-installation")}>Electrical Installations Services</Box>

                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/hospital-services' ? 'navside' : 'navside'} onClick={()=>navigate("/hospital-services")}>Hospital Electrical Services</Box>

                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/electrical-quality' ? 'navside' : 'navside'} onClick={()=>navigate("/electrical-quality")}>Electrical Drive Quality</Box>

                    </MenuItem>


                    <MenuItem bg='#fff !important' border='none !important' p='5px 15px' borderBottom='1px dashed darkgray !important'>

                    <Box className={window.location.pathname === '/electrical-stations' ? 'navside' : 'navside'} onClick={()=>navigate("/electrical-stations")}>Electical Sub Stations</Box>

                    </MenuItem>


                  </Grid>
                 
               </Collapse>
               
               </Menu>
              <Box className={window.location.pathname === '/clients' ? 'mbact' : 'mbnav'} onClick={()=>navigate("/clients")}>Our Clients     
</Box>
              <Box className={window.location.pathname === '/contact' ? 'mbact' : 'mbnav'} onClick={()=>navigate("/contact")}>Contact     
</Box>
        </VStack>
      </Collapse>
  
    <Box  className='remenu' position="sticky" top="-1px" p='5px' zIndex="9999999" bg='#fff' borderBottom='1px solid #80808038' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
   
    <Container maxW='75%' m='auto' className='remenu' >       
    <Flex alignItems="center" justifyContent={'space-between'}>       
    <Link href='/home'>  <Img src={Logo} h='95px' objectPosition={'center'} />    </Link>     
      <Spacer />
          <HStack gap='10px'>            
           <Box className={window.location.pathname === '/home' ? 'act' : 'nav'}  onClick={()=>navigate("/home")}>Home
        </Box    >       
           <Box className={window.location.pathname === '/about' ? 'act' : 'nav'} onClick={()=>navigate("/about")}>About     
            </Box>         
                <Menu>          
                       <MenuButton bg='none !important' borderRadius= '50px' h='35px !important' as={Button} _expanded={{ bg: '#bd0000 !important', color: '#fff !important', borderRadius: '50px' }} rightIcon={<RiArrowDropDownLine  fontSize='20px'/>}>
                  Service Range
               </MenuButton>
             <MenuList p='20px' pt='15px' w='400px !important' bg='#fff !important' border='0.5px solid #e7e1e1'>

                  <Grid templateColumns="repeat(2, 1fr)" columnGap={5} rowGap={3} >
                   <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                   <Box className={window.location.pathname === '/electrical-panel' ? 'navside' : 'navside'} onClick={()=>navigate("/electrical-panel")}>Main LT Panels</Box>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/motor-controls' ? 'navside' : 'navside'} onClick={()=>navigate("/motor-controls")}> Motor Controls Panels</Box>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/metering-panel' ? 'navside' : 'navside'} onClick={()=>navigate("/metering-panel")}>Metering Panel</Box>
                    </MenuItem>
                  
                    <MenuItem bg='#fff !important' border='none !important' p='5px'  h='40px'borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/amf-panels' ? 'navside' : 'navside'} onClick={()=>navigate("/amf-panels")}>AMF Panel</Box>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/VFD-panel' ? 'navside' : 'navside'} onClick={()=>navigate("/VFD-panel")}> VFD Panels</Box>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/earthing' ? 'navside' : 'navside'} onClick={()=>navigate("/earthing")}>  Earthing</Box>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/breakers' ? 'navside' : 'navside'} onClick={()=>navigate("/breakers")}>Breakers</Box>
                    </MenuItem>
                          <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                          <Box className={window.location.pathname === '/load-managements' ? 'navside' : 'navside'} onClick={()=>navigate("/load-managements")}>Load Management Panels</Box>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/dg-synchronizing' ? 'navside' : 'navside'} onClick={()=>navigate("/dg-synchronizing")}> DG Synchronizing Panel</Box>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/cabling' ? 'navside' : 'navside'} onClick={()=>navigate("/cabling")}>Cabling</Box>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/solar-panel' ? 'navside' : 'navside'} onClick={()=>navigate("/solar-panel")}>Solar Panel</Box>
                    </MenuItem>
                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/electrical-installation' ? 'navside' : 'navside'} onClick={()=>navigate("/electrical-installation")}>Electrical Installations Services</Box>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/hospital-services' ? 'navside' : 'navside'} onClick={()=>navigate("/hospital-services")}>Hospital Electrical Services</Box>
                    </MenuItem>

                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/electrical-quality' ? 'navside' : 'navside'} onClick={()=>navigate("/electrical-quality")}>Electrical Drive Quality</Box>
                    </MenuItem>


                    <MenuItem bg='#fff !important' border='none !important' p='5px' h='40px' borderBottom='1px dashed darkgray !important'>
                    <Box className={window.location.pathname === '/electrical-stations' ? 'navside' : 'navside'} onClick={()=>navigate("/electrical-stations")}>Electical Sub Stations</Box>
                    </MenuItem>
                    </Grid>
                    </MenuList>
              </Menu>
              <Box className={window.location.pathname === '/clients' ? 'act' : 'nav'} onClick={()=>navigate("/clients")}>Our Clients
              </Box>
              <Box className={window.location.pathname === '/contact' ? 'act' : 'nav'} onClick={()=>navigate("/contact")} >Contact
              </Box>
            </HStack>
          </Flex>
        </Container>

    </Box>
    </>
  );
}

export default Navbar;



