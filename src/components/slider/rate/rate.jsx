import React from 'react';
import { Col, Row } from 'antd';
import '../rate/rate.css'
    const Rate = ( ) => {
        return (
            <Row id='rateContainer'>
                <Col span={12}  >
                    <div id='ratePra' >
                        <a> 42 FRONT CAMERA FOR PERFECT SHOT </a>
                        <br/>
                        <p>Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                        <p>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                        <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</p>
                        <p>culpa qui official.</p>
                        <br/>
                        <p>Diam vulputate ut pharetra sit. Elit ut aliquam purus sit amet luctus venenatis lectus. Lorem dolor</p>
                        <p>sed viverra ipsum nunc aliquet. Ut consequat semper viverra nam libero. Velit ut tortor aremn.</p>
                    </div>
                </Col>
                <Col span={12} id='rateImg'>
                    <img src='https://phono-demo.myshopify.com/cdn/shop/files/camera.jpg?v=1613704453&width=1500'/>
                </Col>
            </Row>
        )
    }
 export default Rate