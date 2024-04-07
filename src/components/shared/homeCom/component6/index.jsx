import React from 'react'
import { Box } from "@chakra-ui/react";
import ImageSlider from "./Productservice";
import { SlideData } from "./slider";
import "./styles.css";

function index() {
  return (
    <div className='body-highlight'>
        <Box p={2} >
      <ImageSlider slides={SlideData} />
    </Box>
    </div>
  )
}

export default index