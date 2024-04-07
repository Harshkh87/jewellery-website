import React from 'react'
import Img2 from '../../../../asset/Image/image 65.svg'
import { Image, Img, Text, Button, Heading, Box } from '@chakra-ui/react'
import "./style.css";

function index() {
  return (

    <Box w={"100%"}>
      <Box
        display={'flex'} alignItems={'center'}
        justifyContent={'center'} bgImage={Img2} backgroundPosition={'center'}
        bgRepeat={'no-repeat'} bgSize={'cover'}
        w={'full'} h={{base:"70vh",md:"80vh" ,lg:"90vh"}}>

        <Box align='center' >
          {/* <Heading >"Captivate Love's Brilliance: The</Heading> */}
          <Text fontSize={{base:"xl",sm:"3xl",md:"5xl"}} as='b' >"Captivate Love's Brilliance: </Text>
          <br/>
          <Text fontSize={{base:"xl",sm:"3xl",md:"5xl"}} as='b' >The Perfect Engagement Rings Await."</Text>
          <br />
          <br />
          <Box
            position='relative'
            as='button'
            padding={{base:"10px",sm:"12px",md:"14px"}}
            width='43%'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='8px'
            borderRadius='2px'
            fontSize={{base:"8px",sm:"10px",md:"12px"}}
            bg='#580140'
            color='white'
            borderColor='black'
           
          >
            SHOP  NOW  ENGAGEMENT  RING
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default index