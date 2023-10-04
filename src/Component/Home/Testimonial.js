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
    
      // Custom Next Arrow Component
      const NextArrow = (props) => {
        return (
          <div className="arrow next" onClick={props.onClick}>
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
  

    return (
        <>
            <Container maxW='70%' m='auto' pt='40px' pb='60px'>
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
                        w='250px' 
                        m='auto'
                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Ankit Electricals Private Limited,
                        you will receive expert electrical construction services from
                        a Diamond Certified Provider. We offer reliable, quality work,
                        but you don't have to take our word for it. Read what our customers
                        have said about our services below."</Label>
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
                        w='250px' 
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Ankit Electricals Private Limited,
                        you will receive expert electrical construction services from
                        a Diamond Certified Provider. We offer reliable, quality work,
                        but you don't have to take our word for it. Read what our customers
                        have said about our services below."</Label>
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
                        w='250px' 
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Ankit Electricals Private Limited,
                        you will receive expert electrical construction services from
                        a Diamond Certified Provider. We offer reliable, quality work,
                        but you don't have to take our word for it. Read what our customers
                        have said about our services below."</Label>
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
                        w='250px' 
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Ankit Electricals Private Limited,
                        you will receive expert electrical construction services from
                        a Diamond Certified Provider. We offer reliable, quality work,
                        but you don't have to take our word for it. Read what our customers
                        have said about our services below."</Label>
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
                        w='250px' 
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Ankit Electricals Private Limited,
                        you will receive expert electrical construction services from
                        a Diamond Certified Provider. We offer reliable, quality work,
                        but you don't have to take our word for it. Read what our customers
                        have said about our services below."</Label>
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
                        w='250px' 
                        m='auto'
                        padding='30px'

                        fontFamily='sans-serif'
                    >
                        <Stack>
                            
                            <Label border='none !important' lineHeight='22px' >"With Ankit Electricals Private Limited,
                        you will receive expert electrical construction services from
                        a Diamond Certified Provider. We offer reliable, quality work,
                        but you don't have to take our word for it. Read what our customers
                        have said about our services below."</Label>
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




     
    
