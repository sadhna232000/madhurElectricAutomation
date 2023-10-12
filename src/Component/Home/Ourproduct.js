import { Box, Center, Circle, Container, Divider, Grid, GridItem, IconButton, Img, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Label, MedHeading } from "../../Common/Style";
// import product from "../../Assets/ourproduct.jpg"
import { ImPhone } from "react-icons/im";
import { IoIosSpeedometer, IoIosSwitch } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiBuildingFill, RiWirelessChargingFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Ourproduct = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isMouse, setIsMouse] = useState(false);
    const [isMouseHover, setIsMouseHover] = useState(false);
    const [isHoverRed, setIsHoverRed] = useState(false);
    const [isHoverBlue, setIsHoverBlue] = useState(false);
    const [isHoverGreen, setIsHoverGreen] = useState(false);
    // const [isHoverRed, setIsHoverRed] = useState(false);
    // const [isHoverRed, setIsHoverRed] = useState(false);
  
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    
    const handleRed= () => {
        setIsHoverRed(false);
      };
    const EnterRed = () => {
        setIsHoverRed(false);
      };
    const handleBlue= () => {
        setIsHoverBlue(false);
      };
    const EnterBlue = () => {
        setIsHoverBlue(true);
      };
    const handleGreen= () => {
        setIsHoverGreen(false);
      };
    const EnterGreen = () => {
        setIsHoverGreen(true);
      };
    const mouseEnter = () => {
        setIsMouseHover(true);
      };
    const mouseLeave = () => {
        setIsMouseHover(false);
      };
     
      const handleEnter = () => {
        setIsMouse(true);
      };
      const handleLeave = () => {
        setIsMouse(false);
      };
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
    autoplaySpeed: 3000
      };
      const settingsA = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    arrows: false, 
      };
    return (
        <>
            {/* <Box  position='relative'> */}
            <Container maxW='75%' m='auto' pt='80px' pb='0px' className="remenu">
                <MedHeading pb='15px' textAlign='center' fontWeight='500' fontSize='18px !important'>BEST ELECTRICAL SERVICES</MedHeading>
                {/* <Divider  orientation='horizontal' border='1.5px solid #bd0000' width='80px' m='auto' /> */}
                <Text
                    color='#333333'
                    fontFamily='sans-serif'
                    textAlign={'center'}
                    fontSize='2.4rem' fontWeight='600' padding='2px 40px'
                    lineHeight='51px'>

                    "Superior Electrical Services for Optimal Performance and Efficiency."
                </Text>
                <Box py='4rem'>
                <Slider {...settings}>
      <div>
      <Center w='290px'  h='250px' m='auto' onMouseEnter={handleMouseEnter} onClick={()=>navigate("/electrical-panel")}
      onMouseLeave={handleMouseLeave}  backgroundColor={isHovered ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='10px' px='40px'>
                                <IoIosSwitch color={isHovered ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isHovered ? '#fff !important' : '#333333'}>Main LT Panels</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isHovered ? '#fff !important' :' #808080'}>
                                A "Main LT Panel"  refers to a Low-Tension or Low-Voltage Main Distribution Panel . 
                                </Label>
                            <Circle cursor='pointer'  size='45px' bg={isHovered ?  '#fff':'#bd0000' } color={isHovered ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center  w='290px'  h='250px' m='auto'  onMouseEnter={handleEnter} onClick={()=>navigate("/metering-panel")}
      onMouseLeave={handleLeave}  backgroundColor={isMouse ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='10px' px='40px'>
                                <IoIosSpeedometer color={isMouse ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isMouse ? '#fff !important' : '#333333'}>Metering panel</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isMouse ? '#fff !important' :' #808080'}> 
                             An electrical enclosure  that houses various electrical meters equipment.
                             </Label>
                            <Circle cursor='pointer'  size='45px' bg={isMouse ?  '#fff':'#bd0000' } color={isMouse ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center w='290px'  h='250px' m='auto'  onMouseEnter={mouseEnter} onClick={()=>navigate("/amf-panels")}
      onMouseLeave={mouseLeave}  backgroundColor={isMouseHover ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='5px' px='40px'>
                                <RiWirelessChargingFill color={isMouseHover ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isMouseHover ? '#fff !important' : '#333333'}> AMF Panels</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isMouseHover ? '#fff !important' :' #808080'}>
                                AMF stands for "Auto Mains Failure," and AMF panels, also known as Automatic Mains Failure panels.
                                 </Label>
                            <Circle cursor='pointer'  size='45px' bg={isMouseHover ?  '#fff':'#bd0000' } color={isMouseHover ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
     
   
      <div>
      <Center w='290px'  h='250px' m='auto'  onMouseEnter={EnterBlue} onClick={()=>navigate("/VFD-panel")}
      onMouseLeave={handleBlue}  backgroundColor={isHoverBlue ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='11px' px='40px'>
                                <RiBuildingFill color={isHoverBlue ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isHoverBlue ? '#fff !important' : '#333333'}>VFD Panels</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isHoverBlue ? '#fff !important' :' #808080'}>
                                VFD stands for Variable Frequency Drive, and  are electrical control panels .
                                </Label>
                            <Circle cursor='pointer' size='45px' bg={isHoverBlue ?  '#fff':'#bd0000' } color={isHoverBlue ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center w='290px'  h='250px' m='auto'  onMouseEnter={EnterGreen} onClick={()=>navigate("/breakers")}
      onMouseLeave={handleGreen}  backgroundColor={isHoverGreen ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='10px' px='40px'>
                                <GiElectric color={isHoverGreen ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isHoverGreen ? '#fff !important' : '#333333'}>Breakers</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isHoverGreen ? '#fff !important' :' #808080'}>
                                In electrical engineering, circuit breakers are safety devices designed.
                                </Label>
                            <Circle cursor='pointer'  size='45px' bg={isHoverGreen ?  '#fff':'#bd0000' } color={isHoverGreen ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      
    </Slider>
    </Box>
                
            </Container>
            <Box className="reslider">
            <Container maxW='100%' m='auto' pt='30px' pb='0px' >
                <MedHeading pb='15px' textAlign='center' fontWeight='500' fontSize='18px !important'>BEST ELECTRICAL SERVICES</MedHeading>
                {/* <Divider  orientation='horizontal' border='1.5px solid #bd0000' width='80px' m='auto' /> */}
                <Text
                    color='#333333'
                    fontFamily='sans-serif'
                    textAlign={'center'}
                    fontSize='1.4rem' fontWeight='600' 
                    lineHeight='30px'>

                    "Superior Electrical Services for Optimal Performance and Efficiency."
                </Text>
                <Box py='2rem'>
                <Slider {...settingsA}>
      <div>
      <Center   h='250px' m='auto' onMouseEnter={handleMouseEnter} onClick={()=>navigate("/electrical-panel")}
      onMouseLeave={handleMouseLeave}  backgroundColor={isHovered ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='10px' px='10px'>
                                <IoIosSwitch color={isHovered ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isHovered ? '#fff !important' : '#333333'}>Main LT Panels</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isHovered ? '#fff !important' :' #808080'}>
                                                                A "Main LT Panel"  refers to a Low-Tension or Low-Voltage Main Distribution Panel . 
 </Label>
                            <Circle cursor='pointer'  size='45px' bg={isHovered ?  '#fff':'#bd0000' } color={isHovered ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center    h='250px' m='auto'  onMouseEnter={handleEnter} onClick={()=>navigate("/metering-panel")}
      onMouseLeave={handleLeave}  backgroundColor={isMouse ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='10px' px='10px'>
                                <IoIosSpeedometer color={isMouse ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isMouse ? '#fff !important' : '#333333'}>Metering panel</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isMouse ? '#fff !important' :' #808080'}>  an electrical enclosure  that houses various electrical meters equipment</Label>
                            <Circle cursor='pointer'  size='45px' bg={isMouse ?  '#fff':'#bd0000' } color={isMouse ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center  h='250px' m='auto'  onMouseEnter={mouseEnter} onClick={()=>navigate("/VFD-panel")}
      onMouseLeave={mouseLeave}  backgroundColor={isMouseHover ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='5px' px='10px'>
                                <RiWirelessChargingFill color={isMouseHover ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isMouseHover ? '#fff !important' : '#333333'}>VFD Panels</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isMouseHover ? '#fff !important' :' #808080'}>
                            VFD stands for Variable Frequency Drive, and  are electrical control panels .
                                 </Label>
                            <Circle cursor='pointer'  size='45px' bg={isMouseHover ?  '#fff':'#bd0000' } color={isMouseHover ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
     
   
      <div>
      <Center   h='250px' m='auto'  onMouseEnter={EnterBlue} onClick={()=>navigate("/amf-panels")}
      onMouseLeave={handleBlue}  backgroundColor={isHoverBlue ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='11px' px='10px'>
                                <RiBuildingFill color={isHoverBlue ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isHoverBlue ? '#fff !important' : '#333333'}> AMF Panels</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isHoverBlue ? '#fff !important' :' #808080'}>
                            AMF stands for "Auto Mains Failure," and AMF panels, also known as Automatic Mains Failure panels.
                                 </Label>
                            <Circle cursor='pointer' size='45px' bg={isHoverBlue ?  '#fff':'#bd0000' } color={isHoverBlue ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      <div>
      <Center  h='250px' m='auto'  onMouseEnter={EnterGreen} onClick={()=>navigate("/breakers")}
      onMouseLeave={handleGreen}  backgroundColor={isHoverGreen ? '#bd0000' : 'rgb(226 229 236)' }   
                    >
                        <VStack textAlign='center' gap='10px' px='10px'>
                                <GiElectric color={isHoverGreen ? '#fff' : '#bd0000'} fontSize={'35px'} />
                            <MedHeading fontSize='20px !important' fontWeight='500' color={isHoverGreen ? '#fff !important' : '#333333'}>Breakers</MedHeading>
                            <Label border='none !important' lineHeight='25px' color={isHoverGreen ? '#fff !important' :' #808080'}>
                            In electrical engineering, circuit breakers are safety devices designed.
                                 </Label>
                            <Circle cursor='pointer'  size='45px' bg={isHoverGreen ?  '#fff':'#bd0000' } color={isHoverGreen ?'#bd0000':  '#fff'}>
                                <BsArrowRight fontSize='25px' />
                            </Circle>
                        </VStack>
                    </Center>
      </div>
      
    </Slider>
    </Box>
                
            </Container>
            </Box>
        </>
    )
}
export default Ourproduct;