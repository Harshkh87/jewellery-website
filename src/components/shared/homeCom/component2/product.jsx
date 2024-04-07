import React from 'react'
import { SimpleGrid, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import Img1 from './gold.jpg'
// import Img2 from './sabri.jpg'
// import Img3 from './golden-ring.jpg'
// import Img4 from './silver-jewelry.jpg'
import "./style.css";
import { useMediaQuery } from 'react-responsive';
import { Carousel } from "react-responsive-carousel";


function index( { slides }) {
    const isLaptop = useMediaQuery({ minWidth: 1111 });
const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1110 });
    return (
        <div>
            <Text fontSize='sm' align='center' letterSpacing={'1px'}>Latest Collection</Text>
            <Heading size='xl' align='center' >WEEKLY BEST SELLER</Heading>
            {
                isLaptop ?
                <Carousel infiniteLoop className="carousel">
                    {slides.map((slide) => {
                        return <div>
                            {/* <Box pl={8} 
                            key={slide} 
                            > */}
                                <SimpleGrid spacing={4} 
                                // templateColumns='repeat(auto-fill, minmax(340px, 1fr))' 
                                minChildWidth='340px'
                                justifyItems='center'
                                align='center'
                                >
                                    {slides.map((slide) =>
                                     (
                                        <Box
                                            overflow="hidden"
                                            position="relative"
                                            maxW='sm' align='center'
                                            key={slide}
                                        >
                                            <Image
                                                src={slide.image}
                                                // src={slide.image}
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                                w='321px'
                                                h='218px'
                                                // w='full'
                                                border='2px solid red'
                                                objectFit='cover'
                                            />
                                            <Heading size='md'>{slide.name} </Heading>
                                            <Text color='black' fontSize='2xl'>
                                                {slide.text}
                                            </Text>
                                            <button className="button-sy2">ADD TO CART</button>
                                        </Box>
                                    ))}
                                </SimpleGrid>
                            {/* </Box> */}
                        </div>
                    })}
                </Carousel> :
                isTablet ?
                    <Carousel infiniteLoop className="carousel">
                        {['1', '2', '3','4'].map((slide) => {
                            return <div>
                                <Box pl={8} >
                                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(340px, 1fr))'>
                                        {['1', '2'].map((ans) => (
                                        <Box
                                            overflow="hidden"
                                            position="relative"
                                            maxW='sm' align='center'
                                            m={'auto'}
                                            key={ans}
                                        >
                                            <Image
                                                src={Img1}
                                                // src={slide.image}
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                                // w='356px'
                                                // h='433px'
                                                w='full'
                                                objectFit='cover'

                                            />
                                            <Heading size='md'>{slide.name} </Heading>
                                            <Text color='black' fontSize='2xl'>
                                                {slide.text}
                                            </Text>
                                            <button className="button-sy2">ADD TO CART</button>
                                        </Box>
                                         ))} 
                                    </SimpleGrid>
                                </Box>
                            </div>
                        })}
                    </Carousel> :

                    <Carousel infiniteLoop className="carousel">
                        {['1', '2', '3','4'].map((slide) => {
                            return <div>
                                {/* <Box pl={8} > */}
                                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(340px, 1fr))'>
                                        {/* {['1', '2', '3'].map((ans) => ( */}
                                        <Box
                                            overflow="hidden"
                                            position="relative"
                                            maxW='sm' align='center'
                                            m={'auto'}
                                        >
                                            <Image
                                                src={Img1}
                                                // src={slide.image}
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                                // w='356px'
                                                // h='433px'
                                                w='full'
                                                objectFit='cover'

                                            />
                                            <Heading size='md'>{slide.name} </Heading>
                                            <Text color='black' fontSize='2xl'>
                                                {slide.text}
                                            </Text>
                                            <button className="button-sy2">ADD TO CART</button>
                                        </Box>
                                        {/* ))} */}
                                    </SimpleGrid>
                                {/* </Box> */}
                            </div>
                        })}
                    </Carousel>
            }
        </div>
    )
}

export default index