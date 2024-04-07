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
    Divider,
    Grid,
    GridItem,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    VStack
} from '@chakra-ui/react';
// import './style.css'
import Img1 from '../../../../asset/Image/image 9.svg'
import Img2 from '../../../../asset/Image/Group 1467.svg'
import Img3 from '../../../../asset/Image/Frame 32.svg'
import Img4 from '../../../../asset/Image/Frame 33.svg'
import Img5 from '../../../../asset/Image/ph_gift.svg'
import Img6 from '../../../../asset/Image/payment2.svg'
import Img7 from '../../../../asset/Image/payment1.svg'
import ReactStars from "react-rating-stars-component";
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

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
        <Container maxW={{ base: 'auto', md: 'full' }} px={{ base: 1, md: 20 }} pt={'2%'}
            justifyContent={'space-between'}
        >
            <Stack direction={{ base: 'column', md: 'row' }}
                justifyContent="center"
                
                // gap='10'
                //  border={'2px solid red'} 
                alignItems={{ base: "center", md: "start" }}
            >
                {/* <Stack direction="row" spacing={6}> */}
                <Box ml={{ base: 0, md: 5 }} pos="relative" w={{base:"80%", md:"50%"}}>
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

                <Stack direction="column" w={{base:"80%", md:"50%"}} overflowY="auto" maxH={"700px"}
                    ml={{ base: 0, md: 10 }}
                >
                    <Text
                        fontSize="1.5rem"
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
                    >Metal: Sterling Silver</Text>


                    <HStack>
                        <Image src={Img3}></Image>
                        <Image src={Img4}></Image>
                    </HStack>
                    <Text textAlign={'left'}>Select Size</Text>
                    <Grid templateColumns='repeat(4, 1fr)' gap={'15px'} >
                        <GridItem w='50%' h='12' border={'1px solid black'} >5.9 in</GridItem>
                        <GridItem w='50%' h='12' border={'1px solid black'} >6.3 in</GridItem>
                        <GridItem w='50%' h='12' border={'1px solid black'} >7.1 in</GridItem>
                        <GridItem w='50%' h='12' border={'1px solid black'} >7.4 in</GridItem>
                        <GridItem w='50%' h='12' border={'1px solid black'} >8.3 in</GridItem>
                        <GridItem w='50%' h='12' border={'1px solid black'} >8.5 in</GridItem>
                    </Grid>
                    {/* <button className="button-sy2 button-sy5">ADD TO CART</button> */}
                    // Button from facebook.com
                    <Box
                        as='button'
                        height='24px'
                        lineHeight='0.2'
                        // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        padding={"23px"}
                        border='1px'
                        px='18px'
                        borderRadius='2px'
                        fontSize='19px'
                        fontWeight='semibold'
                        bg='#580140'
                        // borderColor='#ccd0d5'
                        color='white'
                    // _hover={{ bg: '#ebedf0' }}

                    >
                        Join Group
                    </Box>


                    {/* <VStack> */}
                    <HStack>
                    <Image src={Img6}></Image>
                    <Text textAlign={'left'}>Save to Wishlist</Text>
                    </HStack>
                    <HStack>
                    <Image src={Img7}></Image>
                    <Text textAlign={'left'}>Método de pago</Text>
                    </HStack>
                    {/* </VStack> */}

                    <Box border={'2px solid black'}>
                        <Image src={Img5} float="left"></Image>
                        <Text textAlign={'left'} fontSize="x-large">Smart Gift</Text>
                        <Text textAlign={'left'}>Lorem ipsum dolor sit amet consectetur. Sed commodo pellentesque arcu tristique et morbi.</Text>
                        {/* <button className="button-sy4 button-sy3">SEND AS A GIFT</button> */}
                        <Box
                            as='button'
                            height='24px'
                            lineHeight='0.2'
                            // w={'100px'}
                            // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            padding={"23px"}
                            border='1px solid #580140'
                            px='18px'
                            borderRadius='2px'
                            fontSize='19px'
                            fontWeight='semibold'
                            // bg='#580140'
                            // borderColor='#ccd0d5'
                            color='#580140'
                        >
                            SEND AS A GIFT
                        </Box>
                    </Box>

                    <Accordion allowMultiple>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                PRODUCT DETAIL
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                SIZE GUIDE
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                SHIPPING & RETURNS
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                COMPATIBILITY
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>
                </Stack>
            </Stack>
            {/* </Stack> */}


        </Container>
    );
};

export default ProductIntro;