import { Box, Link, Stack } from "@chakra-ui/react";
import React from "react";
const Sidebar =()=>{
    return(
        <>
        
        <Stack gap={10}>
       
        <Box className={window.location.pathname === '/electrical-panel' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/electrical-panel' ? 'actdive' : 'drop'} href='/electrical-panel'>Main LT Panels</Link> 
                      </Box>
                      <Box className={window.location.pathname === '/motor-controls' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/motor-controls' ? 'actdive' : 'drop'} href='/motor-controls'> Motor Controls Centers</Link> 
                      </Box>
                      <Box className={window.location.pathname === '/DG-sets' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/DG-sets' ? 'actdive' : 'drop'} href='/DG-sets'> DG Synchronizing Panel</Link> 
                      </Box>
                      <Box className={window.location.pathname === '/HT-LT-distribution-panel' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/HT-LT-distribution-panel' ? 'actdive' : 'drop'} href='/HT-LT-distribution-panel'>HT/LT Distribution Panel</Link> 
                      </Box>
                      <Box className={window.location.pathname === '/metering-panel' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/metering-panel' ? 'actdive' : 'drop'} href='/metering-panel'> Metering Panel</Link> 
                      </Box>
       
                      <Box className={window.location.pathname === '/amf-panels' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/amf-panels' ? 'actdive' : 'act-lik'} href='/amf-panels'> AMF Panels</Link> 
                      </Box>
                      <Box className={window.location.pathname === '/APFC-panel' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/APFC-panel' ? 'actdive' : 'drop'} href='/APFC-panel'> VFD Panels</Link> 
                      </Box>
     
                      <Box className={window.location.pathname === '/transmission-lines' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/transmission-lines' ? 'actdive' : 'drop'} href='/transmission-lines'> Transmission Lines</Link> 
                      </Box>
        <Box className={window.location.pathname === '/transformers' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/transformers' ? 'actdive' : 'drop'} href='/transformers'> Transformers</Link> 
                      </Box>
        <Box className={window.location.pathname === '/switch-yards' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/switch-yards' ? 'actdive' : 'drop'} href='/switch-yards'> Switch Yards</Link> 
                      </Box>
                      <Box className={window.location.pathname === '/breakers' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/breakers' ? 'actdive' : 'drop'} href='/breakers'> Breakers</Link> 
                      </Box>
       
        
        <Box className={window.location.pathname === '/industrial-panels' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/industrial-panels' ? 'actdive' : 'drop'} href='/industrial-panels'>Load Management Panels</Link> 
                      </Box>
                     
                      <Box className={window.location.pathname === '/cabel-earthling' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/cabel-earthling' ? 'actdive' : 'drop'} href='/cabel-earthling'> Cabel Earthling</Link> 
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
        <Box className={window.location.pathname === '/electrical-analytes' ? 'actdive' : 'drop'}>
                    <Link  className={window.location.pathname === '/electrical-analytes' ? 'actdive' : 'drop'} href='/electrical-analytes'> Electrical Drivesquality Analytes</Link> 
                      </Box>

       
       
       
      
   {/* <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel href="/home">Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel>
   <Prolabel>Juction Box</Prolabel> */}
    </Stack>
        </>
    )
}
export default Sidebar