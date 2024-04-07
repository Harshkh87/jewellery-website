import React from 'react'
import Img1 from '../hero/Heroin.jpg'
import { Image, Button, Img } from '@chakra-ui/react'
// import Img2 from '../../../asset/Image/Vector.svg'
import "./style.css";

function index() {
  return (
    <div>
        <Image src={Img1} w={'full'} className='hero-image' />
      <p className="markup customp">Unique jewelry, rare gems, and exquisite pieces!</p>
      <button className="button-sy btn-hero">Contact </button>
      {/* <Img src={Img2}></Img> */}
    </div>
  )
}

export default index