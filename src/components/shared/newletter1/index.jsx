import { Heading, Input, Button, Box } from '@chakra-ui/react';
// import { color } from 'framer-motion';
import './style.css'
// import Fonts from './fonts'

const Index = () => {
    return (
        <div className='box1'>
            <Box align='center'>
                <Heading size={{ base: "md", sm: "lg", md: "xl" }}>SUBSCRIBE TO</Heading>
                <Heading size={{ base: "md", sm: "lg", md: "xl" }}>OUR NEWSLETTER</Heading>

                <Box px="20px">
                    <Box
                        as='Input'
                        height={{ base: "36px", sm: "38px", md: "41px" }}
                        width={{ base: "150px", sm: "240px", md: "340px" }}
                        lineHeight='1.2'
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        border='1px'
                        px='8px'
                        borderRadius='2px'
                        fontSize='14px'
                        // fontWeight='semibold'
                        bg='#E8D6C6'
                        // borderColor='#ccd0d5'
                        borderColor='black'
                        // color='#4b4f56'
                        placeholder="   Enter You Email Address"
                        _hover={{ bg: '#ebedf0' }}
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
                        Enter You Email Address
                    </Box>
                    <Box
                        as='button'
                        height={{ base: "36px", sm: "38px", md: "41px" }}
                        width={{ base: "100px", sm: "148px", md: "148px" }}
                        lineHeight='1.2'
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        border='1px'
                        px='8px'
                        borderRadius='2px'
                        fontSize='14px'
                        fontWeight='semibold'
                        // bg='#f5f6f7'
                        // borderColor='#ccd0d5'
                        borderColor='black'
                        // color='#4b4f56'

                        _hover={{ bg: '#ebedf0' }}
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
                        SUBMIT
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Index;