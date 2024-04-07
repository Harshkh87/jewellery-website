import React from 'react'
import Img1 from '../../../asset/Image/Group 1495.svg'
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
import Fonts from "../Font"

function index() {
  return (
    <div>
        <ChakraProvider theme={Fonts}>
            {/* <div className='body-oneonly'> */}
                <Container maxW="10xl" px={{ base: 6, md: 3 }} py={10} >
                    <Stack direction={{ base: 'column', md: 'row' }} alignItems='center' gap='10' justifyContent="center">
                        {/* <Stack direction="row" spacing={6}> */}
                        <Box ml={{ base: 0, md: 5 }} pos="relative" align='center'>
                            <Image
                                w={{ base: '70%', md: '100%' }}
                                h={{ base: '70%', md: '100%' }}
                                minW={{ base: 'auto', md: '23rem' }}
                                objectFit="cover"
                                src={Img1}
                                // src="https://images.unsplash.com/photo-1625948515291-69613efd103f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80"
                                rounded="md"
                                // className='img'
                                // fallback={<Skeleton />}
                            />
                        </Box>

                        <Stack direction="column" spacing={10} pr='10px'> 
                            <Box align='center'>
                                <Heading
                                    as="h3"
                                    size="lg"
                                    // fontWeight="bold"
                                    textAlign="left"
                                    maxW={{ base: '100%', md: '480px' }}
                                >
                                    Diamonds Ring
                                </Heading>
                                <Text
                                    color='#6A6A6A'
                                    fontSize="1.0rem"
                                    textAlign="left"
                                    lineHeight="1.375"
                                    fontWeight="300"
                                    maxW={{ base: '100%', md: '470px' }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae massa sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae massa sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae massa sit.
                                </Text>
                                <Text
                                    color='#6A6A6A'
                                    fontSize="1.2rem"
                                    textAlign="left"
                                    lineHeight="1.375"
                                    fontWeight="300"
                                    maxW={{ base: '100%', md: '470px' }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae massa sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae massa sit.
                                </Text>
                                <HStack spacing={3}>

                                    <button className="button-sy2 button-sy3">SHOP NOW</button>
                                    <button className="button-sy4 button-sy3">VIEW MORE</button>
                                    {/* <button >VIEW MORE</button> */}
                                </HStack>
                            </Box>
                        </Stack>
                    </Stack>
                </Container>
            {/* </div> */}
        </ChakraProvider>
    </div>
  )
}


export default index