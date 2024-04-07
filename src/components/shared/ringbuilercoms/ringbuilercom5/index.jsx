import { useState } from 'react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Grid,
  GridItem,
  Box,
  Text,
  Stack,
  HStack,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSlider
} from '@chakra-ui/react'

function index() {

  return (
    <Box px={20}
      py={3}
      pb={'7%'}
    // border={'2px solid red'}
    >
      <Grid templateColumns={{base:'1fr', md:'1fr 1fr'}}  gap={{base:"0" , md:"10"}} >
        <GridItem w='100%' h='10' 
        // border={'2px solid red'}
        >
          <HStack>
            <Text
              fontWeight={'500'}
              pr={3}
            >Colour</Text>
            <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={20}>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#580140' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </HStack>
        </GridItem>

        <GridItem w='100%' h='10' >
          <HStack>
            <Text
              fontWeight={'500'}
              pr={3}
            >Carat</Text>
            <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={20}>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#580140' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </HStack>
          <Stack
            // border={'2px solid red'}
            // pl={'10%'}
          >
            <NumberInput size='xs' maxW={16} defaultValue={10} min={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput></Stack>

          <Stack
            // border={'2px solid red'}
            // pl={'90%'}
            // mt={'-21px'}
          >
            <NumberInput size='xs' maxW={16} defaultValue={10} min={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput></Stack>
        </GridItem>

        <GridItem w='100%' h='10' >
          <HStack>
            <Text
              fontWeight={'500'}
              pr={3}
            >Clarity</Text>
            <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={20}>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#580140' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </HStack>
        </GridItem>

        <GridItem w='100%' h='10' >
          <HStack>
            <Text
              fontWeight={'500'}
              pr={3}
            >Cut</Text>
            <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={20}>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#580140' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </HStack>
        </GridItem>
      {/* </Grid> */}

      {/* <br /> */}
 
      {/* <Grid templateColumns='repeat(auto-fill, minmax(500px, 1fr))' gap={10}> */}
        <GridItem w='100%' h='10' >
          <HStack>
            <Text
              fontWeight={'500'}
              pr={3}
            >Polish</Text>
            <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={20}>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#580140' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </HStack>
        </GridItem>

        <GridItem w='100%' h='10' >
          <HStack>
            <Text
              fontWeight={'500'}
              pr={3}
            >Price</Text>
            <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={20}>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#580140' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </HStack>
        </GridItem>
      {/* </Grid> */}

      {/* <br /> */}

      {/* <Grid templateColumns='repeat(auto-fill, minmax(500px, 1fr))' gap={10}> */}
        <GridItem w='100%' h='10' >
          <HStack>
            <Text
              fontWeight={'500'}
              pr={3}
            >Fluor</Text>
            <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={20}>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#580140' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </HStack>
        </GridItem>

        <GridItem w='100%' h='10' >
          <HStack>
            <Text
              fontWeight={'500'}
              pr={3}
            >Symm</Text>
            <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={20}>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#580140' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </HStack>
        </GridItem>
      {/* </Grid> */}

      {/* <br /> */}

      {/* <Grid templateColumns='repeat(auto-fill, minmax(500px, 1fr))' gap={10}> */}
        <GridItem w='100%' h='10' >
          <HStack>
            <Text
              fontWeight={'500'}
              pr={3}
            >Depth</Text>
            <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={20}>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#580140' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </HStack>
        </GridItem>

        <GridItem w='100%' h='10' >
          <HStack>
            <Text
              fontWeight={'500'}
              pr={3}
            >Table%</Text>
            <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={20}>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#580140' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default index