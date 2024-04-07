import React from 'react';
import {
 Box,
 Button,
 Flex,
 FormControl,
 FormLabel,
 Input,
 Stack,
 useToast,
} from '@chakra-ui/react';

const NewsletterForm = () => {
 const toast = useToast();

 const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email === '') {
      toast({
        title: 'Error',
        description: 'Please enter your email address',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Success',
        description: 'You have successfully subscribed to our newsletter',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      e.target.reset();
    }
 };

 return (
    <Flex p={5} width="full" align="center" justify="center">
      <Stack spacing={3} width="full" maxWidth="md">
        <FormControl id="email">
          <FormLabel fontSize="xl">Email address</FormLabel>
          <Input type="email" name="email" placeholder="your-email@example.com" fontSize="lg" />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          width="full"
          fontSize="lg"
          onClick={handleSubmit}
        >
          Subscribe
        </Button>
      </Stack>
    </Flex>
 );
};

export default NewsletterForm;