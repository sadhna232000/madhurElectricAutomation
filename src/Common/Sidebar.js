import { Box, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
const Sidebar =()=>{
  const navigate = useNavigate();

    return(
        <>
        
        <Stack gap={4}>
       
        <Box className={window.location.pathname === '/electrical-panel' ? 'actdive' : 'drop'} onClick={()=>navigate("/electrical-panel")}>Main LT Panels

                      </Box>
                      <Box className={window.location.pathname === '/motor-controls' ? 'actdive' : 'drop'} onClick={()=>navigate("/motor-controls")}> Motor Controls Panels
                      </Box>
                      <Box className={window.location.pathname === '/dg-synchronizing' ? 'actdive' : 'drop'} onClick={()=>navigate("/dg-synchronizing")}>DG Synchronizing Panel
                      </Box>
                   
                      <Box className={window.location.pathname === '/metering-panel' ? 'actdive' : 'drop'} onClick={()=>navigate("/metering-panel")}> Metering Panels
                      </Box>
       
                      <Box className={window.location.pathname === '/amf-panels' ? 'actdive' : 'drop'} onClick={()=>navigate("/amf-panels")}> AMF Panels
                      </Box>
                      <Box className={window.location.pathname === '/VFD-panel' ? 'actdive' : 'drop'} onClick={()=>navigate("/VFD-panel")}> VFD Panels
                      </Box>
                        <Box className={window.location.pathname === '/cabling' ? 'actdive' : 'drop'} onClick={()=>navigate("/cabling")}> Cabling
                      </Box>
        <Box className={window.location.pathname === '/earthing' ? 'actdive' : 'drop'} onClick={()=>navigate("/earthing")}> Earthing
                      </Box>
                      <Box className={window.location.pathname === '/breakers' ? 'actdive' : 'drop'} onClick={()=>navigate("/breakers")}> Breakers
                      </Box> 
                      <Box className={window.location.pathname === '/solar-panel' ? 'actdive' : 'drop'} onClick={()=>navigate("/solar-panel")}>Solar Panel
                      </Box> 
       
        
        <Box className={window.location.pathname === '/load-managements' ? 'actdive' : 'drop'} onClick={()=>navigate("/load-managements")}>Load Management Panels
                      </Box>
                     
                    
        <Box className={window.location.pathname === '/hospital-services' ? 'actdive' : 'drop'} onClick={()=>navigate("/hospital-services")}> Hospital Electrical Services
                      </Box>
        <Box className={window.location.pathname === '/electrical-stations' ? 'actdive' : 'drop'} onClick={()=>navigate("/electrical-stations")}> Electrical Sub Stations
                      </Box>
        <Box className={window.location.pathname === '/electrical-installation' ? 'actdive' : 'drop'} onClick={()=>navigate("/electrical-installation")}>Electrical Installation Services
                      </Box>
        <Box className={window.location.pathname === '/electrical-quality' ? 'actdive' : 'drop'} onClick={()=>navigate("/electrical-quality")}>Electrical Drive Quality
                      </Box>

       
       
       
      
   
    </Stack>
        </>
    )
}
export default Sidebar