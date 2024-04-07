import React from 'react'
import Img2 from '../hero/Heroin.jpg'
import { Image, Img, Button, Heading, Box,Text } from '@chakra-ui/react'
// import "./style.css";

function index() {
  return (
    <Box w={"100%"}>
      <Box
        display={'flex'} alignItems={'center'}
         bgImage={Img2} backgroundPosition={'center'}
        bgRepeat={'no-repeat'} bgSize={'cover'}
        w={'full'} h={{base:"70vh",md:"80vh" ,lg:"90vh"}}>

        <Box pl='80px'>
          <Text fontSize={{base:"2xl",sm:"4xl",md:"5xl"}} fontFamily={["fonts.h11"]} as='b' >UNIQUE JEWELRY ,</Text>
          <br/>
          <Text fontSize={{base:"2xl",sm:"4xl",md:"5xl"}} fontFamily={["fonts.h11"]} as='b' >RARE GEMS, AND</Text>
          <br />
          <Text fontSize={{base:"2xl",sm:"4xl",md:"5xl"}} fontFamily={["fonts.h11"]} as='b' >EXQUISITE PIECES!</Text>
          <br />
          <br />
          <button className="button-sy btn-hero">Contact </button>
        </Box>
      </Box>
    </Box>
  )
}

export default index