import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Img2 from '../../../asset/Image/Group 1491.svg'
import './style.css'

function index() {
  return (
      <Box className='banner'> 
        <Box
          display={'flex'} alignItems={'center'}
          justifyContent={'center'} bgImage={Img2} backgroundPosition={'center'}
          bgRepeat={'no-repeat'} bgSize={'cover'}
          w={'full'} className='middle'>

          <Box align='center'>
            <Text color='white' fontSize={{base:"xs",sm:"md",md:"xl"}} as='b'>FRIDAY SALE | UP TO 40% OFF</Text>
            <br />
            <Text color='white' fontSize={{base:"xs",sm:"md",md:"md"}} as='abbr'>Lorem ipsum dolor sit amet consectetur</Text>
            <br />
            <Text color='white' fontSize={{base:"xs",sm:"xs",md:"xs"}} as='u'>LEARN MORE</Text>
          </Box>
        </Box>
      </Box>
  )
}

export default index