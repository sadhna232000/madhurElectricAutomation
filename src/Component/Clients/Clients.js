import React, { useEffect } from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import { Box, Container, Grid, GridItem, Img, Stack } from "@chakra-ui/react";
import crushing from "../../Assets/crushingplant.jpg"
import hospital from "../../Assets/hospital.webp"
import { Label, MedHeading } from "../../Common/Style";
import oilplant from "../../Assets/oilplants.jpg"
import sugar from "../../Assets/sugar.jpg"
import school from "../../Assets/school.jpg"
import college from "../../Assets/college.jpg"
import houshingsociety from "../../Assets/Housing-society.avif"
import builing from "../../Assets/building.jpg"
import department from "../../Assets/department.jpg"
import cpwd from "../../Assets/cpwd.jpg"
import phed from "../../Assets/PHED.jpg"
import electricity from "../../Assets/electricityboard.jpg"
import riceplants from "../../Assets/ricemil.webp"
import dalmill from "../../Assets/dalmil.jpeg"
import cement from "../../Assets/cementfactory.jpeg"
import textiles from "../../Assets/textile.jpeg"
import hotel from "../../Assets/hotel.jpg"
import Footer from "../../Common/Footer";

const Clients = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, ["/clients"]);
    
    return (
        <>
            <Breadcrumbs name='OUR CLIENTS' home='Home' page='Our Clients' />

            <Container maxW={{base:'100%',sm:'100%',md:'100%' , lg:'75%',xl:'75%' ,'2xl':'75%'} } m='auto' py='40px' >
<Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)',xl:'repeat(3, 1fr)','2xl':'repeat(3, 1fr)'} } gap={10} rowGap={30}>
    <GridItem >
        <Box padding= '30px'  pb='20px !important'  m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={crushing} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Crushing Plant</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >A crushing plant is a machine used to reduce large rocks into smaller rocks, gravel, or rock dust.
 {/* It is commonly used in various industries. */}
  </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important'   m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={hospital} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Hospitals</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' > Hospitals have specific requirements of electric panel for their electrical systems 
{/* to ensure patient safety, continuous operation, and the support of critical medical equipment. */}
</Label>

            </Stack>
        </Box>
    </GridItem>
    
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={hotel} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Hotels</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >Hotels may have multiple subpanels located in an different areas of the facility. </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={oilplant} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Oil Plant</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
An "oil electrical panel" typically refers to an electrical distribution panel that uses oil as cooling. 
    </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={sugar} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Sugar Plant</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
Electrical panels used in sugar plant industries play a crucial role in powering and controlling.    </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={school} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>School Project</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
Electrical panels in a school are essential components of the electrical distribution system.   </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={college} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>College Project</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
Electrical panels in a College are essential components of the electrical distribution system.   </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={houshingsociety} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Houshing Society</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
An electrical panel in a housing society, also known as a residential electrical distribution panel. </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={builing} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Builder Segments</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
An electrical panel in a building segment, often referred to as a "subpanel" or "distribution board".</Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={department} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Goverment Department</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
Government department buildings typically have a  main electrical panel in their Electrical System. </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={cpwd} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>CPWD</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
CPWD projects, whether they involve government offices, public buildings, have a main electrical panel.</Label>
            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={phed} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>PHED</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
Electrical panels in PHED facilities include circuit breakers to protect individual circuits </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={electricity} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Electricity Board</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
An "electricity board" typically refers to a government agency or utility company responsible for generating, transmitting. </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={riceplants} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Rice Plants</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
Electrical panels play a crucial role in managing and controlling the electrical systems in various agricultural operations.</Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={dalmill} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Dal Mill</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
In larger dal milling facilities, subpanels may be used to distribute electrical power to specific sections or machines within the mill. </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={cement} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Cement Factory</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
In a cement factory, This main electrical distribution panel is responsible for supplying electricity to various parts of the factory. </Label>

            </Stack>
        </Box>
    </GridItem>
    <GridItem >
        <Box padding= '30px' pb='20px !important' m='auto' boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'> 
            <Stack gap='15px'>
<Img src={textiles} h='170px'/>
<MedHeading fontSize='20px !important' fontWeight='600'  color='#bd0000 !important'>Textiles Industries</MedHeading>
<Label border='none !important' cursor='auto !important' lineHeight='25px' >
Electrical panels in the textile industry play a crucial role in the production, control, and management of electrical power. </Label>

            </Stack>
        </Box>
    </GridItem>
  
    

</Grid>
            </Container>


          <Footer/>
        

        </>
    )
}
export default Clients