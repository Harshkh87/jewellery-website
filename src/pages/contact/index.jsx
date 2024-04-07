import React from "react";
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  FormLabel,
  FormErrorMessage,
  Text,
  Textarea
} from "@chakra-ui/react";
// import { FaUserAlt, FaLock } from "react-icons/fa";
import Auth from '../../apis/auth.api'
import toast, { Toaster } from 'react-hot-toast';


// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);

const App = () => {
  const Authapi = new Auth();

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleShowClick = () => setShowPassword(!showPassword);
  // const notify = () => toast("Wow so easy!");

  const contacthandled = async () => {
    console.log('saved')
    try {
      console.log(Authapi.register);
      const response = await Authapi.contactUs({
        name: name,
        email: email,
        subject: subject,
        message: message,
      });
      console.log(response)
      if (response.data.code == 200) {
        console.log('success');
        toast.success("successful");
      } else {
        console.log('error');
        toast.error("Error");
      }
    }
    catch (err) {
      console.log(err);
      // toast.warning("Danger");
    }
  }

  return (
    <Flex
      flexDirection="column"
      height="100vh"
      w={'full'}
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"

    >
      <Stack
        flexDir="column"
        mb="2"
        maxW={'1000px'}
        justifyContent="center"
        alignItems="center"
        width={'full'}
      >
        {/* <Avatar bg="teal.500" /> */}

        <Box minW={{ base: "50%", md: "400px" }}
          p={20}
        >
          {/* <form action="#"> */}
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="xl"
            borderRadius={10}
            border={'1px solid grey'}
            padding={10}
          // maxW={'100px'}
          // textAlign={'center'}
          >
            <Text fontSize='2xl' color={'#580140'} fontWeight={'500'} as={'abbr'}>Contact Us</Text>

            <Text fontSize='xl' color={'black'} as={'abbr'}>lorem  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </Text>

            <Stack direction={{ base: "column", md: "row" }}>

              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' onChange={(e) => {
                  setName(e.target.value)
                }} value={name} />
              </FormControl>

              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder="Email address" onChange={(e) => {
                  setEmail(e.target.value)
                }} value={email} />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>
            </Stack>
            <Stack direction={{ base: "column", md: "row" }}>

              <FormControl>
                <FormLabel>Subject</FormLabel>
                <Input type='text' placeholder="Subject" onChange={(e) => {
                  setSubject(e.target.value)
                }} value={subject} />
              </FormControl>

              <FormControl>
                <FormLabel>Message!</FormLabel>
                <Textarea placeholder='Here is a sample placeholder' onChange={(e) => {
                  setMessage(e.target.value)
                }} value={message} />
              </FormControl>
            </Stack>


            <Box align='center'>
              <button type="submit" onClick={contacthandled} className="button-sy">Submit</button>
              {/* <button onClick={notify}>Notify!</button> */}
              <Toaster />
            </Box>
          </Stack>

        </Box>
      </Stack>

    </Flex>
  );
};

export default App;
