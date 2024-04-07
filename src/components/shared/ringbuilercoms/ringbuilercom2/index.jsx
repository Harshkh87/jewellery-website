// import * as React from 'react';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
    Container,
    Heading,
    Stack,
    HStack,
    Text,
    useColorModeValue,
    Button,
    Image,
    Skeleton,
    Box,
    Link,
    Divider
} from '@chakra-ui/react';
import './style.css'
import Img1 from '../../../../asset/Image/image 9.svg'
import Img2 from '../../../../asset/Image/Group 1467.svg'
import ReactStars from "react-rating-stars-component";

const ProductIntro = () => {
    const [mainSliderIndex, setMainSliderIndex] = useState(0);

    const handleMainSliderChange = (index) => {
        setMainSliderIndex(index);
    };

    const thirdExample = {
        size: 30,
        count: 5,
        isHalf: false,
        value: 4,
        activecolor: "#580140",
        // onChange: (newValue) => {
        //   console.log(`Example 3: new value is ${newValue}`);
        // },
    };
    return (
        <Container maxW={{ base: 'auto', md: 'full' }} px={{ base: 10, md: 20 }} pt={'2%'} 
        justifyContent={'space-between'} >
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center"  gap='10'  >
                {/* <Stack direction="row" spacing={6}> */}
                <Box ml={{ base: 0, md: 5 }} pos="relative">
                    <Carousel
                        showArrows={true}
                        onChange={handleMainSliderChange}
                        selectedItem={mainSliderIndex}
                        infiniteLoop
                        autoPlay
                        interval={4000}
                        dynamicHeight
                        thumbWidth={75}
                        minW={{ base: 'auto', md: '30rem' }}
                        // width={490}
                    >
                        <div className="slide-content"><img className='imghh' src={Img1} alt="Product" /></div>
                        <div className="slide-content"><img className='imghh' src={Img2} alt="Product" /></div>
                        <div className="slide-content"><img className='imghh' src={Img1} al="tProduct" /></div>
                        <div className="slide-content"><img className='imghh' src={Img2} alt="Product" /></div>
                        <div className="slide-content"><img className='imghh' src={Img1} al="tProduct" /></div>
                        {/* <div><img src="http://via.placeholder.com/840x480" alt="Product" /></div> */}
                        {/* Add more images as needed */}
                    </Carousel>

                </Box>

                <Stack direction="column" ml={{ base: 0, md: 10 }} w={'65%'} >
                    <Text
                        fontSize="1.2rem"
                        textAlign="left"
                        lineHeight="1.375"
                        fontWeight="500"
                        maxW={{ base: '100%', md: '470px' }}
                        as='abbr'
                    >Ring</Text>
                    <Stack direction="row" >
                    <Text color='red' as='abbr' pr='8px'>₹47,20  </Text>
                    <Text color='#717171' as='del'>  ₹59,00 </Text>
                    </Stack>
                    <Stack direction={'row'} >
                    <Text
                        color={useColorModeValue('gray.700', 'gray.400')}
                        fontSize="0.5 rem"
                        // textAlign="left"
                        lineHeight="1.375"
                        fontWeight="300"
                        // maxW={{ base: '100%', md: '100%' }}
                        as='abbr'
                    >
                        Lorem ipsum dolor sit amet, consectetur
                    </Text>
                    
                    
                    <Text color='back' fontSize={{ base: "xs", sm: "xs", md: "xs" }} as='u'>LEARN MORE</Text>
                    </Stack>

                    <ReactStars {...thirdExample} />
                    <Divider my={4} />

                    <Text
                        fontSize="1.2rem"
                        textAlign="left"
                        lineHeight="1.375"
                        fontWeight="500"
                        // maxW={{ base: '100%', md: '470px' }}
                    >Head</Text>

                    <HStack spacing={5} gap={5}>
                    <Divider my={4} />
                    </HStack>
                </Stack>
            </Stack>
            {/* </Stack> */}
        </Container>
    );
};

export default ProductIntro;