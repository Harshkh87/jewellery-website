import React, { useState } from 'react';
import { Box, Text, HStack,Stack } from '@chakra-ui/react'


function index() {
  const [button1Color, setButton1Color] = useState('#580140');
  const [button2Color, setButton2Color] = useState('#EFDECF');
  const [button3Color, setButton3Color] = useState('#EFDECF');

  const handleButtonClick = (buttonNumber) => {
    // Reset all button colors
    setButton1Color('#EFDECF');
    setButton2Color('#EFDECF');
    setButton3Color('#EFDECF');

    // Set the color of the clicked button
    if (buttonNumber === 1) {
      setButton1Color('#580140');
    } else if (buttonNumber === 2) {
      setButton2Color('#580140');
    } else if (buttonNumber === 3) {
      setButton3Color('#580140');
    }
  };
  return (
    <div>
      <Box h={{ base: "100px",sm: "100px" , md:"120px" ,lg:"80px"}}>
      </Box >
      <Box
        display={'flex'} alignItems={'center'}
        justifyContent={'center'} backgroundPosition={'center'} 

        w={'full'} h={'28vh'} mb={{base:"10px", lg:"-25px"}}> 

        <Stack direction={{base:'column' , lg: 'row'}} w={'full'} justifyContent={'center'} backgroundPosition={'center'}
        alignItems={'center'}
>
        <Box
          as='button'
          height={{ base: "40px", sm: "42px", md: "60px",lg:"60px" }}
          width={{ base: "180px", sm: "300px", md: "400px",lg:"428px" }}
          lineHeight='0.2'
          textAlign='start'
          border='1px'
          px='8px'
          borderRadius='2px'
          fontSize={{ base: "7px", sm: "12px", md: "14px" }}
          fontWeight='semibold'
          bg='#E8D6C6'
          // borderColor='#ccd0d5'
          borderColor='black'
          // onClick={() => setColor( )}
          style={{ backgroundColor: button1Color, color: button1Color === '#EFDECF' ? '#000000' : '#EFDECF' }}
          onClick={() => handleButtonClick(1)}
        >
          <Text fontSize='xs'
                      // as='abbr'
                      > Choose a</Text>
          <Text fontSize={{ base: "xs", sm: "sm", md: "sm" }}
          >Diamond</Text>
        </Box>

        <Box
          as='button'
          height={{ base: "40px", sm: "42", md: "60px" }}
          width={{ base: "180px",  sm: "300px", md: "400px",lg:"428px" }}
          lineHeight='0.2'
          // justifyContent='left'
          // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          textAlign='start'
          border='1px'
          px='8px'
          borderRadius='2px'
          fontSize={{ base: "8px", sm: "12px", md: "14px" }}
          fontWeight='semibold'
          color='white'
          bg='#E8D6C6'
          // borderColor='#ccd0d5'
          borderColor='black'
          // color='#4b4f56'
          // placeholder="   Enter You Email Address"
          style={{ backgroundColor: button2Color, color: button2Color === '#EFDECF' ? '#000000' : '#EFDECF' }}
          onClick={() => handleButtonClick(2)}
        >
          <Text fontSize='xs'>Choose a</Text>
          <Text fontSize='md'>Setting</Text>
        </Box>

        <Box
          as='button'
          height={{ base: "40px", sm: "42px", md: "60px" }}
          width={{ base: "180px",  sm: "300px", md: "400px",lg:"428px" }}
          lineHeight='0.1'
          // justifyContent='left'
          // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          textAlign='start'
          border='1px'
          // px='8px'
          borderRadius='2px'
          fontSize={{ base: "8px", sm: "12px", md: "14px" }}
          fontWeight='semibold'
          bg='#E8D6C6'
          // borderColor='#ccd0d5'
          borderColor='black'
          // color='#4b4f56'
          // placeholder="   Enter You Email Address"
          style={{ backgroundColor: button3Color, color: button3Color === '#EFDECF' ? '#000000' : '#EFDECF' }}
          onClick={() => handleButtonClick(3)}
        >
          <Text fontSize='xs'>Review</Text>
          <Text fontSize='md'>Complete</Text>
        </Box>

        </Stack>

      </Box>
      <HStack spacing={3} display={'flex'} alignItems={'center'}
        justifyContent={'center'} backgroundPosition={'center'}
        pb="20px">
        <button className="button-sy2 button-sy3">White Diamond</button>
        <button className="button-sy4 button-sy3">Colored Diamond</button>
      </HStack>
    </div>
  )
}

export default index