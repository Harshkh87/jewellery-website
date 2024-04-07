import React from 'react'
import Img1 from './mark.jpg'
import { Image } from '@chakra-ui/react'
// import "./style.css";

function index() {
  return (
    <div>
        <Image src={Img1} w={'full'}  />
    </div>
  )
}

export default index