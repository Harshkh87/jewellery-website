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
// import Img1 from './Group.jpg'
import Img2 from '../../../../asset/Image/Rectangle 87.svg'
import Fonts from "../../Font"

const ProductIntro = () => {
    return (
        <ChakraProvider theme={Fonts}>
            <div className='body-oneonly'>
            <Container maxW="5xl" px={{ base: 6, md: 3 }} py={10}>
                <Stack direction={{ base: 'column', md: 'row'  }} justifyContent="center" alignItems='center' gap='10'>
                    {/* <Stack direction="row" spacing={6}> */}
                    <Box ml={{ base: 0, md: 5 }} pos="relative">
                        <Image
                            w="100%"
                            h="100%"
                            minW={{ base: 'auto', md: '30rem' }}
                            objectFit="cover"
                            src={Img2}
                            // src="https://images.unsplash.com/photo-1625948515291-69613efd103f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80"
                            rounded="md"
                            className='img'
                            fallback={<Skeleton />}
                        />
                    </Box>
                        
                        <Stack direction="column" spacing={6}>
                        <HStack spacing={2}>
                                    <Text letterSpacing={'2px'} fontSize="lg">ABOUT THE COLLECTION</Text>
                                </HStack>
                        <Heading
                            as="h3"
                            size="lg"
                            // fontWeight="bold"
                            textAlign="left"
                            maxW={{ base: '100%', md: '480px' }}
                        >
                            Eclipsia
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.700', 'gray.400')}
                            fontSize="1.2rem"
                            textAlign="left"
                            lineHeight="1.375"
                            fontWeight="300"
                            maxW={{ base: '100%', md: '470px' }}
                        >
                            Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum Dolor et volutpat in non. Luctus sit libero urna viverra .
                            
                        </Text>
                        {/* <HStack spacing={3}>
                            
                            <button className="button-sy2 ">EXPLORE</button>
                        </HStack> */}
                        </Stack>
                    </Stack>                    
                {/* </Stack> */}
            </Container>
            </div>
        </ChakraProvider>
    );
};

export default ProductIntro;