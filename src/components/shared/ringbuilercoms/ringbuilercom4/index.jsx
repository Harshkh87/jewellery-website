import React from 'react'
import Product from "./product";
import Img1 from '../../../../asset/Image/Group 1508.svg'
import Img2 from '../../../../asset/Image/Group 1517.svg'
import Img3 from '../../../../asset/Image/Group 1509.svg'
import Img4 from '../../../../asset/Image/Group 1510.svg'
import Img5 from '../../../../asset/Image/Group 1511.svg'
import Img6 from '../../../../asset/Image/Group 1512.svg'
import Img7 from '../../../../asset/Image/Group 1516.svg'
import Img8 from '../../../../asset/Image/Group 1513.svg'
import Img9 from '../../../../asset/Image/Group 1514.svg'
import Img10 from '../../../../asset/Image/Group 1515.svg'
// import Img11 from '../../../../asset/Image/Group 79.svg'
// import Img12 from '../../../../asset/Image/Group 84.svg'

const ImageData = [
    {
        id: "1000",
        image: Img1,
        //     "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        name: "RED",
        text: "$4668"
    },
    {
        id: "1001",
        image:
            Img2,
        //   image:
        //     "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
        name: "YELLOW",
        text: "$4668"

    },
    {
        id: "1002",
        image:
            Img3,
        //   image:
        //     "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        name: "PURPLE",
        text: "$4668"
    },
    {
        id: "1003",
        image:
            Img4,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "BLUE",
        text: "$4668"
    },
    {
        id: "1004",
        image:
            Img5,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "GREEN",
        text: "$4668"
    },
    {
        id: "1005",
        image:
            Img6,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "ORANGE",
        text: "$4668"
    },
    {
        id: "1006",
        image:
            Img7,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "BROWN",
        text: "$4668"
    },
    {
        id: "1007",
        image:
            Img8,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "BLACK",
        text: "$4668"
    },
    {
        id: "1008",
        image:
            Img9,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "PINK",
        text: "$4668"
    },
    {
        id: "1009",
        image:
            Img10,
        //   image:
        //     "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        name: "GREY",
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