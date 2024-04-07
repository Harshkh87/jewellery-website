import * as React from 'react';
import {
    ChakraProvider,
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
    SimpleGrid,
    GridItem,
    Grid,
    //   Link
} from '@chakra-ui/react';
// import Img1 from './group.jpg'
// import Fonts from "../Font"
// import Img2 from '../../../../asset/Image/Group 1686550963.svg'
import Img3 from '../../../../asset/Image/Rectangle 7330.svg'
import Img4 from '../../../../asset/Image/Rectangle 7331.svg'
// import './style.css'

const ProductIntro = () => {
    return (
        // <ChakraProvider theme={Fonts}>
        <div>
            <Container maxW={{ base: 'auto', md: 'full' }}
                px={{ base: 6, md: 10}}
                py={"20px"}
                // border={'2px solid red'}
            >
                <Stack direction={{ base: 'column', md: 'row' }} gap='10'
                    // border={'2px solid red'}
                    justifyContent="center" 
                >
                    <Stack direction="column" spacing={6}>
                        <Text
                            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                            textAlign="left"
                            maxW={{ base: '100%', md: '480px' }}
                        >

                            For every
                            passion in
                            your repertoire
                        </Text>

                    </Stack>
                    <Box 
                    // border={'2px solid red'}
                    >
                    <Grid
                        maxH={{base:"auto",lg:"650px",xl:"720px"}}
                        // minH={{base:"auto" ,lg:"400px",xl:"620px"}}
                        templateRows='repeat(3, 1fr)'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                        // border={'2px soid red'}
                        >

                        <GridItem rowSpan={2}><Image
                                w="100%"
                                h="100%"
                                // minW={{ base: 'auto' }}
                                objectFit="cover"
                                src={Img3}
                                rounded="md"
                            /></GridItem>
                        <GridItem colSpan={1} >
                        <Image
                                w="100%"
                                h="100%"
                                // minW={{ base: 'auto' }}
                                objectFit="cover"
                                src={Img4}
                            // rounded="md" 
                            />
                        </GridItem>
                        <GridItem rowSpan={2}><Image
                                w="100%"
                                h="100%"
                                // minW={{ base: 'auto' }}
                                objectFit="cover"
                                src={Img3}
                            // rounded="md" 
                            /></GridItem>
                        <GridItem rowSpan={2}>
                        <Image
                                w="100%"
                                h="100%"
                                // minW={{ base: 'auto' }}
                                objectFit="cover"
                                src={Img3}
                            // rounded="md" 
                            />
                        </GridItem>
                        <GridItem colSpan={1}>
                        <Image
                                w="100%"
                                h="100%"
                                // minW={{ base: 'auto' }}
                                objectFit="cover"
                                src={Img4}
                            // rounded="md" 
                            />
                        </GridItem>
                        <GridItem rowSpan={2}><Image
                                w="100%"
                                h="100%"
                                // minW={{ base: 'auto' }}
                                // objectFit="cover"
                                src={Img4}
                            // rounded="md" 
                            /></GridItem>

                    </Grid>
                    </Box>
                </Stack>
            </Container>
        </div>
        // </ChakraProvider>
    );
};

export default ProductIntro;