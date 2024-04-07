import React from 'react'
import "./style.css";
import ImageSlider from "./product";
// import { SlideData } from "./slider";
import Img1 from './gold.jpg'
import Img2 from './sabri.jpg'
import Img3 from './golden-ring.jpg'
import Img4 from './silver-jewelry.jpg'

const SlideData = [
    {
        id: "1000",
        image:
            Img1,
        //     "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        name: "Proin Commodo",
        text: "$4668"
    },
    {
        id: "1001",
        image: Img2,
        //   image:
        //     "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
        name: "Vestibulum Porta",
        text: "$4668"

    },
    {
        id: "1002",
        image: Img3,
        //   image:
        //     "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        name: "Nulla Vestibulum",
        text: "$4668"
    },
    {
        id: "1003",
        image: Img4,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "Proin4",
        text: "$4668"
    }
];


function index() {

    return (
        <div>
            <ImageSlider slides={SlideData} />
        </div>
    )
}

export default index