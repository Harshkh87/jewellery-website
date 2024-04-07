import React from 'react'
import { Text, Image, Box, SimpleGrid } from '@chakra-ui/react'

const Product = ({ imgg }) => {
    return (
        <div>
            <SimpleGrid spacing={1}
                // templateColumns='repeat(6, 1fr)'
                minChildWidth='240px'
                justifyItems='center'
                align={'center'}
                // p='2%'
                // border='1px solid black'
                pt='2%'
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
                                h='100px'
                                w='100px'
                            />
                            <Text color='#000000'>{ans.name}</Text>
                        </Box>
                    )
                })}
            </SimpleGrid>
        </div>
    )
}

export default Product