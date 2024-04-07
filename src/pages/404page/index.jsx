import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductDetail = () => {
  const [mainSliderIndex, setMainSliderIndex] = useState(0);

  const handleMainSliderChange = (index) => {
    setMainSliderIndex(index);
  };

  return (
    <div>
      <div className="product-images demo-gallery">
        <Carousel
          showArrows={true}
          onChange={handleMainSliderChange}
          selectedItem={mainSliderIndex}
          infiniteLoop
          autoPlay
          interval={4000}
          dynamicHeight
        >
          <div><img src="http://via.placeholder.com/840x480" alt="Product" /></div>
          <div><img src="http://via.placeholder.com/840x480" alt="Product" /></div>
          <div><img src="http://via.placeholder.com/840x480" alt="Product" /></div>
          {/* Add more images as needed */}
        </Carousel>

        <Carousel
          showArrows={true}
          showStatus={false}
          selectedItem={mainSliderIndex}
          infiniteLoop
          centerMode={false}
          autoPlay
          interval={4000}
          dynamicHeight
          thumbWidth={75}
          // selectedItem={mainSliderIndex}
        >
          <div><img src="http://via.placeholder.com/72x50" alt="Thumbnail" /></div>
          
          <div><img src="http://via.placeholder.com/72x50" alt="Thumbnail" /></div>
          
          <div><img src="http://via.placeholder.com/72x50" alt="Thumbnail" /></div>
          {/* Add more thumbnails as needed */}
        </Carousel>
        <Grid
                    h='1000px'
                    // maxH={{base:"auto",lg:"650px",xl:"800px"}}
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={4}
                    // border={'2px solid black'}
                >
                    <GridItem rowSpan={2} colSpan={1} >
                        
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1}>
                    
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                    
                    </GridItem>
                </Grid>
      </div>
    </div>
  );
};

export default ProductDetail;
