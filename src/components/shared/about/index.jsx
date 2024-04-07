import React from 'react'
import Img1 from './group.jpg'
import { Image}  from '@chakra-ui/react'
import "./style.css";

function index() {
  return (
    <div className="item-about">
        <div>
        <p className="p p1">About Us</p>
        <h1 className="headab headab1">WE MAKE SPARKLY MAGIC HAPPEN</h1>
        <p className='lorem lorem1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae massa sit.</p>
        {/* <button className="button-ex">EXPLORE</button> */}
        </div>

        <div className="group">
        <Image src={Img1} />
        {/* <img src={aboutlogo} alt="Girl in a jacket" ></img> */}
        </div>
    </div>
  )
}

export default index