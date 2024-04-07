import React from 'react'
import { ButtonGroup, Container, Divider, Heading, IconButton, Stack, Text, Button, VStack, Box, HStack ,Spacer } from '@chakra-ui/react'
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './style.css'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Img2 from '../../../asset/Image/Footer Image.svg'

function index() {
  const navigate = useNavigate();
  return (
    <div className='footer body-footer'>
      <Box p={{ base: 5, md: 6 }} maxW="5xl" marginInline="auto" >
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: 'column', md: 'row' }}
        // border='1px solid white'
        >
          <Box maxW="250px" pt='7%' color='white' >
            <Heading onClick={() => navigate('/')} fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}>LOGO</Heading>
          </Box>
          <HStack
            spacing={{ base: "10", sm: "20", md: "20" }}
            // display={{ base: 'none', sm: 'flex' }}
            justifyContent={{ sm: 'normal', md: 'normal' }}
            // border='1px solid white'
            // pt='1%'
            // alignItems='center'
    
          >
            <VStack spacing={0} alignItems="flex-start" margin={'auto'}>
              <Text fontSize={{ base: "10", sm: "20px", md: "md" }} fontWeight="bold" color="white">
                SITE MAP
              </Text>
              <VStack spacing={0} alignItems="flex-start" color="#AAAAAA">
                <Text fontSize={{ base: "10", sm: "20px", md: "md" }}>Home</Text>
                <Text fontSize={{ base: "10", sm: "20px", md: "md" }}>About</Text>
                <Text fontSize={{ base: "10", sm: "20px", md: "md" }}>Shop</Text>
                <Text fontSize={{ base: "10", sm: "20px", md: "md" }}>Conact</Text>
              </VStack>
            </VStack>
            <VStack spacing={0} alignItems="flex-start" margin={'auto'}>
              <Text fontSize={{ base: "10", sm: "20px", md: "md" }} fontWeight="bold" color="white">
                SERVICES
              </Text>
              <VStack spacing={0} alignItems="flex-start" color="#AAAAAA">
                <Text fontSize={{ base: "10px", sm: "20px", md: "md" }}>Faq</Text>
                <Text fontSize={{ base: "10px", sm: "20px", md: "md" }}>Shopping</Text>
                <Text fontSize={{ base: "10px", sm: "20px", md: "md" }}>Tracking</Text>
                <Text fontSize={{ base: "10px", sm: "20px", md: "md" }}>Returns</Text>
              </VStack>
            </VStack>
            <VStack spacing={0} alignItems="flex-start" margin={'auto'}>
              <Text fontSize={{ base: "10px", sm: "20px", md: "md" }} fontWeight="bold" color="white">
                SOCIAL
              </Text>
              <VStack spacing={0} alignItems="flex-start" color="#AAAAAA">
                <Text fontSize={{ base: "10px", sm: "20px", md: "md" }}>Fackbook</Text>
                <Text fontSize={{ base: "10px", sm: "20px", md: "md" }}>Instragram</Text>
                <Text fontSize={{ base: "10px", sm: "20px", md: "md" }}>Youtube</Text>
                <Text fontSize={{ base: "10px", sm: "20px", md: "md" }}>Twitter</Text>
              </VStack>
            </VStack>
          </HStack>
        </Stack>

        <Divider my={4} />

        <Stack spacing={{ base: '4' }}> 
          <Text fontSize={{ base: "10px", sm: "sm", md: "sm" }} color="#AAAAAA" as='abbr' pr='47%'>
            {/* &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.                                         */}
            Copyright © 2023 for Anant Tara. All rights reserved.
          </Text>
          {/* <Spacer /> */}
          <Text fontSize={{ base: "10px", sm: "sm", md: "sm" }} color="#AAAAAA" as='abbr'>
            Terms & Condition  |  Privacy Policy
          </Text>``
        </Stack>
      </Box>
    </div>
  )
}

export default index