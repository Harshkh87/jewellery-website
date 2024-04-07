import React from 'react'
// import Img1 from '../../../asset/Image/Group 1490.svg'
import Img2 from '../../../asset/Image/Rectangle 43.svg'
import Img3 from '../../../asset/Image/Rectangle 45.svg'
import Img4 from '../../../asset/Image/Rectangle 44.svg'
import Img5 from '../../../asset/Image/Rectangle 46.svg'
import { SimpleGrid, Heading, Text, Button, Image, Box, Grid, GridItem, Stack } from '@chakra-ui/react'

function index() {
    return (
        <Box pt='3%'>
            <Heading size='xl' align='center' >Pikup Silver Sterling</Heading>
            <Text fontSize='sm' align='center' >Lorem ipsum dolor sit amet consectetur.</Text>
            <Box w={"100%"} pl='7%' pr='7%' pb='2%'
            // border={'2px solid red'}
            >
                <Stack direction={{ Base: "column", md: "row" }}  
                // border={'2px solid red'}
                justifyContent={'center'} 
                alignItems={'center'}
                >
                    <Box>
                        <Image
                            src={Img2}
                            // w="100%"
                            // h="100%"
                            objectFit="cover"
                        ></Image>
                    </Box>
                    <Box gap={"2px"}>
                        <Image
                            src={Img3}
                            // w="100%"
                            // h="100%"
                            objectFit="cover"
                        ></Image>
                        <Image
                            src={Img5}
                            // w="100%"
                            // h="100%"
                            objectFit="cover"
                        ></Image>
                         </Box>
                         <Box>
                        <Image
                            src={Img4}
                            // w="100%"
                            // h="100%"
                            objectFit="cover"
                        ></Image>
                   </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default index