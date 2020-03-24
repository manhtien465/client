import React, { useEffect, useState } from 'react'
import Gallery from 'react-image-gallery';
import "./css.css"
import {connect,useSelector,useDispatch} from 'react-redux';
const ImageProduct=(props) =>{
    const [Images, setImages] = useState([])
const detailProduct=useSelector(state=>state.shoppingReducer.dataProductDetail)
useEffect(() => {
       if (detailProduct.img.length > 0) {
           let images = [];

               detailProduct.img.map(item => {
                 const editimg=item.replace("public","")
               images.push({
                   original: `${editimg}`,
                   thumbnail:`${editimg}`

               })
           })
           setImages(images)
       }
   }, [])

    return (
        <div >
            <Gallery items={Images} />


        </div>
    )
}

export default ImageProduct
