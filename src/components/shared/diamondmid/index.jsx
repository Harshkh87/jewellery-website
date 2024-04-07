import React from 'react'
import Img1 from '../../../asset/Image/silver22.svg'
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
            <div className='body-about'>
                <Container maxW="5xl" px={{ base: 6, md: 3 }} py={10}>
                    <Stack direction={{ base: 'column-reverse', md: 'row' }} alignItems='center' gap='10'>
                        <Stack direction="column" spacing={6}>
                            <Heading
                                as="h3"
                                size="lg"
                                // fontWeight="bold"
                                textAlign="left"
                                maxW={{ base: '100%', md: '480px' }}
                            >
                                {/* Let Us Do the Hard Work */}
                                For every  passion in your repertoire
                            </Heading>
                            <Text
                                color='#6A6A6A'
                                fontSize="1.2rem"
                                textAlign="left"
                                lineHeight="1.375"
                                fontWeight="300"
                                maxW={{ base: '100%', md: '470px' }}
                            >
                                Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum Dolor et volutpat in non. Luctus sit libero urna viverra .Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum Dolor et volutpat in non. Luctus sit libero urna viverra.
                            </Text>
                            <HStack spacing={3}>
                                {/* <Button colorScheme="teal" variant="solid" size="md" rounded="md" boxShadow="md">
                                Contact
                            </Button> */}
                                {/* <button className="button-sy2">EXPLORE</button> */}
                                <button className="button-sy2 button-sy3">SHOP NOW</button>
                                <button className="button-sy4 button-sy3">VIEW MORE</button>
                            </HStack>

                        </Stack>
                        <Box ml={{ base: 0, md: 5 }} align='center'>
                            <Image
                                w={{ base: '70%', md: '100%' }}
                                h={{ base: '70%', md: '100%' }}
                                minW={{ base: 'auto', md: '13rem' }}
                                objectFit="cover"
                                src={Img1}
                                // src="https://images.unsplash.com/photo-1625948515291-69613efd103f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80"
                                rounded="md"
                                fallback={<Skeleton />}
                            />
                        </Box>
                    </Stack>
                </Container>
            </div>
        </ChakraProvider>
    </div>
  )
}

export default index