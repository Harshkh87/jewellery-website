import React from 'react'
import Img2 from '../../../asset/Image/Frame 125.svg'
import { Image, Img, Button, Heading, Box, Text } from '@chakra-ui/react'

function index() {
  return (
    <div>
        <Box
                display={'flex'} 
                alignItems={'center'}
                bgImage={Img2} backgroundPosition={'center'}
                bgRepeat={'no-repeat'} bgSize={'cover'}
                w={'full'} h={'40vh'}
                // justifyContent={'center'}
                >
                    <Box pl='80px'
                    // align='center'
                    >
                    <Heading size={{base:"sm",sm:"md",md:"lg",lg:"xl" }}>"Unearth Brilliance: Explore our  Collection."</Heading>
                    <Heading size={{base:"sm",sm:"md",md:"lg",lg:"xl" }}>Exquisite Loose Diamonds</Heading>
                    <Heading size={{base:"sm",sm:"md",md:"lg",lg:"xl" }}> Collection."</Heading>
                    </Box>
            </Box>
    </div>
  )
}

export default index