import React from 'react'
import Product from "./product";
import Img1 from '../../../../asset/Image/image 82.svg'
import Img2 from '../../../../asset/Image/image 91.svg'
import Img3 from '../../../../asset/Image/image 88.svg'
import Img4 from '../../../../asset/Image/image 86.svg'
import Img5 from '../../../../asset/Image/image 89.svg'
import Img6 from '../../../../asset/Image/image 87.svg'
import Img7 from '../../../../asset/Image/image 83.svg'
import Img8 from '../../../../asset/Image/image 80.svg'
import Img9 from '../../../../asset/Image/image 85.svg'
import Img10 from '../../../../asset/Image/image 78.svg'
import Img11 from '../../../../asset/Image/image 79.svg'
import Img12 from '../../../../asset/Image/image 84.svg'

const ImageData = [
    {
        id: "1000",
        image: Img1,
        //     "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        name: "Trillion",
        text: "$4668"
    },
    {
        id: "1001",
        image:
            Img2,
        //   image:
        //     "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
        name: "Baguette",
        text: "$4668"

    },
    {
        id: "1002",
        image:
            Img3,
        //   image:
        //     "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        name: "Oval",
        text: "$4668"
    },
    {
        id: "1003",
        image:
            Img4,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "Heart",
        text: "$4668"
    },
    {
        id: "1004",
        image:
            Img5,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "Radiant",
        text: "$4668"
    },
    {
        id: "1005",
        image:
            Img6,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "Cushion",
        text: "$4668"
    },
    {
        id: "1006",
        image:
            Img7,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "Asscher",
        text: "$4668"
    },
    {
        id: "1007",
        image:
            Img8,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "Emerald",
        text: "$4668"
    },
    {
        id: "1008",
        image:
            Img9,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "Pear",
        text: "$4668"
    },
    {
        id: "1009",
        image:
            Img10,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "Princess",
        text: "$4668"
    },
    {
        id: "10010",
        image:
            Img11,
        name: "Round",
        text: "$4668"
    },
    {
        id: "10011",
        image:
            Img12,
        name: "Marquise",
        text: "$4668"
    }
];

function index() {
    return (
        <div>
            <Product imgg={ImageData} />
        </div>
    )
}

export default index