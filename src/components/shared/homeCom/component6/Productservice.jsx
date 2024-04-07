import { SimpleGrid, Heading, Text, Button, Image, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from './Maskgroup2.jpg'
import { useMediaQuery } from 'react-responsive';
// import Img2 from './Maskgroup1.jpg'
// import Img3 from './Maskgroup3.jpg'

const ImageSlider = ({ slides }) => {
    const isLaptop = useMediaQuery({ minWidth: 1111 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1110 });
    return (
        <Box  >
            {
                isLaptop ?
                    <Carousel infiniteLoop className="carousel">
                        {slides.map((slide) => {
                            return <div>
                                <Box pl={8}
                                    key={slide}
                                >
                                    <SimpleGrid spacing={4}
                                    // px={"400px"}
                                    // templateColumns='repeat(auto-fill, minmax(340px, 1fr))'
                                    minChildWidth='340px'
                                    justifyItems='center'
                                    align={'center'}
                                   
                                    //  justifyContent={'center'}

                                    >
                                    {['1', '2', '3'].map((ans) => (
                                        <Box
                                            overflow="hidden"
                                            position="relative"
                                            maxW='sm' align='center'
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
    isTablet ?
        <Carousel infiniteLoop className="carousel">
            {slides.map((slide) => {
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
            {slides.map((slide) => {
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
        </Box >
    );
};

export default ImageSlider;
