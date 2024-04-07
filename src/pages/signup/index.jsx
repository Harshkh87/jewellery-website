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
  Text,
  Checkbox
} from "@chakra-ui/react";
// import { FaUserAlt, FaLock } from "react-icons/fa";
import Auth from '../../apis/auth.api'
import toast, { Toaster } from 'react-hot-toast';


// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);

const App = () => {
  const Authapi = new Auth();

  const [showPassword, setShowPassword] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleShowClick = () => setShowPassword(!showPassword);
  // const notify = () => toast("Wow so easy!");

  const api = async () => {
    console.log('saved')
    try {
      // console.log(Authapi.register);
      const response = await Authapi.register({
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
        via: "direct"
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
      width="100wh"
      height="100vh"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"

    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"

      >
        {/* <Avatar bg="teal.500" /> */}

        <Box minW={{ base: "50%", md: "468px" }}
        >
          {/* <form action="#"> */}
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="xl"
            borderRadius={10}
            border={'1px solid grey'}
          >
            <Text fontSize='lg' color={'#580140'} fontWeight={'500'} as={'abbr'}>Signup</Text>
            <Text as={'sup'} color={'#666666 '} fontSize={'xs'}>Sign up for free to access to in any of our products </Text>
            {/* <Text as={'abbr'}>Sign up for free to access to in any of our products </Text> */}
            <FormControl>
              <Text fontSize='sm' as={'abbr'} color={'#666666'}>First Name</Text>
              <InputGroup>
                {/* <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  /> */}
                <Input type="text" placeholder="First name" onChange={(e) => {
                  setFName(e.target.value)
                }} value={fname} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <Text fontSize='sm' as={'abbr'} color={'#666666'}>Last name</Text>
              <InputGroup>
                {/* <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  /> */}
                <Input type="text" placeholder="Last name" onChange={(e) => {
                  setLName(e.target.value)
                }} value={lname} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <Text fontSize='sm' as={'abbr'} color={'#666666'}>Email address</Text>
              <InputGroup>
                {/* <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  /> */}
                <Input type="email" placeholder="Email address" onChange={(e) => {
                  setEmail(e.target.value)
                }} value={email} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <Text fontSize='sm' as={'abbr'} color={'#666666'}>Password</Text>
              <InputGroup>
                {/* <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  /> */}
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }} value={password}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Text as={'sup'} color={'#666666 '} fontSize={'xs'}>Use 8 or more characters with a mix of letters, numbers & symbols</Text>
              {/* <FormHelperText textAlign="right">
                <Link>forgot password?</Link>
              </FormHelperText> */}
              
            </FormControl>
            <Checkbox size={'sm'} >
              <Text as={'abbr'} color={'#666666 '} fontSize={'xs'}>Agree to our Terms of use and Privacy Policy </Text>
            </Checkbox>
            {/* <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Signup
              </Button> */}
            <Box align='center'>
              <button type="submit" onClick={api} className="button-sy">Signup</button>
              {/* <button onClick={notify}>Notify!</button> */}
              <Toaster />
            </Box>
            <Box textAlign={'center'} color={'#666666'}>
              Already have an Account?{" "}
              <Link color="#580140" href="/login">
                Login
              </Link>
            </Box>
          </Stack>
          {/* </form> */}
        </Box>
      </Stack>

    </Flex>
  );
};

export default App;
