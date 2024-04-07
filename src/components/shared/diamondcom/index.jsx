import React from 'react'
import Img2 from '../../../asset/Image/Rectangle 6294.svg'
import { Image, Img, Button, Heading, Box, Text } from '@chakra-ui/react'

function index() {
    return (
        <div>
            {/* <Box w={'100'}> */}
            <Box
                display={'flex'} alignItems={'center'}
                bgImage={Img2} backgroundPosition={'center'}
                bgRepeat={'no-repeat'} bgSize={'cover'}
                w={'full'} h={'35vh'}
                justifyContent={'center'}>
                    <Box align='center'>
                    <Heading size={{base:"md",sm:"xl",md:"2xl",lg:"3xl" }}>"Diamonds: Where Radiance Meets</Heading>
                    <Heading size={{base:"md",sm:"xl",md:"2xl",lg:"3xl" }}> Perfection in Every Facet."</Heading>
                    </Box>
            </Box>
            {/* </Box> */}
        </div>
    )
}

export default index