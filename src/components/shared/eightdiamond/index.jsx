import React from 'react'
import { SimpleGrid, Heading, Text, Button, Image, Box, Stack, Flex, Card, IconButton,HStack } from '@chakra-ui/react'
import Img1 from '../../../asset/Image/Frame 28.svg'
import Img2 from '../../../asset/Image/Frame 32.svg'
import Img3 from '../../../asset/Image/Ellipse 8.svg'
import Img4 from '../../../asset/Image/Frame 34.svg'
import { useMediaQuery } from 'react-responsive';
import { Carousel } from "react-responsive-carousel";
import './style.css'
// import FileData from '../../../utils/file.json'
// import { FaRegHeart } from "react-icons/fa6";

function index() {
    const isLaptop = useMediaQuery({ minWidth: 1111 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1110 });
    return (
        <Box p={"10px"}>
            {
                isLaptop ?
                    <Carousel infiniteLoop>
                        {['1', '2', '3', '4', '5', '6', '7', '8'].map((slide) => {
                            return <SimpleGrid
                             spacing={4} 
                             templateColumns='repeat(4, 1fr)' 
                            // minChildWidth='530px'
                             p='2%' >
                                 {['1', '2','3', '4', '5', '6', '7', '8'].map((ans) => (
                                    <Box
                                    key={ans}
                                    overflow="hidden"
                                    position="relative"
                                    maxW='sm'
                                    // border='1px solid red'
                                >
                                    {/* <Flex bgColor={
                                        'red'
                                    }>
                                        <FaRegHeart />
                                    </Flex> */}
                                    <Image
                                        src={Img1}
                                        alt='Green double couch with wooden legs'
                                        w='full'
                                        objectFit='cover'
                                    />
                                    <Stack direction='row' pt='10px' >
                                        <Image src={Img2} pr='4px' boxSize='20px'></Image>
                                        <Image src={Img3} pr='4px' boxSize='20px'></Image>
                                        <Image src={Img4} pr='4px' boxSize='20px'></Image>
                                    </Stack>
                                    <Text color='#717171' as='abbr'>-20% BLACK FRIDAY</Text>
                                    <br />
                                    <Text as='abbr'>Pulsera Moments Cadena de Serpiente con cierre de Corazón</Text>
                                    <br />
                                    <Text color='red' as='abbr' pr='8px'>₹47,20  </Text>
                                    <Text color='#717171' as='del'>  ₹59,00 </Text>
                                </Box>
                                ))}
                            </SimpleGrid>
                        })}                    
                        </Carousel> :
                    isTablet ?

                        <Carousel infiniteLoop>
                            {['1', '2', '3', '4', '5', '6', '7', '8'].map((slide) => {
                                return <SimpleGrid spacing={4}
                                //  templateColumns='repeat(auto-fill, minmax(330px, 1fr))'
                                templateColumns='repeat(3,1fr)' 
                                // minChildWidth='240px'
                                  p='2%'
                                 justifyItems='center' >
                                    {['1', '2', '3','4','5','6'].map((ans) => (
                                        <Box
                                            key={ans}
                                            overflow="hidden"
                                            position="relative"
                                            maxW='sm'
                                            // border='1px solid red'
                                        >
                                            {/* <Flex bgColor={
                                                'red'
                                            }>
                                                <FaRegHeart />
                                            </Flex> */}
                                            <Image
                                                src={Img1}
                                                alt='Green double couch with wooden legs'
                                                w='full'
                                                objectFit='cover'
                                            />
                                            <Stack direction='row' pt='10px' >
                                                <Image src={Img2} pr='4px' boxSize='20px'></Image>
                                                <Image src={Img3} pr='4px' boxSize='20px'></Image>
                                                <Image src={Img4} pr='4px' boxSize='20px'></Image>
                                            </Stack>
                                            <Text color='#717171' as='abbr'>-20% BLACK FRIDAY</Text>
                                            <br />
                                            <Text as='abbr'>Pulsera Moments Cadena de Serpiente con cierre de Corazón</Text>
                                            <br />
                                            <Text color='red' as='abbr' pr='8px'>₹47,20  </Text>
                                            <Text color='#717171' as='del'>  ₹59,00 </Text>
                                        </Box>
                                    ))}
                                </SimpleGrid>
                            })}
                        </Carousel>

                        :

                        <Carousel infiniteLoop>
                            {['1', '2', '3', '4', '5', '6', '7', '8'].map((slide) => {
                                return <SimpleGrid spacing={4} 
                                templateColumns='repeat(auto-fill, minmax(330px, 1fr))' 
                                p='2%' 
                                justifyItems='center' >
                                    {['1', '2'].map((ans) => (
                                        <Box
                                            key={ans}
                                            overflow="hidden"
                                            position="relative"
                                            maxW='sm'
                                        // border='1px solid red'
                                        >
                                            <Image
                                                src={Img1}
                                                alt='Green double couch with wooden legs'
                                                w='full'
                                                objectFit='cover'
                                            />
                                            <Stack direction='row' pt='10px' >
                                                <Image src={Img2} pr='4px' boxSize='20px'></Image>
                                                <Image src={Img3} pr='4px' boxSize='20px'></Image>
                                                <Image src={Img4} pr='4px' boxSize='20px'></Image>
                                            </Stack>
                                            <Text color='#717171' as='abbr'>-20% BLACK FRIDAY</Text>
                                            <br />
                                            <Text as='abbr'>Pulsera Moments Cadena de Serpiente con cierre de Corazón</Text>
                                            <br />
                                            <Text color='red' as='abbr' pr='8px'>₹47,20  </Text>
                                            <Text color='#717171' as='del'>  ₹59,00 </Text>
                                        </Box>
                                    ))}
                                </SimpleGrid>
                            })}
                        </Carousel>

            }
        </Box>
    )
}

export default index