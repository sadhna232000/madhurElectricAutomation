import { Box, Container, Divider, Grid, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Label, MedHeading, Prolabel } from "../../Common/Style";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonial = () => {
    const PrevArrow = (props) => {
        return (
          <div className="arrow prev" onClick={props.onClick}>
            {/* Insert your previous arrow icon or component here */}
            <span>&lt;</span>
          </div>
        );
      };
    const PrevSArrow = (props) => {
        return (
          <div className="arrow prevS" onClick={props.onClick}>
            {/* Insert your previous arrow icon or component here */}
            <span>&lt;</span>
          </div>
        );
      };
    
      // Custom Next Arrow Component
      const NextArrow = (props) => {
        return (
          <div className="arrow next" onClick={props.onClick}>
            {/* Insert your next arrow icon or component here */}
            <span>&gt;</span>
          </div>
        );
      };
      const NextGArrow = (props) => {
        return (
          <div className="arrow nextG" onClick={props.onClick}>
            {/* Insert your next arrow icon or component here */}
            <span>&gt;</span>
          </div>
        );
      };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Custom previous arrow component or icon
    nextArrow: <NextArrow />,
  };
  const settingsA = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevSArrow />, // Custom previous arrow component or icon
    nextArrow: <NextGArrow />,
  };
  

    return (
        <>
            <Container maxW='75%' m='auto' pt='40px' pb='0px'  className="remenu">
            <MedHeading pb='15px'>TESTIMONIAL</MedHeading>
                        <Divider orientation='horizontal'  border='1.5px solid #bd0000' width='100px' />                {/* <Divider  orientation='horizontal' border='1.5px solid #bd0000' width='80px' m='auto' /> */}
                <Text
                    color='#333333'
                    fontFamily='sans-serif'
                    textAlign={'start'}
                    fontSize='2rem' fontWeight='600' 
                    pt='40px'
                    lineHeight='20px'>
                 CLIENT REVIEW
                </Text>
                <Box  py='80px'>
                <Slider {...settings} >
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        padding='30px'
                        w='350px' 
                        m='auto'
                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            I would not hesitate to recommend your services . Your professionalism, attention to detail, and commitment to customer satisfaction set you apart from other companies in the industry."</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        w='350px' 
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            The initial phone conversation was not only helpful but also friendly. 
                            I greatly appreciated  fair pricing structure provided by your company. There were no hidden costs or surprises throughout the process.</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        w='350px' 
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            The technicians who worked on my electrical problem were not only skilled but also efficient. They completed the necessary repairs promptly, ensuring that my electrical systems were safe and functional once again."</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        w='350px' 
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            Your team promptly scheduled an appointment and conducted a thorough assessment of the electrical problem. They took the time to explain the issue in simple terms and discussed potential solutions."</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        w='350px' 
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            Throughout the project, your team maintained clear and open communication. They explained the scope of work, provided updates on progress, and addressed any questions or concerns I had."</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                      w='350px' 
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            The quality of the electrical work performed is evident in the results. I am extremely satisfied with the finished product, and I have complete confidence in the safety and functionality of the electrical systems ."</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      {/* Add more slides as needed */}
    </Slider>
    </Box>

            </Container>

{/* Mobile view */}
            <Container maxW='100%' m='auto' className="reslider" pt="20px">
            <MedHeading pb='10px' fontSize='18px !important' textAlign='center'>TESTIMONIAL</MedHeading>
                        <Divider orientation='horizontal'  m='auto' border='1.5px solid #bd0000' width='140px' />                
                <Text
                    color='#333333'
                    fontFamily='sans-serif'
                    textAlign={'start'}
                    fontSize='20px' fontWeight='600' 
                    pt='40px'
                    lineHeight='8px'>
                 CLIENT REVIEW
                </Text>
                <Box   py='35px'>
                <Slider {...settingsA} >
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        padding='30px'
                        m='auto'
                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            I would not hesitate to recommend your services . Your professionalism, attention to detail, and commitment to customer satisfaction set you apart from other companies in the industry."</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            The initial phone conversation was not only helpful but also friendly. 
                            I greatly appreciated  fair pricing structure provided by your company. There were no hidden costs or surprises throughout the process.</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            The technicians who worked on my electrical problem were not only skilled but also efficient. They completed the necessary repairs promptly, ensuring that my electrical systems were safe and functional once again."</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            Your team promptly scheduled an appointment and conducted a thorough assessment of the electrical problem. They took the time to explain the issue in simple terms and discussed potential solutions."</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            Throughout the project, your team maintained clear and open communication. They explained the scope of work, provided updates on progress, and addressed any questions or concerns I had."</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      <div>
        <h3>  <Box background='#f8f8f8 '
                        border='1px solid #f1f1f1'
                        fontWeight='500'
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Madhur Electric Automation,
                            The quality of the electrical work performed is evident in the results. I am extremely satisfied with the finished product, and I have complete confidence in the safety and functionality of the electrical systems ."</Label>
                            <HStack gap={4}>
                                <MedHeading fontSize='18px !important' fontWeight='600' color='#bd0000 !important'>John Doe</MedHeading>
                                <Text fontStyle='italic' fontWeight='300' fontSize='12px'  color='#808080'>Company name</Text>
                            </HStack>
                        </Stack>
                    </Box></h3>
      </div>
      {/* Add more slides as needed */}
    </Slider>
    </Box>
                {/* <Grid templateColumns='repeat(3, 1fr)' gap='60px' py='40px'> */}
                  
                  
                  
             


            {/* </Grid> */}

            </Container>

        </>
    )
}
export default Testimonial




     
    
