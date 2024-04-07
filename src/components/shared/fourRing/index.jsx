import React from 'react'
import { SimpleGrid, Image, Box } from '@chakra-ui/react'
import Img1 from '../../../asset/Image/Rectangle 73.svg'
// import ImageSlider from "./imageSlider";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from 'react-responsive';

function index() {
    // const isLaptop = window.innerWidth > 768;
    const isLaptop = useMediaQuery({ minWidth: 1408 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1407 });
    return (
        <div>
            {
                isLaptop ?
                    <Carousel infiniteLoop>
                        {['1', '2', '3', '4'].map((slide) => {
                            return <SimpleGrid spacing={4} 
                            // templateColumns='repeat(auto-fill, minmax(340px, 1fr))' 
                            minChildWidth='340px'
                            justifyItems='center'
                            align={'center'}
                            // border={'2px solid black'}
                            >
                                {['1', '2', '3', '4'].map((ans) => (
                                    <Box
                                        overflow="hidden"
                                        maxW='sm' align='center'
                                        key={ans}
                                        // border={'2px solid black'}
                                    >
                                        <Image
                                            src={Img1}
                                            alt='Green double couch with wooden legs'
                                            w='full'
                                            objectFit='cover'
                                        />
                                        <button className="button-sy2">ADD TO CART</button>
                                    </Box>
                                ))}
                            </SimpleGrid>
                        })}
                    </Carousel> :
                    isTablet ?

                        <Carousel infiniteLoop>
                            {['1', '2'].map((slide) => {
                                return <SimpleGrid spacing={4} 
                                // templateColumns='repeat(auto-fill, minmax(340px, 1fr))' 
                                minChildWidth='340px'
                                justifyItems='center'>
                                    {['1', '2'].map((ans) => (
                                        <Box
                                            overflow="hidden"
                                            maxW='sm' align='center'
                                            key={ans}
                                        >
                                            <Image
                                                src={Img1}
                                                alt='Green double couch with wooden legs'
                                                w='full'
                                                objectFit='cover'
                                            />
                                            <button className="button-sy2">ADD TO CART</button>
                                        </Box>
                                    ))}
                                </SimpleGrid>
                            })}
                        </Carousel>

                        :

                        <Carousel infiniteLoop>
                            {['1', '2', '3', '4'].map((slide) => {
                                return <Box
                                    overflow="hidden"
                                    maxW='sm' align='center'
                                    key={slide}
                                    m={'auto'}
                                >
                                    <Image
                                        src={Img1}
                                        alt='Green double couch with wooden legs'
                                        w='full'
                                        objectFit='cover'
                                    />
                                    <button className="button-sy2">ADD TO CART</button>
                                </Box>
                            })}
                        </Carousel>

            }
        </div>
    )
}

export default index

