import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImgSlider=(props)=>{

    return (
      <Carousel autoComplete infiniteLoop autoPlay >

        {props.images.map((index,key)=>{
          const img1=index.replace("public","")
          return(
          <div>
           <img src={img1} />
           </div>)
        })}



    </Carousel>
    )

}

export default ImgSlider
