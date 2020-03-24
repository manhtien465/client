import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';
import {connect,useSelector,useDispatch} from 'react-redux';
import {addToCard} from '../../../../actions/shoppingAction'
import {Link} from "react-router-dom";
function ProductInfo(props) {
const detailProduct=useSelector(state=>state.shoppingReducer.dataProductDetail)
const dispatch=useDispatch()
    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(detailProduct)

    }, [props.detail])

    const addToCarthandler = () => {
        dispatch(addToCard(Product))
    }


    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">0</Descriptions.Item>
                <Descriptions.Item label="city"> {Product.city}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.discription}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="" size="large" shape="round" type="danger"
                    onClick={()=>addToCarthandler()}
                >
                    Add to Cart
                    </Link>
            </div>
        </div>
    )
}

export default ProductInfo
