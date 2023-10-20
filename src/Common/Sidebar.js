import { Box, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
const Sidebar =()=>{
  const navigate = useNavigate();

    return(
        <>
        
        <Stack gap={4}>
       
        <Box className={window.location.pathname === '/electrical-panel' ? 'actdive' : 'drop'} onClick={()=>navigate("/electrical-panel")}>Main LT Panels

                    {/* <Link  className={window.location.pathname === '/electrical-panel' ? 'actdive' : 'drop'} href='/electrical-panel'></Link>  */}
                      </Box>
                      <Box className={window.location.pathname === '/motor-controls' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/motor-controls' ? 'actdive' : 'drop'} href='/motor-controls'> Motor Controls Panels</Link> 
                      </Box>
                      <Box className={window.location.pathname === '/dg-synchronizing' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/dg-synchronizing' ? 'actdive' : 'drop'} href='/dg-synchronizing'> DG Synchronizing Panel</Link> 
                      </Box>
                      {/* <Box className={window.location.pathname === '/HT-LT-distribution-panel' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/HT-LT-distribution-panel' ? 'actdive' : 'drop'} href='/HT-LT-distribution-panel'>HT/LT Distribution Panel</Link> 
                      </Box> */}
                      <Box className={window.location.pathname === '/metering-panel' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/metering-panel' ? 'actdive' : 'drop'} href='/metering-panel'> Metering Panels</Link> 
                      </Box>
       
                      <Box className={window.location.pathname === '/amf-panels' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/amf-panels' ? 'actdive' : 'act-lik'} href='/amf-panels'> AMF Panels</Link> 
                      </Box>
                      <Box className={window.location.pathname === '/VFD-panel' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/VFD-panel' ? 'actdive' : 'drop'} href='/VFD-panel'> VFD Panels</Link> 
                      </Box>
     
                      {/* <Box className={window.location.pathname === '/transmission-lines' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/transmission-lines' ? 'actdive' : 'drop'} href='/transmission-lines'> Transmission Lines</Link> 
                      </Box> */}
        {/* <Box className={window.location.pathname === '/transformers' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/transformers' ? 'actdive' : 'drop'} href='/transformers'> Transformers</Link> 
                      </Box>*/}
                        <Box className={window.location.pathname === '/cabling' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/cabling' ? 'actdive' : 'drop'} href='/cabling'> Cabling </Link> 
                      </Box>
        <Box className={window.location.pathname === '/earthing' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/earthing' ? 'actdive' : 'drop'} href='/earthing'> Earthing</Link> 
                      </Box>
                      <Box className={window.location.pathname === '/breakers' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/breakers' ? 'actdive' : 'drop'} href='/breakers'> Breakers</Link> 
                      </Box> 
                      <Box className={window.location.pathname === '/solar-panel' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/solar-panel' ? 'actdive' : 'drop'} href='/solar-panel'> Solar Panel</Link> 
                      </Box> 
       
        
        <Box className={window.location.pathname === '/load-managements' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/load-managements' ? 'actdive' : 'drop'} href='/load-managements'>Load Management Panels</Link> 
                      </Box>
                     
                    
        <Box className={window.location.pathname === '/hospital-services' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/hospital-services' ? 'actdive' : 'drop'} href='/hospital-services'> Hospital Electrical Services</Link> 
                      </Box>
        <Box className={window.location.pathname === '/electrical-stations' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/electrical-stations' ? 'actdive' : 'drop'} href='/electrical-stations'> Electrical Sub Stations</Link> 
                      </Box>
        <Box className={window.location.pathname === '/electrical-installation' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/electrical-installation' ? 'actdive' : 'drop'} href='/electrical-installation'>Electrical Installation Services</Link> 
                      </Box>
        <Box className={window.location.pathname === '/electrical-quality' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/electrical-quality' ? 'actdive' : 'drop'} href='/electrical-quality'> Electrical Drive Quality</Link> 
                      </Box>

       
       
       
      
   
    </Stack>
        </>
    )
}
export default Sidebar