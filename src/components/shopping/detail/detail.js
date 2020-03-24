import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {useSelector,useDispatch} from 'react-redux';
import { Row, Col } from 'antd';
import ProductImage from './session/imgProduct'
import ProductInfor from './session/innforProdict'
const Detail=(props)=> {
    const dispatch = useDispatch();
const detaiProduct=useSelector(state=>state.shoppingReducer.dataProductDetail)
    const [Product, setProduct] = useState([])

    useEffect(() => {

    }, [])


    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem', marginBottom:"100px" }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1></h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>
                 <ProductImage />
                </Col>
                <Col lg={12} xs={24}>
                  <ProductInfor></ProductInfor>
                </Col>
            </Row>
        </div>
    )
}

export default Detail
