import React from 'react'
import { Text, Image, Box, SimpleGrid, Flex, Grid, Stack } from '@chakra-ui/react'

const Product = ({ imgg }) => {
    return (
        <div>
            <Stack direction={{ base: 'column', md: 'row' }}>
                <Text
                    fontWeight={'500'}
                    fontSize='lg'
                    position={'absolute'}
                    align={'center'}
                    // border={'2px solid red'}
                    pt={'4%'}
                    pl={'7%'}
                >
                    Color</Text>
            </Stack>

            <SimpleGrid spacing={1} templateColumns='repeat(auto-fill, minmax(90px, 1fr))'
                pl='20%'
                // border={'2px solid red'}
                maxH={{base:"100" , md : "150px"}} // Set a fixed height for the container
                overflowY='scroll'
            >

                {imgg.map((ans) => {
                    // console.log(ans);
                    return (
                        <Box
                            key={ans}
                            overflow="hidden"
                            position="relative"
                            maxW='sm'
                            // border='1px solid red'
                            align='center'

                        // h='100px'
                        //     w='100px'
                        >
                            <Image
                                src={ans.image}
                                alt='Green double couch with wooden legs'
                                // w='full'
                                objectFit='cover'
                                h={{base:"60px", md:"100px"}}
                                w={{base:"60px", md:"100px"}}
                            />
                            <Text color='#000000' fontWeight={'500'} fontSize='sm'>{ans.name}</Text>
                        </Box>
                    )
                })}
            </SimpleGrid>
        </div>
    )
}

export default Product