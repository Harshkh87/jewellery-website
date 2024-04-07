import React from 'react'
import Img1 from '../ringhero1/ringHeroinImage.jpg'
import { Image, Button, Heading, Box } from '@chakra-ui/react'
import "./style.css";

function index() {
  return (
    <div>
      <Box align='center'>
        <Image className='ringheroheading' src={Img1} w={'full'} />
        <Box  className='boxxx' >
          <h1 className='ringheroheading1'>"Captivate Love's Brilliance: The</h1>
          <h1 className='ringheroheading2' >Perfect Engagement Rings Await."</h1>

          <Box
            as='button'
            height='62px'
            width='376px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='8px'
            borderRadius='2px'
            fontSize='14px'
            fontWeight='semibold'
            bg='#580140'
            className='boxx'
            color='white'

            // borderColor='#ccd0d5'

            borderColor='black'
            // color='#4b4f56'

            _hover={{
              bg: '#ebedf0',
              color: '#580140'
            }}
            _active={{
              bg: '#dddfe2',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }}
            _focus={{
              boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
          >
            SHOP  NOW  ENGAGEMENT  RING
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default index