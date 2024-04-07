import React from 'react'
import { Text, Image, Box, SimpleGrid,Flex,Grid } from '@chakra-ui/react'

const Product = ({ imgg }) => {
  return (
    <div>
        <Text
        fontWeight={'500'}
        fontSize='lg'
        position={'absolute'}
        align={'center'}
        // border={'2px solid red'}
        pt={'2%'}
        pl={'7%'}
        // zIndex={'1'}
        >Shap</Text>
        
        <SimpleGrid spacing={1} templateColumns='repeat(auto-fill, minmax(70px, 1fr))'
                pl='20%'
                // border={'2px solid red'}
                maxH='80px' // Set a fixed height for the container
                overflowY='scroll'
            >
                
                {imgg.map((ans) => 
                {
                    // console.log(ans);
                return(
                    <Flex
                        key={ans}
                        // overflow="scroll"
                        position="relative"
                        maxW='sm'
                    >
                        <Image
                            src={ans.image}
                            alt='Green double couch with wooden legs'
                            // w='full'
                            objectFit='cover'
                            h='80px'
                            w='80px'
                        />             
                    </Flex>
                )})}
            </SimpleGrid>
    </div>
  )
}

export default Product