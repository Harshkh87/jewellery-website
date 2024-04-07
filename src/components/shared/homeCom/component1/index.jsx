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
    //   Link
} from '@chakra-ui/react';
// import Img1 from './group.jpg'
// import Fonts from "../Font"
import Img2 from '../../../../asset/Image/Group 1686550963.svg'
import './style.css'

const ProductIntro = () => {
    return (
        // <ChakraProvider theme={Fonts}>
            <div className='body-about'>
            <Container  maxW="5xl" px={{ base: 6, md: 3 }} py={10}>
                <Stack direction={{ base: 'column-reverse', md: 'row' }} alignItems='center' gap='10'>
                    <Stack direction="column" spacing={6}>
                        {/* <HStack spacing={5}>
                            {['About Us'].map((text, index) => (
                                <HStack spacing={2} key={index}>
                                    <Text letterSpacing={'2px'} fontSize="s">{text}</Text>
                                </HStack>
                            ))}
                        </HStack> */}
                        <HStack spacing={10}>
                                    <Text letterSpacing={'2px'} fontSize="sm"
                                     fontFamily={["fonts.h13"]}>About Us</Text>
                                </HStack>
                        <Heading
                            as="h3"
                            size="lg"
                            // fontWeight="bold"
                            textAlign="left"
                            maxW={{ base: '100%', md: '480px' }}
                            fontFamily={["fonts.h11"]}
                        >
                            {/* The only eCommerce platform you’ll ever need. */}
                            WE MAKE SPARKLY MAGIC HAPPEN
                        </Heading>
                        <Text
                            color={'#6A6A6A'}
                            fontSize="1.2rem"
                            textAlign="left"
                            lineHeight="1.375"
                            fontWeight="300"
                            maxW={{ base: '100%', md: '470px' }}
                            fontFamily={["fonts.h12"]}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae massa sit.
                        </Text>
                        <HStack spacing={3}>
                            {/* <Button colorScheme="teal" variant="solid" size="md" rounded="md" boxShadow="md">
                                Contact
                            </Button> */}
                            <button className="button-sy2">EXPLORE</button>
                        </HStack>

                    </Stack>
                    <Box ml={{ base: 0, md: 5 }}>
                        <Image
                            w="100%"
                            h="100%"
                            minW={{ base: 'auto', md: '30rem' }}
                            objectFit="cover"
                            src={Img2}
                            // src="https://images.unsplash.com/photo-1625948515291-69613efd103f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80"
                            rounded="md"
                            fallback={<Skeleton />}
                        />
                    </Box>
                </Stack>
            </Container>
            </div>
        // </ChakraProvider>
    );
};

export default ProductIntro;