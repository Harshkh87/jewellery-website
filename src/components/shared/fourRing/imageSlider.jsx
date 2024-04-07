import React from 'react'
import { SimpleGrid, Image, Box } from '@chakra-ui/react'
import Img1 from '../../../asset/Image/Rectangle 73.svg'

function imageSlider() {
  return (
    <div>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(340px, 1fr))' justifyItems='center'>
                {['1', '2', '3', '4'].map((ans) => (
                    <Box
                    overflow="hidden"
                    maxW='sm' align='center'
                    key={ans}
                >
                    <Image
                        src={Img1}
                        alt='Green double couch with wooden legs'
                        w='full'
                        objectFit='cover'
                    />
                    <button className="button-sy2">ADD TO CART</button>
                </Box>
                ))}
            </SimpleGrid>
    </div>
  )
}

export default imageSlider