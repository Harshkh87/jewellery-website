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
import toast, { Toaster } from 'react-hot-toast';
import Auth from '../../apis/auth.api'

// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);

const App = () => {
  const Authapi = new Auth();                     // object
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async () => {
    try {
      const response = await Authapi.login({
        email: email,
        password: password
        // via : "direct"
      });
      console.log(response);
      if (response.data.code == 200) {
        toast.success("successful");
      }
      else {
        toast.error("error");
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

        <Box minW={{ base: "50%", md: "468px" }}>
          {/* <form> */}
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
            borderRadius={10}
            border={'1px solid grey'}
          >
            {/* <Heading color="teal.400">Login </Heading> */}
            <Text fontSize='lg' color={'#580140'} fontWeight={'500'} as={'abbr'}>Login</Text>
            <Text as={'sup'} color={'#666666 '} fontSize={'xs'}>See what is going on with your products website</Text>
            <FormControl>
              <Text fontSize='sm' as={'abbr'} color={'#666666'}>Email address</Text>
              <InputGroup>
                {/* <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  /> */}

                <Input type="email" placeholder="email address" onChange={(e) => {
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
              <FormHelperText >
                {/* <Link>forgot password?</Link> */}
                {/* <Checkbox >Remember Me</Checkbox> */}
                <Checkbox size={'sm'}>
              <Text as={'abbr'} color={'#666666 '} fontSize={'xs'}>Remember Me</Text>
            </Checkbox>
              </FormHelperText>
              
            </FormControl>
            {/* <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button> */}
            <Box align='center'>
              <Toaster />
              <button type="submit" className="button-sy" onClick={handlelogin}>Login</button>
            </Box>
            <Box textAlign={'center'} color={'#666666'}>
            Not Registered Account Yet?{" "}
              <Link color="#580140" href="/signup">
                Sign Up
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
