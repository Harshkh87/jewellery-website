import React from 'react'
import { SimpleGrid, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import Img1 from './Maskgroup2.jpg'
import Img2 from './Maskgroup1.jpg'
import Img3 from './Maskgroup3.jpg'
// import Img4 from './silver-jewelry.jpg'
import "./style.css";

function index() {
  return (
    <div>
        <Box  p={12} >
        <Text fontSize='sm' letterSpacing={'2px'}>Highlights</Text>
            <Heading size='xl' >BRIDE & GROOM</Heading>
            <Heading size='xl' >COLLECTION</Heading>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(340px, 1fr))'>
                <Box
                    overflow="hidden"
                    position="relative"
                    maxW='sm' align='center'
                >
                    <Image
                        src={Img1}
                        // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        w='356px'
                        h='433px'
                    />
                    <Heading size='md'>Proin Commodo </Heading>
                    <Text color='black' fontSize='2xl'>
                    $4668
                    </Text>
                    <button className="button-sy2">ADD TO CART</button>
                </Box>
                {/* <Card maxW='sm' align='center'> */}
                <Box
                    overflow="hidden"
                    position="relative"
                    maxW='sm' align='center'
                >
                    <Image
                        src={Img2}
                        // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        w='356px'
                        h='433px'
                    />
                    <Heading size='md'>Vestibulum Porta</Heading>
                    <Text color='black' fontSize='2xl'>
                    $6434
                    </Text>
                    <button className="button-sy2">ADD TO CART</button>
                </Box>

                <Box
                    overflow="hidden"
                    position="relative"
                    maxW='sm' align='center'
                >
                    <Image
                        src={Img3}
                        // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        w='356px'
                        h='433px'
                    />
                    <Heading size='md'>Nulla Vestibulum</Heading>
                    <Text color='black' fontSize='2xl'>
                    $3254
                    </Text>
                    <button className="button-sy2">ADD TO CART</button>
                </Box>
            </SimpleGrid>
            </Box>
    </div>
  )
}

export default index